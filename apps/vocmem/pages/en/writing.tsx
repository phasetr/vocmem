import {Accordion, AccordionDetails, AccordionSummary, Box, Button, List, ListItem, Typography} from "@mui/material";
import {useState} from "react";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import 'katex/dist/katex.min.css';
import {Main, marginPx} from "@vocmem/ui";
import {writingData} from "@vocmem/data";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export function Writing() {
  const data = writingData;
  const maxLength = data.length;
  const [targetId, setTargetId] = useState(0);

  function handleBefore(_e) {
    const nextTargetId = targetId - 1;
    const newId = nextTargetId < 0 ? maxLength - 1 : nextTargetId;
    setTargetId(newId);
  }

  function handleNext(_e) {
    const nextTargetId = targetId + 1;
    const newId = nextTargetId >= maxLength ? 0 : nextTargetId;
    setTargetId(newId);
  }

  return (
    <Main>
      <Box component="h1">言い換え英作文: 全{maxLength}文</Box>
      <Box sx={{margin: `${marginPx} 0`, display: 'flex', justifyContent: 'space-between'}}>
        <Button sx={{width: "20px"}} variant="text" onClick={handleBefore}><NavigateBeforeIcon/></Button>
        <Button variant="text" onClick={handleNext}><NavigateNextIcon/></Button>
      </Box>
      <Box component="h2">{targetId + 1}. {data[targetId].orig}</Box>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon/>}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{fontFamily: "serif"}}>解説</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            {data[targetId].en.map(s => {
              return (
                <ListItem key={s}>
                  <Typography sx={{fontFamily: "serif"}}>{s}</Typography>
                </ListItem>
              )
            })}
          </List>
        </AccordionDetails>
      </Accordion>
    </Main>
  );
}

export default Writing;
