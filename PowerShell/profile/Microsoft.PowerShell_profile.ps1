# カーソル行から先頭まで消すコマンドをctrl u に設定する
Set-PSReadlineKeyHandler -Key 'Ctrl+u' -Function BackwardDeleteLine
# カーソル前の単語を一つ消すのは、Ctrl + BackSpace
# バックスペースの音を消す
Set-PSReadlineOption -BellStyle None
# PowerShellのスクリプトにパスを通す。
$env:Path += ';C:\Users\ruiak\OneDrive\ドキュメント\WindowsPowerShell\Scripts'
add-path-all.ps1
# 起動時のpathを保存
$startUpPath = $env:Path
# エイリアスの設定
Set-Alias open Invoke-Item
# Gitの設定
$env:GIT_PAGER= "LESSCHARSET=utf-8 less"
# 開始パス
Set-Location ~
# プロンプトの表示設定
function prompt() {
	$FirstWordList = @()
	$Path = Split-Path (Get-Location)
	foreach ($item in ($Path -split '\\')) {
		$FirstWordList += $item[0]
	}
	$Leaf = Split-Path (Get-Location) -Leaf
	$Out = 'PS ' + ($FirstWordList -join '\') + '\' + $Leaf
    Write-Host $out -NoNewLine -ForegroundColor "Green"
    return '> '
}
