import dynamic from 'next/dynamic'
import p5Types from 'p5'

const Sketch = dynamic(import('react-p5'), {
  // eslint-disable-next-line react/jsx-no-useless-fragment
  loading: () => <></>,
  ssr: false
})

export const DEFAULT_CANVAS_WIDTH = 300;
export const DEFAULT_CANVAS_HEIGHT = 500;

export type P5WrapperArgument = {
  preload: (p5: p5Types) => void,
  setup: (p5: p5Types, canvasParentRef: Element) => void,
  draw: (p5: p5Types) => void,
  mouseClicked?: (p5: p5Types) => void
}

export const windowResized = (p5: p5Types) => {
  const w = DEFAULT_CANVAS_WIDTH <= p5.windowWidth ? DEFAULT_CANVAS_WIDTH : p5.windowWidth;
  const h = DEFAULT_CANVAS_HEIGHT <= p5.windowHeight ? DEFAULT_CANVAS_HEIGHT : p5.windowHeight;
  p5.resizeCanvas(w, h);
}

export function P5Wrapper({preload, setup, draw, mouseClicked}: P5WrapperArgument) {
  return (
    <Sketch
      preload={preload}
      setup={setup}
      draw={draw}
      mouseClicked={mouseClicked}
      windowResized={windowResized}
    />);
}

export default P5Wrapper;
