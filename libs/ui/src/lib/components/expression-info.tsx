import {Accordion, AccordionDetails, AccordionSummary, Box, Typography} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export function ExpressionInfo({word: expr, problem: expression}) {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon/>} aria-controls="panel1a-content">
        <Typography component="h2">{expr ? `${expr.expr}` : ""}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box component="section">{expression}</Box>
      </AccordionDetails>
    </Accordion>);
}

export default ExpressionInfo;
