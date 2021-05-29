////////// 词典部分 //////////

// 词典正文
var DICTIONARY = {
	"dictionary_proper":{
		//	单词的格式
		// "丘丘语单词":{
		// 	"def":[
		// 		{
		// 			"pos":"词性",
		// 			"zh":"中文释义",
		// 			"en":"英语释义"
		// 		}
		// 	]
		// },
		
		"a":{
			"def":[{"pos":"", "zh":""}],
			"eg":[], "status":0},
		"aba":{
			"def":[{"pos":"prep", "zh":"在……之前", "en":"before"}],
			"eg":[], "status":1},
		"beru":{
			"def":[{"pos":"v", "zh":"说话", "en":"talk; speak"}],
			"eg":[], 
			"origin":{"zh":"日语 しゃべる(shyaberu) 说话", "en":"Japanese: しゃべる(shyaberu) speak"},
			"status":1},
		"biadam":{
			"def":[{"pos":"", "zh":""}],
			"eg":[], "status":0},
		"biaodomu":{
			"def":[{"pos":"", "zh":""}],
			"eg":[], "status":0},
		"biat":{
			"def":[{"pos":"int", "zh":"他妈的", "en":"Damn it"}],
			"eg":[], 
			"origin":{"zh":"俄语 блядь(blyad') 他妈的", "en":"Russian: блядь(blyad') (Damn it)"},
			"status":1},
		"boya":{
			"def":[{"pos":"n", "zh":"颜色", "en":"colour"}],
			"eg":[
				{"hil":"celi boya", "zh":"红色", "en":"red"},
				{"hil":"unu boya", "zh":"黄色", "en":"yellow"},
				{"hil":"gusha boya", "zh":"绿色", "en":"green"},
				{"hil":"lata boya", "zh":"蓝色", "en":"blue"},
				{"hil":"nini boya", "zh":"白色", "en":"white"},
				{"hil":"nunu/sama boya", "zh":"黑色", "en":"black"}
			],
			"origin":{"zh":"土耳其语 boya 颜料; 染料", "en":"Turkish: boya (paint; dye)"} 
			, "status":3},
		"buka":{
			"def":[{"pos":"n", "zh":"肚子", "en":"belly"}],
			"eg":[], "status":1},
		"celi":{
			"def":[
				{"pos":"n", "zh":"火", "en":"fire"},
				{"pos":"n", "zh":"热的东西", "en":"hot object"},
				{"pos":"adj", "zh":"热的", "en":"hot"},
				{"pos":"n", "zh":"一天; 日子", "en":"a day"}
			],
			"eg":[], 
			"origin":{"zh":"道本语 seli 火", "en":"Toki Pona: seli (fire)"},
			"status":3},
		"celi lata":{
			"def":[
				{"pos":"n", "zh":"又冷又热的东西", "en":"object that is cold and hot"},
				{"pos":"n", "zh":"萤火虫; 星星; 月亮", "en":"firefly; star; moon"}
			],
			"eg":[

			],
			"status":3
		},
		"celi upa":{
			"def":[{"pos":"n", "zh":"太阳", "en":"sun"}],
			"eg":[], "status":3
		}
		,
		"dada":{
			"def":[
				{"pos":"adj", "zh":"良好的; 最强的", "en":"good; the best"},
				{"pos":"adv", "zh":"很; 十分; 最", "en":"very; the most"},
				{"pos":"int", "zh":"好的; 表示接受或答应", "en":"OK; meeting with acceptance"}
			],
			"eg":[], 
			"origin":{"zh":"协和语 大大(da da) 非常", "en":"Kyowa-go: 大大(da da) (very)"},
			"status":2},
		"Dadaupa":{
			"def":[{"pos":"place", "zh":"达达乌帕谷", "en":"Dadaupa Gorge"}],
			"eg":[], "status":2},
		"dada upa":{
			"def":[{"pos":"n", "zh":"高山", "en":"high mountain"}],
			"eg":[], "status":3},
		"dala":{
			"def":[
				{"pos":"pron", "zh":"何人", "en":"who"},
				{"pos":"pron", "zh":"何物", "en":"what"},
				{"pos":"pron", "zh":"何处", "en":"where"}
			],
			"eg":[], "status":1},
		"domu":{
			"def":[
				{"pos":"v", "zh":"聚集", "en":"gather together"},
				{"pos":"v", "zh":"躺下", "en":"lie down"}
			],
			"eg":[], "status":1},
		"du":{
			"def":[
				{"pos":"n", "zh":"二", "en":"two"},
				{"pos":"det", "zh":"你的", "en":"your"}
			],
			"eg":[], 
			"origin":{"zh":"拉丁语 duo 二", "en":"Latin: duo (two)"},
			"status":3},
		"dudu":{
			"def":[{"pos":"n", "zh":"四", "en":"four"}],
			"eg":[], 
			"origin":{"zh":"道本语 tu tu 四", "en":"Toki Pona: tu tu (four)"},
			"status":3},
		"eleka":{
			"def":[{"pos":"", "zh":""}],
			"eg":[], "status":0},
		"guru":{
			"def":[{"pos":"adj", "zh":"饿得咕咕叫的", "en":"hungry"}],
			"eg":[], "status":1},
		"gusha":{
			"def":[
				{"pos":"n", "zh":"草; 植物; 水果; 谷物", "en":"grass; plant; fruit; cereal"},
				{"pos":"n", "zh":"不喜欢的东西", "en":"nasty thing; troublesome thing"},
				{"pos":"adj", "zh":"喜好上不好的", "en":"disliked"}
			],
			"eg":[
				{
					"hil":"kucha gusha",
					"zh":"种子", "en":"seed"
				},
				{
					"hil":"unu gusha",
					"zh":"种子", "en":"seed"
				}
			], "status":2},
		"Homu":{
			"def":[{"pos":"n", "zh":"吼姆", "en":"Homu"}],
			"eg":[],
			"origin":{
				"zh":"游戏《崩坏学院2》中首次出现的虚拟生物，外观为黄色且带有尖牙与打结耳朵的兔子。",
				"en":"A virtual creature in Game Benghuai Xueyuan, it is a yellow rabbit with sharp teeth and twisted ears."
			},
			"status":2
		},
		"ika":{
			"def":[{"pos":"adj", "zh":"坏的", "en":"bad"}],
			"eg":[], 
			"origin":{"zh":"道本语 ike 坏的", "en":"Toki Pona: ike (bad)"},
			"status":3},
		"in":{
			"def":[{"pos":"prep", "zh":"在……里面", "en":"in; inside"}],
			"eg":[], 
			"origin":{"zh":"英语 in 在里面", "en":"English: in (in)"},
			"status":3},
		"ka":{
			"def":[{"pos":"", "zh":""}],
			"eg":[], "status":0},
		"kucha":{
			"def":[{"pos":"adj", "zh":"弱; 弱小", "en":"weak"}],
			"eg":[], "status":3},
		"kundala":{
			"def":[{"pos":"v", "zh":"打败", "en":"defeat"}],
			"eg":[], "status":1},
		"kuzi":{
			"def":[{"pos":"", "zh":""}],
			"eg":[], "status":0},
		"lata":{
			"def":[{"pos":"n", "zh":"冰", "en":"ice"}],
			"eg":[], "status":1},
		"lata movo":{
			"def":[{"pos":"n", "zh":"水", "en":"water"}],
			"eg":[], "status":1},
		"lawa":{
			"def":[{"pos":"n", "zh":"首领; 头目", "en":"leader"}],
			"eg":[],
			"origin":{"zh":"道本语 lawa 头", "en":"Toki Pona: lawa (head)"},
			"status":3},
		"mani":{
			"def":[
				{"pos":"n", "zh":"五", "en":"five"},
				{"pos":"n", "zh":"手", "en":"hand"},
				{"pos":"v", "zh":"劳动", "en":"labour"},
				{"pos":"v", "zh":"给予", "en":"give"},
				{"pos":"v", "zh":"帮助", "en":"help"}
			],
			"eg":[], 
			"origin":{"zh":"拉丁语 manus 手", "en":"Latin: manus (hand)"},
			"status":1},
		"mi":{
			"def":[{"pos":"pron", "zh":"我", "en":"I; me"}],
			"eg":[], "status":1},
		"mimi":{
			"def":[{"pos":"pron", "zh":"我们", "en":"we; us"}],
			"eg":[], "status":1},
		"mita":{
			"def":[
				{"pos":"n", "zh":"肉", "en":"meat"},
				{"pos":"n", "zh":"喜欢的东西", "en":"favourite thing"},
				{"pos":"adj", "zh":"喜好上好的", "en":"favourable"},
				{"pos":"adj", "zh":"好吃的", "en":"delicious"},
				{"pos":"adj", "zh":"动物身上出的", "en":"taken from the animal"}
			],
			"eg":[
				{
					"hil":"mita lata movo",
					"zh":"鱼肉", "en":"fish",
					"comment":{"zh":"水里的肉", "en":"meat in the water"}
				}
			], "status":2},
		"mito":{
			"def":[{"pos":"v", "zh":"知道", "en":"know"}],
			"eg":[], "status":"1"},
		"mitono":{
			"def":[{"pos":"n", "zh":"丘丘暴徒", "en":"Hilichurl guard"}],
			"eg":[], "status":1},
		"mosi":{
			"def":[
				{"pos":"n", "zh":"食物", "en":"food"},
				{"pos":"v", "zh":"吃", "en":"eat"}
			],
			"eg":[
				{
					"hil":"Mosi mita",
					"zh":"开心", "en":"happy"
				},
				{
					"hil":"Mosi gusha",
					"zh":"伤心", "en":"sad",
					"comment":{"zh":"丘丘人喜欢吃肉而不喜欢吃蔬菜","en":"Hilichurls like eating meat but not vegetable"}
				},
				{
					"hil":"mosi dada",
					"zh":"午餐", "en":"lunch",
					"comment":{"zh":"好吃的饭谓之“午饭”", "en":"Delicious meal is called “lunch”"}
				},
				{
					"hil":"aba mosi dada",
					"zh":"上午", "en":"morning",
					"comment":{"zh":"起床到午餐前的时间", "en":"Time before lunch"}
				},
				{
					"hil":"unta mosi dada",
					"zh":"下午", "en":"afternoon",
					"comment":{"zh":"午餐后到日落前的时间", "en":"Time after lunch before evening"}
				},
				{
					"hil":"mosi aba nunu",
					"zh":"晚餐", "en":"dinner",
					"comment":{"zh":"吃睡觉前的饭的时间", "en":"Time before dinner"}
				},
				{
					"hil":"unta nunu",
					"zh":"深夜", "en":"night",
					"comment":{"zh":"睡觉之后的时间", "en":"Time after dinner"}
				}
			], "status":2},
		"movo":{
			"def":[{"pos":"v", "zh":"移动", "en":"move"}],
			"eg":[], "status":1},
		"muhe":{
			"def":[{"pos":"v", "zh":"喜欢; 想要", "en":"love; like; want"}],
			"eg":[], "status":2},
		"nesina":{"def":[], "eg":[], "status":0},
		"nini":{
			"def":[
				{"pos":"n", "zh":"雷电", "en":"lightning"},
				{"pos":"n", "zh":"警示", "en":"warning"},
				{"pos":"n", "zh":"贡品", "en":"tribute"}
			],
			"eg":[], "status":1},
		"nunu":{
			"def":[{"pos":"v", "zh":"睡觉", "en":"sleep"}],
			"eg":[], "status":2},
		"nya":{
			"def":[{"pos":"", "zh":"同 nye", "en":"refer to “nye”"}],
			"eg":[], "status":1},
		"nye":{
			"def":[{"pos":"adv", "zh":"不; 别; 表示否定", "en":"no; not"}],
			"eg":[], "status":1},
		"odomu":{
			"def":[{"pos":"n", "zh":"朋友; 同志", "en":"friend; comrade"}],
			"eg":[], "status":1},
		"olah":{
			"def":[{"pos":"int", "zh":"你好", "en":"Hello; How are you?"}],
			"eg":[], "status":2},
		"plata":{
			"def":[{"pos":"v", "zh":"打; 攻击", "en":"attack"}],
			"eg":[], "status":1},
		"pupu":{
			"def":[{"pos":"", "zh":""}],
			"eg":[], "status":0},
		"sada":{
			"def":[
				{"pos":"n", "zh":"固体; 岩石", "en":"solid; stone"},
				{"pos":"adj", "zh":"硬的", "en":"hard (not soft)"}
			],
			"eg":[], "status":3},
		"sama":{
			"def":[{"pos":"", "zh":""}],
			"eg":[], "status":0},
		"si":{
			"def":[{"pos":"", "zh":""}],
			"eg":[], "status":0},
		"shato":{
			"def":[{"pos":"", "zh":""}],
			"eg":[], "status":0},
		"tiga":{
			"def":[{"pos":"", "zh":""}],
			"eg":[], "status":0},
		"todo":{
			"def":[{"pos":"v", "zh":"拿", "en":"take"}],
			"eg":[], "status":1},
		"tomo":{
			"def":[{"pos":"n", "zh":"朋友", "en":"friend"}],
			"eg":[], "status":1},
		"unta":{
			"def":[{"pos":"prep", "zh":"在……之后", "en":"after"}],
			"eg":[], "status":1},
		"unu":{
			"def":[
				{"pos":"n", "zh":"一", "en":"one"},
				{"pos":"n", "zh":"丘丘人的神明", "en":"a god of Hilichurls"},
				{"pos":"n", "zh":"原初之物", "en":"genesis"}
			],
			"eg":[], "status":3},
		"unu du":{
			"def":[{"pos":"n", "zh":"三", "en":"three"}],
			"eg":[], 
			"origin":{"zh":"道本语 tu wan 三", "en":"Toki Pona: tu wan (three)"},
			"status":3},
		"upa":{
			"def":[
				{"pos":"n", "zh":"山", "en":"mountain"},
				{"pos":"v", "zh":"超越", "en":"go beyond"},
				{"pos":"adj", "zh":"高", "en":"high"},
				{"pos":"prep", "zh":"于……之上", "en":"over"}
			],
			"eg":[], "status":3},
		"upano":{
			"def":[{"pos":"n", "zh":"天上的东西", "en":"a thing in the sky"}],
			"eg":[], "status":3},
		"valo":{
			"def":[{"pos":"int", "zh":"再见", "en":"Goodbye"}],
			"eg":[], "status":1},
		"vin":{
			"def":[
				{"pos":"v", "zh":"防止", "en":"prevent"},
				{"pos":"n", "zh":"酒", "en":"wine (alcohol)"}
			],
			"eg":[], 
			"origin":{"zh":"拉丁语 vinum 酒", "en":"Latin: vinum (wine)"},
			"status":1},
		"ya":{
			"def":[{"pos":"n", "zh":"一个人", "en":"a person"}],
			"eg":[], "status":1},
		"yaya":{
			"def":[{"pos":"n", "zh":"一群人", "en":"people"}],
			"eg":[], "status":1},
		"ye":{
			"def":[{"pos":"pron", "zh":"你 (通格)", "en":"you (absolutive case)"}],
			"eg":[], "status":1},
		"yeye":{
			"def":[{"pos":"pron", "zh":"你们 (通格)", "en":"you (plural)"}],
			"eg":[], "status":1},
		"yo":{
			"def":[{"pos":"pron", "zh":"你 (作格)", "en":"you (ergative case)"}],
			"eg":[], "status":1},
		"yoyo":{
			"def":[
				{"pos":"pron", "zh":"你们 (作格)", "en":"you (plural)"},
				{"pos":"n", "zh":"酒", "en":"wine (alcohol)"}
			],
			"eg":[], "status":1},
		"zido":{
			"def":[
				{"pos":"pron", "zh":"这个", "en":"this"},
				{"pos":"pron", "zh":"此处", "en":"here"}
			],
			"eg":[], "status":3}
	},
	"posAbbr":{ // 单词词性缩写
		"adj":{"zh":"形", "en":"adj"},
		"adv":{"zh":"副", "en":"adv"},
		"n":{"zh":"名", "en":"n"},
		"v":{"zh":"动", "en":"v"},
		"pron":{"zh":"代", "en":"pron"},
		"prep":{"zh":"介", "en":"prep"},
		"int":{"zh":"叹", "en":"int"},
		"aux":{"zh":"助", "en":"aux"},
		"det":{"zh":"限", "en":"det"},
		"place":{"zh":"地", "en":"place"}
	}
}
var dictionary_proper = document.getElementById("dictionary-proper")
// 渲染词典
function displayDictionary (
	showUnknownWord = false,
	lang = "zh"
) {
	dictionary_proper.innerHTML = "";
	var PROPER = DICTIONARY["dictionary_proper"]
	var WORDS = Object.keys(PROPER)
	var POSABBR = DICTIONARY["posAbbr"]
	
	WORDS.forEach(function(word) { // 依次渲染每一个单词
		
		var WORD = PROPER[word]
		var status = ""
		if (WORD["status"] == 0) { 
			status = "none"
			if (!showUnknownWord) return // 忽略没有释义的单词
		}
		else if (WORD["status"] == 1) status = "folk" // 单词释义确定程度的 CSS 类
		else if (WORD["status"] == 2) status = "official"
		else if (WORD["status"] == 3) status = "official-sus"
		
		// 单词本身
		dictionary_proper.innerHTML += `
		<div class="single-word" the-word="${word}">
			<div class="the-word word-status-${status}">
				${word}
			</div>
			<div class="word-definitions">
		`
		// 依次渲染每一个释义
		for (i=0; i<WORD["def"].length; i++) {

			var part_of_speech = POSABBR[WORD["def"][i]["pos"]]
			var translation = WORD["def"][i][lang]
			if (part_of_speech === undefined) part_of_speech = ""
			else part_of_speech = "["+part_of_speech[lang]+"]"

			dictionary_proper.innerHTML += `
				<div class="word-definition">
					<div class="part-of-speech">
						${part_of_speech}
					</div>
					<div class="translation">${translation}</div>
				</div>
			`
		}
		dictionary_proper.innerHTML += `
			</div>
			<div class="word-examples">
		`
		// 依次渲染每一个例子
		for (i=0; i<WORD["eg"].length; i++) {

			var example_hilichurlian = WORD["eg"][i]["hil"]
			var example_translation = WORD["eg"][i][lang]
			if (WORD["eg"][i]["comment"] === undefined) {
				example_comment = ""
			} else {
				var example_comment = WORD["eg"][i]["comment"][lang]
				example_comment = "(" + example_comment + ")"
			}

			dictionary_proper.innerHTML += `
				<div class="word-example">
					<div class="example-hilichurlian">
						· ${example_hilichurlian}
					</div>
					<div class="example-translation">
						${example_translation}
					</div>
					<div class="example-comment">
						${example_comment}
					</div>
				</div>
			`
		}
	
		dictionary_proper.innerHTML += `
			</div>
			<div class="word-origin">
		`
		// 如果有单源信息则显示
		if (WORD.origin === undefined) var word_origin = ""
		else word_origin = WORD.origin[lang]

		dictionary_proper.innerHTML += `
				<code>${word_origin}</code>
			</div>
		</div>
		<hr>
		`
	})
}

////////// 配置部分 //////////

// 使用 Cookie 储存用户信息
var CONFIG = {}

try { // 读取 Cookie
	CONFIG = JSON.parse(document.cookie.split("=; ")[0])
} catch (e) { resetCookie() } // 如果 Cookie 未能正常解析，则填入默认 Cookie

// 设置函数开始 //
function setShowUnknownWord(value) {
	CONFIG["showUnknownWord"] = value
	saveConfigureAndDisplayDictionary()
}
function setLang(value) {
	CONFIG["lang"] = value
	saveConfigureAndDisplayDictionary()
}
function resetCookie(doReload=false) { // 重置 Cookie
	document.cookie = "expires=Thu, 01 Jan 1970 00:00:00 GMT"
	CONFIG = {
		"showUnknownWord": false, // 是否显示未知词语
		"lang": "zh", // 词典语言
		"searchHintWindowUnderstand": false, // 是否已经按下了“查找”快捷键
	}
	document.cookie = JSON.stringify(CONFIG) // 写入默认 Cookie
	console.log(document.cookie)
	if (doReload) location.reload() // 刷新
}
// 结束 //

function saveConfigureAndDisplayDictionary() {
	document.cookie = JSON.stringify(CONFIG)
	displayDictionary(
		showUnknownWord = CONFIG["showUnknownWord"],
		lang = CONFIG["lang"]
	)
}

// 页面载入后直接运行
saveConfigureAndDisplayDictionary()
