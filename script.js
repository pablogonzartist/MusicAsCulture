//function sendToPage(){
   // var input = document.getElementById("search").value;
     //alert(input);
   // if (input == "2020"){
        // location.href="suggestion_happy.html";                    
    //    location.replace("one.html");
  //      return false;
 //   }
 //   else if (input == "sad"){
  //      location.replace("suggestion_sad.html");
 //       return false;
  //  }
 //   else {
 //       alert('Invalid Input.');
 //   }
//        }


// My code below: 

//document.getElementById('form').addEventListener('submission', function(){

 //   var input = document.getElementById("search").value;
///     alert(input);
 //   if (input == "2020"){
 //       location.href="suggestion_happy.html";                    
   //     location.replace("one.html");
 //       return false;
 //   }

//}


// 

const form= document.querySelector('form');

form.addEventListener('submit', function(e) {
  e.preventDefault();
    var input = document.getElementById("search").value;
   if (input == "2020"){
       location.href=("pages/2020/2020.html");                    
       return false;
    }
})