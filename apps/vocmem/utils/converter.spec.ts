import {frAlphabets} from "./fr-alphabets";
import {convertFromNative, convertToNative} from "./converter";

describe("French to Roman", () => {
  const roms = frAlphabets.input;
  const frs = frAlphabets.result;

  for (const [i, c] of frs.entries()) {
    it(`converts ${c} to a roman character`, () => {
      if (c === "c,") {
        expect(convertFromNative("fr", c)).toEqual("c,");
      } else {
        expect(convertFromNative("fr", c)).toEqual(roms[i]);
      }
    })
  }

  it("converts properly, from french to roman", () => {
    const frs = frAlphabets.result.join("");
    const frsToRoms = "c,a`e`u`e'a^e^i^u^o^e\"i\"u\"y\"oec,A`E`U`E'A^E^I^U^O^E\"I\"U\"Y\"OEC,<<>>"
    expect(convertFromNative("fr", frs)).toEqual(frsToRoms);
  })
})

describe("Roman to French", () => {
  const roms = frAlphabets.input;
  const frs = frAlphabets.result;

  for (const [i,c] of roms.entries()) {
    it(`converts ${c} to a roman character`, () => {
      expect(convertToNative("fr", roms[i])).toEqual(frs[i]);
    })
  }

  /*
  it("converts properly, from roman to french", () => {
    const romStr = roms.join("");
    const frStr = frs.join("");
    expect(convertToNative("fr", romStr)).toEqual(frStr);
  })
   */
})
