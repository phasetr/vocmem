import {frAlphabets} from "../data/fr-alphabets";

export function convertFromNative(lang: string, inputText: string): string {
  let input: string[] = [];
  let result: string[] = [];
  const acc = [];
  if (lang === "fr") {
    input = frAlphabets.input;
    result = frAlphabets.result;
  }
  for (let i = 0; i < inputText.length; i++) {
    const tmpChar = inputText.charAt(i);
    const index = result.indexOf(tmpChar);
    if (index >= 0) {
      acc.push(input[index]);
    } else {
      acc.push(tmpChar);
    }
  }
  return acc.join("");
}

export function convertToNative(lang: string, inputText: string) {
  let strFrag, strFrags;
  let converted = "";
  let pos = 0;
  let i;
  let input: string[] = [];
  let result: string[] = [];
  if (lang === "fr") {
    input = frAlphabets.input;
    result = frAlphabets.result
  }
  while (pos < inputText.length) {
    for (i = 0; i < result.length; i++) {
      strFrag = inputText.substring(pos, pos + result[i].length);
      strFrags = strFrag.toLowerCase();
      if ((strFrag == result[i]) || (strFrags == result[i])) {
        converted += (strFrag == result[i]) ? input[i] : input[i].toUpperCase();
        pos += result[i].length;
        break;
      }
    }
    if (i == result.length) {
      converted += inputText.substring(pos, pos + 1);
      pos++;
    }
  }
  return converted;
}
