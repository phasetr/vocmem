import {Box, Button} from "@mui/material";
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import {marginPx} from "../constants/styles";

export function Controllers(
  {
    isSaved,
    problemId,
    handleBefore,
    handleBlockBefore,
    handleBlockNext,
    handleDelete,
    handleNext,
    handleSave
  }) {
  return (
    <Box sx={{margin: `${marginPx} 0`, display: 'flex', justifyContent: 'space-between'}}>
      <Button sx={{width: "20px"}} variant="text" onClick={handleBefore}><NavigateBeforeIcon/></Button>
      <Button variant="text" onClick={handleNext}><NavigateNextIcon/></Button>
      {isSaved ? <Button variant="contained" onClick={() => handleDelete(problemId)}><DeleteIcon/></Button> :
        <Button variant="text" onClick={() => handleSave(problemId)}><SaveIcon/></Button>}
      <Button variant="text" onClick={handleBlockBefore}><SkipPreviousIcon/></Button>
      <Button variant="text" onClick={handleBlockNext}><SkipNextIcon/></Button>
    </Box>)
}

export default Controllers;
