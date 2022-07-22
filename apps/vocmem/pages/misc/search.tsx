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
      setSearchWord(newSearchWord);
      setButtons(
        <>
          {width < muiBreakPoints.sm ?
            <>
              <Button variant="text" onClick={() => setSrc("")}>empty</Button>
              <Button variant="text"
                      onClick={() => setSrc(`https://en.m.wiktionary.org/wiki/${newSearchWord}#English`)}>Wiktionary</Button>
              <Button variant="text"
                      onClick={() => setSrc(`https://www.etymonline.com/search?q=${newSearchWord}`)}>Etymonline</Button>
            </>
            :
            <>
              <Button variant="text" onClick={() => setSrc("")}>empty</Button>
              <Button variant="text"
                      onClick={() => setSrc(`https://en.wiktionary.org/wiki/${newSearchWord}#English`)}>Wiktionary</Button>
              <Button variant="text"
                      onClick={() => setSrc(`https://www.etymonline.com/search?q=${newSearchWord}`)}>Etymonline</Button>
            </>
          }
        </>);
    } else if (lang === "ru") {
      const newSearchWord = ev.target.value;
      const newConvertedSearchWord = convertRomanToCyrillic(newSearchWord);
      setSearchWord(newSearchWord);
      setConvertedSearchWord(newConvertedSearchWord);
      setButtons(
        <>
          {width < muiBreakPoints.sm ?
            <>
              <Button variant="text" onClick={e => handleSrc(e, 'empty', newConvertedSearchWord)}>empty</Button>
              <Button variant="text" onClick={e => handleSrc(e, 'en', newConvertedSearchWord)}>en</Button>
              <Button variant="text" onClick={e => handleSrc(e, 'ja', newConvertedSearchWord)}>ja</Button>
              <Button variant="text" onClick={e => handleSrc(e, 'ru', newConvertedSearchWord)}>ru</Button>
            </>
            :
            <>
              <Button variant="text" onClick={e => handleSrc(e, 'empty', newConvertedSearchWord)}>empty</Button>
              <Button variant="text" onClick={e => handleSrc(e, 'en', newConvertedSearchWord)}>en Wiktionary</Button>
              <Button variant="text" onClick={e => handleSrc(e, 'ja', newConvertedSearchWord)}>ja Wiktionary</Button>
              <Button variant="text" onClick={e => handleSrc(e, 'ru', newConvertedSearchWord)}>ru Wiktionary</Button>
            </>
          }
        </>)
    }
  }

  function handleSrc(_ev, lang, searchWord) {
    let url = '';
    if (lang === "en") {
      url = `https://${lang}.m.wiktionary.org/wiki/${searchWord}#Russian`;
    } else if (lang === "ja") {
      url = `https://${lang}.m.wiktionary.org/wiki/${searchWord}#ロシア語`;
    } else if (lang === "ru") {
      url = `https://${lang}.m.wiktionary.org/wiki/${searchWord}#Русский`;
    }
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
