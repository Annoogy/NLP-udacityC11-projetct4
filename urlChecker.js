export function checkForURL(inputText) {
    
    var regex = inputText.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);

     if(regex == null){
        console.log('wrong url');
         return false ;
        
     } else{
        console.log('Thanks');
     return true;
     }
  
}

