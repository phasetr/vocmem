import {Accordion, AccordionDetails, AccordionSummary, Box, Typography} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export function WordInfo({id, word, problem}) {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon/>} aria-controls="panel1a-content">
        <Typography component="h2">{word ? `${id+1}: ${word.ru}` : ""}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box component="section">{problem}</Box>
      </AccordionDetails>
    </Accordion>);
}

export default WordInfo;
