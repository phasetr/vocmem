// https://stabucky.com/wp/archives/6132
export const cyrillicToRomanConverter = {
  cyrillics: ["А", "Б", "В", "Г", "Д", "Е", "Ё", "Ж", "З", "И", "Й", "К", "Л", "М", "Н", "О", "П", "Р", "С", "Т", "У", "Ф", "Х", "Ц", "Ч", "Ш", "Щ", "Ъ", "Ы", "Ь", "Э", "Ю", "Я", "а", "б", "в", "г", "д", "е", "ё", "ж", "з", "и", "й", "к", "л", "м", "н", "о", "п", "р", "с", "т", "у", "ф", "х", "ц", "ч", "ш", "щ", "ъ", "ы", "ь", "э", "ю", "я"],
  romans: ["A", "B", "V", "G", "D", "E", "Yo", "Zh", "Z", "I", "Ĭ", "K", "L", "M", "N", "O", "P", "R", "S", "T", "U", "F", "Kh", "Ts", "Ch", "Sh", "Shch", "ʺ", "ȳ", "ʹ", "é", "Yu", "Ya", "a", "b", "v", "g", "d", "e", "yo", "zh", "z", "i", "ĭ", "k", "l", "m", "n", "o", "p", "r", "s", "t", "u", "f", "kh", "ts", "ch", "sh", "shch", "ʺ", "ȳ", "ʹ", "é", "yu", "ya"]
}

const romArray = new Array(100);
const cyrArray = new Array(100);
romArray[0] = "Chtobi";
cyrArray[0] = "Чтобы";
romArray[1] = "chtobi";
cyrArray[1] = "чтобы";
romArray[0] = "Chtobi";
cyrArray[0] = "Чтобы";
romArray[1] = "chtobi";
cyrArray[1] = "чтобы";
romArray[2] = "ishod";
cyrArray[2] = "исход";
romArray[3] = "otsif";
cyrArray[3] = "оциф";
romArray[4] = "otsin";
cyrArray[4] = "оцин";
romArray[5] = "otsed";
cyrArray[5] = "оцед";
romArray[6] = "otsen";
cyrArray[6] = "оцен";
romArray[7] = "otsep";
cyrArray[7] = "оцеп";
romArray[8] = "Shto ";
cyrArray[8] = "Что ";
romArray[9] = "shto ";
cyrArray[9] = "что ";
romArray[10] = "tsia ";
cyrArray[10] = "тся ";
romArray[11] = "tsia.";
cyrArray[11] = "тся.";
romArray[12] = "tsia,";
cyrArray[12] = "тся,";
romArray[13] = "tsja ";
cyrArray[13] = "тся ";
romArray[14] = "tsja.";
cyrArray[14] = "тся.";
romArray[15] = "tsja,";
cyrArray[15] = "тся,";
romArray[16] = "shch";
cyrArray[16] = "щ";
romArray[17] = "tsya";
cyrArray[17] = "тся";
romArray[18] = "tsa ";
cyrArray[18] = "тся ";
romArray[19] = "tsa.";
cyrArray[19] = "тся.";
romArray[20] = "tsa,";
cyrArray[20] = "тся,";
romArray[21] = "....";
cyrArray[21] = "....";
romArray[22] = "....";
cyrArray[22] = "....";
romArray[23] = "....";
cyrArray[23] = "....";
romArray[24] = "Eto ";
cyrArray[24] = "Это ";
romArray[25] = "eto ";
cyrArray[25] = "это ";
romArray[26] = "tst";
cyrArray[26] = "тст";
romArray[27] = "bi ";
cyrArray[27] = "бы ";
romArray[28] = "sch";
cyrArray[28] = "щ";
romArray[29] = "...";
cyrArray[29] = "...";
romArray[30] = "...";
cyrArray[30] = "...";
romArray[31] = "...";
cyrArray[31] = "...";
romArray[32] = "yi";
cyrArray[32] = "ый";
romArray[33] = "ii";
cyrArray[33] = "ий";
romArray[34] = "oi";
cyrArray[34] = "ой";
romArray[35] = "ei";
cyrArray[35] = "ей";
romArray[36] = "Ot";
cyrArray[36] = "От";
romArray[37] = "ot";
cyrArray[37] = "от";
romArray[38] = "i^";
cyrArray[38] = "й";
romArray[39] = "e'";
cyrArray[39] = "э";
romArray[40] = "zh";
cyrArray[40] = "ж";
romArray[41] = "kh";
cyrArray[41] = "х";
romArray[42] = "ts";
cyrArray[42] = "ц";
romArray[43] = "ch";
cyrArray[43] = "ч";
romArray[44] = "sh";
cyrArray[44] = "ш";
romArray[45] = "yu";
cyrArray[45] = "ю";
romArray[46] = "ya";
cyrArray[46] = "я";
romArray[47] = "..";
cyrArray[47] = "..";
romArray[48] = "yo";
cyrArray[48] = "ё";
romArray[49] = "ʺ";
cyrArray[49] = "ъ";
romArray[50] = "..";
cyrArray[50] = "..";
romArray[51] = "..";
cyrArray[51] = "..";
romArray[52] = "..";
cyrArray[52] = "..";
romArray[53] = "..";
cyrArray[53] = "..";
romArray[54] = "..";
cyrArray[54] = "..";
romArray[55] = "..";
cyrArray[55] = "..";
romArray[56] = "..";
cyrArray[56] = "..";
romArray[57] = "..";
cyrArray[57] = "..";
romArray[58] = "..";
cyrArray[58] = "..";
romArray[59] = "..";
cyrArray[59] = "..";
romArray[60] = "..";
cyrArray[60] = "..";
romArray[61] = "..";
cyrArray[61] = "..";
romArray[62] = "q";
cyrArray[62] = "ы";
romArray[63] = "e";
cyrArray[63] = "е";
romArray[64] = "z";
cyrArray[64] = "з";
romArray[65] = ".";
cyrArray[65] = ".";
romArray[66] = "k";
cyrArray[66] = "к";
romArray[67] = "l";
cyrArray[67] = "л";
romArray[68] = "m";
cyrArray[68] = "м";
romArray[69] = "n";
cyrArray[69] = "н";
romArray[70] = "o";
cyrArray[70] = "о";
romArray[71] = "p";
cyrArray[71] = "п";
romArray[72] = "r";
cyrArray[72] = "р";
romArray[73] = "s";
cyrArray[73] = "с";
romArray[74] = "t";
cyrArray[74] = "т";
romArray[75] = "u";
cyrArray[75] = "у";
romArray[76] = "f";
cyrArray[76] = "ф";
romArray[77] = "h";
cyrArray[77] = "х";
romArray[78] = "g";
cyrArray[78] = "г";
romArray[79] = "a";
cyrArray[79] = "а";
romArray[80] = "b";
cyrArray[80] = "б";
romArray[81] = "v";
cyrArray[81] = "в";
romArray[82] = "z";
cyrArray[82] = "з";
romArray[83] = "i";
cyrArray[83] = "и";
romArray[84] = "ʹ";
cyrArray[84] = "ь";
romArray[85] = "^";
cyrArray[85] = "";
romArray[86] = "c";
cyrArray[86] = "ц";
romArray[87] = "d";
cyrArray[87] = "д";
romArray[88] = ".";
cyrArray[88] = ".";
romArray[89] = ".";
cyrArray[89] = ".";
romArray[90] = ".";
cyrArray[90] = ".";
romArray[91] = "j";
cyrArray[91] = "й";
romArray[92] = "y";
cyrArray[92] = "ы";
romArray[93] = ".";
cyrArray[93] = ".";
romArray[94] = ".";
cyrArray[94] = ".";
romArray[95] = ".";
cyrArray[95] = ".";
romArray[96] = ".";
cyrArray[96] = ".";
romArray[97] = ".";
cyrArray[97] = ".";
romArray[98] = ".";
cyrArray[98] = ".";
romArray[99] = ".";
cyrArray[99] = ".";

export const romanToCyrillicConverter = {
  cyrillics: cyrArray,
  romans: romArray
}
