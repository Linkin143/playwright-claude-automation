param (
    [string]$subject,
    [string]$body,
    [string]$logFile
)

# ===== LOAD .env =====
$envPath = "C:\Documents\playwright-claude-automation\.env"

Get-Content $envPath | ForEach-Object {
    if ($_ -match "^\s*([^#][^=]+)=(.*)$") {
        $name = $matches[1].Trim()
        $value = $matches[2].Trim()
        [System.Environment]::SetEnvironmentVariable($name, $value)
    }
}

$from = $env:EMAIL_USER
$to = $env:EMAIL_TO
$appPassword = $env:EMAIL_PASS

# ===== SMTP =====
$smtpServer = "smtp.gmail.com"
$smtpPort = 587

$message = New-Object system.net.mail.mailmessage
$message.From = $from
$message.To.Add($to)
$message.Subject = $subject

# ===== BEAUTIFUL BODY =====
$summary = ""

if (Test-Path $logFile) {
    $summaryLines = Get-Content $logFile | Select-Object -Last 20
    $summary = $summaryLines -join "`n"
}

$message.Body = @"
===== PLAYWRIGHT REPORT =====

Status: $subject
Time: $(Get-Date)

--- Last Log Lines ---
$summary

--- Full log attached ---
"@

# ===== ATTACH LOG =====
if (Test-Path $logFile) {
    $attachment = New-Object System.Net.Mail.Attachment($logFile)
    $message.Attachments.Add($attachment)
}

# ===== SEND =====
$smtp = New-Object Net.Mail.SmtpClient($smtpServer, $smtpPort)
$smtp.EnableSsl = $true
$smtp.Credentials = New-Object System.Net.NetworkCredential($from, $appPassword)

try {
    $smtp.Send($message)
    Write-Output "Email sent"
} catch {
    Write-Output "Email failed"
}