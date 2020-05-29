const arabicToRomanMap = {
    0 : "",
    1 : "I",
    4 : "IV",
    5 : "V",
    9: "IX",
    10: "X",
    50: "L",
    40: "XL",
    100: "C"
};

function arabicToRoman(num) {
    let roman = arabicToRomanMap[num];
    if(roman !== undefined) return roman; //ne morate izbaciti
    roman = "";
    let numToSubstract = getNumToSubstract(num);
    let rest = num % numToSubstract;
    let times = (num - rest)/numToSubstract;
    roman += new Array(times).fill(
        arabicToRomanMap[numToSubstract]).join("");
    roman = roman + arabicToRoman(rest);
    return roman;
}

function getNumToSubstract(num) {
    return Object.keys(arabicToRomanMap)
        .map((n)=>parseInt(n)).filter((arabic)=>arabic <= num)
            .sort((n1, n2)=>(n2-n1))[0];  
}

module.exports = arabicToRoman;