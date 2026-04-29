$ErrorActionPreference = "Stop"

$blogRoot = Join-Path $PSScriptRoot "..\public\blog"
$posts = @("ec50", "epifitter-epidemias", "yield-loss")

foreach ($post in $posts) {
  $sourceHtml = Join-Path $blogRoot "posts\$post\$post.html"
  $targetHtml = Join-Path $blogRoot "posts\$post\index.html"

  if (Test-Path $sourceHtml) {
    Copy-Item $sourceHtml $targetHtml -Force
  }
}

$indexPath = Join-Path $blogRoot "index.html"
if (Test-Path $indexPath) {
  $content = Get-Content $indexPath -Raw
  $content = $content.Replace("./posts/ec50/ec50.html", "./posts/ec50/")
  $content = $content.Replace("./posts/epifitter-epidemias/epifitter-epidemias.html", "./posts/epifitter-epidemias/")
  $content = $content.Replace("./posts/yield-loss/yield-loss.html", "./posts/yield-loss/")
  Set-Content -Path $indexPath -Value $content -Encoding UTF8
}
