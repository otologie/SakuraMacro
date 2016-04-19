// ダイアログ
var a = Editor.InputBox("音程 (-11~11)","0",3);

if (a>0 && a<12|| a<0 && a>-12) {
// 選択しているテキストを取得
var text = Editor.GetSelectedString(0);

Editor.InsText(chordkeychange(text));
}


function chordkeychange(text) {

var mchord = new Array(11);
mchord[0] = "A(?!#|b)";
mchord[1] = "A#|Bb";
mchord[2] = "B(?!b)";
mchord[3] = "C(?!#)";
mchord[4] = "C#|Db";
mchord[5] = "D(?!#|b)";
mchord[6] = "D#|Eb";
mchord[7] = "E(?!b)";
mchord[8] = "F(?!#)";
mchord[9] = "F#|Gb";
mchord[10] = "G(?!#|b)";
mchord[11] = "G#|Ab";

var chord = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];


// 数値に置き換え
for (var i=0; i<12; i++) {
	text = text.replace(new RegExp(mchord[i],"g"), "h" + i);
}

// コード名に置き換え
for (var i=10; i<12; i++) {
	var ii=i+Number(a);
	if (ii<0) ii=ii+12;
	if (ii>11) ii=ii-12;
	text = text.replace(new RegExp("h" + i,"g"), chord[ii]);
}

for (var i=0; i<10; i++) {
	var ii=i+Number(a);
	if (ii<0) ii=ii+12;
	if (ii>11) ii=ii-12;
	text = text.replace(new RegExp("h" + i,"g"), chord[ii]);
}

return text;
}

