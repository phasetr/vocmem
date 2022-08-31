import {Accordion, AccordionDetails, AccordionSummary, Box, Typography} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {EnExprData} from "@vocmem/data";

type ExpressionInfoType = {
  problemId: number,
  word: EnExprData,
  expression: JSX.Element
}

export function ExpressionInfo({problemId, word, expression}: ExpressionInfoType) {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon/>} aria-controls="panel1a-content">
        <Typography component="h2">{problemId + 1}: {word ? `${word.expr}` : ""}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box component="section">{expression}</Box>
      </AccordionDetails>
    </Accordion>);
}

export default ExpressionInfo;
