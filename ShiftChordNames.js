// Show input box
var a = Editor.InputBox("Interval (-11~11)","0",3);

// Get selected text
if (a>0 && a<12 || a<0 && a>-12) {
	var text = Editor.GetSelectedString(0);
	Editor.InsText(changeKey(text));
}

function changeKey(text) {

	// Conditions of RegExp
	var clause = new Array(11);
	clause[0] = "A(?!#|b)";
	clause[1] = "A#|Bb";
	clause[2] = "B(?!b)";
	clause[3] = "C(?!#)";
	clause[4] = "C#|Db";
	clause[5] = "D(?!#|b)";
	clause[6] = "D#|Eb";
	clause[7] = "E(?!b)";
	clause[8] = "F(?!#)";
	clause[9] = "F#|Gb";
	clause[10] = "G(?!#|b)";
	clause[11] = "G#|Ab";

	var chordName = ["A", "Bb", "B", "C", "C#", "D", "Eb", "E", "F", "F#", "G", "G#"];

	// Match every chord
	for (var i=0; i<12; i++) {
		text = text.replace(new RegExp(clause[i],"g"), "h" + i);
	}

	// Shift chords
	for (var i=10; i<12; i++) {
		var ii = i + Number(a);
		if (ii<0) ii = ii+12;
		if (ii>11) ii = ii-12;
		text = text.replace(new RegExp("h" + i,"g"), chordName[ii]);
	}

	for (var i=0; i<10; i++) {
		var ii = i + Number(a);
		if (ii<0) ii = ii+12;
		if (ii>11) ii = ii-12;
		text = text.replace(new RegExp("h" + i,"g"), chordName[ii]);
	}

	return text;
}
