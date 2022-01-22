var app_version = navigator.appVersion
var client_os = undefined
const UNKNOWN = 0
const WINDOWS = 1
const MACOS = 2
const IPHONE = 3
const LINUX = 4
client_os = UNKNOWN
if (app_version.indexOf('Windows') != -1) client_os = WINDOWS
if (app_version.indexOf('Mac OS') != -1) client_os = MACOS
if (app_version.indexOf('iPhone') != -1) client_os = IPHONE
if (app_version.indexOf('Linux') != -1) client_os = LINUX

hide_search_hint = () => {
    document.getElementById('search-instruction').style.display = 'none'
    document.getElementById('search-instruction').style.visibility = 'hidden'
}

// Symbol for shortcut
if (client_os == WINDOWS || client_os == LINUX) document.write(`Ctrl`)
if (client_os == MACOS) document.write(`⌘`)
if (client_os == IPHONE || client_os == UNKNOWN) hide_search_hint()

// If shortcut is pressed, hint is hidden.
document.onkeydown = (e) => {
    if (e.key == 'f' || e.key == 'F')
        if (client_os == WINDOWS && e.ctrlKey ||
            client_os == MACOS && e.metaKey) {
            hide_search_hint()
            this.onkeydown = null // Stop detecting
            config['search_hint_window_understand'] = true
            document.cookie = JSON.stringify(config)
        }
}

var config = {}

try {
	config = JSON.parse(document.cookie.split('=; ')[0])
} catch (e) {
	config = {
		'do_show_unknown_word': false,
		'lang': 'zh',
		'search_hint_window_understand': false,
	}
	document.cookie = JSON.stringify(config)
}

if (config['search_hint_window_understand'])
    hide_search_hint()
