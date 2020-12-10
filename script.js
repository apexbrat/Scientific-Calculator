function addChar(input, character) {
    
	if(input.value == null || input.value == "0"){
        input.value = character;
    } else {
        input.value += character;
    }
}

function cos(form) {
    let answer = Math.cos(form.display.value);
    if(!isNaN(answer)){
        form.display.value = answer;
    }
}

function sin(form) {
    let answer = Math.sin(form.display.value);
    if(!isNaN(answer)){
        form.display.value = answer;
    }
}

function tan(form) {
    let answer = Math.tan(form.display.value);
    if(!isNaN(answer)){
        form.display.value = answer;
    }
}

function sqrt(form) {
    let answer = Math.sqrt(form.display.value);
    if(!isNaN(answer)){
        form.display.value = answer;
    }
}

function ln(form) {
    let answer = Math.log(form.display.value);
    if(!isNaN(answer)){
        form.display.value = answer;
    }
}

function exp(form) {
    let answer = Math.exp(form.display.value);
    if(!isNaN(answer)){
        form.display.value = answer;
    }
}

function deleteChar(input) {
	input.value = input.value.substring(0, input.value.length - 1);
}

var val = 0.0;
function percent(input) {
  val = input.value;
  input.value = input.value + "%";
}

function changeSign(input) {
	if(input.value.substring(0, 1) == "-")
		input.value = input.value.substring(1, input.value.length);
	else
		input.value = "-" + input.value;
}

function compute(form) {
      let answer = eval(form.display.value);
        if(!isNaN(answer)){
            form.display.value = answer;
        }  
  }


function square(form) {
	form.display.value = eval(form.display.value) * eval(form.display.value)
}

function checkNum(str) {
	for (var i = 0; i < str.length; i++) {
		var ch = str.charAt(i);
		if (ch < "0" || ch > "9") {
			if (ch != "/" && ch != "*" && ch != "+" && ch != "-" && ch != "."
				&& ch != "(" && ch!= ")" && ch != "%") {
				alert("invalid entry!");
				return false;
				}
			}
		}
		return true;
}