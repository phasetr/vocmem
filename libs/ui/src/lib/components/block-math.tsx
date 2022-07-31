import {Box} from "@mui/material";
import katex from "katex";

export function BlockMath(props) {
  return (
    <Box
      dangerouslySetInnerHTML={{
        __html: katex.renderToString(props.texstring, {
          throwOnError: false,
          displayMode: true
        })
      }}/>)
}

export default BlockMath;
