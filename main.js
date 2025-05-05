function subtract(num) {
    var number = document.getElementById("score" + num).value;
    number--;
    document.getElementById("score" + num).value = number;    
}

function add(num) {
    var number = document.getElementById("score" + num).value;
    number++;
    document.getElementById("score" + num).value = number;
}

var playernumber = 6;

function removeplayer() {

    playernumber--;

    if (playernumber == 11) {
        document.getElementById("player12").style.display = 'none'
        var addbtn = document.getElementById("addplayerbtn");
        addbtn.disabled = false;
    }

    if (playernumber == 10) {
        document.getElementById("player11").style.display = 'none'
    }

    if (playernumber == 9) {
        document.getElementById("player10").style.display = 'none'
        var players = document.getElementsByClassName("players2");

        for (var i = 0; i < players.length; i++) {
             players[i].classList.remove("players3");
        }
    }

    if (playernumber == 8) {
        document.getElementById("player9").style.display = 'none';
        var players = document.getElementsByClassName("players1");

        for (var i = 0; i < players.length; i++) {
            players[i].classList.remove("players2");
       }
    }

    if (playernumber == 7) {
        document.getElementById("player8").style.display = 'none'
    }

    if (playernumber == 6) {
        document.getElementById("player7").style.display = 'none';
        var players = document.getElementsByClassName("player");
        for (var i = 0; i < players.length; i++) {
            players[i].classList.remove("players1");
        }
    }

    if (playernumber == 5) {
        document.getElementById("player6").style.display = 'none'
    }

    if (playernumber == 4) {
        document.getElementById("player5").style.display = 'none';
        document.getElementsByClassName("scoreboard")[0].style.flexWrap = 'nowarp';
        var players = document.getElementsByClassName("player");
        for (var i = 0; i < players.length; i++) {
            players[i].classList.add("players-1");
        }
    }

    if (playernumber == 3) {
        document.getElementById("player4").style.display = 'none'
    }

    if (playernumber == 2) {
        document.getElementById("player3").style.display = 'none';
        var players = document.getElementsByClassName("player");
        var removebtn = document.getElementById("removeplayerbtn");
        removebtn.disabled = true;
        for (var i = 0; i < players.length; i++) {
            players[i].classList.add("players-2");
        }
    }
}

function addplayer() {

    playernumber++;

    if (playernumber == 3) {
        document.getElementById("player3").style.display = 'flex'
        var players = document.getElementsByClassName("player");
        var removebtn = document.getElementById("removeplayerbtn");
        removebtn.disabled = false;
        for (var i = 0; i < players.length; i++) {
            players[i].classList.remove("players-2");
        }
    }

    if (playernumber == 4) {
        document.getElementById("player4").style.display = 'flex'
        var players = document.getElementsByClassName("player");
    }

    if (playernumber == 5) {
        document.getElementById("player5").style.display = 'flex'
        var players = document.getElementsByClassName("player");
        for (var i = 0; i < players.length; i++) {
            players[i].classList.remove("players-1");
        }
    }

    if (playernumber == 6) {
        document.getElementById("player6").style.display = 'flex'
    }

    if (playernumber == 7) {
        document.getElementById("player7").style.display = 'flex';

        var players = document.getElementsByClassName("player");
        for (var i = 0; i < players.length; i++) {
            players[i].classList.add("players1");
        }
    }

    if (playernumber == 8) {
        document.getElementById("player8").style.display = 'flex'
    }

    if (playernumber == 9) {
        document.getElementById("player9").style.display = 'flex';

        var players = document.getElementsByClassName("players1");

        for (var i = 0; i < players.length; i++) {
            players[i].classList.add("players2");
       }

    }

    if (playernumber == 10) {
        document.getElementById("player10").style.display = 'flex'

        var players = document.getElementsByClassName("players2");

        for (var i = 0; i < players.length; i++) {
             players[i].classList.add("players3");
        }
    }

    if (playernumber == 11) {
        document.getElementById("player11").style.display = 'flex'
    }

    if (playernumber == 12) {
        document.getElementById("player12").style.display = 'flex'
        var addbtn = document.getElementById("addplayerbtn");
        addbtn.disabled = true;
    }
}