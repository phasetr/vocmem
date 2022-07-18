import {Accordion, AccordionDetails, AccordionSummary, Box, Button, TextField, Typography} from "@mui/material";
import {marginPx, ruData} from "@vocmem/data";
import {SyntheticEvent, useEffect, useState} from "react";
import RuProblem from "../components/ru-problem";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import Main from "../components/main";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

export function Ru() {
  const allWords = ruData.data;
  const maxLength = allWords.length;
  const origWordNumberPerBlock = 10;
  const origBlock = 1;
  const origProblemId = 0;
  const localStorageKey = "vocmem-ru";

  const [wordNumberPerBlock, setWordNumberPerBlock] = useState(origWordNumberPerBlock);
  const [block, setBlock] = useState(origBlock);
  const [problemId, setProblemId] = useState(origProblemId);
  const [word, setWord] = useState(allWords[problemId]);
  const [problem, setProblem] = useState(<RuProblem {...allWords[problemId]} />);
  const [isSaved, setIsSaved] = useState(false);
  const [savedIds, setSavedIds] = useState("");
  const [expanded, setExpanded] = useState<string | false>(false);

  useEffect(() => {
    if (localStorage.getItem(localStorageKey) === null) {
      localStorage.setItem(localStorageKey, "");
    }
    setSavedIds(localStorage.getItem(localStorageKey));
  }, []);

  function isSavedId(problemId) {
    return localStorage.getItem(localStorageKey).split(",").includes(problemId.toString());
  }

  function saveId(problemId) {
    const tmp = localStorage.getItem(localStorageKey);
    const ids = tmp === "" ? [] : tmp.split(",");
    if (ids.includes(problemId.toString())) {
      return;
    }

    ids.push(problemId.toString());
    ids.sort();
    const newIds = ids.join(",");
    localStorage.setItem(localStorageKey, newIds);
    setSavedIds(newIds);
  }

  function deleteId(problemId) {
    const ids = localStorage.getItem((localStorageKey)).split(",");
    const index = ids.indexOf(problemId.toString());
    ids.splice(index, 1);
    const newIds = ids.join(",");
    localStorage.setItem(localStorageKey, newIds);
    setSavedIds(newIds);
  }

  function initProblemId() {
    return (block - 1) * wordNumberPerBlock;
  }

  function handleSett() {
    setProblemId(initProblemId());
    setWord(allWords[problemId]);
    setProblem(<RuProblem {...allWords[problemId]} />);
  }

  function handleWordNumberPerBlock(event) {
    setWordNumberPerBlock(Number(event.target.value));
    setBlock(origBlock);
    setProblemId(initProblemId());
    setWord(allWords[problemId]);
    setProblem(<RuProblem {...allWords[problemId]} />);
  }

  function handleBlock(e) {
    setBlock(Number(e.target.value));
    setProblemId(initProblemId());
    setWord(allWords[problemId]);
    setProblem(<RuProblem {...allWords[problemId]} />);
  }

  function handleBefore(_e) {
    const nextProblemId = problemId - 1;
    const newId = nextProblemId <= (block - 1) * wordNumberPerBlock ? block * wordNumberPerBlock - 1 : nextProblemId;
    setProblemId(newId);
    setWord(allWords[newId]);
    setIsSaved(isSavedId(newId))
    setProblem(<RuProblem {...allWords[newId]} />);
  }

  function handleNext(_e) {
    const nextProblemId = problemId + 1;
    const newId = nextProblemId >= block * wordNumberPerBlock ? initProblemId() : nextProblemId;
    setProblemId(newId);
    setWord(allWords[newId]);
    setIsSaved(isSavedId(newId))
    setProblem(<RuProblem {...allWords[newId]} />);
  }

  function handleBlockBefore(_e) {
    const nextBlock = block - 1;
    const newBlock = nextBlock <= 0 ? Math.ceil(maxLength / wordNumberPerBlock) : nextBlock;
    const newId = wordNumberPerBlock * (newBlock - 1);

    setProblemId(newId);
    setBlock(newBlock);
    setWord(allWords[newId]);
    setIsSaved(isSavedId(newId))
    setProblem(<RuProblem {...allWords[newId]} />);
  }

  function handleBlockNext(_e) {
    const nextBlock = block + 1;
    const newBlock = nextBlock > Math.ceil(maxLength / wordNumberPerBlock) ? 1 : nextBlock;
    const newId = wordNumberPerBlock * (newBlock - 1);

    console.log(initProblemId(), newId, newBlock);
    setProblemId(newId);
    setBlock(newBlock);
    setWord(allWords[newId]);
    setIsSaved(isSavedId(newId))
    setProblem(<RuProblem {...allWords[newId]} />);
  }

  function handleSave(problemId) {
    saveId(problemId);
    setIsSaved(true);
  }

  function handleDelete(problemId) {
    deleteId(problemId);
    setIsSaved(false);
  }

  function handleReset(_e) {
    setWordNumberPerBlock(origWordNumberPerBlock);
    setBlock(origBlock);
    setProblemId(origProblemId);
    setWord(allWords[origProblemId]);
    setProblem(<RuProblem {...allWords[origProblemId]} />);
  }

  const handleSavedItems = (panel: string) => (event: SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Main>
      <Box component="h1">ロシア語{maxLength}単語暗記</Box>

      <Accordion>
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
            <TextField id="block" label="ブロック指定" variant="outlined" onChange={handleBlock}
                       type="number" maxRows={Math.ceil(maxLength / wordNumberPerBlock)} minRows={1}
                       sx={{margin: "10px"}}
                       value={block}/>
            <Button variant="contained" onClick={() => setWordNumberPerBlock(maxLength)}
                    sx={{margin: "10px"}}> 全体周回</Button>
            <Button variant="contained" onClick={handleSett} sx={{margin: "10px"}}>変更</Button>
            <Button variant="contained" onClick={handleReset} sx={{margin: "10px"}}>リセット</Button>
          </Box>
        </AccordionDetails>
      </Accordion>

      <Box sx={{margin: `${marginPx} 0`, width: '80%', display: 'flex', justifyContent: 'space-between'}}>
        <Button sx={{width: "20px"}} variant="text" onClick={handleBefore}><NavigateBeforeIcon/></Button>
        <Button variant="text" onClick={handleNext}><NavigateNextIcon/></Button>
        {isSaved ? <Button variant="contained" onClick={() => handleDelete(problemId)}><DeleteIcon/></Button> :
          <Button variant="text" onClick={() => handleSave(problemId)}><SaveIcon/></Button>}
        <Button variant="text" onClick={handleBlockBefore}><SkipPreviousIcon/></Button>
        <Button variant="text" onClick={handleBlockNext}><SkipNextIcon/></Button>
      </Box>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>} aria-controls="panel1a-content">
          <Typography component="h2">{word ? `${word.id}: ${word.ru}` : ""}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box component="section">{problem}</Box>
        </AccordionDetails>
      </Accordion>

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
                <AccordionDetails>{allWords[idN].en}</AccordionDetails>
                <Button variant="contained" sx={{margin: marginPx}}
                        onClick={() => handleDelete(idN)}><DeleteIcon/></Button>
              </Accordion>)
          }) : <></>}
          <Button variant="contained" sx={{margin: `${marginPx} 0 0`}}
                  onClick={() => {
                    localStorage.setItem(localStorageKey, "");
                    setSavedIds("");
                  }}><DeleteIcon/></Button>
        </AccordionDetails>
      </Accordion>
    </Main>
  )
    ;
}

export default Ru;
