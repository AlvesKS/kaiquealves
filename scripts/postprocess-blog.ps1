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

$htmlFiles = Get-ChildItem $blogRoot -Recurse -Filter "*.html"
foreach ($file in $htmlFiles) {
  $content = Get-Content $file.FullName -Raw
  $content = $content.Replace('href="./../public/images/kaique-alves.jpg"', 'href="/images/kaique-alves.jpg"')
  $content = $content.Replace('href="../../../public/images/kaique-alves.jpg"', 'href="/images/kaique-alves.jpg"')
  $content = $content.Replace('href="./index.html"', 'href="/"')
  $content = $content.Replace('href="../../index.html"', 'href="/"')
  $content = $content.Replace('href="./"', 'href="/"')
  $content = $content.Replace('href="../../"', 'href="/"')
  $content = $content.Replace('href="./research/"', 'href="/research/"')
  $content = $content.Replace('href="../../research/"', 'href="/research/"')
  $content = $content.Replace('href="./research"', 'href="/research/"')
  $content = $content.Replace('href="./tools/"', 'href="/tools/"')
  $content = $content.Replace('href="../../tools/"', 'href="/tools/"')
  $content = $content.Replace('href="./tools"', 'href="/tools/"')
  $content = $content.Replace('href="./blog/"', 'href="/blog/"')
  $content = $content.Replace('href="../../blog/"', 'href="/blog/"')
  $content = $content.Replace('href="./blog"', 'href="/blog/"')
  $content = $content.Replace('href="./about/"', 'href="/about/"')
  $content = $content.Replace('href="../../about/"', 'href="/about/"')
  $content = $content.Replace('href="./about"', 'href="/about/"')
  Set-Content -Path $file.FullName -Value $content -Encoding UTF8
}
