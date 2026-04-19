require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const fileWatcher = require('../executionLogic/fileWatcher');
const claudeClient = require('../ai/claudeClient');

const app = express();
const PORT = process.env.PORT || 3001;

// =========================
// 🔑 ROOT PATH SETUP
// =========================
const ROOT_DIR = path.resolve(__dirname, '../../../'); // → project root
const SRC_ROOT = path.resolve(__dirname, '..');        // → bridge-service/src

// =========================
// 📂 PATH CONFIG (ALIGNED)
// =========================
const PATHS = {
  root: ROOT_DIR,

  generatedTests: path.join(ROOT_DIR, 'generated-tests'),
  localTC: path.join(ROOT_DIR, 'tests', 'localTC'),
  passedTC: path.join(ROOT_DIR, 'tests', 'passedTC'),

  results: path.join(ROOT_DIR, 'reports', 'test-results', 'results.json'),
  artifacts: path.join(ROOT_DIR, 'reports', 'artifacts'),

  ui: path.join(SRC_ROOT, 'ui'),
};

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// serve static UI files
app.use(express.static(PATHS.ui));


app.post('/api/receive-test', async (req, res) => {
  try {
    const apiKey = req.headers['x-api-key'];

    if (apiKey !== process.env.BRIDGE_API_KEY) {
      return res.status(401).json({
        success: false,
        error: 'Unauthorized',
      });
    }

    const { fileName, testCode } = req.body;

    if (!fileName || !testCode) {
      return res.status(400).json({
        success: false,
        error: 'fileName and testCode are required',
      });
    }

    const fs = require('fs').promises;

    const filePath = path.join(PATHS.generatedTests, fileName);

    await fs.writeFile(filePath, testCode, 'utf8');

    console.log(`✅ Test file received: ${fileName}`);
    console.log(`📁 Saved to: ${filePath}`);

    res.json({
      success: true,
      message: 'Test received and queued for execution',
      filePath: filePath,
    });
  } catch (error) {
    console.error('❌ Error receiving test:', error);

    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

app.get('/api/test-status/:fileName', async (req, res) => {
  try {
    const { fileName } = req.params;
    const fs = require('fs').promises;

    const resultsPath = PATHS.results;

    const exists = await fs.access(resultsPath)
      .then(() => true)
      .catch(() => false);

    if (!exists) {
      return res.json({
        status: 'pending',
        message: 'Test not yet executed',
      });
    }

    const data = await fs.readFile(resultsPath, 'utf-8');
    const results = JSON.parse(data);

    res.json({
      status: 'completed',
      results,
    });
  } catch (error) {
    console.error('❌ Error fetching test status:', error);

    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

app.get('/health', (req, res) => {
  res.json({
    status: 'running',
    timestamp: new Date().toISOString(),
    paths: PATHS,
  });
});


app.get('/', (req, res) => {
  res.sendFile(path.join(PATHS.ui, 'web-interface.html'));
});

// =========================
// 🚀 SERVER START
// =========================
app.listen(PORT, async () => {
  console.log(`🟢 Bridge Service running on http://localhost:${PORT}`);
  console.log(`📡 API Endpoint: http://localhost:${PORT}/api/receive-test`);
  console.log(`👀 Watching directory: ${PATHS.generatedTests}`);
  console.log(`📂 LocalTC directory: ${PATHS.localTC}`);
  console.log(`📂 PassedTC directory: ${PATHS.passedTC}`);

  await claudeClient.initialize();

  fileWatcher.start(PATHS);
});