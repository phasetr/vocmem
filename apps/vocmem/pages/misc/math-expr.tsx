import {Box, Button} from "@mui/material";
import {useState} from "react";
import Main from "../../components/main";
import {marginPx} from "../../constants/styles";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import 'katex/dist/katex.min.css';
import {BlockMath, InlineMath} from 'react-katex';

export function MathExpr() {
  const elements = ["\\int_X f(x) \\, dx", "\\sin x \\cos x"];
  const maxLength = elements.length;

  const [targetId, setTargetId] = useState(0);
  const [mathExpr, setMathExpr] = useState(elements[0]);

  function handleBefore(_e) {
    const nextTargetId = targetId - 1;
    const newId = nextTargetId < 0 ? maxLength - 1 : nextTargetId;
    setTargetId(newId);
    setMathExpr(elements[newId]);
  }

  function handleNext(_e) {
    const nextTargetId = targetId + 1;
    const newId = nextTargetId >= maxLength ? 0 : nextTargetId;
    setTargetId(newId);
    setMathExpr(elements[newId]);
  }

  return (
    <Main>
      <Box component="h1">サンプル：いろいろな式</Box>

      <Box sx={{margin: `${marginPx} 0`, display: 'flex', justifyContent: 'space-between'}}>
        <Button sx={{width: "20px"}} variant="text" onClick={handleBefore}><NavigateBeforeIcon/></Button>
        <Button variant="text" onClick={handleNext}><NavigateNextIcon/></Button>
      </Box>

      <Box component="section"><BlockMath errorColor={'#cc0000'}>{mathExpr}</BlockMath></Box>

      <Box component="h2">InlineMathのサンプル</Box>
      <Box component="p">
        InlineMath sample: <InlineMath errorColor={'#cc0000'}>\int_0^\infty x^2 dx</InlineMath>.
      </Box>
      <Box component="h2">BlockMathのサンプル</Box>
      <BlockMath errorColor={'#cc0000'}>\int_0^\infty x^2 dx \inta</BlockMath>
    </Main>
  );
}

export default MathExpr;
