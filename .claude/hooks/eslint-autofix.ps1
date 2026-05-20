try {
    $raw = [Console]::In.ReadToEnd()
    $json = $raw | ConvertFrom-Json
    $file = $json.tool_input.file_path
    if ($file -match '\.(vue|ts|js|tsx|jsx|mts|mjs)$') {
        npx eslint --fix "$file" 2>$null
    }
} catch {}
exit 0
