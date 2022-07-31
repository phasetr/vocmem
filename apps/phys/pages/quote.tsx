import {Box} from "@mui/material";
import 'katex/dist/katex.min.css';
import {Main} from "@vocmem/ui";
import Link from "next/link";

export function Quote() {
  return (
    <Main>
      <Box component="h1">【作成中】物理学者の名言</Box>
      <Link href="/">戻る</Link>
    </Main>
  );
}

export default Quote;
