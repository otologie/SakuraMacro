// Dialog
var a = Editor.InputBox("Interval (-11~11)","0",3);

if (a>0 && a<12|| a<0 && a>-12) {

	// Get selected text
	var text = Editor.GetSelectedString(0);

	Editor.InsText(ChangeKeys(text));
}


function ChangeKeys(text) {

	// Contain the mached chord names
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

	var chord = ["A", "Bb", "B", "C", "C#", "D", "Eb", "E", "F", "F#", "G", "G#"];


	// Exchange to numbers
	for (var i=0; i<12; i++) {
		text = text.replace(new RegExp(mchord[i],"g"), "h" + i);
	}

	// Replace to chord names
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

