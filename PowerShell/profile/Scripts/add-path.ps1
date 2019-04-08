
# $pathStrが環境変数のpathに含まれなかったら、最後尾に追加する
function  addPath($pathStr) {
    $regex = $pathStr -replace '\\', '\\'
    if($env:Path -notmatch $regex){
        $env:Path += (';' + $pathStr)
    }
}

$pathObj = get-pathObj.ps1
$pathStr = $pathObj.($Args[0])
if ( $pathStr -eq $null) {
    echo 'ERROR: key does not exist'
} else {
    Write-Host $pathStr
    addPath $pathStr
}

