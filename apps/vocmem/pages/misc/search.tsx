import {Box, Button, TextField, Tooltip} from "@mui/material";
import {useState} from "react";
import {Main} from "@vocmem/ui";
import {maxWidth} from "@vocmem/data";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import {convertRomanToCyrillic} from "../../utils/ru-converter";
import {useGetWindowSize} from "../../utils/get-window-size";
import {muiBreakPoints} from "@vocmem/data";
import HelpIcon from '@mui/icons-material/Help';
import {cyrillicToRomanConverter} from "../../utils/ru-alphabets";

export function Search() {
  const width = ((obj) => obj.width)(useGetWindowSize());
  const [searchWord, setSearchWord] = useState("");
  const [convertedSearchWord, setConvertedSearchWord] = useState("")
  const [src, setSrc] = useState("");
  const [lang, setLang] = useState('');
  const [buttons, setButtons] = useState(<></>);
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipMessage, setTooltipMessage] = useState("");

  const handleLangChange = (ev: SelectChangeEvent) => {
    const lang = ev.target.value
    setLang(lang);
    setConvertedSearchWord("");

    if (lang === "ru") {
      const cyrillics = cyrillicToRomanConverter.cyrillics;
      const romans = cyrillicToRomanConverter.romans;
      const msgs = []
      for (let i = 33; i < romans.length; i++) {
        msgs.push(`${cyrillics[i]} -> ${romans[i]}`);
      }
      setTooltipMessage(msgs.join("; "));
    } else {
      setTooltipMessage("");
    }
  }

  function handleShowOrHideTooltip() {
    const newFlag = !showTooltip;
    setShowTooltip(newFlag);
  }

  function handleSearchWordChange(ev) {
    const newSearchWord = ev.target.value;
    const wikUrl = width < muiBreakPoints.sm ? "m.wiktionary.org" : "wiktionary.org"
    setSearchWord(newSearchWord);
    setConvertedSearchWord(newSearchWord);
    if (lang === "en") {
      const wiktionaryButtonName = width < muiBreakPoints.sm ? "wik" : "Wiktionary";
      const etymonlineButtonName = width < muiBreakPoints.sm ? "ety" : "Etymonline";
      setButtons(
        <>
          <Button variant="text"
                  onClick={() => setSrc(`https://en.${wikUrl}/wiki/${newSearchWord}#English`)}>{wiktionaryButtonName}</Button>
          <Button variant="text"
                  onClick={() => setSrc(`https://www.etymonline.com/search?q=${newSearchWord}`)}>{etymonlineButtonName}</Button>
        </>);
    } else if (lang === "fr") {
      const enButtonName = width < muiBreakPoints.sm ? "en" : "en Wiktionary";
      const frButtonName = width < muiBreakPoints.sm ? "fr" : "fr Wiktionary";
      setButtons(
        <>
          <Button variant="text"
                  onClick={() => setSrc(`https://en.${wikUrl}/wiki/${newSearchWord}#french`)}>{enButtonName}</Button>
          <Button variant="text"
                  onClick={() => setSrc(`https://fr.${wikUrl}/wiki/${newSearchWord}#Français`)}>{frButtonName}</Button>
        </>);
    } else if (lang === "de") {
      const enButtonName = width < muiBreakPoints.sm ? "en" : "en Wiktionary";
      const deButtonName = width < muiBreakPoints.sm ? "de" : "de Wiktionary";
      const dwdeButtonName = "DWDE";
      setButtons(
        <>
          <Button variant="text"
                  onClick={() => setSrc(`https://en.${wikUrl}/wiki/${newSearchWord}#french`)}>{enButtonName}</Button>
          <Button variant="text"
                  onClick={() => setSrc(`https://de.${wikUrl}/wiki/${newSearchWord}#Deutsch`)}>{deButtonName}</Button>
          <Button variant="text"
                  onClick={() => setSrc(`https://www.dwds.de/wb/${newSearchWord}`)}>{dwdeButtonName}</Button>
        </>);
    } else if (lang == "it") {
      const enButtonName = width < muiBreakPoints.sm ? "en" : "en Wiktionary";
      const itButtonName = width < muiBreakPoints.sm ? "it" : "it Wiktionary";
      setButtons(
        <>
          <Button variant="text"
                  onClick={() => setSrc(`https://en.${wikUrl}/wiki/${newSearchWord}#french`)}>{enButtonName}</Button>
          <Button variant="text"
                  onClick={() => setSrc(`https://it.${wikUrl}/wiki/${newSearchWord}#Français`)}>{itButtonName}</Button>
        </>);
    } else if (lang === "ru") {
      const newConvertedSearchWord = convertRomanToCyrillic(newSearchWord);
      const enButtonName = width < muiBreakPoints.sm ? "en" : "en Wiktionary";
      const jaButtonName = width < muiBreakPoints.sm ? "ja" : "ja Wiktionary";
      const ruButtonName = width < muiBreakPoints.sm ? "ru" : "ru Wiktionary";
      setConvertedSearchWord(newConvertedSearchWord);
      setButtons(
        <>
          <Button variant="text" onClick={() => setSrc("")}>empty</Button>
          <Button variant="text"
                  onClick={() => setSrc(`https://en.${wikUrl}/wiki/${newConvertedSearchWord}#Russian`)}>{enButtonName}</Button>
          <Button variant="text"
                  onClick={() => setSrc(`https://ja.${wikUrl}/wiki/${newConvertedSearchWord}#ロシア語`)}>{jaButtonName}</Button>
          <Button variant="text"
                  onClick={() => setSrc(`https://ru.${wikUrl}/wiki/${newConvertedSearchWord}#Русский`)}>{ruButtonName}</Button>
        </>)
    }
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
            <MenuItem value="ja">日本語</MenuItem>
            <MenuItem value="fr">フランス語</MenuItem>
            <MenuItem value="de">ドイツ語</MenuItem>
            <MenuItem value="it">イタリア語</MenuItem>
            <MenuItem value="ru">ロシア語</MenuItem>
          </Select>
        </FormControl>

        <Box component="div" sx={{display: "flex"}}>
          <TextField
            id="search-box" label="検索語" variant="outlined"
            fullWidth={true}
            sx={{margin: "10px 0"}}
            value={searchWord}
            onChange={handleSearchWordChange}/>
          <Tooltip placement="top" title={tooltipMessage}
                   open={showTooltip}
                   enterTouchDelay={0} arrow>
            <Button onClick={handleShowOrHideTooltip}><HelpIcon/></Button>
          </Tooltip>
        </Box>
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
        <iframe src={src} height="240px" width="100%" style={{maxWidth: "100%"}} sandbox="" />
      </Box>
    </Main>
  );
}

export default Search;
