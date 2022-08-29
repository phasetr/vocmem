import {Box} from "@mui/material";
import {SyntheticEvent, useEffect, useState} from "react";
import {AppSett, Controllers, Expression, ExpressionInfo, Main, SavedWords} from "@vocmem/ui";
import {enExprData} from "@vocmem/data";

export function Expr() {
  const allWords = enExprData;
  const maxLength = allWords.length;
  const origWordNumberPerBlock = 5;
  const origBlock = 1;
  const origProblemId = 0;
  const localStorageKey = "vocmem-en-expr";

  const [wordNumberPerBlock, setWordNumberPerBlock] = useState(origWordNumberPerBlock);
  const [blockNumber, setBlockNumber] = useState(origBlock);
  const [problemId, setProblemId] = useState(origProblemId);
  const [word, setWord] = useState(allWords[problemId]);
  const [expression, setExpression] = useState(<Expression {...allWords[problemId]} />);
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
    return (blockNumber - 1) * wordNumberPerBlock;
  }

  function handleSett() {
    setProblemId(initProblemId());
    setWord(allWords[problemId]);
    setExpression(<Expression {...allWords[problemId]} />);
  }

  function handleWordNumberPerBlock(event) {
    setWordNumberPerBlock(Number(event.target.value));
    setBlockNumber(origBlock);
    setProblemId(initProblemId());
    setWord(allWords[problemId]);
    setExpression(<Expression {...allWords[problemId]} />);
  }

  function handleBlock(e) {
    setBlockNumber(Number(e.target.value));
    setProblemId(initProblemId());
    setWord(allWords[problemId]);
    setExpression(<Expression {...allWords[problemId]} />);
  }

  function handleBefore(_e) {
    const nextProblemId = problemId - 1;
    let newId = (blockNumber - 1) * wordNumberPerBlock;
    if (nextProblemId <= newId) {
      const tmpId = blockNumber * wordNumberPerBlock - 1;
      newId = (maxLength <= tmpId) ? newId : tmpId;
    } else {
      newId = nextProblemId;
    }
    setProblemId(newId);
    setWord(allWords[newId]);
    setIsSaved(isSavedId(newId))
    setExpression(<Expression {...allWords[newId]} />);
  }

  function handleNext(_e) {
    const nextProblemId = problemId + 1;
    const newId = (nextProblemId >= blockNumber * wordNumberPerBlock || nextProblemId >= maxLength) ? initProblemId() : nextProblemId;
    setProblemId(newId);
    setWord(allWords[newId]);
    setIsSaved(isSavedId(newId))
    setExpression(<Expression {...allWords[newId]} />);
  }

  function handleBlockBefore(_e) {
    const nextBlock = blockNumber - 1;
    const newBlock = nextBlock <= 0 ? Math.ceil(maxLength / wordNumberPerBlock) : nextBlock;
    const newId = wordNumberPerBlock * (newBlock - 1);

    setProblemId(newId);
    setBlockNumber(newBlock);
    setWord(allWords[newId]);
    setIsSaved(isSavedId(newId))
    setExpression(<Expression {...allWords[newId]} />);
  }

  function handleBlockNext(_e) {
    const nextBlock = blockNumber + 1;
    const newBlock = nextBlock > Math.ceil(maxLength / wordNumberPerBlock) ? 1 : nextBlock;
    const newId = wordNumberPerBlock * (newBlock - 1);

    setProblemId(newId);
    setBlockNumber(newBlock);
    setWord(allWords[newId]);
    setIsSaved(isSavedId(newId))
    setExpression(<Expression {...allWords[newId]} />);
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
    setExpression(<Expression {...allWords[origProblemId]} />);
  }

  const handleSavedItems = (panel: string) => (event: SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Main>
      <Box component="h1">英語表現: {maxLength}例</Box>

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

      <ExpressionInfo problemId={problemId} word={word} problem={expression}/>
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

export default Expr;
