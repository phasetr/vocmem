import {cyrillicToRomanConverter, romanToCyrillicConverter} from "./ru-alphabets";

export function convertCyrillicToRoman(inputText: string): string {
  const acc = [];
  const cs = cyrillicToRomanConverter.cyrillics;
  const rs = cyrillicToRomanConverter.romans;
  for (let i = 0; i < inputText.length; i++) {
    const tmpChar = inputText.charAt(i);
    const index = cs.indexOf(tmpChar);
    if (index >= 0) {
      acc.push(rs[index]);
    } else {
      acc.push(tmpChar);
    }
  }
  return acc.join("");
}

export function convertRomanToCyrillic(inputText: string): string {
  let strFrag, strFrags;
  let converted = "";
  let pos = 0;
  let i;
  const rs = romanToCyrillicConverter.romans;
  const cs = romanToCyrillicConverter.cyrillics;
  while (pos < inputText.length) {
    for (i = 0; i < rs.length; i++) {
      strFrag = inputText.substring(pos, pos + rs[i].length);
      strFrags = strFrag.toLowerCase();
      if ((strFrag == rs[i]) || (strFrags == rs[i])) {
        converted += (strFrag == rs[i]) ? cs[i] : cs[i].toUpperCase();
        pos += rs[i].length;
        break;
      }
    }
    if (i == rs.length) {
      converted += inputText.substring(pos, pos + 1);
      pos++;
    }
  }
  return converted;
}
