import {Box} from "@mui/material";
import katex from "katex";
import {macros} from "./data";
import React from "react";

export function BlockMath(props: { children: string; }) {
  return (
    <Box
      dangerouslySetInnerHTML={{
        __html: katex.renderToString(props.children, {
          throwOnError: false,
          displayMode: true,
          macros: macros
        })
      }}/>)
}

export function InlineMath(props: { children: string; }) {
  return (
    <Box
      dangerouslySetInnerHTML={{
        __html: katex.renderToString(props.children, {
          throwOnError: false,
          displayMode: false,
          macros: macros
        })
      }}/>)
}
