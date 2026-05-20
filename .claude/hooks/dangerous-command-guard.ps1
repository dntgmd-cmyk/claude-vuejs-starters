[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
try {
    $raw = [Console]::In.ReadToEnd()
    $json = $raw | ConvertFrom-Json
    $cmd = $json.tool_input.command
    $pattern = 'rm\s+-rf|git\s+reset\s+--hard|git\s+push\s+--force|drop\s+database|drop\s+table|truncate\s+table'
    if ($cmd -match $pattern) {
        Write-Output '{"continue": false, "stopReason": "위험한 명령어 감지됨. 직접 확인 후 실행해주세요."}'
    }
} catch {}
exit 0
