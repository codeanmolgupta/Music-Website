//  Justin Beaber Click

document.addEventListener("DOMContentLoaded", function() {
    var clickableartistjustinbeaber = document.querySelectorAll(".artist-justin-beaber-main");
  
    clickableartistjustinbeaber.forEach(function(element) {
      element.addEventListener("click", function() {
        var linkURL = "./justinbeaber/justinbeaber.html";
        window.location.href = linkURL;
      });
    });
  });


 

    //  Alenwalkar Click

  document.addEventListener("DOMContentLoaded", function() {

    var clickableartistalanwalkar = document.querySelectorAll(".artist-alan-walkar-main");
  
    clickableartistalanwalkar.forEach(function(element) {
      element.addEventListener("click", function() {
        var linkURL = "./alenwalkar/alenwalkar.html";
        window.location.href = linkURL;
      });
    });
  });



//    //  Arjeet-sigh Click

   document.addEventListener("DOMContentLoaded", function() {

    var clickableartistarjeetsigh = document.querySelectorAll(".artist-arjeet-sigh-main");
  
    clickableartistarjeetsigh.forEach(function(element) {
      element.addEventListener("click", function() {
        var linkURL = "/arijit-singh/arijitsingh.html";
        window.location.href = linkURL;
      });
    });
  });




   //   Tanishk-Bagchi Click

   document.addEventListener("DOMContentLoaded", function() {

    var clickableartisttanishkbagchi = document.querySelectorAll(".artist-tanishk-bagchi-main");
  
    clickableartisttanishkbagchi.forEach(function(element) {
      element.addEventListener("click", function() {
        var linkURL = "/tanishk-bagchi/tanishkbagchi.html";
        window.location.href = linkURL;
      });
    });
  });

  
   //  B-Praak Click

   document.addEventListener("DOMContentLoaded", function() {

    var clickableartistbpraak = document.querySelectorAll(".artist-b-praak-main");
  
    clickableartistbpraak.forEach(function(element) {
      element.addEventListener("click", function() {
        var linkURL = "/b-praak/bpraak.html";
        window.location.href = linkURL;
      });
    });
  });

  
   //  Jubin-Nautiyal Click

   document.addEventListener("DOMContentLoaded", function() {

    var clickableartistjubinnautiyal = document.querySelectorAll(".artist-jubin-nautiyal-main");
  
    clickableartistjubinnautiyal.forEach(function(element) {
      element.addEventListener("click", function() {
        var linkURL = "/jubin-nautiyal/jubinnautiyal.html";
        window.location.href = linkURL;
      });
    });
  });


   //  Imagine Dragons

   document.addEventListener("DOMContentLoaded", function() {

    var clickableartistimaginedragons = document.querySelectorAll(".artist-imagine-dragons-main");
  
    clickableartistimaginedragons.forEach(function(element) {
      element.addEventListener("click", function() {
        var linkURL = "/imagine-dragons/imaginedragons.html";
        window.location.href = linkURL;
      });
    });
  }); 



//  password lock
 

function checkPassword() {
  const correctPassword = 'iamlallu'; // Replace with your actual password

  let password;
  do {
      password = prompt('Enter the password:🔑');
      
      if (password === correctPassword) {
          // Show the protected content
          document.getElementById('passwordForm').style.display = 'none';
          document.getElementById('content').style.display = 'block';
          break; // Exit the loop if the correct password is entered
      } else if (password === null) {
          // The user clicked "Cancel" in the prompt
          break; // Exit the loop if the user cancels
      } else {
          alert('Incorrect password. Please try again.😅');
      }
  } while (true);
}

checkPassword(); // Call the function when the page loads to prompt for the password








setTimeout(() => {
let name = prompt("Enter your name");
let bhaiya ="✌🏻 Hello, Mukul bhaiya..! , Wellcome to my website.😁"
let bhaiyaname = ["mukul"]
console.log(name);
if(name==name){
alert("✌🏻Wellcome to my website " + name +" This is my Second Website. Code:Anmol😁");
} 
if (name==bhaiyaname) {
alert(bhaiya)
}

}, 1000);

