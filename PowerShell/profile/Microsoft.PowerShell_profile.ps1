# �J�[�\���s����擪�܂ŏ����R�}���h��ctrl u �ɐݒ肷��
Set-PSReadlineKeyHandler -Key 'Ctrl+u' -Function BackwardDeleteLine
# �J�[�\���O�̒P���������̂́ACtrl + BackSpace
# �o�b�N�X�y�[�X�̉�������
Set-PSReadlineOption -BellStyle None
# PowerShell�̃X�N���v�g�Ƀp�X��ʂ��B
$env:Path += ';C:\Users\ruiak\OneDrive\�h�L�������g\WindowsPowerShell\Scripts'
add-path-all.ps1
# �N������path��ۑ�
$startUpPath = $env:Path
# �G�C���A�X�̐ݒ�
Set-Alias open Invoke-Item
# Git�̐ݒ�
$env:GIT_PAGER= "LESSCHARSET=utf-8 less"
# �J�n�p�X
Set-Location ~
# �v�����v�g�̕\���ݒ�
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
