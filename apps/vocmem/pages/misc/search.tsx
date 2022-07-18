import {Box, Button, TextField} from "@mui/material";
import {useState} from "react";
import Main from "../../components/main";
import {maxWidth} from "../../constants/styles";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import {convertRomanToCyrillic} from "../../utils/russian";
import {useGetWindowSize} from "../../utils/get-window-size";
import muiBreakPoints from "../../constants/mui-break-points";

export function Search() {
  const width = ((obj) => obj.width)(useGetWindowSize());
  const [searchWord, setSearchWord] = useState("");
  const [convertedSearchWord, setConvertedSearchWord] = useState("")
  const [src, setSrc] = useState("");
  const [lang, setLang] = useState('');
  const [buttons, setButtons] = useState(<></>);

  const handleLangChange = (ev: SelectChangeEvent) => {
    setLang(ev.target.value);
    setConvertedSearchWord("");
  };

  function handleSearchWordChange(ev) {
    if (lang === "en") {
      const newSearchWord = ev.target.value;
      const wikUrl = width < muiBreakPoints.sm ? "m.wiktionary.org" : "wiktionary.org"
      const wiktionaryButtonName = width < muiBreakPoints.sm ? "wik" : "Wiktionary";
      const etymonlineButtonName = width < muiBreakPoints.sm ? "ety" : "Etymonline";
      setSearchWord(newSearchWord);
      setButtons(
        <>
          <Button variant="text"
                  onClick={() => setSrc(`https://en.${wikUrl}/wiki/${newSearchWord}#English`)}>{wiktionaryButtonName}</Button>
          <Button variant="text"
                  onClick={() => setSrc(`https://www.etymonline.com/search?q=${newSearchWord}`)}>{etymonlineButtonName}</Button>
        </>);
    } else if (lang === "ru") {
      const newSearchWord = ev.target.value;
      const newConvertedSearchWord = convertRomanToCyrillic(newSearchWord);
      const enButtonName = width < muiBreakPoints.sm ? "en" : "en Wiktionary";
      const jaButtonName = width < muiBreakPoints.sm ? "ja" : "ja Wiktionary";
      const ruButtonName = width < muiBreakPoints.sm ? "ru" : "ru Wiktionary";
      setSearchWord(newSearchWord);
      setConvertedSearchWord(newConvertedSearchWord);
      setButtons(
        <>
          <Button variant="text" onClick={e => handleSrc(e, 'empty', newConvertedSearchWord)}>empty</Button>
          <Button variant="text" onClick={e => handleSrc(e, 'en', newConvertedSearchWord)}>{enButtonName}</Button>
          <Button variant="text" onClick={e => handleSrc(e, 'ja', newConvertedSearchWord)}>{jaButtonName}</Button>
          <Button variant="text" onClick={e => handleSrc(e, 'ru', newConvertedSearchWord)}>{ruButtonName}</Button>
        </>)
    }
  }

  function handleSrc(_ev, lang, searchWord) {
    let id = '';
    if (lang === "en") {
      id = 'Russian';
    } else if (lang === "ja") {
      id = 'ロシア語';
    } else if (lang === "ru") {
      id = 'Русский';
    }
    const url = `https://${lang}.m.wiktionary.org/wiki/${searchWord}#${id}`;
    setSrc(url);
  }

  return (
    <Main>
      <Box component="h1">一括検索</Box>

      <Box component="section"
           sx={{
             maxWidth: maxWidth,
             margin: "10px 0",
             display: "float",
             justifyContent: "center",
             flexDirection: "column"
           }}>
        <FormControl sx={{margin: "10px 0", width: "100%"}}>
          <InputLabel id="lang-select-label">言語</InputLabel>
          <Select
            labelId="lang-select-label"
            id="lang-select"
            value={lang}
            label="lang"
            onChange={handleLangChange}
          >
            <MenuItem value="en">英語</MenuItem>
            <MenuItem value="ru">ロシア語</MenuItem>
          </Select>
        </FormControl>

        <TextField
          id="search-box" label="検索語" variant="outlined"
          fullWidth={true}
          sx={{margin: "10px 0"}}
          value={searchWord}
          onChange={handleSearchWordChange}/>
        <TextField
          id="converted-search-word" label="検索語を変換：検索に利用する値" variant="outlined"
          fullWidth={true}
          sx={{margin: "10px 0"}}
          value={convertedSearchWord}
          disabled={true}
        />
      </Box>

      <Box component="section"
           sx={{margin: "10px 0", display: "flex", justifyContent: "space-between", flexDirection: "row"}}>
        {buttons}
      </Box>

      <Box component="div" sx={{margin: "10px 0", display: "flex", justifyContent: "center"}}>
        <iframe src={src} height="300px" width="100%" style={{maxWidth: "100%"}}/>
      </Box>

    </Main>
  );
}

export default Search;
