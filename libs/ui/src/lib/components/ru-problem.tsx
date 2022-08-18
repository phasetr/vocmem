import {Box, Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import {useState} from "react";
import {marginPx, muiBreakPoints} from "@vocmem/data";
import {useGetWindowSize} from "./get-window-size";

export function RuProblem({ru, en}) {
  const width = ((obj) => obj.width)(useGetWindowSize());
  const [src, setSrc] = useState("");

  function handleSrc(_ev, lang, word) {
    let url = '';
    const wikUrl = width < muiBreakPoints.sm ? "m.wiktionary.org" : "wiktionary.org"
    if (lang === "en") {
      url = `https://${lang}.${wikUrl}/wiki/${word}#Russian`;
    } else if (lang === "ja") {
      url = `https://${lang}.${wikUrl}/wiki/${word}#ロシア語`;
    } else if (lang === "ru") {
      url = `https://${lang}.${wikUrl}/wiki/${word}#Русский`;
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
        <iframe title="web-dict" src={src} height={src ? 300 : 0} style={{width: "100%"}} sandbox=""/>
      </Box>
    </Card>)
}

export default RuProblem;
