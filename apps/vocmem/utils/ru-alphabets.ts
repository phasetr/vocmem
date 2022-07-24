// https://stabucky.com/wp/archives/6132
export const cyrillicToRomanConverter = {
  cyrillics: ["А", "Б", "В", "Г", "Д", "Е", "Ё", "Ж", "З", "И", "Й", "К", "Л", "М", "Н", "О", "П", "Р", "С", "Т", "У", "Ф", "Х", "Ц", "Ч", "Ш", "Щ", "Ъ", "Ы", "Ь", "Э", "Ю", "Я", "а", "б", "в", "г", "д", "е", "ё", "ж", "з", "и", "й", "к", "л", "м", "н", "о", "п", "р", "с", "т", "у", "ф", "х", "ц", "ч", "ш", "щ", "ъ", "ы", "ь", "э", "ю", "я"],
  romans: ["A", "B", "V", "G", "D", "E", "Yo", "Zh", "Z", "I", "I^", "K", "L", "M", "N", "O", "P", "R", "S", "T", "U", "F", "Kh", "Ts", "Ch", "Sh", "Shch", "ʺʺ", "Y", "ʹʹ", "E'", "Yu", "Ya", "a", "b", "v", "g", "d", "e", "yo", "zh", "z", "i", "i^", "k", "l", "m", "n", "o", "p", "r", "s", "t", "u", "f", "kh", "ts", "ch", "sh", "shch", "ʺ", "y-", "ʹ", "e'", "yu", "ya"]
}

const romans = [];
const cyrillics = [];
romans.push("Chtobi");cyrillics.push("Чтобы");
romans.push("chtobi");cyrillics.push("чтобы");
romans.push("ishod"); cyrillics.push("исход");
romans.push("otsif"); cyrillics.push("оциф");
romans.push("otsin"); cyrillics.push("оцин");
romans.push("otsed"); cyrillics.push("оцед");
romans.push("otsen"); cyrillics.push("оцен");
romans.push("otsep"); cyrillics.push("оцеп");
romans.push("Shto "); cyrillics.push("Что ");
romans.push("shto "); cyrillics.push("что ");
romans.push("tsia "); cyrillics.push("тся ");
romans.push("tsia."); cyrillics.push("тся.");
romans.push("tsia,"); cyrillics.push("тся,");
romans.push("tsja "); cyrillics.push("тся ");
romans.push("tsja."); cyrillics.push("тся.");
romans.push("tsja,"); cyrillics.push("тся,");
romans.push("shch");  cyrillics.push("щ");
romans.push("tsya");  cyrillics.push("тся");
romans.push("tsa ");  cyrillics.push("тся ");
romans.push("tsa.");  cyrillics.push("тся.");
romans.push("tsa,");  cyrillics.push("тся,");
romans.push("Eto ");  cyrillics.push("Это ");
romans.push("eto ");  cyrillics.push("это ");
romans.push("tst");   cyrillics.push("тст");
romans.push("bi ");   cyrillics.push("бы ");
romans.push("sch");   cyrillics.push("щ");
romans.push("yi");    cyrillics.push("ый");
romans.push("ii^");   cyrillics.push("ий");
romans.push("oi^");   cyrillics.push("ой");
romans.push("ei^");   cyrillics.push("ей^");
romans.push("Ot");    cyrillics.push("От");
romans.push("ot");    cyrillics.push("от");
romans.push("Yo");    cyrillics.push("Ё")
romans.push("ʺʺ");    cyrillics.push("Ъ")
romans.push("i^");    cyrillics.push("й");
romans.push("e'");    cyrillics.push("э");
romans.push("zh");    cyrillics.push("ж");
romans.push("kh");    cyrillics.push("х");
romans.push("ts");    cyrillics.push("ц");
romans.push("ch");    cyrillics.push("ч");
romans.push("sh");    cyrillics.push("ш");
romans.push("yu");    cyrillics.push("ю");
romans.push("ya");    cyrillics.push("я");
romans.push("yo");    cyrillics.push("ё");
romans.push("y-");    cyrillics.push("ы");
romans.push("ʹʹ");    cyrillics.push("Ь");
romans.push("ʺ");     cyrillics.push("ъ");
romans.push("q");     cyrillics.push("ы");
romans.push("e");     cyrillics.push("е");
romans.push("z");     cyrillics.push("з");
romans.push("k");     cyrillics.push("к");
romans.push("l");     cyrillics.push("л");
romans.push("m");     cyrillics.push("м");
romans.push("n");     cyrillics.push("н");
romans.push("o");     cyrillics.push("о");
romans.push("p");     cyrillics.push("п");
romans.push("r");     cyrillics.push("р");
romans.push("s");     cyrillics.push("с");
romans.push("t");     cyrillics.push("т");
romans.push("u");     cyrillics.push("у");
romans.push("f");     cyrillics.push("ф");
romans.push("h");     cyrillics.push("х");
romans.push("g");     cyrillics.push("г");
romans.push("a");     cyrillics.push("а");
romans.push("b");     cyrillics.push("б");
romans.push("v");     cyrillics.push("в");
romans.push("z");     cyrillics.push("з");
romans.push("i");     cyrillics.push("и");
romans.push("ʹ");     cyrillics.push("ь");
romans.push("c");     cyrillics.push("ц");
romans.push("d");     cyrillics.push("д");
romans.push("j");     cyrillics.push("й");
romans.push("y");     cyrillics.push("ы")

export const romanToCyrillicConverter = {
  cyrillics: cyrillics,
  romans: romans
}
