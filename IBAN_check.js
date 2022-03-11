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
        number = number.toUpperCase();
        number = number.replace(/\s/g, '');
        let numberlength = number.length;
        let numberfirststrs = number.slice(0,2);
        let numbersecondstrs = number.slice(2,4); 
        document.getElementById("testai").style.color = "black";
        document.getElementById("testai").textContent = '';
        document.getElementById("testai").textContent += '\n';
        document.getElementById("testai").textContent += '\n Tikrinamas IBAN : '+ number;

        /////////////// Ilgis pagal sali
        var CODE_LENGTHS = {
            AD: 24, AE: 23, AT: 20, AZ: 28, BA: 20, BE: 16, BG: 22, BH: 22, BR: 29,
            CH: 21, CR: 21, CY: 28, CZ: 24, DE: 22, DK: 18, DO: 28, EE: 20, ES: 24,
            FI: 18, FO: 18, FR: 27, GB: 22, GI: 23, GL: 18, GR: 27, GT: 28, HR: 21,
            HU: 28, IE: 22, IL: 23, IS: 26, IT: 27, JO: 30, KW: 30, KZ: 20, LB: 28,
            LI: 21, LT: 20, LU: 20, LV: 21, MC: 27, MD: 24, ME: 22, MK: 19, MR: 27,
            MT: 31, MU: 30, NL: 18, NO: 15, PK: 24, PL: 28, PS: 29, PT: 25, QA: 29,
            RO: 24, RS: 22, SA: 24, SE: 24, SI: 19, SK: 24, SM: 27, TN: 24, TR: 26
        };
        

        document.getElementById("testai").textContent += '\n IBAN simboliu skaicius : '+ numberlength;

        /////////////////  Pagal pirmus simbolius RAIDES   
        if (allLetter(numberfirststrs)) {
            document.getElementById("testai").textContent += '\n IBAN salis : '+ numberfirststrs;    
        } else {
            document.getElementById("testai").textContent += '\n IBAN kodo KLAIDA (KODAS NETEISINGAS !!!)';
            document.getElementById("testai").style.color = "red";
        }
        //////////////////  Pagal antrus simbolius SKAICIAI
        if (isNum(numbersecondstrs)) {
            document.getElementById("testai").textContent += '\n IBAN testas : CHECK DIGIT'    
        } else {
            document.getElementById("testai").textContent += '\n IBAN kodo KLAIDA (KODAS NETEISINGAS -!!!)';
            document.getElementById("testai").style.color = "red";
        }
        
        
        
        //////////////// mod-97
          
        
        document.getElementById("testai").textContent += '\n IBAN mod-97 : ';
    }



