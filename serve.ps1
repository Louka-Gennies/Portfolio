# Serves Portfolio over HTTP so ES modules (Three.js) load correctly.
# Open http://localhost:5500/home.html after starting.

$port = 5500
$root = $PSScriptRoot
Set-Location $root

if (Get-Command py -ErrorAction SilentlyContinue) {
    Write-Host "Serving $root at http://localhost:$port/home.html (Ctrl+C to stop)"
    py -3 -m http.server $port
    exit $LASTEXITCODE
}

if (Get-Command python -ErrorAction SilentlyContinue) {
    Write-Host "Serving $root at http://localhost:$port/home.html (Ctrl+C to stop)"
    python -m http.server $port
    exit $LASTEXITCODE
}

if (Get-Command npx -ErrorAction SilentlyContinue) {
    Write-Host "Serving $root at http://localhost:$port/home.html (Ctrl+C to stop)"
    npx --yes serve -l $port
    exit $LASTEXITCODE
}

Write-Error @"
No Python or Node found. Install one of:
  - Python: https://www.python.org/downloads/
  - Node.js: https://nodejs.org/
Or use VS Code Live Server on this folder.
"@

exit 1
