var oDiarybot = document.getElementsByClassName('diarybot')[0];
var p = oDiarybot.getElementsByTagName('p')[0];
var fanhui = document.getElementsByClassName('diarytop')[0].getElementsByTagName('img')[0];
p.onclick = function() {
    location.href = 'diary-text.html';
}
p.onmouseenter = function(){
	this.style.cursor = 'pointer';
}
fanhui.onclick = function(){
	 location.href = 'home.html';
}
var STORAGE_KEY = 'riji-data';
var Search = location.search.split('=')[1];
//var data = storage.fetch(STORAGE_KEY);
//console.log(data)