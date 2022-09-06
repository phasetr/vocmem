import {Main, P5Wrapper} from "@vocmem/ui";
import p5Types from "p5";
import {Box} from "@mui/material";

export function Sample() {
  const preload = () => {
    return
  }

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
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
      lastBar = whichBar;
    }
  }

  return (
    <Main>
      <Box component="h1">ジェネラティブアート サンプル</Box>
      <P5Wrapper preload={preload} setup={setup} draw={draw}/>
    </Main>
  )
}

export default Sample;
