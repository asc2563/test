var script = document.createElement("script");
script.src = "https://code.jquery.com/jquery-3.6.4.min.js"; // Check https://jquery.com/ for the current version
document.getElementsByTagName("head")[0].appendChild(script);

var player = {
  points: 0,
};

function hideCustomAlert() {
  $("#setPassword").hide();
}

hideCustomAlert();

function showCustomAlert() {
  $("#setPassword").show();
}

function rock(random) {
  if (random == 1) {
    player.points = player.points - 1;
    console.log(player.points);
    if (player.points < 0) {
      player.points = 0;
    }
    document.getElementById(
      "alertContent"
    ).innerText = `paper, you lost you have ${player.points} points`;
    showCustomAlert();
  } else if (random == 2) {
    player.points = player.points;
    console.log(player.points);
    if (player.points < 0) {
      player.points = 0;
    }
    document.getElementById(
      "alertContent"
    ).innerText = `rock, you tied you have ${player.points} points`;
    showCustomAlert();
  } else if (random == 3) {
    player.points = player.points + 1;
    console.log(player.points);
    if (player.points < 0) {
      player.points = 0;
    }
    document.getElementById(
      "alertContent"
    ).innerText = `scissors, you won you have ${player.points} points`;
    showCustomAlert();
  }
  document.getElementById("rockimg").style.display = "block";
  document.getElementById("paperimg").style.display = "none";
  document.getElementById("scissorsimg").style.display = "none"
}

function paper(random) {
  if (random == 1) {
    player.points = player.points;
    console.log(player.points);

    if (player.points < 0) {
      player.points = 0;
    }
    document.getElementById(
      "alertContent"
    ).innerText = `paper, you tied you have ${player.points} points`;
    showCustomAlert();
  } else if (random == 2) {
    player.points = player.points + 1;
    console.log(player.points);
    if (player.points < 0) {
      player.points = 0;
    }
    document.getElementById(
      "alertContent"
    ).innerText = `rock, you won you have ${player.points} points`;
    showCustomAlert();
  } else if (random == 3) {
    player.points = player.points - 1;
    console.log(player.points);
    if (player.points < 0) {
      player.points = 0;
    }
    document.getElementById(
      "alertContent"
    ).innerText = `scissors, you lost you have ${player.points} points`;
    showCustomAlert();
  }
  document.getElementById("rockimg").style.display = "none";
  document.getElementById("paperimg").style.display = "block";
  document.getElementById("scissorsimg").style.display = "none"
}

function scissors(random) {
  if (random == 1) {
    player.points = player.points + 1;
    console.log(player.points);
    if (player.points < 0) {
      player.points = 0;
    }
    document.getElementById(
      "alertContent"
    ).innerText = `paper, you won you have ${player.points} points`;
    showCustomAlert();
  } else if (random == 2) {
    player.points = player.points - 1;
    console.log(player.points);
    if (player.points < 0) {
      player.points = 0;
    }
    document.getElementById(
      "alertContent"
    ).innerText = `rock, you lost you have ${player.points} points`;
    showCustomAlert();
  } else if (random == 3) {
    player.points = player.points;
    console.log(player.points);
    if (player.points < 0) {
      player.points = 0;
    }
    document.getElementById(
      "alertContent"
    ).innerText = `scissors, you tied you have ${player.points} points`;
    showCustomAlert();
  }
  document.getElementById("rockimg").style.display = "none";
  document.getElementById("paperimg").style.display = "none";
  document.getElementById("scissorsimg").style.display = "block"
}

function money() {
  player.points = player.points + 1;
  console.log(player.points);
  document.getElementById(
    "alertContent"
  ).innerText = `you know have ${player.points} points`;
  showCustomAlert();
  document.getElementById("rockimg").style.display = "none";
  document.getElementById("paperimg").style.display = "none";
  document.getElementById("scissorsimg").style.display = "none"
}

function cashin() {
  document.getElementById(
    "alertContent"
  ).innerText = `you now have 0 points\nyou won ${player.points} points`;
  showCustomAlert();
  player.points = 0;
  document.getElementById("rockimg").style.display = "none";
  document.getElementById("paperimg").style.display = "none";
  document.getElementById("scissorsimg").style.display = "none"
}
