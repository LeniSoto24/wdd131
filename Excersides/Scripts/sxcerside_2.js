// how to accept user input in javascript

// EASY WAY = just a window prompt

let username;
username = window.prompt("Please enter your user name");

console.log(username);

// PROFESSIONAL WAY = HTML TEXTBOX nessesary

document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("username").value;
    console.log(username);
    // you can change the H1 for the user name
    // first you neet to add an id to your h1 
    // after that you need to remplace the console.log(username); by document.getElementById("the h1's id").textContent = `Hello ${username}`;
}