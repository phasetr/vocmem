import {unified} from 'unified'
import remarkRehype from 'remark-rehype'
import remarkParse from 'remark-parse'
import rehypeStringify from 'rehype-stringify'
import math from 'remark-math'
import rehypeKatex from 'rehype-katex'
import {useEffect, useState} from "react";
import {Box} from "@mui/material";

export function FromMd(mdTxt) {
  const [mdCont, setMdCont] = useState("");

  async function getPostData() {
    const processedContent = await unified()
      .use(remarkParse)
      .use(math)
      .use(remarkRehype)
      .use(rehypeStringify)
      .use(rehypeKatex)
      .process(mdTxt);
    return processedContent.toString();
  }

  useEffect(() => {
    getPostData().then((res) => {
      setMdCont(res);
    })
  }, []);
  return (<Box dangerouslySetInnerHTML={{__html: mdCont}}/>);
}

export default FromMd;
