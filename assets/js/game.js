var firebaseConfig = {
    apiKey: "AIzaSyBU8dXfZI_vclXkPZvxoeKCDqZmi9kwCm0",
    authDomain: "sageproject1-c365a.firebaseapp.com",
    databaseURL: "https://sageproject1-c365a.firebaseio.com",
    projectId: "sageproject1-c365a",
    storageBucket: "",
    messagingSenderId: "184158440206",
    appId: "1:184158440206:web:01e13693a0cf5b947ce55f",
    measurementId: "G-PSS96JSBD9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.database();
var playersRef = db.ref("/players");
var chatRef = db.ref("/chat");
var connectedRef = db.ref("/connected");
var clicktest = 0;
var player1login = false;
var player2login = false;
var firstPlayer = {
    name: "",
    choice: "",
    wins: 0,
    losses: 0,
};
var secondPlayer = {
    name: "",
    choice: "",
    wins: 0,
    losses: 0,
};


let playerName =$("#playerName").val()
let chatMessage =$("#chat").val()


$("#login").on("click", function(event){
    event.preventdefault();
    clicktest++;
    db.ref().set({
        clickcounter: clicktest
    });
    console.log(clicktest)
    console.log(playerName)
});

$("#send-button").on("click", function(event){
    event.preventdefault();
    clicktest++;
    db.ref().set({
        clickcounter: clicktest
    });
    console.log(clicktest)
    console.log(playerName)
});