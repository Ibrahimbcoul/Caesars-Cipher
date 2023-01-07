"use strict";

function rot13(str) {
  const upperCase = str.toUpperCase(); //UPPERCASE THE SRTING
  const split = upperCase.split(""); //SPLIT
  let arrAM = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"];
  let arrNZ = ["N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  let arrConvert = [];
  // LOOP INSIDE THE SPLIT ARRAY AND CONVERT ITS LETTERS BY THE EQUIVALENT LETTER
  for (let i = 0; i < split.length; i++) {
    //IF THE CHARACTERS IN split ARE LETTERS CONVERT THEM
    if (arrAM.includes(split[i]) || arrNZ.includes(split[i])) {
      // LOOP INSIDE arrAM AND arrNZ TO MATCH THE EXACT LETTER
      for (let j = 0; j < arrAM.length; j++)
        //CHECK IF THE LETTER IS INSIDE arrAM
        if (split[i] === arrAM[j]) {
          arrConvert.push(arrNZ[j]); //PUSH THE EQUIVALENT LETTER IN arrNZ INTO ARRCONVERT
        }
        //CHECK IF THE LETTER IS INSIDE arrNZ
        else if (split[i] === arrNZ[j]) {
          arrConvert.push(arrAM[j]); //PUSH THE EQUIVALENT LETTER IN arrAM INTO ARRCONVERT
        }
    } else {
      //IF A CHARACHER IS NOT AN ALPHABET
      arrConvert.push(split[i]); //PUSH THE CHARACTER INTO ARRCONVERT
    }
  }

  const join = arrConvert.join("");
  console.log(`${str} ==> ${join}`);

  return join;
}

rot13("SERR PBQR PNZC");
rot13("SERR CVMMN!");
rot13("SERR YBIR?");
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");
