import {getRandomInteger, isEven, isOdd, Main, P5Wrapper} from "@vocmem/ui";
import {Box} from "@mui/material";
import p5Types from "p5";
import Link from "next/link";

export function RecurDivSquare() {
  let gThreshold = 160;
  let gNumA = 10;
  let gNumB = 6;
  let gRatio = gNumB / gNumA;

  const WIDTH = 500;

  function preload() {
    return
  }

  function setup(p5: p5Types) {
    const myCanvas = p5.createCanvas(WIDTH, WIDTH);
    myCanvas.touchStarted(mouseClicked);
    p5.colorMode(p5.HSB, 100);
    p5.noLoop();
  }

  function draw(p5) {
    divSquare(p5, 0, 0, WIDTH, gRatio, gThreshold);
  }

  function mouseClicked(p5) {
    gNumA = getRandomInteger(1, 20);
    gNumB = getRandomInteger(1, 20);
    while (gNumA === gNumB) {
      gNumB = getRandomInteger(1, 20);
    }
    gThreshold = getRandomInteger(10, 300);
    gRatio = gNumB / gNumA;
    p5.background(0, 0, 100);
    divSquare(p5, 0, 0, WIDTH, gRatio, gThreshold);
  }

  const divSquare = (p5: p5Types, xPos, yPos, squareWidth, ratio, threshold) => {
    const xEndPos = squareWidth + xPos;
    const yEndPos = squareWidth + yPos;
    let itr = 0;

    p5.fill(getRandomColor(p5));
    p5.rect(xPos, yPos, squareWidth, squareWidth);
    while (squareWidth > threshold + 0.1) {
      itr++;
      if (isOdd(itr)) {
        const nextWidth = squareWidth * ratio;
        while (xPos + nextWidth < xEndPos + 0.1) {
          divRect(p5, xPos, yPos, nextWidth, ratio, threshold);
          xPos += nextWidth;
        }
        squareWidth = xEndPos - xPos;
      } else {
        const nextHeight = squareWidth / ratio;
        while (yPos + nextHeight < yEndPos + 0.1) {
          divRect(p5, xPos, yPos, squareWidth, ratio, threshold);
          yPos += nextHeight;
        }
        squareWidth = yEndPos - yPos;
      }
    }
  }

  const divRect = (p5: p5Types, xPos: number, yPos: number, squareWidth: number, ratio: number, threshold: number) => {
    const xEndPos = squareWidth + xPos;
    const yEndPos = squareWidth / ratio + yPos;
    let itr = 0;
    p5.fill(getRandomColor(p5));
    p5.rect(xPos, yPos, squareWidth, squareWidth / ratio);
    while (squareWidth > threshold + 0.1) {
      itr++;
      if (isEven(itr)) {
        while (xPos + squareWidth < xEndPos + 0.1) {
          divSquare(p5, xPos, yPos, squareWidth, ratio, threshold);
          xPos += squareWidth;
        }
        squareWidth = xEndPos - xPos;
      } else {
        while (yPos + squareWidth < yEndPos + 0.1) {
          divSquare(p5, xPos, yPos, squareWidth, ratio, threshold);
          yPos += squareWidth;
        }
        squareWidth = yEndPos - yPos;
      }
    }
  }

  const getRandomColor = (p5) => {
    return p5.color(getRandomInteger(0, 100), 40, 100);
  }

  return (
    <Main>
      <Box component="h1">ユークリッドの互除法</Box>
      <Box><Link href="/art">一覧へ</Link></Box>
      <P5Wrapper preload={preload} setup={setup} draw={draw} mouseClicked={mouseClicked}/>
    </Main>
  );
}

export default RecurDivSquare;
