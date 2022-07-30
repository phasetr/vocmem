import {Accordion, AccordionDetails, AccordionSummary, Box, Button, TextField, Typography} from "@mui/material";
import {marginPx} from "../constants/styles";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export function AppSett(
  {
    block,
    maxLength,
    wordNumberPerBlock,
    handleBlock,
    handleReset,
    handleSett,
    handleWordNumberPerBlock,
    setWordNumberPerBlock
  }) {
  return (<Accordion>
    <AccordionSummary expandIcon={<ExpandMoreIcon/>} aria-controls="panel1a-content">
      <Typography component="h2">アプリ設定</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Box component="section"
           sx={{margin: marginPx, display: "flex", justifyContent: "center", flexDirection: "column"}}>
        <TextField id="one-block" label="1ブロックごとの単語数" variant="outlined"
                   type="number" maxRows={maxLength} minRows={1}
                   sx={{margin: "10px"}}
                   onChange={handleWordNumberPerBlock}
                   value={wordNumberPerBlock}/>
        <TextField id="block" label="ブロック指定" variant="outlined"
                   type="number" maxRows={Math.ceil(maxLength / wordNumberPerBlock)} minRows={1}
                   sx={{margin: "10px"}}
                   onChange={handleBlock}
                   value={block}/>
        <Button variant="contained" onClick={() => setWordNumberPerBlock(maxLength)}
                sx={{margin: "10px"}}> 全体周回</Button>
        <Button variant="contained" onClick={handleSett} sx={{margin: "10px"}}>変更</Button>
        <Button variant="contained" onClick={handleReset} sx={{margin: "10px"}}>リセット</Button>
      </Box>
    </AccordionDetails>
  </Accordion>);
}
export default AppSett;
