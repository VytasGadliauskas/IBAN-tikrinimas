
    function allLetter(inputtxt) { 
        const letters = /^[A-Za-z]+$/;
        if(inputtxt.match(letters)) return true
            return false;
    }

    function isNum(val){
        return !isNaN(val)
        } 

    function checkIBAN() {
        let ibanNumber = document.getElementById("ibantxt").value;
        ibanNumber = ibanNumber.toUpperCase();
        ibanNumber = ibanNumber.replace(/\s/g, '');
        let ibanSallis = '';
        let ibanIlgis = 0;
        let ibanBBAN = '';
        let ibanFORM = '';
        let ibanOK = false;
        let ibanMOD97 = '';
        let ibanLiek = 0;

        document.getElementById("testai").style.color = "black";
        document.getElementById("testai").textContent = '';
        document.getElementById("testai").textContent += '\n';
        document.getElementById("testai").textContent += '\n Tikrinamas IBAN : '+ ibanNumber;

        //  "Salis",Salies IBAN ilgis,"BBAN","Salies IBAN formatas"
        const ibanData = [
            ["Albania",28,"8n,16c","AL kk bbb s sss x cccc cccc cccc cccc"],
            ["Andorra",24,"8n,12c","AD kk bbbb ssss cccc cccc cccc"],
            ["Austria",20,"16n","AT kk bbbb b ccc cccc cccc"],
            ["Azerbaijan",28,"4c,20n","AZ kk bbbb cccc cccc cccc cccc cccc"],
            ["Bahrain",22,"4a,14c","BH kk bbbb cccc cccc cccc cc"],
            ["Belarus",28,"4c, 4n, 16c","BY kk bbbb aaaa cccc cccc cccc cccc"],
            ["Belgium",16,"12n","BE kk bbb c cccc cc xx"],
            ["Bosnia and Herzegovina",20,"16n","BA kk bbb s ss cc cccc cc xx"],
            ["Brazil",29,"23n,1a,1c","BR kk bbbb bbbb ssss s ccc cccc ccc t n"],
            ["Bulgaria",22,"4a,6n,8c","BG kk bbbb ssss tt cc cccc cc"],
            ["Costa Rica",22,"18n","CR kk 0 bbb cccc cccc cccc cc"],
            ["Croatia",21,"17n","HR kk bbbb bbb c cccc cccc c"],
            ["Cyprus",28,"8n,16c","CY kk bbb s ssss cccc cccc cccc cccc"],
            ["Czech Republic",24,"20n","CZ kk bbbb ssss ss cc cccc cccc"],
            ["Denmark",18,"14n","DK kk bbbb cccc cccc c x"],
            ["Dominican Republic",28,"4a,20n","DO kk bbbb cccc cccc cccc cccc cccc"],
            ["East Timor",23,"19n","TL kk bbb c cccc cccc cccc c xx"],
            ["Egypt",29,25n,"EG kk bbbb ssss cccc cccc cccc cccc c"],
            ["El Salvador",28,"4a, 20n","SV kk bbbb cccc cccc cccc cccc cccc"],
            ["Estonia",20,"16n","EE kk bb ss cccc cccc ccc x"],
            ["Faroe Islands",18,"14n","FO kk bbbb cccc cccc c x"],
            ["Finland",18,"14n","FI kk bbbb bb cc cccc c x"],
            ["France",27,"10n,11c,2n","FR kk bbbb b sss ss cc cccc cccc c xx"],
            ["Georgia",22,"2c,16n","GE kk bb cc cccc cccc cccc cc"],
            ["Germany",22,"18n","DE kk bbbb bbbb cccc cccc cc"],
            ["Gibraltar",23,"4a,15c","GI kk bbbb cccc cccc cccc ccc"],
            ["Greece",27,"7n,16c","GR kk bbb s sss c cccc cccc cccc ccc"],
            ["Greenland",18,"14n","GL kk bbbb cccc cccc c x"],
            ["Guatemala",28,"4c,20c","GT kk bbbb mm tt cccc cccc cccc cccc"],
            ["Hungary",28,"24n","HU kk bbb s sss x cccc cccc cccc ccc x"],
            ["Iceland",26,"22n","IS kk bb ss tt cc cccc iiii iiii ii"],
            ["Iraq",23,"4a,15n","IQ kk bbbb sss c cccc cccc ccc"],
            ["Ireland",22,"4c,14n","IE kk aaaa bbbb bb cc cccc cc"],
            ["Israel",23,"19n","IL kk bbb s ss cc cccc cccc ccc"],
            ["Italy",27,"1a,10n,12c","IT kk x bbb bb ss sss c cccc cccc ccc"],
            ["Jordan",30,"4a,22n","JO kk bbbb ssss cccc cccc cccc cccc cc"],
            ["Kazakhstan",20,"3n,13c","KZ kk bbb c cccc cccc cccc"],
            ["Kosovo",20,"4n,10n,2n","XK kk bbbb cccc cccc cccc"],
            ["Kuwait",30,"4a,22c","KW kk bbbb cccc cccc cccc cccc cccc cc"],
            ["Latvia",21,"4a,13c","LV kk bbbb cccc cccc cccc c"],
            ["Lebanon",28,"4n,20c","LB kk bbbb cccc cccc cccc cccc cccc"],
            ["Libya",25,"21n","LY kk bbb s ss cc cccc cccc cccc c"],
            ["Liechtenstein",21,"5n,12c","LI kk bbbb b ccc cccc cccc c"],
            ["Lithuania",20,"16n","LT kk bbbb b ccc cccc cccc"],
            ["Luxembourg",20,"3n,13c","LU kk bbb c cccc cccc cccc"],
            ["North Macedonia",19,"3n,10c,2n","MK kk bbb c cccc cccc c xx"],
            ["Malta",31,"4a,5n,18c","MT kk bbbb ssss s ccc cccc cccc cccc ccc"],
            ["Mauritania",27,"23n","MR kk bbbb b sss ss cc cccc cccc c xx"],
            ["Mauritius",30,"4a,19n,3a","MU kk bbbb bb ss cccc cccc cccc 000m mm"],
            ["Monaco",27,"10n,11c,2n","MC kk bbbb b sss ss cc cccc cccc c xx"],
            ["Moldova",24,"2c,18c","MD kk bb cc cccc cccc cccc cccc"],
            ["Montenegro",22,"18n","ME kk bbb c cccc cccc cccc xx"],
            ["Netherlands",18,"4a,10n","NL kk bbbb cccc cccc cc"],
            ["Norway",15,"11n","NO kk bbbb cccc cc x"],
            ["Pakistan",24,"4c,16n","PK kk bbbb cccc cccc cccc cccc"],
            ["Palestinian territories",29,"4c,21n","PS kk bbbb cccc cccc cccc cccc cccc c"],
            ["Poland",28,"24n","PL kk bbb s sss x cccc cccc cccc cccc"],
            ["Portugal",25,"21n","PT kk bbbb ssss cccc cccc ccc x x"],
            ["Qatar",29,"4a,21c","QA kk bbbb cccc cccc cccc cccc cccc c"],
            ["Romania",24,"4a,16c","RO kk bbbb cccc cccc cccc cccc"],
            ["Saint Lucia",32,"4a,24c","LC kk bbbb cccc cccc cccc cccc cccc cccc"],
            ["San Marino",27,"1a,10n,12c","SM kk x bbb bb ss sss c cccc cccc ccc"],
            ["S??o Tom?? and Pr??ncipe",25,"21n","ST kk bbbb ssss cccc cccc cccc c"],
            ["Saudi Arabia",24,"2n,18c","SA kk bb cc cccc cccc cccc cccc"],
            ["Serbia",22,"18n","RS kk bbb c cccc cccc cccc xx"],
            ["Seychelles",31,"4a,20n,3a","SC kk bbbb bb ss nnnn nnnn nnnn nnnn mmm"],
            ["Slovakia",24,"20n","SK kk bbbb ssss ss cc cccc cccc"],
            ["Slovenia",19,"15n","SI kk bb ss s ccc cccc c xx"],
            ["Spain",24,"20n","ES kk bbbb ssss xx cc cccc cccc"],
            ["Sudan",18,"14n","SD kk bb cc cccc cccc cc"],
            ["Sweden",24,"20n","SE kk bbb c cccc cccc cccc cccc"],
            ["Switzerland",21,"5n,12c","CH kk bbbb b ccc cccc cccc c"],
            ["Tunisia",24,"20n","TN kk bb ss s ccc cccc cccc cc xx"],
            ["Turkey",26,"5n,17c","TR kk bbbb b 0 cc cccc cccc cccc cc"],
            ["Ukraine",29,"6n, 19c","UA kk bbbb bb cc cccc cccc cccc cccc c"],
            ["United Arab Emirates",23,"3n,16n","AE kk bbb c cccc cccc cccc ccc"],
            ["United Kingdom",22,"4a,14n","GB kk bbbb ssss ss cc cccc cc"],
            ["Vatican City",22,"3n,15n","VA kk bbb c cccc cccc cccc cc"],
            ["Virgin Islands, British",24,"4c,16n","VG kk bbbb cccc cccc cccc cccc"]
        ];

        ////////////////////////////   Gali buti bugas - R raide ir jos atitikimas i 33 koda spejamas.
     
        const ibanABC  = [
            ["A",10],
            ["B",11],
            ["C",12],
            ["D",13],
            ["E",14],
            ["F",15],
            ["G",16],
            ["H",17],
            ["I",18],
            ["J",19],
            ["K",20],
            ["L",21],
            ["M",22],
            ["N",23],
            ["O",24],
            ["P",25],
            ["Q",26],
            ["R",27],
            ["S",28],
            ["T",29],
            ["U",30],
            ["V",31],
            ["W",32],
            ["X",33],
            ["Y",34],
            ["Z",35]
        ];

        for (let i = 0; i < ibanData.length; i++) {
            if (ibanNumber.slice(0,2) == ibanData[i][3].slice(0,2)) {
                ibanSalis = ibanData[i][0];
                ibanIlgis = ibanData[i][1];
                ibanBBAN = ibanData[i][2];
                ibanFORM = ibanData[i][3];
            }
        } 
         
        function ABCtoNUM (variable) {
            //  Konvertuoja IBAN raides i skaicius pagal ibanABC duomenis  
            //  paduodama IBAN raides, grazina skaicius
            let grazinamasVariable = '';
            let tarpinisVariable = '';
            for (let i = 0; i < variable.length; i++) { 
                tarpinisVariable = variable.slice(i,i+1);
                if (allLetter(tarpinisVariable)){
                    for (let j = 0; j < ibanABC.length; j++) { 
                        if (ibanABC[j][0] == tarpinisVariable) {
                            grazinamasVariable += ibanABC[j][1];
                        }
                    }
                } else {
                    grazinamasVariable += tarpinisVariable;
                }
            } 
            return grazinamasVariable;
        }


        function mod9710(iban) {
            /*
            Calculates the MOD 97 10 of the passed IBAN as specified in ISO7064.
            @method mod9710
            @param {String} iban
            @returns {Number}
            */
            let block, remainder;
            remainder = iban;
            block = null;
          
            while (remainder.length > 2) {
              block = remainder.slice(0, 9);
              remainder = (Number.parseInt(block) % 97).toString() + remainder.slice(block.length);
            }
          
            return Number.parseInt(remainder) % 97;
          }

        if (allLetter(ibanNumber.slice(0,2))) {
            ibanOK = true;
                if  (ibanNumber.length == ibanIlgis) {
                    if (isNum(ibanNumber.slice(2,4))) {
                        mod97PirmiSimboliai = ABCtoNUM(ibanNumber.slice(0,2));
                        mod97AntriSimboliai = ibanNumber.slice(2,4);
                        mod97PasilikeSimboliai = ABCtoNUM(ibanNumber.slice(4,ibanNumber.length));
                        mod97 = mod97PasilikeSimboliai + mod97PirmiSimboliai + mod97AntriSimboliai;
                        ibanLiek = mod9710(mod97);
                        if (ibanLiek == 1) { 
                            ibanOK = true;    
                        } else {
                            ibanOK = false;    
                        }
                    } else {
                        ibanOK = false;    
                    }

                } else {
                    ibanOK = false;    
                }
        } else {
            ibanOK = false;    
        }

        console.log('ibanOK : ', ibanOK);
        if (ibanOK) {
            document.getElementById("testai").textContent += '\n IBAN testas : CHECK IBAN FORMAT OK'
            document.getElementById("testai").textContent += '\n IBAN testas : CHECK COUNTRY DIGIT OK'
            document.getElementById("testai").textContent += '\n IBAN testas : CHECK COUNTRY FORMAT - not implemented'
            document.getElementById("testai").textContent += '\n IBAN testas : CHECK MOD9710 (ISO7064) OK'
            document.getElementById("testai").textContent += '\n IBAN salis : '+ ibanSalis; 
            document.getElementById("testai").textContent += '\n IBAN ilgis : '+ ibanIlgis;
            document.getElementById("testai").textContent += '\n IBAN BBAN : '+ ibanBBAN;
            document.getElementById("testai").textContent += '\n IBAN Formatas ??iureti wiki: '+ ibanFORM;
            document.getElementById("testai").textContent += '\n IBAN MOD9710 (ISO7064) : '+ ibanLiek;  
            document.getElementById("testai").textContent += '\n IBAN OK'
            document.getElementById("testai").style.color = "green";    
        } else {
            document.getElementById("testai").textContent += '\n IBAN kodo KLAIDA (KODAS NETEISINGAS -!!!)';
            document.getElementById("testai").style.color = "red";
        }
        document.getElementById("ibantxt").value = null; 
        ////////////////   HAPPY END I AM PROUD OF MYSELF :)   mail.: vytasgadliauskas@gmail.com
    }



