import {Box, Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import {useState} from "react";
import {maxWidth} from "@vocmem/data";

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
      <Box component={Card} sx={{width: "auto", maxWidth: maxWidth}}>
        <CardContent>
          <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>meaning</Typography>
          <Typography variant="h5" component="div">{en}</Typography></CardContent>
        <CardActions>
          <Button size="small" onClick={e => handleSrc(e, 'en', ru)}>en.wiktionary</Button>
          <Button size="small" onClick={e => handleSrc(e, 'ru', ru)}>ru.wiktionary</Button>
        </CardActions>
      </Box>
      <iframe src={src} height={400}/>
    </>)
}

export default RuProblem;
