import {Box} from "@mui/material";
import katex from "katex";
import {defaultDelimiters, macros} from "./data";
import React from "react";
import Latex from "react-latex-next";

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

export function MyLatex(props: {children: string}){
  return (<Latex delimiters={defaultDelimiters}>{props.children}</Latex>)
}
