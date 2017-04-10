function veranderen() {
  var invoer = document.getElementById('tekst1').value;
  var resut = forLoop(invoer);
  document.getElementById('content').innerHTML += resut + "<br>";
}

function forLoop(iets) {
  var A = "";
  var resut = "";
  for (i = 0; i < iets.length; i++ ) {
    A = iets.charAt(i);
    A = vergelijker(A);
    resut += A;
  }
  return resut;
}
function vergelijker(iets) {
        if ( iets.indexOf("a") > -1) {
              return iets.replace(/a/gi, "!");
            } else {
            if ( iets.indexOf("e") > -1) {
                return iets.replace(/e/gi, "@");
            }else{
                if( iets.indexOf("o") > -1) {
                return iets.replace(/o/gi, "#");
                } else{
                    if( iets.indexOf("u") > -1) {
                return iets.replace(/u/gi, "$");
                    } else if ( iets.indexOf("i") > -1) {
                return iets.replace(/i/gi, "&");
                    }else{
                       return (iets)
                    }
                }
              }
            }
        }
          
    
    
    