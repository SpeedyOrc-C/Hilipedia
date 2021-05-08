// 检测客户端
var appVersion = navigator.appVersion
var clientOS = undefined
const UNKNOWN = 0
const WINDOWS = 1
const MAC = 2

if (appVersion.indexOf("Windows") != -1) clientOS = WINDOWS
if (appVersion.indexOf("Mac OS") != -1) clientOS = MAC

// 输出快捷键符号
if (clientOS == WINDOWS) document.write(`Ctrl`)
if (clientOS == MAC) document.write(`⌘`)

// 隐藏标语
function hideSearchInstruction () {
    document.getElementById("search-instruction").style.display = "none"
    document.getElementById("search-instruction").style.visibility = "hidden"
}

// 检测查找快捷键，如果按下，则隐藏标语
document.onkeydown = function (e) {
    if (e.key == "f" || e.key == "F") { // F 按键
        if (clientOS == WINDOWS && e.ctrlKey || clientOS == MAC && e.metaKey) { // Windows 的 Ctrl 或 Mac 的 Command
            hideSearchInstruction()
            this.onkeydown = null
        }
    }
}
