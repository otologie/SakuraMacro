// Ask
var line1 = Editor.Inputbox("Now", "00:00:00", 8);
var line2 = Editor.Inputbox("Plus", "00:00:00", 8);
// Split
var now = line1.split(':');
var plus = line2.split(':');
// Sum
var sum1 = Number(now[0]) * 3600 + Number(now[1]) * 60 + Number(now[2]);
var sum2 = Number(plus[0]) * 3600 + Number(plus[1]) * 60 + Number(plus[2]);

var time = sum1 + sum2, each = [];

// Hour, Minute, Second
each[0] = time / 3600 | 0;
each[1] = (time - each[0] * 3600) / 60 | 0;
each[2] = time - each[0] * 3600 - each[1] * 60;

// Digit
for (var i=0; i<3; i++) {
    if (each[i] < 10) each[i] = "0" + String(each[i]);
    else each[i] = String(each[i]);
}

// Answer
Editor.MessageBox(each[0] + ":" + each[1] + ":" + each[2], 0);

