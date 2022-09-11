import {DEFAULT_CANVAS_HEIGHT, DEFAULT_CANVAS_WIDTH, Main, P5Wrapper} from "@vocmem/ui";
import p5Types from "p5";
import {Box} from "@mui/material";
import Link from "next/link";

export function SineCosine() {
  function preload() {
    return;
  }

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(DEFAULT_CANVAS_WIDTH, DEFAULT_CANVAS_HEIGHT, "webgl").parent(canvasParentRef);
  }

  const draw = (p5: p5Types) => {
    p5.background(250);
    p5.rotateY(p5.frameCount * 0.1);
    for (let j = 0; j < 5; j++) {
      p5.push();
      for (let i = 0; i < 80; i++) {
        p5.translate(
          p5.sin(p5.frameCount * 0.01 + j) * 100,
          p5.sin(p5.frameCount * 0.01 + j) * 100,
          i * 0.1
        );
        p5.rotateZ(p5.frameCount * 0.02);
        p5.push();
        p5.sphere(8, 6, 4);
        p5.pop();
      }
      p5.pop();
    }
  }

  return (
    <Main>
      <Box component="h1">sin-cos</Box>
      <Box><Link href="/art">一覧へ</Link></Box>
      <P5Wrapper preload={preload} setup={setup} draw={draw}/>
    </Main>
  )
}

export default SineCosine;
