import dynamic from 'next/dynamic'
import p5Types from 'p5'

const Sketch = dynamic(import('react-p5'), {
  // eslint-disable-next-line react/jsx-no-useless-fragment
  loading: () => <></>,
  ssr: false
})

export type P5WrapperArgument = {
  preload: (p5: p5Types) => void,
  setup: (p5: p5Types, canvasParentRef: Element) => void,
  draw: (p5: p5Types) => void
}

export function P5Wrapper({preload, setup, draw}: P5WrapperArgument) {
  const windowResized = (p5: p5Types) => {
    const w = 300 <= p5.windowWidth ? 300 : p5.windowWidth;
    const h = 500 <= p5.windowHeight ? 500 : p5.windowHeight;
    p5.resizeCanvas(w, h);
  }
  return (
    <Sketch
      preload={preload}
      setup={setup}
      draw={draw}
      windowResized={windowResized}
    />);
}

export default P5Wrapper;
