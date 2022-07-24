import {cyrillicToRomanConverter} from "./ru-alphabets";
import {convertCyrillicToRoman, convertRomanToCyrillic} from "./ru-converter";

describe("Roman to cyrillic", () => {
  const cyrs = cyrillicToRomanConverter.cyrillics;
  const roms = cyrillicToRomanConverter.romans;
  for (const [i,c] of cyrs.entries()) {
    it(`converts ${c} to a roman character`, ()=>{
      expect(convertCyrillicToRoman(c)).toEqual(roms[i]);
    })
  }

  it("converts properly, from roman to cyrillic", () => {
    const cyrStr = cyrillicToRomanConverter.cyrillics.join("");
    const romStr = cyrillicToRomanConverter.romans.join("");
    expect(convertRomanToCyrillic(romStr)).toEqual(cyrStr);
  })
})

describe("Cyrillic to roman", () => {
  it("converts properly, from cyrillic to roman", () => {
    const cyrStr = cyrillicToRomanConverter.cyrillics.join("");
    const romStr = cyrillicToRomanConverter.romans.join("");
    expect(convertCyrillicToRoman(cyrStr)).toEqual(romStr);
  })
})
