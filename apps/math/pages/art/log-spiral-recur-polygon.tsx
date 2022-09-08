import {Main, P5Wrapper} from "@vocmem/ui";
import {Box} from "@mui/material";
import p5Types from "p5";
import Link from "next/link";

export function LogSpiralRecurPolygon() {
  let gArrayVector = [];
  let gGap = 0.1;
  let gGon = 8;

  const WIDTH = 500;
  const HEIGHT = 500;

  function preload() {
    return;
  }

  function setup(p5: p5Types) {
    const myCanvas = p5.createCanvas(WIDTH, HEIGHT);
    myCanvas.touchStarted(mouseClicked);
    p5.colorMode(p5.HSB, 100);
    showValues();
    setInitVectors(p5);
  }

  function draw(p5: p5Types) {
    p5.translate(WIDTH / 2, HEIGHT / 2);
    drawPolygon(p5, gArrayVector, gGon);
    gArrayVector = getShiftedVectorArray(p5, gArrayVector, gGap, gGon);
  }

  function mouseClicked(p5: p5Types) {
    p5.background('white');
    gGap = p5.random(1) / 2;
    gGon = getRandomInteger(4, 16);
    showValues();
    setInitVectors(p5);
  }

  function setInitVectors(p5) {
    gArrayVector = new Array(gGon);
    for (let index = 0; index < gGon; index++) {
      gArrayVector[index] = p5.constructor.Vector.fromAngle(2 * index * Math.PI / gGon);
      gArrayVector[index].mult(WIDTH / 2);
    }
  }

  const showValues = () => {
    console.log('gap: ' + gGap + ', gon: ' + gGon);
  }

// Get random integer between min and max
  const getRandomInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  }

  const drawPolygon = (p5, vectors, gon) => {
    for (let index = 0; index < gon; index++) {
      p5.line(vectors[index].x,
        vectors[index].y,
        vectors[(index + 1) % gon].x,
        vectors[(index + 1) % gon].y);
    }
  }

  const getShiftedVectorArray = (p5, vectors, gap, gon) => {
    const nextVectorArray = new Array(gon);
    for (let index = 0; index < gon; index++) {
      // Get direction vector
      const directionVector = p5.constructor.Vector.sub(vectors[(index + 1) % gon], vectors[index]);
      // Shrink the vector
      directionVector.mult(gap);
      // Get a next vector by adding the two vectors
      nextVectorArray[index] = p5.constructor.Vector.add(vectors[index], directionVector);
    }
    return nextVectorArray;
  }

  return (
    <Main>
      <Box component="h1">対数ら線</Box>
      <Box><Link href="/art">一覧へ</Link></Box>
      <P5Wrapper preload={preload} setup={setup} draw={draw}/>
    </Main>
  );
}

export default LogSpiralRecurPolygon;
