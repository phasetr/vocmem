import {Accordion, AccordionDetails, AccordionSummary, Button, Typography} from "@mui/material";
import {marginPx} from "../constants/styles";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteIcon from '@mui/icons-material/Delete';

export function SavedWords(
  {
    allWords,
    expanded,
    handleDelete,
    handleSavedItems,
    localStorageKey,
    savedIds,
    setSavedIds
  }) {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon/>} aria-controls="panel1a-content">
        <Typography component="h2">保存した単語</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {savedIds !== "" && allWords.length !== 0 ? savedIds.split(",").map(id => {
          const idN = Number(id);
          return (
            <Accordion key={idN} expanded={expanded === `panel${id}`} onChange={handleSavedItems(`panel${id}`)}>
              <AccordionSummary expandIcon={<ExpandMoreIcon/>} aria-controls="panel1a-content">
                <Typography component="h2">{allWords[idN].ru}</Typography>
              </AccordionSummary>
              <Button variant="contained" sx={{margin: marginPx, float: "right"}}
                      onClick={() => handleDelete(idN)}><DeleteIcon/></Button>
              <AccordionDetails>{allWords[idN].en}</AccordionDetails>
            </Accordion>)
        }) : <></>}
        <Button
          sx={{margin: `${marginPx} 0 0 0`}}
          variant="contained"
          onClick={() => {
            localStorage.setItem(localStorageKey, "");
            setSavedIds("");
          }}><DeleteIcon/></Button>
      </AccordionDetails>
    </Accordion>);
}

export default SavedWords;

