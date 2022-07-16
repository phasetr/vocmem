import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  FormControl,
  InputLabel,
  NativeSelect,
  Typography
} from "@mui/material";
import {marginPx, maxWidth, ruData} from "@vocmem/data";
import {useState} from "react";
import RuProblem from "../components/ru-problem";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SelectBlock from "../components/select-block";

export function Ru() {
  const words = ruData.data;
  const maxLength = words.length;
  const origWordNumberPerBlock = 10;

  const [wordNumberPerBlock, setWordNumberPerBlock] = useState(origWordNumberPerBlock);
  const [block, setBlock] = useState(1);
  const [allBlocks, setAllBlocks] = useState([...Array(Math.ceil(maxLength / origWordNumberPerBlock))].map((_, i) => i + 1))
  const [problemId, setProblemId] = useState(0);
  const [word, setWord] = useState(words[problemId]);
  const [selectBlock, setSelectBlock] = useState(<SelectBlock allBlocks={allBlocks} handleSelect={handleSelect}/>)
  const [problem, setProblem] = useState(<RuProblem {...words[problemId]} />);

  function handleWordNumberPerBlock(event) {
    setWordNumberPerBlock(() => Number(event.target.value));
    const wnpb = Number(event.target.value);
    setAllBlocks([...Array(Math.ceil(maxLength / wnpb))].map((_, i) => i + 1));
    const blocks = [...Array(Math.ceil(maxLength / wnpb))].map((_, i) => i + 1);
    setSelectBlock(<SelectBlock allBlocks={blocks} handleSelect={handleSelect}/>);
  }

  function handleFromStart(_e) {
    const pId = (block - 1) * wordNumberPerBlock;
    console.log("pId: ", pId, ", block: ", block);
    setProblemId(() => pId + 1);
    setWord(() => words[pId]);
    setProblem(() => <RuProblem {...words[pId]} />);
    setSelectBlock(<SelectBlock allBlocks={allBlocks} handleSelect={handleSelect}/>);
  }

  function handleSelect(e) {
    const wnpb = wordNumberPerBlock;
    const bNum = block;
    const pId = wnpb * bNum;
    console.log(wnpb, bNum, pId);
    setBlock(Number(e.target.value));
    setWord(() => words[pId]);
    setProblem(() => <RuProblem {...words[pId]} />);
  }

  function handleBack(_event) {
    setProblemId(() => problemId - 1);
    setWord(() => words[problemId]);
    setProblem(() => <RuProblem {...words[problemId]} />);
  }

  function handleNext(_event) {
    console.log("block", block);
    setProblemId(() => problemId + 1);
    setWord(() => words[problemId]);
    setProblem(() => <RuProblem {...words[problemId]} />);
  }

  return (
    <>
      <Box component="h1" sx={{margin: marginPx}}>ロシア語</Box>
      <Box sx={{minWidth: 120, maxWidth: maxWidth, margin: marginPx}}>
        <FormControl fullWidth>
          <InputLabel variant="standard" htmlFor="uncontrolled-native">
            1ブロックごとの単語数
          </InputLabel>
          <NativeSelect onChange={handleWordNumberPerBlock} defaultValue={10}
                        inputProps={{name: 'wordNumberPerBlock', id: 'uncontrolled-native'}} sx={{margin: marginPx}}>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </NativeSelect>
        </FormControl>
        {selectBlock}
      </Box>
      <Box sx={{margin: marginPx, maxWidth: maxWidth, width: 'auto', display: 'flex', justifyContent: 'space-around'}}>
        <Button variant="contained" onClick={handleNext}>次へ</Button>
        <Button variant="contained" onClick={handleFromStart}>最初から</Button>
        <Button variant="contained" onClick={handleBack}>解説</Button>
      </Box>
      <Accordion sx={{margin: marginPx, maxWidth: maxWidth}}>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>} aria-controls="panel1a-content">
          <Typography component="h2">{word.id}: {word.ru}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box component="section">{problem}</Box>
        </AccordionDetails>
      </Accordion>
    </>);
}

export default Ru;
