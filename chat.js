// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyDVQTLlpmyY12r3szk2-yxv5hbW5zF1JOQ",
    authDomain: "my-cute-bird-100.firebaseapp.com",
    databaseURL: "https://my-cute-bird-100-default-rtdb.firebaseio.com",
    projectId: "my-cute-bird-100",
    storageBucket: "my-cute-bird-100.appspot.com",
    messagingSenderId: "1059844012817",
    appId: "1:1059844012817:web:037acf60f11d52cfadaab0"
  };
  
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



