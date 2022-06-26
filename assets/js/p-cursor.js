let outerR = 25;
let outerShapeStroke = "#4ED8E7";
let outerShapeFill = 'transparent';
let outerShapeWidth = 1;

// Smaller cursor

// set the starting position of the cursor outside of the screen
let clientX = -100;
let clientY = -100;
const innerCursor = document.querySelector(".cursor--small");

const initCursor = () => {
  // add listener to track the current mouse position
  document.addEventListener("mousemove", e => {
    clientX = e.clientX;
    clientY = e.clientY;
  });
  
  const render = () => {
    innerCursor.style.transform = `translate(${clientX}px, ${clientY}px)`;
    
    requestAnimationFrame(render);
  };
  requestAnimationFrame(render);
};

initCursor();

// Bigger cursor

let lastX = 0;
let lastY = 0;
let isStuck = false;
let showCursor = false;
let group, stuckX, stuckY, fillOuterCursor;

const initCanvas = () => {
  const canvas = document.querySelector(".cursor--canvas");
  const shapeBounds = {
    width: 75,
    height: 75
  };
  paper.setup(canvas);

  const segments = 8;
  const radius = outerR;

  // the base shape for the noisy circle
  const polygon = new paper.Path.RegularPolygon(
    new paper.Point(0, 0),
    segments,
    radius
  );
  polygon.strokeColor = outerShapeStroke;
  polygon.fillColor = outerShapeFill;
  polygon.strokeWidth = outerShapeWidth;
  polygon.smooth();
  group = new paper.Group([polygon]);
  group.applyMatrix = false;
  
  // function for linear interpolation of values
  const lerp = (a, b, n) => {
    return (1 - n) * a + n * b;
  };
  
  // the draw loop of Paper.js 
  // (60fps with requestAnimationFrame under the hood)
  paper.view.onFrame = event => {
    // using linear interpolation, the circle will move 0.2 (20%)
    // of the distance between its current position and the mouse
    // coordinates per Frame
    lastX = lerp(lastX, clientX, 0.2);
    lastY = lerp(lastY, clientY, 0.2);
    group.position = new paper.Point(lastX, lastY);
  }
}

initCanvas();