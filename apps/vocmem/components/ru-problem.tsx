import {Box, Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import {useState} from "react";
import {marginPx} from "@vocmem/data";

export type RuProblemType = {
  id: number,
  ru: string,
  en: string
}

export function RuProblem({ru, en}) {
  const [src, setSrc] = useState("");

  function handleSrc(_ev, lang, word) {
    setSrc(`https://${lang}.m.wiktionary.org/wiki/${word}#Russian`)
  }

  return (
    <>
      <Box component={Card} sx={{width: "auto", margin: marginPx}}>
        <CardContent>
          <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>meaning</Typography>
          <Typography variant="h5" component="div">{en}</Typography></CardContent>
        <CardActions>
          <Button size="small" onClick={e => handleSrc(e, 'en', ru)}>en.wiktionary</Button>
          <Button size="small" onClick={e => handleSrc(e, 'ja', ru)}>ja.wiktionary</Button>
          <Button size="small" onClick={e => handleSrc(e, 'ru', ru)}>ru.wiktionary</Button>
        </CardActions>
      </Box>
      <Box component="div" sx={{display: "flex", justifyContent: "center"}}>
        <iframe src={src} height={500} style={{maxWidth: "100%"}}/>
      </Box>
    </>)
}

export default RuProblem;
