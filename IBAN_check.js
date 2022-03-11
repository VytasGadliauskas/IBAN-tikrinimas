//
//  IBAN kodo tikrinmas
//

    function allLetter(inputtxt) { 
        var letters = /^[A-Za-z]+$/;
        if(inputtxt.match(letters))
            {
            return true;
            }
        else
            {
            return false;
            }
        }

    function isNum(val){
        return !isNaN(val)
        } 
        
    function imgCreate() {
            var img = document.createElement('img');
            img.src ='https://media.geeksforgeeks.org/wp-content/uploads/20190529122828/bs21.png';
            document.getElementById('body').appendChild(img);
        }    
        
    /////////////////////////////////////////  Pagrindine  funkcija   

    function checkIBAN() {
        var number = document.getElementById("ibantxt").value;
        number = number.replace(/\s/g, '');
        let numberlength = number.length;
        let numberfirststrs = number.slice(0,2);
        let numbersecondstrs = number.slice(2,4); 
        document.getElementById("testai").style.color = "black";
        document.getElementById("testai").textContent = '';
        document.getElementById("testai").textContent += '\n';
        document.getElementById("testai").textContent += '\n Tikrinamas IBAN : '+ number;
        document.getElementById("testai").textContent += '\n IBAN simboliu skaicius : '+ numberlength;
        if (allLetter(numberfirststrs)) {
            document.getElementById("testai").textContent += '\n IBAN salis : '+ numberfirststrs;    
        } else {
            document.getElementById("testai").textContent += '\n IBAN kodo KLAIDA (KODAS NETEISINGAS !!!)';
            document.getElementById("testai").style.color = "red";
        }
      
        if (isNum(numbersecondstrs)) {
            document.getElementById("testai").textContent += '\n IBAN testas : CHECK DIGIT'    
        } else {
            document.getElementById("testai").textContent += '\n IBAN kodo KLAIDA (KODAS NETEISINGAS -!!!)';
            document.getElementById("testai").style.color = "red";
        }
        
        document.getElementById("testai").textContent += '\n IBAN mod-97 : ';
        
        
        
        //////////////// mod-97

        
        document.getElementById("testai").textContent += '\n IBAN mod-97 : ';
    }



