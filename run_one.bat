@echo off
setlocal enabledelayedexpansion

REM ===== INPUT VALIDATION =====
if "%~1"=="" (
    echo ERROR: Provide script name
    echo Usage: run_one.bat filename.spec.ts
    exit /b 1
)

set SCRIPT=%~1

REM ===== CONFIG =====
set PROJECT_DIR=C:\Documents\playwright-claude-automation
set TEST_DIR=tests
set LOG_DIR=%PROJECT_DIR%\logs
set NODE_PATH=C:\Program Files\nodejs
set MAX_RETRIES=2

REM ===== ENSURE LOG DIR EXISTS =====
if not exist "%LOG_DIR%" mkdir "%LOG_DIR%"

REM ===== SET PATH =====
set PATH=%NODE_PATH%;%PATH%

REM ===== TIMESTAMP =====
for /f %%i in ('powershell -command "Get-Date -Format yyyyMMdd_HHmmss"') do set DATETIME=%%i

set LOG_FILE=%LOG_DIR%\%SCRIPT%_%DATETIME%.log

echo ===== RUN %SCRIPT% START %date% %time% ===== >> "%LOG_FILE%"

cd /d "%PROJECT_DIR%" || (
    echo ERROR: Cannot access project dir >> "%LOG_FILE%"
    exit /b 1
)

REM ===== CHECK FILE EXISTS =====
if not exist "%TEST_DIR%\%SCRIPT%" (
    echo ERROR: Script not found: %TEST_DIR%\%SCRIPT% >> "%LOG_FILE%"
    exit /b 1
)

set RETRY_COUNT=0

:RETRY_LOOP
echo Attempt !RETRY_COUNT! >> "%LOG_FILE%"

call "%NODE_PATH%\npx.cmd" playwright test %TEST_DIR%\%SCRIPT% >> "%LOG_FILE%" 2>&1
set EXIT_CODE=%ERRORLEVEL%

if %EXIT_CODE%==0 (
    echo SUCCESS: %SCRIPT% PASSED >> "%LOG_FILE%"
    goto END
)

if !RETRY_COUNT! GEQ %MAX_RETRIES% (
    echo FAILED after retries >> "%LOG_FILE%"
    goto END
)

set /a RETRY_COUNT+=1
echo RETRYING in 10 seconds... >> "%LOG_FILE%"
timeout /t 10 >nul
goto RETRY_LOOP

:END

REM ===== EMAIL NOTIFICATION =====
if %EXIT_CODE%==0 (
    powershell -ExecutionPolicy Bypass -File "%PROJECT_DIR%\send_email.ps1" ^
    -subject "%SCRIPT% SUCCESS" ^
    -body "%SCRIPT% passed at %date% %time%"
) else (
    powershell -ExecutionPolicy Bypass -File "%PROJECT_DIR%\send_email.ps1" ^
    -subject "%SCRIPT% FAILED" ^
    -body "%SCRIPT% failed at %date% %time%. Check logs."
)

echo ===== RUN END %date% %time% ===== >> "%LOG_FILE%"
exit /b %EXIT_CODE%