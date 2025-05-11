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

var playernumber = 4;

function updatePlayerCount() {
    document.getElementById("playercount").textContent = playernumber;
}

// Function to initialize player visibility
function initializePlayers() {
    // Hide all players first
    for (let i = 1; i <= 12; i++) {
        document.getElementById("player" + i).style.display = 'none';
    }

    // Show only the first 4 players
    for (let i = 1; i <= 4; i++) {
        document.getElementById("player" + i).style.display = 'flex';
    }
}

function removeplayer() {
    playernumber--;
    updatePlayerCount();

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
    updatePlayerCount();

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

// Initialize player count and visibility on page load
document.addEventListener('DOMContentLoaded', function () {
    initializePlayers();
    updatePlayerCount();
});

// Theme toggle logic
function setTheme(mode) {
    if (mode === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
        document.getElementById('themeIcon').textContent = '🌙';
    } else {
        document.documentElement.removeAttribute('data-theme');
        document.getElementById('themeIcon').textContent = '☀️';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    // Theme toggle
    let currentTheme = 'dark';
    setTheme(currentTheme);
    document.getElementById('themeToggle').addEventListener('click', function () {
        currentTheme = (currentTheme === 'dark') ? 'light' : 'dark';
        setTheme(currentTheme);
    });
});

// Share button functionality
function shareScores() {
    const shareData = {
        title: 'ScorePal',
        text: 'Check out ScorePal for your next game night!',
        url: window.location.href
    };
    if (navigator.share) {
        navigator.share(shareData).catch(() => { });
    } else {
        // Fallback: copy URL to clipboard
        navigator.clipboard.writeText(window.location.href).then(() => {
            showShareMessage('Link copied to clipboard!');
        });
    }
}

function showShareMessage(msg) {
    let msgDiv = document.createElement('div');
    msgDiv.textContent = msg;
    msgDiv.style.position = 'fixed';
    msgDiv.style.bottom = '2.5rem';
    msgDiv.style.right = '2.5rem';
    msgDiv.style.background = 'var(--primary)';
    msgDiv.style.color = 'white';
    msgDiv.style.padding = '0.7em 1.5em';
    msgDiv.style.borderRadius = '30px';
    msgDiv.style.fontSize = '1.1rem';
    msgDiv.style.zIndex = 9999;
    msgDiv.style.boxShadow = '0 2px 8px rgba(0,0,0,0.15)';
    document.body.appendChild(msgDiv);
    setTimeout(() => { msgDiv.remove(); }, 2000);
}

function resetScores() {
    for (let i = 1; i <= 12; i++) {
        const playerDiv = document.getElementById('player' + i);
        if (playerDiv && playerDiv.style.display !== 'none') {
            const scoreInput = document.getElementById('score' + i);
            if (scoreInput) scoreInput.value = 0;
        }
    }
}