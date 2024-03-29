import {Box, Button, TextareaAutosize} from "@mui/material";
import {convertCyrillicToRoman, convertRomanToCyrillic, marginPx, maxWidth} from "@vocmem/data";
import {ChangeEvent, useState} from "react";
import {Main} from "@vocmem/ui";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const cyrillicToRoman = 'cyrillic-to-roman';
const romanToCyrillic = "roman-to-cyrillic";

export function Conv() {
  const [inputText, setInputText] = useState("");
  const [retVal, setRetVal] = useState("");
  const [convertType, setConvertType] = useState(cyrillicToRoman);

  return (
    <Main>
      <Box component="h1">文字変換ツール</Box>
      <Box component="section"
           sx={{margin: marginPx, display: "flex", justifyContent: "center", flexDirection: "column"}}>
        <FormControl sx={{margin: marginPx}}>
          <FormLabel id="demo-controlled-radio-buttons-group">変換の種類</FormLabel>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={convertType}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              setConvertType((event.target as HTMLInputElement).value);
            }}
          >
            <FormControlLabel value={cyrillicToRoman} control={<Radio/>} label="キリル文字からローマ字"/>
            <FormControlLabel value={romanToCyrillic} control={<Radio/>} label="ローマ字からキリル文字"/>
          </RadioGroup>
        </FormControl>
        <TextareaAutosize
          id="input"
          minRows={5}
          maxRows={5}
          aria-label="maximum height"
          value={inputText}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setInputText(e.target.value)}
          style={{width: "full", maxWidth: maxWidth, margin: marginPx}}
        />
        <Button
          variant="contained"
          sx={{margin: marginPx}}
          onClick={() => {
            if (convertType === cyrillicToRoman) {
              setRetVal(convertCyrillicToRoman(inputText));
            } else {
              setRetVal(convertRomanToCyrillic(inputText));
            }
          }}>変換</Button>
        <TextareaAutosize
          minRows={5}
          maxRows={5}
          aria-label="maximum height"
          value={retVal}
          style={{width: "full", maxWidth: maxWidth, margin: marginPx}}
        />
      </Box>
    </Main>);
}

export default Conv;
