const alphabet = 'abcdefghijklmnopqrstuvwxyz';
// alphabet[0] == 'a'
// alphabet[1] == 'b'

let secretCode = "hello dustin thank you for the challenge";
let secretCode2 = "uryyb qhfgva gunax lbh sbe gur punyyratr";

const ROT13 = (code) => {

    let temp = "";

    for (i = 0; i < code.length; i++) {

        if(code[i] === ' '){
            temp += ' ';
            continue;
        }
        
        for (j = 0; j < alphabet.length; j++) {

            if (code[i] === alphabet[j] && j < 12) {

                temp += alphabet[j + 13];
                break;

            } else if (code[i] == alphabet[j] && j >= 12) {

                temp += alphabet[j - 13];
                break;

            }
        }
    }
    return temp;
}


console.log(ROT13(secretCode));
console.log(ROT13(secretCode2));
