var langs = ['en', 'fr'];
var langCode = '';
var langJS = null;

var translate = function (jsdata) {
	document.querySelectorAll('[tkey]').forEach(function (node) {
		var strTr = jsdata[node.getAttribute('tkey')];
		node.innerHTML = strTr;
	});
}

langCode = navigator.language.substring(0, 2);

var lang_request = new XMLHttpRequest();
lang_request.onreadystatechange = function () {
	if (this.readyState == 4 && this.status == 200) {
		translate(lang_request.response);
	}
};
if (langs.includes(langCode)) {
	lang_request.open('get', 'lang/' + langCode + '.json', true);
} else {
	lang_request.open('get', 'lang/en.json', true);
}
lang_request.responseType = 'json';
lang_request.send();