import {DEFAULT_CANVAS_HEIGHT, DEFAULT_CANVAS_WIDTH, Main, P5Wrapper} from "@vocmem/ui";
import p5Types from "p5";
import {Box} from "@mui/material";
import Link from "next/link";

export function Sample() {
  function preload() {
    return;
  }

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(DEFAULT_CANVAS_WIDTH, DEFAULT_CANVAS_HEIGHT).parent(canvasParentRef);
    p5.colorMode(p5.HSB, p5.width, p5.height, 100);
    p5.noStroke();
  }

  const draw = (p5: p5Types) => {
    let lastBar = -1;
    const barWidth = 20;
    const whichBar = p5.mouseX / barWidth;
    if (whichBar !== lastBar) {
      const barX = whichBar * barWidth;
      p5.fill(barX, p5.mouseY, 66);
      p5.rect(barX, 0, barWidth, p5.height);
      // noinspection JSUnusedAssignment
      lastBar = whichBar;
    }
  }

  return (
    <Main>
      <Box component="h1">サンプル</Box>
      <Box><Link href="/art">一覧へ</Link></Box>
      <P5Wrapper preload={preload} setup={setup} draw={draw}/>
    </Main>
  )
}

export default Sample;
