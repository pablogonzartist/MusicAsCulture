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
  if (input == "2011"){
    location.href=("pages/2011/2011.html");                    
    return false;
  }
  if (input == "2010"){
    location.href=("pages/2010/2010.html");                    
    return false;
  }
  if (input == "2009"){
    location.href=("pages/2009/2009.html");                    
    return false;
  }
  if (input == "2008"){
    location.href=("pages/2008/2008.html");                    
    return false;
  }
  if (input == "2007"){
    location.href=("pages/2007/2007.html");                    
    return false;
  }
  if (input == "2006"){
    location.href=("pages/2006/2006.html");                    
    return false;
  }
  if (input == "2005"){
    location.href=("pages/2005/2005.html");                    
    return false;
  }
  if (input == "2004"){
    location.href=("pages/2004/2004.html");                    
    return false;
  }
  if (input == "2003"){
    location.href=("pages/2003/2003.html");                    
    return false;
  }
  if (input == "2002"){
    location.href=("pages/2002/2002.html");                    
    return false;
  }
  if (input == "2001"){
    location.href=("pages/2001/2001.html");                    
    return false;
  }
  if (input == "2000"){
    location.href=("pages/2000/2000.html");                    
    return false;
  }
  if (input == "1999"){
    location.href=("pages/1999/1999.html");                    
    return false;
  }
  if (input == "1998"){
    location.href=("pages/1998/1998.html");                    
    return false;
  }

})