let jahr = document.getElementById('jahr');
let einkommen = document.getElementById('einkommen');
let veranlagung = document.getElementById('veranlagung');
let ergebnis = document.getElementById('ergebnis');

//ZURÜCKSETZEN
let deleteResult = () => {
    ergebnis.innerHTML = "";
}

//BERECHNEN
let berechne = () => {
    //ALLEINSTEHEND
    //Jahr 2021

    if (jahr.value == "2021" && veranlagung.value == "1") {

        //Einkommen <= 9744
        if (Number(einkommen.value) <= 9744) {
            ergebnis.innerHTML = "0€";
        }

        //Einkommen zwischen 9745 und 14753 
        else if (Number(einkommen.value) >= 9745 && Number(einkommen.value) <= 14753) {
            let y = (Number(einkommen.value) - 9744) / 10000;
            let result = (995.2 * y + 1400) * y;
            ergebnis.innerHTML = Math.floor(result) + "€";
        }

        //Einkommen zwischen 14754 und 57918
        else if (Number(einkommen.value) >= 14754 && Number(einkommen.value) <= 57918) {
            let z = (Number(einkommen.value) - 14753) / 10000;
            let result1 = (208.85 * z + 2397) * z + 950.96;
            ergebnis.innerHTML = Math.floor(result1) + "€";
        }

        //Einkommen zwischen 57919 und 274612
        else if (Number(einkommen.value) >= 57919 && Number(einkommen.value) <= 274612) {
            let result2 = 0.42 * Number(einkommen.value) - 9136.63;
            ergebnis.innerHTML = Math.floor(result2) + "€";
        }

        //Einkommen über 274612
        else if (Number(einkommen.value) >= 274613) {
            let result3 = 0.45 * Number(einkommen.value) - 17374.99;
            ergebnis.innerHTML = Math.floor(result3) + "€";
        }

    }

    //Jahr2020

    else if (jahr.value == "2020" && veranlagung.value == "1") {

        //Einkommen <= 9408
        if (Number(einkommen.value) <= 9408) {
            ergebnis.innerHTML = "0€";
        }

        //Einkommen zwischen 9409 und 14532 
        else if (Number(einkommen.value) >= 9409 && Number(einkommen.value) <= 14532) {
            let a = (Number(einkommen.value) - 9408) / 10000;
            let result4 = (972.87 * a + 1400) * a;
            ergebnis.innerHTML = Math.floor(result4) + "€";
        }

        //Einkommen zwischen 14533 und 57051
        else if (Number(einkommen.value) >= 14533 && Number(einkommen.value) <= 57051) {
            let b = (Number(einkommen.value) - 14532) / 10000;
            let result5 = (212.02 * b + 2397) * b + 972.79;
            ergebnis.innerHTML = Math.floor(result5) + "€";
        }

        //Einkommen zwischen 57052 und 270500
        else if (Number(einkommen.value) >= 57052 && Number(einkommen.value) <= 270500) {
            let result6 = 0.42 * Number(einkommen.value) - 8963.74;
            ergebnis.innerHTML = Math.floor(result6) + "€";
        }

        //Einkommen über 270501
        else if (Number(einkommen.value) >= 270501) {
            let result7 = 0.45 * Number(einkommen.value) - 17078.74;
            ergebnis.innerHTML = Math.floor(result7) + "€";
        }
    }

    //Jahr2019

    else if (jahr.value == "2019" && veranlagung.value == "1") {

        //Einkommen <= 9168
        if (Number(einkommen.value) <= 9168) {
            ergebnis.innerHTML = "0€";
        }

        //Einkommen zwischen 9169 und 14254 
        else if (Number(einkommen.value) >= 9169 && Number(einkommen.value) <= 14254) {
            let c = (Number(einkommen.value) - 9168) / 10000;
            let result8 = (980.14 * c + 1400) * c;
            ergebnis.innerHTML = Math.floor(result8) + "€";
        }

        //Einkommen zwischen 14255 und 55960
        else if (Number(einkommen.value) >= 14255 && Number(einkommen.value) <= 55960) {
            let d = (Number(einkommen.value) - 14254) / 10000;
            let result9 = (216.16 * d + 2397) * d + 965.58;
            ergebnis.innerHTML = Math.floor(result9) + "€";
        }

        //Einkommen zwischen 55961 und 265326
        else if (Number(einkommen.value) >= 55961 && Number(einkommen.value) <= 265326) {
            let result10 = 0.42 * Number(einkommen.value) - 8780.90;
            ergebnis.innerHTML = Math.floor(result10) + "€";
        }

        //Einkommen über 265327
        else if (Number(einkommen.value) >= 265327) {
            let result11 = 0.45 * Number(einkommen.value) - 16740.68;
            ergebnis.innerHTML = Math.floor(result11) + "€";
        }
    }

    //VERHEIRATET
    //Jahr 2021 

    else if (jahr.value == "2021" && veranlagung.value == "2") {


        //Einkommen <= 9744
        if (Number(einkommen.value) / 2 <= 9744) {
            ergebnis.innerHTML = "0€";
        }

        //Einkommen zwischen 9745 und 14753 
        else if (Number(einkommen.value) / 2 >= 9745 && Number(einkommen.value) <= 14753) {
            let e = (Number(einkommen.value) / 2 - 9744) / 10000;
            let result12 = (995.2 * e + 1400) * e;
            ergebnis.innerHTML = Math.floor(result12) * 2 + "€";
        }

        //Einkommen zwischen 14754 und 57918
        else if (Number(einkommen.value) / 2 >= 14754 && Number(einkommen.value) / 2 <= 57918) {
            let f = (Number(einkommen.value) / 2 - 14753) / 10000;
            let result13 = (208.85 * f + 2397) * f + 950.96;
            ergebnis.innerHTML = Math.floor(result13) * 2 + "€";
        }

        //Einkommen zwischen 57919 und 274612
        else if (Number(einkommen.value) / 2 >= 57919 && Number(einkommen.value) / 2 <= 274612) {
            let result14 = 0.42 * Number(einkommen.value) / 2 - 9136.63;
            ergebnis.innerHTML = Math.floor(result14) * 2 + "€";
        }

        //Einkommen über 274612
        else if (Number(einkommen.value) / 2 >= 274613) {
            let result15 = 0.45 * Number(einkommen.value) / 2 - 17374.99;
            ergebnis.innerHTML = Math.floor(result15) * 2 + "€";
        }

    }

    //Jahr2020

    else if (jahr.value == "2020" && veranlagung.value == "2") {

        //Einkommen <= 9408
        if (Number(einkommen.value) / 2 <= 9408) {
            ergebnis.innerHTML = "0€";
        }

        //Einkommen zwischen 9409 und 14532 
        else if (Number(einkommen.value) / 2 >= 9409 && Number(einkommen.value) / 2 <= 14532) {
            let g = (Number(einkommen.value) / 2 - 9408) / 10000;
            let result16 = (972.87 * g + 1400) * g;
            ergebnis.innerHTML = Math.floor(result16) * 2 + "€";
        }

        //Einkommen zwischen 14533 und 57051
        else if (Number(einkommen.value) / 2 >= 14533 && Number(einkommen.value) / 2 <= 57051) {
            let h = (Number(einkommen.value) / 2 - 14532) / 10000;
            let result17 = (212.02 * h + 2397) * h + 972.79;
            ergebnis.innerHTML = Math.floor(result17) * 2 + "€";
        }

        //Einkommen zwischen 57052 und 270500
        else if (Number(einkommen.value) / 2 >= 57052 && Number(einkommen.value) / 2 <= 270500) {
            let result18 = 0.42 * Number(einkommen.value) / 2 - 8963.74;
            ergebnis.innerHTML = Math.floor(result18) * 2 + "€";
        }

        //Einkommen über 270501
        else if (Number(einkommen.value) / 2 >= 270501) {
            let result19 = 0.45 * Number(einkommen.value) / 2 - 17078.74;
            ergebnis.innerHTML = Math.floor(result19) * 2 + "€";
        }
    }

    //Jahr2019

    else if (jahr.value == "2019" && veranlagung.value == "2") {

        //Einkommen <= 9168
        if (Number(einkommen.value) / 2 <= 9168) {
            ergebnis.innerHTML = "0€";
        }

        //Einkommen zwischen 9169 und 14254 
        else if (Number(einkommen.value) / 2 >= 9169 && Number(einkommen.value) / 2 <= 14254) {
            let i = (Number(einkommen.value) / 2 - 9168) / 10000;
            let result20 = (980.14 * i + 1400) * i;
            ergebnis.innerHTML = Math.floor(result20) * 2 + "€";
        }

        //Einkommen zwischen 14255 und 55960
        else if (Number(einkommen.value) / 2 >= 14255 && Number(einkommen.value) / 2 <= 55960) {
            let j = (Number(einkommen.value) / 2 - 14254) / 10000;
            let result21 = (216.16 * j + 2397) * j + 965.58;
            ergebnis.innerHTML = Math.floor(result21) * 2 + "€";
        }

        //Einkommen zwischen 55961 und 265326
        else if (Number(einkommen.value) / 2 >= 55961 && Number(einkommen.value) / 2 <= 265326) {
            let result22 = 0.42 * Number(einkommen.value) / 2 - 8780.90;
            ergebnis.innerHTML = Math.floor(result22) * 2 + "€";
        }

        //Einkommen über 265327
        else if (Number(einkommen.value) / 2 >= 265327) {
            let result23 = 0.45 * Number(einkommen.value) / 2 - 16740.68;
            ergebnis.innerHTML = Math.floor(result23) * 2 + "€";
        }
    }

}


