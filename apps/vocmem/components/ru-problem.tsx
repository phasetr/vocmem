import {Box, Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import {useState} from "react";
import {marginPx} from "../constants/styles";

export type RuProblemType = {
  id: number,
  ru: string,
  en: string
}

export function RuProblem({ru, en}) {
  const [src, setSrc] = useState("");

  function handleSrc(_ev, lang, word) {
    let url = '';
    if (lang === "en") {
      url = `https://${lang}.m.wiktionary.org/wiki/${word}#Russian`;
    } else if (lang === "ja") {
      url = `https://${lang}.m.wiktionary.org/wiki/${word}#ロシア語`;
    } else if (lang === "ru") {
      url = `https://${lang}.m.wiktionary.org/wiki/${word}#Русский`;
    }
    setSrc(url);
  }

  return (
    <Card sx={{width: "auto", margin: marginPx}}>
      <CardContent>
        <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>meaning</Typography>
        <Typography variant="h5" component="div">{en}</Typography></CardContent>
      <CardActions>
        <Box component="section"
             sx={{display: "flex", justifyContent: "space-between", flexDirection: "row"}}>
          <Button variant="text" onClick={e => handleSrc(e, 'empty', ru)}>empty</Button>
          <Button variant="text" onClick={e => handleSrc(e, 'en', ru)}>en</Button>
          <Button variant="text" onClick={e => handleSrc(e, 'ja', ru)}>ja</Button>
          <Button variant="text" onClick={e => handleSrc(e, 'ru', ru)}>ru</Button>
        </Box>
      </CardActions>
      <Box component="div" sx={{display: "flex", justifyContent: "center"}}>
        <iframe src={src} height={src ? 300 : 0} style={{maxWidth: "100%"}}/>
      </Box>
    </Card>)
}

export default RuProblem;
