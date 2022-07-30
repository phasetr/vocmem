import {Accordion, AccordionDetails, AccordionSummary, Box, Button, Typography} from "@mui/material";
import {useState} from "react";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import 'katex/dist/katex.min.css';
import {BlockMath} from 'react-katex';
import {Main, marginPx} from "@vocmem/ui";
import {physExprData} from "@vocmem/data";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export function Expr() {
  const data = physExprData.data;
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
      <Box component="h1">鑑賞</Box>
      <Box sx={{margin: `${marginPx} 0`, display: 'flex', justifyContent: 'space-between'}}>
        <Button sx={{width: "20px"}} variant="text" onClick={handleBefore}><NavigateBeforeIcon/></Button>
        <Button variant="text" onClick={handleNext}><NavigateNextIcon/></Button>
      </Box>
      <Box component="h2">{data[targetId].title}</Box>
      <BlockMath sx={{minHeight: "300px"}}>{data[targetId].expression}</BlockMath>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon/>}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography>解説</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{data[targetId].commentary}</Typography>
        </AccordionDetails>
      </Accordion>
    </Main>
  );
}

export default Expr;
