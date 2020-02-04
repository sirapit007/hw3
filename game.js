var randomB = Math.floor(Math.random() * 100) + 1;
N = 10;

function addCheck(nStr) {
    if (N > 0) {
        if (nStr < 0 ) {
            document.getElementById('bbb').innerHTML= document.frmMain.txtNumberA.value + "  : 🚩Last guesses was too low!  ";
            N--;
        }
        else if (nStr > 0) {
            document.getElementById('bbb').innerHTML = document.frmMain.txtNumberA.value + "  : Last guesses was too high 🚩  ";
            N--;
        }
        else {
            document.getElementById('ccc').innerHTML =  "!!!!🚩🚩🚩  You Win  🚩🚩🚩!!!!!";
            document.getElementById('ddd').innerHTML =  "🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩";
            document.getElementById('bbb').innerHTML = "Answer is : " + document.frmMain.txtNumberA.value;
            bodyOnload(10000);
            begintimer().document.getElementById('dplay').innerHTML = "XXXX";
            setTimeout("begintimer()",1000)
        }
        document.frmMain.txtNumberA.value = " ";
    }
    if (N == 0) {
        document.getElementById('ccc').innerHTML =  "!!!!!!!!!!!!!  You Lose  !!!!!!!!!!!";
        document.getElementById('ddd').innerHTML =  "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!";
        bodyOnload(10000);
        begintimer().document.getElementById('dplay').innerHTML = "XXXX";
        setTimeout("begintimer()",1000)
    }
    document.querySelector("q").innerHTML = N;
}

function fncA() {
	if (isNaN(document.frmMain.txtNumberA.value) || document.frmMain.txtNumberA.value == "") {
		alert('Please input Integer Number only.');
		document.frmMain.txtNumberA.focus();
		return;
	}
	var TotSum = (parseFloat(document.frmMain.txtNumberA.value)-randomB ).toFixed(2);
    document.frmMain.txtNumberC.value  = addCheck(TotSum);
}
    
function bodyOnload(i) {
    setTimeout("!!!!🚩🚩🚩  You Win  🚩🚩🚩!!!!!');",i);
    setTimeout("Refresh();",i);
    cursec+=100;
    bodyOnload(10000);
}

function alertWelcome() {
    alert('Welcome to Guesses game');
}

function Refresh() {
    window.location.reload();
}