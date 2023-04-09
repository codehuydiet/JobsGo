

document.addEventListener('DOMContentLoaded', function showPostForm(){
  var videos = [
    document.getElementById("myVideo1"),
    document.getElementById("myVideo2"),
    document.getElementById("myVideo3")
];

var index = 0;

function switchVideo() {
    videos[index].style.display = "none";
    index++;
    if (index >= videos.length) {
        index = 0;
    }
    videos[index].style.display = "block";
    setTimeout(switchVideo, 5000);
}

for (var i = 1; i < videos.length; i++) {
    videos[i].style.display = "none";
}

setTimeout(switchVideo, 5000); 
})

window.onload = function(){
    var videos = [
      document.getElementById("myVideo1"),
      document.getElementById("myVideo2"),
      document.getElementById("myVideo3")
    ];
    
    var index = 0;
    
    function switchVideo() {
      videos[index].style.display = "none";
      index++;
      if (index >= videos.length) {
          index = 0;
      }
      videos[index].style.display = "block";
      setTimeout(switchVideo, 5000);
    }
    
    for (var i = 1; i < videos.length; i++) {
      videos[i].style.display = "none";
    }
    
    setTimeout(switchVideo, 5000); 
  }
  


// đăng xuất

 window.onload = function(){
  
  var itemregister = document.querySelector('#register');
  var itemlogin = document.querySelector('#login');
  var itemInfor = document.querySelector('.hide2')
  var buttons = document.querySelector("#logout");

    buttons.addEventListener("click", function logout(){
     itemlogin.style.display = "block";
     itemregister.style.display = "block";
     itemInfor.style.display = "none";
    }) 
 
  };

