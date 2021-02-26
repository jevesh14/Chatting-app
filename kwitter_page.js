//ADD YOUR FIREBASE LINKS HERE
 // Your web app's Firebase configuration
 /*var firebaseConfig = {
    apiKey: "AIzaSyC5vcH8B8Z9rfrgkR5I0Hj-G2LhzpaJGT8",
    authDomain: "kwitter-60f15.firebaseapp.com",
    databaseURL: "https://kwitter-60f15-default-rtdb.firebaseio.com",
    projectId: "kwitter-60f15",
    storageBucket: "kwitter-60f15.appspot.com",
    messagingSenderId: "265693888424",
    appId: "1:265693888424:web:e8aa918f71b9a05036e79d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

  function getData() {firebase.database().ref("/"+ room_name).on('value', function(snapshot) 
  {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   childData = childSnapshot.val();if(childKey != "purpose") {

    firebase_message_id = childKey;
     message_data  = childData;

     //start code
       console.log(firebase_message_id);
       console.log(message_data);
       name = message_data['name'];
       message = message_data['message'];
       like = message_data['like'];
       name_with_tag = "<h4>"+name+"<img class='user_tick' src= 'tick.png'> </h4>";
       message_with_tag = "<h4 class='message_h4'>"+message+"</h4>";
      // like_button = "<button class='btn btn-warning' id="+firebase_message_id+"value ="+like+"onclick = 'updateLike(this.id)'>";
      // span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>like: "+like+"</span> </button> <hr>";
      like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>"; 
      span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+like+"</span> </button><hr>";
       row = name_with_tag+message_with_tag+like_button+span_with_tag;
       document.getElementById("output").innerHTML += row;
        //end code

}});});}

getData();

  function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name: user_name,
        message:msg,
        like: 0
   
    });
    document.getElementById("msg").value = "";
      }

      function updateLike(message_id){
        console.log("message_id"+message_id);
        button_id= message_id;
        like = document.getElementById(button_id).value;
        update_Likes= Number(like)+1;
        console.log("update_Likes");
        firebase.database().ref(room_name).child(message_id).update({
          like: update_Likes

        });
      }
      function updateLike(){
        console.log("clicked on like button - " + message_id);
         button_id = message_id; 
         likes = document.getElementById(button_id).value;
          updated_likes = Number(likes) + 1; 
          console.log(updated_likes);
           firebase.database().ref(room_name).child(message_id).update({
              like : updated_likes
             });

      }
      
      function logout(){
        localStorage.removeItem("user_name");
        localStorage.removeItem("room_name");
        window.location.replace("index.html");
      }*/

  //YOUR FIRE BASE LINKS
 // Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyC5vcH8B8Z9rfrgkR5I0Hj-G2LhzpaJGT8",
    authDomain: "kwitter-60f15.firebaseapp.com",
    databaseURL: "https://kwitter-60f15-default-rtdb.firebaseio.com",
    projectId: "kwitter-60f15",
    storageBucket: "kwitter-60f15.appspot.com",
    messagingSenderId: "265693888424",
    appId: "1:265693888424:web:e8aa918f71b9a05036e79d"
  };
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

function send()
{
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
   });

  document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
         console.log(firebase_message_id);
         console.log(message_data);
         name = message_data['name'];
         message = message_data['message'];
         like = message_data['like'];
         name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";
         message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
         span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";

        row = name_with_tag + message_with_tag +like_button + span_with_tag;       
        document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();

function updateLike(message_id)
{
  console.log("clicked on like button - " + message_id);
  button_id = message_id;
  likes = document.getElementById(button_id).value;
  updated_likes = Number(likes) + 1;
  console.log(updated_likes);

  firebase.database().ref(room_name).child(message_id).update({
    like : updated_likes  
   });

}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location.replace("kwitter.html");
}


