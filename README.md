markdown
# 🎭 Playwright Claude AI Automation

> AI-powered test automation framework with intelligent workflows and professional reporting

[![Tests](https://img.shields.io/badge/tests-passing-brightgreen)]()
[![Node](https://img.shields.io/badge/node-%3E%3D18-blue)]()
[![License](https://img.shields.io/badge/license-MIT-green)]()

---

## ⚡ Quick Start

bash
# 1. Install dependencies
npm install
cd bridgeService && npm install && cd ..

# 2. Configure environment
cp bridgeService/.env.example bridgeService/.env
# Edit bridgeService/.env with your credentials

# 3. Start bridge service
npm run bridge

# 4. Generate tests via Claude AI Desktop
# Send tests to: http://localhost:3001/api/receive-test


---

## 🎯 How It Works

mermaid
graph LR
    A[Claude AI] -->|Generate Test| B[Bridge Service]
    B -->|Save| C[allTestFiles]
    C -->|Execute| D{Test Result}
    D -->|✅ PASSED| E[Git Push]
    D -->|❌ FAILED| F[Stay Local]
    E -->|Push to| G[passedTestFiles]
    G -->|Schedule| H[GitHub Actions]
    H -->|Deploy| I[Allure Report]
    H -->|Send| J[Email]


---

## 📂 Folder Structure


📦 Project Root
 ┣ 📂 tests
 ┃ ┣ 📂 allTestFiles          ← Local execution
 ┃ ┃ ┗ 📂 {site}/{type}/{module?}
 ┃ ┗ 📂 passedTestFiles       ← GitHub Actions
 ┃   ┗ 📂 {site}/{type}/{module?}
 ┣ 📂 bridgeService           ← API + Automation
 ┣ 📂 reports                 ← Allure + Results
 ┣ 📂 claudeGeneratedTests    ← Incoming tests
 ┗ 📄 playwright.config.ts


---

## ⚙️ Configuration

### 1️⃣ Framework Config

**File:** `config/config.js`

javascript
module.exports = {
  siteName: "msn",              // Required
  testType: "regressionTest",   // Required
  moduleName: "newsModule"      // Optional (use "" for none)
};


| Config | Example | Result Path |
|--------|---------|-------------|
| With module | `{site: "msn", type: "regression", module: "news"}` | `tests/allTestFiles/msn/regression/news/` |
| No module | `{site: "msn", type: "smoke", module: ""}` | `tests/allTestFiles/msn/smoke/` |

---

### 2️⃣ Environment Variables

**File:** `bridgeService/.env`

env
PORT=3001
BRIDGE_API_KEY=your_secure_key
GITHUB_TOKEN=ghp_xxxxx
GITHUB_USERNAME=your_username
GITHUB_EMAIL=you@example.com
GITHUB_REPO_URL=https://github.com/user/repo.git


---

### 3️⃣ GitHub Secrets

Go to: **Settings → Secrets → Actions**

| Secret | Value |
|--------|-------|
| `EMAIL_USER` | `your_email@gmail.com` |
| `EMAIL_PASS` | Gmail App Password |
| `EMAIL_TO` | `recipient@example.com` |

---

### 4️⃣ Schedule Config

**File:** `.github/workflows/schedule-config.json`

json
{
  "monday": { "mode": "folder", "test_path": "tests/passedTestFiles/msn/regression" },
  "friday": { "mode": "multipleFolders", "folder_list": "path1,path2,path3" },
  "saturday": { "mode": "skip" }
}

**Modes:**
- `all` - Run everything
- `file` - Single test file
- `folder` - Single folder
- `multiple` - Multiple files
- `multipleFolders` - Multiple folders
- `skip` - No execution

---

## 🚀 Features

<table>
<tr>
<td width="50%">

### 🤖 AI Integration
- Natural language test generation
- Claude AI Desktop integration
- Automated test submission

### 📊 Smart Reporting
- Allure dashboards
- Custom branding
- GitHub Pages deployment
- Email notifications

</td>
<td width="50%">

### 🔄 Intelligent Workflows
- Multi-level directory structure
- Regex normalization
- Case-insensitive matching
- Optional module support

### ⚡ CI/CD Optimized
- Multi-cron scheduling
- Dependency caching
- Browser caching
- Auto-retry flaky tests

</td>
</tr>
</table>

---

## 📈 Execution Flow

┌─────────────────┐
│ Claude AI       │ Generate test in natural language
└────────┬────────┘
         ↓
┌─────────────────┐
│ Bridge Service  │ API receives test code
└────────┬────────┘
         ↓
┌─────────────────┐
│ File Watcher    │ Detects new test file
└────────┬────────┘
         ↓
┌─────────────────┐
│ Copy to Local   │ tests/allTestFiles/{site}/{type}/{module}/
└────────┬────────┘
         ↓
┌─────────────────┐
│ Execute Test    │ Chromium + Firefox
└────────┬────────┘
         ↓
    ┌────┴────┐
    ↓         ↓
┌────────┐  ┌────────┐
│ PASSED │  │ FAILED │
└───┬────┘  └───┬────┘
    ↓           ↓
┌────────┐  ┌────────┐
│Git Push│  │  Stay  │
└───┬────┘  │ Local  │
    ↓       └────────┘
┌─────────────────┐
│ passedTestFiles │
└────────┬────────┘
         ↓
┌─────────────────┐
│ GitHub Actions  │ Scheduled execution
└────────┬────────┘
         ↓
┌─────────────────┐
│ Allure + Email  │ Professional reports
└─────────────────┘


---

## 🌐 API Reference

### `POST /api/receive-test`

**Headers:**

x-api-key: YOUR_BRIDGE_API_KEY
Content-Type: application/json


**Body:**
json
{
  "fileName": "example.spec.ts",
  "testCode": "import { test, expect } from '@playwright/test';\n..."
}


**Response:**
json
{
  "success": true,
  "message": "Test received",
  "filePath": "/path/to/file"
}


---

## 🔧 Common Commands

| Task | Command |
|------|---------|
| Start bridge | `npm run bridge` |
| Run all tests | `npx playwright test` |
| Run specific test | `npx playwright test example.spec.ts` |
| Open test UI | `npx playwright test --ui` |
| Debug test | `npx playwright test --debug` |
| View last report | `npx playwright show-report` |

---

## 📊 Performance

| Metric | Before | After |
|--------|--------|-------|
| **Schedule** | 9:45-10:00 AM | 8:50-9:05 AM ✅ |
| **Execution** | 8-10 min | 4-6 min ✅ |
| **Reliability** | Flaky | Auto-retry ✅ |

---

## 🐛 Troubleshooting

<details>
<summary>Bridge service won't start</summary>

bash
# Check port availability
lsof -i :3001

# Kill if needed
kill -9 <PID>

# Restart
npm run bridge

</details>

<details>
<summary>Tests not executing</summary>

- ✅ Use `import` (not `require`) syntax
- ✅ File extension: `.spec.ts` or `.test.ts`
- ✅ Check file location in `tests/allTestFiles/`
</details>

<details>
<summary>Git push fails</summary>

- ✅ Verify `GITHUB_TOKEN` in `.env`
- ✅ Check repository URL is correct
- ✅ Ensure folder structure matches `config.js`
</details>

<details>
<summary>Email not sending</summary>

- ✅ Use Gmail **App Password** (not regular password)
- ✅ Verify GitHub Secrets are set
- ✅ Check logs in Actions tab
</details>

---

## 📚 Documentation

| Topic | Link |
|-------|------|
| Playwright Docs | [playwright.dev](https://playwright.dev) |
| Allure Reports | [docs.qameta.io](https://docs.qameta.io/allure) |
| Claude AI | [claude.ai](https://claude.ai) |

---

## 📝 License

MIT © 2026

---

<div align="center">

**Built with ❤️ using Claude AI and Playwright**

[Report Bug](https://github.com/user/repo/issues) · [Request Feature](https://github.com/user/repo/issues)

</div>
