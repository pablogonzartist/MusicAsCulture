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
  
    if (input == "2019"){
      location.href=("pages/2019/2019.html");                    
      return false;
   }

   if (input == "2018"){
    location.href=("pages/2018/2018.html");                    
    return false;
 }
   if (input == "2017"){
    location.href=("pages/2017/2017.html");                    
    return false;
  }
  if (input == "2016"){
    location.href=("pages/2016/2016.html");                    
    return false;
  }
  if (input == "2015"){
    location.href=("pages/2015/2015.html");                    
    return false;
  }
  if (input == "2014"){
    location.href=("pages/2014/2014.html");                    
    return false;
  }
  if (input == "2013"){
    location.href=("pages/2013/2013.html");                    
    return false;
  }
  if (input == "2012"){
    location.href=("pages/2012/2012.html");                    
    return false;
  }

})