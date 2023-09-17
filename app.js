// Display Game Rules with popup left slide animation
function display_rules() {
  let rules = document.querySelector(".game_rules");
  rules.style.display = "block";
  rules.style.animationName = "slide";
  rules.style.animationDuration = "0.5s";
}

// Hide Game Rules when click on cross sign
function hide_rules() {
  let rules = document.querySelector(".game_rules");
  rules.style.display = "none";
}

// Display only hurray page when click on Next button
function display_celebration() {
  let header = document.querySelector(".header");
  let play_area = document.querySelector(".play_area");
  let hurray = document.querySelector(".celebration");
  hurray.style.display = "flex";
  header.style.display = "none";
  play_area.style.display = "none";
}

// // Display Computer Score
// let pc_points = document.querySelector("#score_pc");
// let local_storage_pc_value = localStorage.getItem("pc_points");
// if (local_storage_pc_value == null) {
//   localStorage.setItem("pc_points", 0);
// } else {
//   pc_points.value = local_storage_pc_value;
// }

// // Display User Score
// let user_points = document.querySelector("#score_user");
// let local_storage_user_value = localStorage.getItem("user_points");
// if (local_storage_user_value == null) {
//   localStorage.setItem("user_points", 0);
// } else {
//   user_points.value = local_storage_user_value;
// }

// Get random choice
function pick_random_choice() {
  let choice = ["rock", "paper", "scissors"];
  let randomChoice = Math.floor(Math.random() * choice.length);
  return choice[randomChoice];
}

// Get pc points
// function get_pc_points(final_value) {
//   localStorage.setItem("pc_points", final_value);
//   let local_storage_value = localStorage.getItem("pc_points");
//   pc_points.value = local_storage_value;
// }

// Get user points
// function get_user_points(final_value) {
//   localStorage.setItem("user_points", final_value);
//   let local_storage_value = localStorage.getItem("user_points");
//   user_points.value = local_storage_value;
// }

// Hide Choice buttons and show Result
function hide_playArea_show_playResult() {
  let hide_choiceBtns = document.querySelector(".play_area");
  hide_choiceBtns.style.display = "none";
  let result = document.querySelector(".play_result");
  result.style.visibility = "visible";
}

// Show all winning rings on user's side
function show_user_rings() {
  let user_ring_1 = document.querySelector(".user_ring_1");
  let user_ring_2 = document.querySelector(".user_ring_2");
  let user_ring_3 = document.querySelector(".user_ring_3");
  user_ring_1.style.visibility = "visible";
  user_ring_2.style.visibility = "visible";
  user_ring_3.style.visibility = "visible";
}

// Show all winning rings on pc's side
function show_pc_rings() {
  let pc_ring_1 = document.querySelector(".pc_ring_1");
  let pc_ring_2 = document.querySelector(".pc_ring_2");
  let pc_ring_3 = document.querySelector(".pc_ring_3");
  pc_ring_1.style.visibility = "visible";
  pc_ring_2.style.visibility = "visible";
  pc_ring_3.style.visibility = "visible";
}

// Hide all winning rings on user's side
function hide_user_rings() {
  let user_ring_1 = document.querySelector(".user_ring_1");
  let user_ring_2 = document.querySelector(".user_ring_2");
  let user_ring_3 = document.querySelector(".user_ring_3");
  user_ring_1.style.visibility = "hidden";
  user_ring_2.style.visibility = "hidden";
  user_ring_3.style.visibility = "hidden";
}

// show user function
function show_user_ring() {
  let user = document.querySelector(".user");
  user.style.visibility = "visible";
  let user_para = document.querySelector(".user-para");
  user_para.style.visibility = "visible";
}

function show_pc_ring() {
  let user = document.querySelector(".pc");
  user.style.visibility = "visible";
  let pc_para = document.querySelector(".pc-para");
  pc_para.style.visibility = "visible";
}

// Hide all winning rings on pc's side
function hide_pc_rings() {
  let pc_ring_1 = document.querySelector(".pc_ring_1");
  let pc_ring_2 = document.querySelector(".pc_ring_2");
  let pc_ring_3 = document.querySelector(".pc_ring_3");
  pc_ring_1.style.visibility = "hidden";
  pc_ring_2.style.visibility = "hidden";
  pc_ring_3.style.visibility = "hidden";
}

function show_tieUp(
  user_border_color,
  user_image,
  pc_border_color,
  pc_image,
  hint_1,
  hint_2
) {
  let user_btn = document.querySelector(".user");
  user_btn.style.border = `15px solid ${user_border_color}`;
  let user_img = document.querySelector("#user_img");
  user_img.src = `images resource/${user_image}.png`;
  let pc_btn = document.querySelector(".pc");
  pc_btn.style.border = `15px solid ${pc_border_color}`;
  let pc_img = document.querySelector("#pc_img");
  pc_img.src = `images resource/${pc_image}.png`;
  let heading = document.querySelector(".hint_1");
  heading.innerHTML = `${hint_1}`;
  let sub_heading = document.querySelector(".hint_2");
  sub_heading.innerHTML = `${hint_2}`;
}

function pc_win(
  pc_border_color,
  pc_image,
  user_border_color,
  user_image,
  hint_1,
  hint_2
) {
  let user_btn = document.querySelector(".user");
  user_btn.style.border = `15px solid ${user_border_color}`;
  let user_img = document.querySelector("#user_img");
  user_img.src = `images resource/${user_image}.png`;
  let pc_btn = document.querySelector(".pc");
  pc_btn.style.border = `15px solid ${pc_border_color}`;
  let pc_img = document.querySelector("#pc_img");
  pc_img.src = `images resource/${pc_image}.png`;
  let heading = document.querySelector(".hint_1");
  heading.innerHTML = `${hint_1}`;
  let sub_heading = document.querySelector(".hint_2");
  sub_heading.innerHTML = `${hint_2}`;
  show_pc_rings();
  return 1;
}

function user_win(
  user_border_color,
  user_image,
  pc_border_color,
  pc_image,
  hint_1,
  hint_2
) {
  let user_btn = document.querySelector(".user");
  user_btn.style.border = `15px solid ${user_border_color}`;
  let user_img = document.querySelector("#user_img");
  user_img.src = `images resource/${user_image}.png`;
  let pc_btn = document.querySelector(".pc");
  pc_btn.style.border = `15px solid ${pc_border_color}`;
  let pc_img = document.querySelector("#pc_img");
  pc_img.src = `images resource/${pc_image}.png`;
  let heading = document.querySelector(".hint_1");
  heading.innerHTML = `${hint_1}`;
  let sub_heading = document.querySelector(".hint_2");
  sub_heading.innerHTML = `${hint_2}`;
  show_user_rings();
  return 1;
}

// code for rock
function rock() {
  hide_playArea_show_playResult();
  hide_user_rings();
  hide_pc_rings();
  show_user_ring();
  show_pc_ring();
  let pcChoice = pick_random_choice();
  //  let pcChoice = "paper"
  if (pcChoice == "rock") {
    show_tieUp("#0074b6", "rock", "#0074b6", "rock", "TIE UP", " ");
  } else if (pcChoice == "paper") {
    let point = pc_win(
      "#ffa943",
      "paper",
      "#0074b6",
      "rock",
      "YOU LOST",
      "AGAINST PC"
    );
    let pc_score = document.querySelector("#score_pc");
    let final_value = parseInt(pc_score.value) + point;
    console.log(final_value);
    localStorage.setItem("pc-score", final_value);
  } else {
    let point = user_win(
      "#0074b6",
      "rock",
      "#bd00ff",
      "scissors",
      "YOU WIN",
      "AGAINST PC"
    );
    let user_score = document.querySelector("#user_pc");
    let final_value = parseInt(user_score.value) + point;
    console.log(final_value);
    localStorage.setItem("user-score", final_value);
  }
}

// code for paper
function paper() {}

// code for scissors
function scissors() {}
