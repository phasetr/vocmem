import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  List,
  ListItem,
  TextField,
  Typography
} from "@mui/material";
import {marginPx} from "@vocmem/data";
import {SyntheticEvent, useEffect, useState} from "react";
import RuProblem from "../components/ru-problem";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {ruData} from "@vocmem/data";

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
    localStorage.setItem(localStorageKey, "");
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

  function handleNext(_event) {
    const nextProblemId = problemId + 1;
    const newId = nextProblemId >= block * wordNumberPerBlock ? initProblemId() : nextProblemId;
    setProblemId(newId);
    setWord(allWords[newId]);
    setIsSaved(isSavedId(newId))
    setProblem(<RuProblem {...allWords[newId]} />);
  }

  function handleSave(_e) {
    saveId(problemId);
    setIsSaved(true);
  }

  function handleDelete(_e) {
    console.log(problemId);
    deleteId(problemId);
    console.log(localStorage.getItem(localStorageKey));
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
    <Box component="main" sx={{maxWidth: "400px", padding: "20px"}}>
      <Box component="h1">ロシア語</Box>
      <Typography sx={{margin: marginPx}}>全単語数: {maxLength}</Typography>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>} aria-controls="panel1a-content">
          <Typography component="h2">マニュアル</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box component="section">
            <p>TODO</p>
            <List>
              <ListItem>ボタンを2回クリックしないと正しく動かないことがあります。</ListItem>
              <ListItem>単語保存はLocalStorageを使っているため大量の単語は保存しきれない可能性があります。随時整理してください。</ListItem>
              <ListItem>大量の単語を保存すると動作が重くなる可能性があります。</ListItem>
              <ListItem>Wiktionaryのリンクをクリックして出てくるページに音声が再生できるリンクがあ（る場合があ）ります。</ListItem>
            </List>
          </Box>
        </AccordionDetails>
      </Accordion>
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
        <Button variant="contained" onClick={handleSett} sx={{margin: "10px"}}>設定</Button>
      </Box>
      <Box sx={{margin: marginPx, width: 'auto', display: 'flex', justifyContent: 'space-between'}}>
        <Button variant="outlined" onClick={handleNext}>次へ</Button>
        {isSaved ? <Button variant="contained" onClick={handleDelete}>削除</Button> :
          <Button variant="outlined" onClick={handleSave}>復習用保存</Button>}
        <Button variant="outlined" onClick={handleReset}>リセット</Button>
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
              </Accordion>)
          }) : <></>}
          <Button variant="contained" sx={{margin: `${marginPx} 0 0`}}
                  onClick={() => {
                    localStorage.setItem(localStorageKey, "");
                    setSavedIds("");
                  }}>保存単語の全削除</Button>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

export default Ru;
