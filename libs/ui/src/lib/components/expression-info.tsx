import {Accordion, AccordionDetails, AccordionSummary, Box, Typography} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {ExprData} from "@vocmem/data";

type ExpressInfoType = {
  problemId: number,
  word: ExprData,
  problem: string
}
export function ExpressionInfo({problemId, word: expr, problem: expression}: ExpressInfoType) {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon/>} aria-controls="panel1a-content">
        <Typography component="h2">{problemId+1}: {expr ? `${expr.expr}` : ""}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box component="section">{expression}</Box>
      </AccordionDetails>
    </Accordion>);
}

export default ExpressionInfo;
