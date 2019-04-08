# path.jsonをオブジェクトに変換する
# $pathObj =  Get-Content 'C:\Users\ruiak\shell\path.json'  | ConvertFrom-Json
$pathObj =  Get-Content ($PSScriptRoot + '/path.json')  | ConvertFrom-Json
echo $pathObj

# 以下は$pathObjと連携して必要になるメモ
#$propNames = $pathObj | Get-Member -MemberType Properties | Select-Object -ExpandProperty Name
