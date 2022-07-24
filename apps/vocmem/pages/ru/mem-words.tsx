import {Box} from "@mui/material";
import {SyntheticEvent, useEffect, useState} from "react";
import RuProblem from "../../components/ru-problem";
import Main from "../../components/main";
import AppSett from "../../components/app-sett";
import Controllers from "../../components/controllers";
import WordInfo from "../../components/word-info";
import SavedWords from "../../components/saved-words";
import {memWords} from "@vocmem/data";

export function MemWords() {
  const allWords = memWords.data;
  const maxLength = allWords.length;
  const origWordNumberPerBlock = 5;
  const origBlock = 1;
  const origProblemId = 0;
  const localStorageKey = "vocmem-ru-mem-words";
  const ruObjectId = "vocmem-ru-object-id";
  const ruWordNumberPerBlockKey = "vocmem-ru-wnum";
  const ruBlockNumber = "vocmem-ru-bnum";

  const [wordNumberPerBlock, setWordNumberPerBlock] = useState(origWordNumberPerBlock);
  const [blockNumber, setBlockNumber] = useState(origBlock);
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
    if (localStorage.getItem(ruWordNumberPerBlockKey) === null) {
      localStorage.setItem(ruWordNumberPerBlockKey, "0");
    }
    if (localStorage.getItem(ruBlockNumber) === null) {
      localStorage.setItem(ruBlockNumber, "0");
    }
    if (localStorage.getItem(ruObjectId) === null) {
      localStorage.setItem(ruObjectId, "0")
    }
    setSavedIds(localStorage.getItem(localStorageKey));
    //setProblemId(Number(localStorage.getItem(ruObjectId)));
    //setWordNumberPerBlock(Number(localStorage.getItem(ruWordNumberPerBlockKey)));
    //setBlockNumber(Number(localStorage.getItem(ruBlockNumber)));
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
    return (blockNumber - 1) * wordNumberPerBlock;
  }

  function handleSett() {
    setProblemId(initProblemId());
    setWord(allWords[problemId]);
    setProblem(<RuProblem {...allWords[problemId]} />);
  }

  function handleWordNumberPerBlock(event) {
    setWordNumberPerBlock(Number(event.target.value));
    setProblemId(initProblemId());
    setWord(allWords[problemId]);
    setProblem(<RuProblem {...allWords[problemId]} />);
    //localStorage.setItem(ruObjectId, problemId.toString());
    //localStorage.setItem(ruWordNumberPerBlockKey, event.target.value);
  }

  function handleBlock(e) {
    setBlockNumber(Number(e.target.value));
    setProblemId(initProblemId());
    setWord(allWords[problemId]);
    setProblem(<RuProblem {...allWords[problemId]} />);
  }

  function handleBefore() {
    const nextProblemId = problemId - 1;
    const newId = nextProblemId <= (blockNumber - 1) * wordNumberPerBlock ? blockNumber * wordNumberPerBlock - 1 : nextProblemId;
    setProblemId(newId);
    setWord(allWords[newId]);
    setIsSaved(isSavedId(newId))
    setProblem(<RuProblem {...allWords[newId]} />);
    //localStorage.setItem(ruWordNumberPerBlockKey, newId.toString());
  }

  function handleNext() {
    const nextProblemId = problemId + 1;
    const newId = nextProblemId >= blockNumber * wordNumberPerBlock ? initProblemId() : nextProblemId;
    setProblemId(newId);
    setWord(allWords[newId]);
    setIsSaved(isSavedId(newId))
    setProblem(<RuProblem {...allWords[newId]} />);
    //localStorage.setItem(ruWordNumberPerBlockKey, newId.toString());
  }

  function handleBlockBefore(_e) {
    const nextBlock = blockNumber - 1;
    const newBlock = nextBlock <= 0 ? Math.ceil(maxLength / wordNumberPerBlock) : nextBlock;
    const newId = wordNumberPerBlock * (newBlock - 1);

    setProblemId(newId);
    setBlockNumber(newBlock);
    setWord(allWords[newId]);
    setIsSaved(isSavedId(newId))
    setProblem(<RuProblem {...allWords[newId]} />);
    //localStorage.setItem(ruBlockNumber, newBlock.toString());
  }

  function handleBlockNext(_e) {
    const nextBlock = blockNumber + 1;
    const newBlock = nextBlock > Math.ceil(maxLength / wordNumberPerBlock) ? 1 : nextBlock;
    const newId = wordNumberPerBlock * (newBlock - 1);

    setProblemId(newId);
    setBlockNumber(newBlock);
    setWord(allWords[newId]);
    setIsSaved(isSavedId(newId))
    setProblem(<RuProblem {...allWords[newId]} />);
    //localStorage.setItem(ruBlockNumber, newBlock.toString());
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
    setBlockNumber(origBlock);
    setProblemId(origProblemId);
    setWord(allWords[origProblemId]);
    setProblem(<RuProblem {...allWords[origProblemId]} />);
    //localStorage.setItem(ruWordNumberPerBlockKey, "0");
    //localStorage.setItem(ruBlockNumber, "0")
  }

  const handleSavedItems = (panel: string) => (event: SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Main>
      <Box component="h1">ロシア語{maxLength}単語暗記</Box>

      <AppSett block={blockNumber} maxLength={maxLength} wordNumberPerBlock={wordNumberPerBlock}
               handleBlock={handleBlock}
               handleReset={handleReset}
               handleSett={handleSett}
               handleWordNumberPerBlock={handleWordNumberPerBlock}
               setWordNumberPerBlock={setWordNumberPerBlock}/>

      <Controllers
        isSaved={isSaved}
        problemId={problemId}
        handleBefore={handleBefore}
        handleBlockBefore={handleBlockBefore}
        handleBlockNext={handleBlockNext}
        handleDelete={handleDelete}
        handleNext={handleNext}
        handleSave={handleSave}/>

      <WordInfo id={problemId} word={word} problem={problem}/>
      <SavedWords
        allWords={allWords}
        expanded={expanded}
        handleDelete={handleDelete}
        handleSavedItems={handleSavedItems}
        localStorageKey={localStorageKey}
        savedIds={savedIds}
        setSavedIds={setSavedIds}
      />
    </Main>
  );
}

// noinspection JSUnusedGlobalSymbols
export default MemWords;
