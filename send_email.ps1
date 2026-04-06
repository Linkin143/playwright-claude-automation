param (
    [string]$subject,
    [string]$body
)

# ===== LOAD .env FILE =====
$envPath = "C:\Documents\playwright-claude-automation\.env"

if (!(Test-Path $envPath)) {
    Write-Output "ERROR: .env file not found"
    exit 1
}

Get-Content $envPath | ForEach-Object {
    if ($_ -match "^\s*([^#][^=]+)=(.*)$") {
        $name = $matches[1].Trim()
        $value = $matches[2].Trim()
        [System.Environment]::SetEnvironmentVariable($name, $value)
    }
}

# ===== READ VARIABLES =====
$from = $env:EMAIL_USER
$to = $env:EMAIL_TO
$appPassword = $env:EMAIL_PASS

if (-not $from -or -not $appPassword) {
    Write-Output "ERROR: Missing email credentials in .env"
    exit 1
}

# ===== EMAIL CONFIG =====
$smtpServer = "smtp.gmail.com"
$smtpPort = 587

$message = New-Object system.net.mail.mailmessage
$message.from = $from
$message.to.add($to)
$message.subject = $subject
$message.body = $body

$smtp = New-Object Net.Mail.SmtpClient($smtpServer, $smtpPort)
$smtp.EnableSsl = $true
$smtp.Credentials = New-Object System.Net.NetworkCredential($from, $appPassword)

try {
    $smtp.Send($message)
    Write-Output "Email sent successfully"
} catch {
    Write-Output "ERROR: Failed to send email"
}