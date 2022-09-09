import {DEFAULT_CANVAS_WIDTH, isEven, Main, P5Wrapper} from "@vocmem/ui";
import {Box} from "@mui/material";
import p5Types from "p5";
import Link from "next/link";

export function ContinuedFractionDivRectZoom() {
  const RATIO = Math.sqrt(2);
  const WIDTH = DEFAULT_CANVAS_WIDTH;
  const HEIGHT = WIDTH / RATIO;

  function preload() {
    return;
  }

  function setup(p5: p5Types) {
    const myCanvas = p5.createCanvas(WIDTH, HEIGHT);
    myCanvas.touchStarted(getPointerX);
    p5.colorMode(p5.HSB, 1);
  }

  function draw(p5: p5Types) {
    p5.background(0, 0, 1);
    const scalar = Math.pow(50, getPointerX(p5) * 1.0 / WIDTH) * WIDTH;
    divRect(p5, WIDTH - scalar, HEIGHT - (scalar / RATIO), scalar, RATIO);
  }

  const getPointerX = (p5: p5Types) => {
    return p5.touches[0] ? p5.touches[0].x : p5.mouseX;
  }

  const divRect = (p5: p5Types, xPos: number, yPos: number, squareWidth: number, ratio: number) => {
    const xEndPos = squareWidth + xPos;
    const yEndPos = squareWidth / ratio + yPos;
    let itr = 0;
    while (squareWidth > 0.1) {
      itr++;
      p5.fill(p5.color((itr * ratio) % 1, 0.4, 1));
      if (isEven(itr)) {
        while (xPos + squareWidth < xEndPos + 0.1) {
          p5.rect(xPos, yPos, squareWidth, squareWidth);
          xPos += squareWidth;
        }
        squareWidth = xEndPos - xPos;
      } else {
        while (yPos + squareWidth < yEndPos + 0.1) {
          p5.rect(xPos, yPos, squareWidth, squareWidth);
          yPos += squareWidth;
        }
        squareWidth = yEndPos - yPos;
      }
    }
  }
  return (
    <Main>
      <Box component="h1">連分数 DivRectZoom</Box>
      <Box><Link href="/art">一覧へ</Link></Box>
      <P5Wrapper preload={preload} setup={setup} draw={draw}/>
    </Main>
  );
}

export default ContinuedFractionDivRectZoom;
