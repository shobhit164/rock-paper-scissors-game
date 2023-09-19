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

// Play Again button which takes us back to play area
function play_again_btn(){
  hide_user_rings();
  hide_pc_rings();
  let play_area = document.querySelector(".play_area");
  let user = document.querySelector(".user");
  let pc = document.querySelector(".pc")
  let text1 = document.querySelector(".user-para");
  let text2 = document.querySelector(".pc-para");
  let middle = document.querySelector(".middle");
  play_area.style.display = "block";
  user.style.visibility = "hidden";
  pc.style.visibility = "hidden";
  text1.style.visibility = "hidden";
  text2.style.visibility = "hidden";
  middle.style.visibility = "hidden";
}

// When we arrive at the Hurray page after winning and want to play the game again.   
function play_again_btn_hurray(){
  let header = document.querySelector(".header");
  header.style.display = "flex";
  let hurray = document.querySelector(".celebration");
  hurray.style.display = "none";
  let play_area = document.querySelector(".play_area");
  play_area.style.display = "block";
  let next_btn = document.querySelector("#next_btn");
  next_btn.style.display = "none";
  let play_result = document.querySelector(".play_result");
  play_result.style.visibility = "hidden";
}

// Display only hurray page when click on Next button
function display_celebration() {
  let header = document.querySelector(".header");
  let play_area = document.querySelector(".play_area");
  let hurray = document.querySelector(".celebration");
  let play_result = document.querySelector(".play_result");
  let user = document.querySelector(".user");
  let pc = document.querySelector(".pc")
  let text1 = document.querySelector(".user-para");
  let text2 = document.querySelector(".pc-para")
  let middle = document.querySelector(".middle");
  hurray.style.display = "flex";
  header.style.display = "none";
  play_area.style.display = "none";
  play_result.style.visibility = "hidden";
  user.style.visibility = "hidden";
  pc.style.visibility = "hidden";
  text1.style.visibility = "hidden";
  text2.style.visibility = "hidden";
  middle.style.visibility = "hidden";
  hide_user_rings();
}

// Display Computer Score
let pc_points = document.querySelector("#score_pc");
let local_storage_pc_value = localStorage.getItem("pc_points");
if (local_storage_pc_value == null) {
  localStorage.setItem("pc_points", 0);
} else {
  pc_points.value = local_storage_pc_value;
}

// Display User Score
let user_points = document.querySelector("#score_user");
let local_storage_user_value = localStorage.getItem("user_points");
if (local_storage_user_value == null) {
  localStorage.setItem("user_points", 0);
} else {
  user_points.value = local_storage_user_value;
}

// Get random choice
function pick_random_choice() {
  let choice = ["rock", "paper", "scissors"];
  let randomChoice = Math.floor(Math.random() * choice.length);
  return choice[randomChoice];
}

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

// Hide all winning rings on pc's side
function hide_pc_rings() {
  let pc_ring_1 = document.querySelector(".pc_ring_1");
  let pc_ring_2 = document.querySelector(".pc_ring_2");
  let pc_ring_3 = document.querySelector(".pc_ring_3");
  pc_ring_1.style.visibility = "hidden";
  pc_ring_2.style.visibility = "hidden";
  pc_ring_3.style.visibility = "hidden";
}

// show user function
function show_user_box() {
  let user = document.querySelector(".user");
  user.style.visibility = "visible";
  let user_para = document.querySelector(".user-para");
  user_para.style.visibility = "visible";
}

// show pc function
function show_pc_box() {
  let user = document.querySelector(".pc");
  user.style.visibility = "visible";
  let pc_para = document.querySelector(".pc-para");
  pc_para.style.visibility = "visible";
}

// When result is tie
function show_tieUp(user_border_color, user_image, pc_border_color, pc_image, hint_1, hint_2) {
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
  let middle = document.querySelector(".middle");
  middle.style.visibility = "visible";
  let replay = document.querySelector(".play_again");
  replay.textContent = "REPLAY";
}

// When pc wins 
function pc_win(pc_border_color, pc_image, user_border_color, user_image, hint_1, hint_2) {
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
  let next_btn = document.querySelector("#next_btn");
  next_btn.style.display = "none";
  let middle = document.querySelector(".middle");
  middle.style.visibility = "visible";
  let button_text = document.querySelector(".play_again");
  button_text.textContent = "PLAY AGAIN";
  show_pc_rings();
  return 1;
}

// When user wins
function user_win(user_border_color, user_image, pc_border_color, pc_image, hint_1, hint_2) {
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
  let next_btn = document.querySelector("#next_btn");
  next_btn.style.display = "block";
  let middle = document.querySelector(".middle");
  middle.style.visibility = "visible";
  let button_text = document.querySelector(".play_again");
  button_text.textContent = "PLAY AGAIN";
  show_user_rings();
  return 1;
}

// Code for rock
function rock() {
  hide_playArea_show_playResult(); 
  hide_user_rings();
  hide_pc_rings(); 
  show_user_box();
  show_pc_box();
  let pcChoice = pick_random_choice();
  if (pcChoice == "rock") {
    show_tieUp("#0074b6", "rock", "#0074b6", "rock", "TIE UP", " ");
  } else if (pcChoice == "paper") {
    let point = pc_win("#ffa943", "paper", "#0074b6", "rock", "YOU LOST", "AGAINST PC");
    let pc_points = document.querySelector("#score_pc");
    let final_value = parseInt(pc_points.value) + point;
    localStorage.setItem("pc_points", final_value);
    let new_value = localStorage.getItem("pc_points");
    pc_points.value = new_value;
  } else {
    let point = user_win("#0074b6", "rock", "#bd00ff", "scissors", "YOU WIN", "AGAINST PC");
    let user_points = document.querySelector("#score_user");
    let final_value = parseInt(user_points.value) + point;
    localStorage.setItem("user_points", final_value);
    let new_value = localStorage.getItem("user_points");
    user_points.value = new_value;
  }
}

// Code for paper
function paper() {
  hide_playArea_show_playResult();
  hide_user_rings();
  hide_pc_rings();
  show_user_box();
  show_pc_box();
  let pcChoice = pick_random_choice();
  if (pcChoice == "paper") {
    show_tieUp("#ffa943", "paper", "#ffa943", "paper", "TIE UP", " ");
  } else if (pcChoice == "rock") {
    let point = user_win("#ffa943", "paper", "#0074b6", "rock", "YOU WIN", "AGAINST PC");
    let user_points = document.querySelector("#score_user");
    let final_value = parseInt(user_points.value) + point;
    localStorage.setItem("user_points", final_value);
    let new_value = localStorage.getItem("user_points");
    user_points.value = new_value;
    
  } else {
    let point = pc_win("#bd00ff", "scissors", "#ffa943", "paper", "YOU LOST", "AGAINST PC");
    let pc_points = document.querySelector("#score_pc");
    let final_value = parseInt(pc_points.value) + point;
    localStorage.setItem("pc_points", final_value);
    let new_value = localStorage.getItem("pc_points");
    pc_points.value = new_value;
  }
}

// Code for scissors
function scissors() {
  hide_playArea_show_playResult();
  hide_user_rings();
  hide_pc_rings();
  show_user_box();
  show_pc_box();
  let pcChoice = pick_random_choice();
  if (pcChoice == "scissors") {
    show_tieUp("#bd00ff", "scissors", "#bd00ff", "scissors", "TIE UP", " ");
  } else if (pcChoice == "rock") {
    let point = pc_win("#0074b6", "rock", "#bd00ff", "scissors", "YOU LOST", "AGAINST PC");
    let pc_points = document.querySelector("#score_pc");
    let final_value = parseInt(pc_points.value) + point;
    localStorage.setItem("pc_points", final_value);
    let new_value = localStorage.getItem("pc_points");
    pc_points.value = new_value;
  } else {
    let point = user_win("#bd00ff", "scissors", "#ffa943", "paper", "YOU WIN", "AGAINST PC");
    let user_points = document.querySelector("#score_user");
    let final_value = parseInt(user_points.value) + point;
    localStorage.setItem("user_points", final_value);
    let new_value = localStorage.getItem("user_points");
    user_points.value = new_value;
  }
}
