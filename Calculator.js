
// Return value of MessageBox, 7 = "No", 6 = "Yes"
var line = "", end = 7;


while (end == 7) {
var text = Editor.Inputbox("Expression", line, 200);

if (text != "") {
	// Result
	var answer = eval(text);
	end = Editor.MessageBox(answer, "4");

	if (end == 7) line = text;
}

// Empty
else end = 6;

}

