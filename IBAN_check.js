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
        ////////////// Nulinam reiksmes  
        ibanSallis = '';
        numberlength = 0;
        numberfirststrs = '';
        numbersecondstrs = '';
        //
        // numberlength = number.length;
        numberfirststrs = number.slice(0,2);
        numbersecondstrs = number.slice(2,4); 
        document.getElementById("testai").style.color = "black";
        document.getElementById("testai").textContent = '';
        document.getElementById("testai").textContent += '\n';
        document.getElementById("testai").textContent += '\n Tikrinamas IBAN : '+ number;

        /////////////// Ilgis pagal sali
        var ibanData = [
            ["Andorra",        "AD", "0  4n 4n", "0  12   0 "],
            ["Albania",        "AL", "0  8n 0 ", "0  16   0 "],
            ["Austria",        "AT", "0  5n 0 ", "0  11n  0 "],
            ["Bosnia and Herzegovina", "BA", "0  3n 3n", "0   8n  2n"],
            ["Belgium",        "BE", "0  3n 0 ", "0   7n  2n"],
            ["Bulgaria",       "BG", "0  4a 4n", "2n  8   0 "],
            ["Switzerland",    "CH", "0  5n 0 ", "0  12   0 "],
            ["Cyprus",         "CY", "0  3n 5n", "0  16   0 "],
            ["Czech Republic", "CZ", "0  4n 0 ", "0  16n  0 "],
            ["Germany",        "DE", "0  8n 0 ", "0  10n  0 "],
            ["Denmark",        "DK", "0  4n 0 ", "0   9n  1n"],
            ["Estonia",        "EE", "0  2n 0 ", "2n 11n  1n"],
            ["Spain",          "ES", "0  4n 4n", "2n 10n  0 "],
            ["Finland",        "FI", "0  6n 0 ", "0   7n  1n"],
            ["Faroe Islands",  "FO", "0  4n 0 ", "0   9n  1n"],
            ["France",         "FR", "0  5n 5n", "0  11   2n"],
            ["United Kingdom", "GB", "0  4a 6n", "0   8n  0 "],
            ["Georgia",        "GE", "0  2a 0 ", "0  16n  0 "],
            ["Gibraltar",      "GI", "0  4a 0 ", "0  15   0 "],
            ["Greenland",      "GL", "0  4n 0 ", "0   9n  1n"],
            ["Greece",         "GR", "0  3n 4n", "0  16   0 "],
            ["Croatia",        "HR", "0  7n 0 ", "0  10n  0 "],
            ["Hungary",        "HU", "0  3n 4n", "1n 15n  1n"],
            ["Ireland",        "IE", "0  4a 6n", "0   8n  0 "],
            ["Israel",         "IL", "0  3n 3n", "0  13n  0 "],
            ["Iceland",        "IS", "0  4n 0 ", "2n 16n  0 "],
            ["Italy",          "IT", "1a 5n 5n", "0  12   0 "],
            ["Kuwait",         "KW", "0  4a 0 ", "0  22   0 "],
            ["Kazakhstan",     "KZ", "0  3n 0 ", "0  13   0 "],
            ["Lebanon",        "LB", "0  4n 0 ", "0  20   0 "],
            ["Liechtenstein",  "LI", "0  5n 0 ", "0  12   0 "],
            ["Lithuania",      "LT", "0  5n 0 ", "0  11n  0 "],
            ["Luxembourg",     "LU", "0  3n 0 ", "0  13   0 "],
            ["Latvia",         "LV", "0  4a 0 ", "0  13   0 "],
            ["Monaco",         "MC", "0  5n 5n", "0  11   2n"],
            ["Montenegro",     "ME", "0  3n 0 ", "0  13n  2n"],
            ["Macedonia, Former Yugoslav Republic of", "MK", "0  3n 0 ", "0  10   2n"],
            ["Mauritania",     "MR", "0  5n 5n", "0  11n  2n"],
            ["Malta",          "MT", "0  4a 5n", "0  18   0 "],
            ["Mauritius",      "MU", "0  4a 4n", "0  15n  3a"],
            ["Netherlands",    "NL", "0  4a 0 ", "0  10n  0 "],
            ["Norway",         "NO", "0  4n 0 ", "0   6n  1n"],
            ["Poland",         "PL", "0  8n 0 ", "0  16n  0 "],
            ["Portugal",       "PT", "0  4n 4n", "0  11n  2n"],
            ["Romania",        "RO", "0  4a 0 ", "0  16   0 "],
            ["Serbia",         "RS", "0  3n 0 ", "0  13n  2n"],
            ["Saudi Arabia",   "SA", "0  2n 0 ", "0  18   0 "],
            ["Sweden",         "SE", "0  3n 0 ", "0  16n  1n"],
            ["Slovenia",       "SI", "0  5n 0 ", "0   8n  2n"],
            ["Slovak Republic", "SK", "0  4n 0 ", "0  16n  0 "],
            ["San Marino",     "SM", "1a 5n 5n", "0  12   0 "],
            ["Tunisia",        "TN", "0  2n 3n", "0  13n  2n"],
            ["Turkey",         "TR", "0  5n 0 ", "1  16   0 "]];
                
        //console.log(ibanData[0][1]);
        //console.table(ibanData);
        //console.log(numberfirststrs);

        for (let i = 0; i < ibanData.length; i++) {
            if (numberfirststrs == ibanData[i][1]) {
                ibanSallis = ibanData[i][0];
                
            }
        } 


        document.getElementById("testai").textContent += '\n IBAN salis : '+ ibanSallis;

        document.getElementById("testai").textContent += '\n IBAN simboliu skaicius : '+ number.length;

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



