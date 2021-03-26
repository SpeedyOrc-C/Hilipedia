var DICTIONARY = {
	"dictionary_proper":{
		"a":{
			"def":[{"pos":"", "zh":""}],
			"eg":[], "status":0},
		"aba":{
			"def":[{"pos":"", "zh":""}],
			"eg":[], "status":0},
		"beru":{
			"def":[{"pos":"", "zh":""}],
			"eg":[], "status":0},
		"biadam":{
			"def":[{"pos":"", "zh":""}],
			"eg":[], "status":0},
		"biat":{
			"def":[{"pos":"", "zh":""}],
			"eg":[], "status":0},
		"buka":{
			"def":[{"pos":"n", "zh":"肚子"}],
			"eg":[], "status":1},
		"celi":{
			"def":[{"pos":"", "zh":""}],
			"eg":[], "status":0},
		"dada":{
			"def":[
				{"pos":"adj", "zh":"良好的; 最强的"},
				{"pos":"int", "zh":"表示接受或答应"}],
			"eg":[], "status":2},
		"Dadaupa":{
			"def":[{"pos":"place", "zh":"达达乌帕谷"}],
			"eg":[], "status":2},
		"dala":{
			"def":[{"pos":"", "zh":""}],
			"eg":[], "status":0},
		"domu":{
			"def":[{"pos":"", "zh":""}],
			"eg":[], "status":0},
		"eleka":{
			"def":[{"pos":"", "zh":""}],
			"eg":[], "status":0},
		"guru-guru":{
			"def":[{"pos":"", "zh":""}],
			"eg":[], "status":0},
		"gusha":{
			"def":[{"pos":"", "zh":""}],
			"eg":[], "status":0},
		"ika":{
			"def":[{"pos":"", "zh":""}],
			"eg":[], "status":0},
		"ka":{
			"def":[{"pos":"", "zh":""}],
			"eg":[], "status":0},
		"kucha":{
			"def":[{"pos":"", "zh":""}],
			"eg":[], "status":0},
		"kundala":{
			"def":[{"pos":"", "zh":""}],
			"eg":[], "status":0},
		"kuzi":{
			"def":[{"pos":"", "zh":""}],
			"eg":[], "status":0},
		"lata":{
			"def":[{"pos":"", "zh":""}],
			"eg":[], "status":0},
		"mi":{
			"def":[{"pos":"", "zh":""}],
			"eg":[], "status":0},
		"mimi":{
			"def":[{"pos":"", "zh":""}],
			"eg":[], "status":0},
		"mita":{
			"def":[
				{"pos":"n", "zh":"肉"},
				{"pos":"adj", "zh":"动物身上出的; 喜好上好的"}],
			"eg":[], "status":2},
		"mitino":{
			"def":[{"pos":"", "zh":""}],
			"eg":[], "status":0},
		"mosi":{
			"def":[
				{"pos":"n", "zh":"食物"},
				{"pos":"v", "zh":"吃"}],
			"eg":[], "status":2},
		"movo":{
			"def":[{"pos":"", "zh":""}],
			"eg":[], "status":0},
		"muhe":{
			"def":[{"pos":"", "zh":""}],
			"eg":[], "status":0},
		"nini":{
			"def":[{"pos":"", "zh":""}],
			"eg":[], "status":0},
		"nunu":{
			"def":[{"pos":"", "zh":""}],
			"eg":[], "status":0},
		"nye":{
			"def":[{"pos":"", "zh":""}],
			"eg":[], "status":0},
		"odomu":{
			"def":[{"pos":"", "zh":""}],
			"eg":[], "status":0},
		"olah":{
			"def":[{"pos":"int", "zh":"你好"}],
			"eg":[], "status":2},
		"plata":{
			"def":[{"pos":"", "zh":""}],
			"eg":[], "status":0},
		"pupu":{
			"def":[{"pos":"", "zh":""}],
			"eg":[], "status":0},
		"sada":{
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
			"def":[{"pos":"", "zh":""}],
			"eg":[], "status":0},
		"tomo":{
			"def":[{"pos":"", "zh":""}],
			"eg":[], "status":0},
		"unta":{
			"def":[{"pos":"", "zh":""}],
			"eg":[], "status":0},
		"unu":{
			"def":[{"pos":"", "zh":""}],
			"eg":[], "status":0},
		"upa":{
			"def":[{"pos":"", "zh":""}],
			"eg":[], "status":0},
		"valo":{
			"def":[{"pos":"", "zh":""}],
			"eg":[], "status":0},
		"vin":{
			"def":[{"pos":"", "zh":""}],
			"eg":[], "status":0},
		"ya":{
			"def":[{"pos":"", "zh":""}],
			"eg":[], "status":0},
		"yaya":{
			"def":[{"pos":"", "zh":""}],
			"eg":[], "status":0},
		"ye":{
			"def":[{"pos":"", "zh":""}],
			"eg":[], "status":0},
		"yo":{
			"def":[{"pos":"", "zh":""}],
			"eg":[], "status":0},
		"yoyo":{
			"def":[{"pos":"", "zh":""}],
			"eg":[], "status":0},
		"zido":{
			"def":[{"pos":"", "zh":""}],
			"eg":[]}
	},
	"posAbbr":{
		"adj":{"zh":"形"},
		"n":{"zh":"名"},
		"v":{"zh":"动"},
		"pron":{"zh":"人"},
		"int":{"zh":"叹"},
		"aux":{"zh":"助"},
		"det":{"zh":"限"},
		"place":{"zh":"地"}
	}
}

var PROPER = DICTIONARY["dictionary_proper"]
var WORDS = Object.keys(PROPER)
var POSABBR = DICTIONARY["posAbbr"]

WORDS.forEach(function(word) {
    
    var WORD = PROPER[word]
    var status = ""
    if (WORD["status"] == 0) status = "none"
    else if (WORD["status"] == 1) status = "folk"
    else if (WORD["status"] == 2) status = "official"
    console.log(status);

    document.write(`
    <div class="single-word">
        <div class="the-word word-status-${status}">
            ${word}
        </div>
        <div class="word-definitions">
    `)
    for (i=0; i<WORD["def"].length; i++) {
        var part_of_speech = POSABBR[WORD["def"][i]["pos"]]
        var translation = WORD["def"][i]["zh"]
        if (part_of_speech === undefined) part_of_speech = ""
        else part_of_speech = "["+part_of_speech["zh"]+"]"
        document.write(`
            <div class="word-definition">
                <div class="part-of-speech">
                    ${part_of_speech}
                </div>
                <div class="translation">${translation}</div>
            </div>
        `)
    }
    document.write(`
        </div>
    </div>
    <hr/>
    `)

})
