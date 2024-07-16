"use client"
import React, { useEffect, useRef } from 'react';

interface Point3D {
  x: number;
  y: number;
  z: number;
}

interface Cube {
  bl: Point3D;
  br: Point3D;
  tl: Point3D;
  tr: Point3D;
  blz: Point3D;
  brz: Point3D;
  tlz: Point3D;
  trz: Point3D;
  start: Point3D;
}

const SpinningCube: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const angleX = 2 * Math.PI / 360;
  const angleY = 2 * Math.PI / 720;
  const angleZ = 2 * Math.PI / 1480;
  let rotX = true;
  let rotY = true;
  let rotZ = false;
  let cube = createCube(0, 0, 4, 1.5);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const context = canvas.getContext('2d');
      if (context) {
        const update = () => {
          context.clearRect(0, 0, canvas.width, canvas.height);
          if (rotZ) {
            cube = rotateCubeZ(cube, angleZ);
          }
          if (rotY) {
            cube = rotateCubeY(cube, angleY);
          }
          if (rotX) {
            cube = rotateCubeX(cube, angleX);
          }
          drawCube(cube, context, canvas);
          requestAnimationFrame(update);
        };
        requestAnimationFrame(update);
      }
    }
  }, []);

  return (
    <div className="flex justify-center items-center h-[500px]">
      <canvas id="canvas" ref={canvasRef} width={500} height={500}></canvas>
    </div>
  );
};

function createCube(x: number, y: number, z: number, size: number): Cube {
  const start = { x, y, z };
  const bl = { x: x - size / 2, y: y - size / 2, z: z - size / 2 };
  const br = { x: x + size / 2, y: y - size / 2, z: z - size / 2 };
  const tl = { x: x - size / 2, y: y + size / 2, z: z - size / 2 };
  const tr = { x: x + size / 2, y: y + size / 2, z: z - size / 2 };
  const blz = { x: x - size / 2, y: y - size / 2, z: z + size / 2 };
  const brz = { x: x + size / 2, y: y - size / 2, z: z + size / 2 };
  const tlz = { x: x - size / 2, y: y + size / 2, z: z + size / 2 };
  const trz = { x: x + size / 2, y: y + size / 2, z: z + size / 2 };

  return { bl, br, tl, tr, blz, brz, tlz, trz, start };
}

function worldToScreen(p: Point3D, canvas: HTMLCanvasElement): Point3D {
  const factor = canvas.width;
  return {
    x: (p.x / p.z) * factor + canvas.width / 2,
    y: (p.y / p.z) * factor + canvas.height / 2,
    z: p.z,
  };
}

function rotateZ(p: Point3D, start: Point3D, angleZ: number): Point3D {
  const x = p.x - start.x;
  const y = p.y - start.y;
  return {
    x: x * Math.cos(angleZ) - y * Math.sin(angleZ) + start.x,
    y: y * Math.cos(angleZ) + x * Math.sin(angleZ) + start.y,
    z: p.z,
  };
}

function rotateX(p: Point3D, start: Point3D, angleX: number): Point3D {
  const z = p.z - start.z;
  const y = p.y - start.y;
  return {
    x: p.x,
    y: y * Math.cos(angleX) - z * Math.sin(angleX) + start.y,
    z: y * Math.sin(angleX) + z * Math.cos(angleX) + start.z,
  };
}

function rotateY(p: Point3D, start: Point3D, angleY: number): Point3D {
  const z = p.z - start.z;
  const x = p.x - start.x;
  return {
    x: x * Math.cos(angleY) + z * Math.sin(angleY) + start.x,
    y: p.y,
    z: -x * Math.sin(angleY) + z * Math.cos(angleY) + start.z,
  };
}

function rotateCubeZ(cube: Cube, angleZ: number): Cube {
  return {
   ...cube,
    bl: rotateZ(cube.bl, cube.start, angleZ),
    br: rotateZ(cube.br, cube.start, angleZ),
    tl: rotateZ(cube.tl, cube.start, angleZ),
    tr: rotateZ(cube.tr, cube.start, angleZ),
    blz: rotateZ(cube.blz, cube.start, angleZ),
    brz: rotateZ(cube.brz, cube.start, angleZ),
    tlz: rotateZ(cube.tlz, cube.start, angleZ),
    trz: rotateZ(cube.trz, cube.start, angleZ),
  };
}

function rotateCubeX(cube: Cube, angleX: number): Cube {
  return {
   ...cube,
    bl: rotateX(cube.bl, cube.start, angleX),
    br: rotateX(cube.br, cube.start, angleX),
    tl: rotateX(cube.tl, cube.start, angleX),
    tr: rotateX(cube.tr, cube.start, angleX),
    blz: rotateX(cube.blz, cube.start, angleX),
    brz: rotateX(cube.brz, cube.start, angleX),
    tlz: rotateX(cube.tlz, cube.start, angleX),
    trz: rotateX(cube.trz, cube.start, angleX),
  };
}

function rotateCubeY(cube: Cube, angleY: number): Cube {
  return {
   ...cube,
    bl: rotateY(cube.bl, cube.start, angleY),
    br: rotateY(cube.br, cube.start, angleY),
    tl: rotateY(cube.tl, cube.start, angleY),
    tr: rotateY(cube.tr, cube.start, angleY),
    blz: rotateY(cube.blz, cube.start, angleY),
    brz: rotateY(cube.brz, cube.start, angleY),
    tlz: rotateY(cube.tlz, cube.start, angleY),
    trz: rotateY(cube.trz, cube.start, angleY),
  };
}

function drawLine(context: CanvasRenderingContext2D, p0: Point3D, p1: Point3D) {
  context.beginPath();
  context.moveTo(p0.x, p0.y);
  context.lineTo(p1.x, p1.y);
  context.lineWidth = 2;
  context.strokeStyle = 'white';
  context.stroke();
}

function drawCube(cube: Cube, context: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
  const blr = worldToScreen(cube.bl, canvas);
  const brr = worldToScreen(cube.br, canvas);
  const tlr = worldToScreen(cube.tl, canvas);
  const trr = worldToScreen(cube.tr, canvas);
  const blrz = worldToScreen(cube.blz, canvas);
  const brrz = worldToScreen(cube.brz, canvas);
  const tlrz = worldToScreen(cube.tlz, canvas);
  const trrz = worldToScreen(cube.trz, canvas);

  const faces = [
    { p1: blr, p2: brr, p3: trr, p4: tlr },
    { p1: blrz, p2: brrz, p3: trrz, p4: tlrz },
    { p1: blr, p2: tlr, p3: tlrz, p4: blrz },
    { p1: brr, p2: trr, p3: trrz, p4: brrz },
    { p1: tlr, p2: trr, p3: trrz, p4: tlrz },
    { p1: blr, p2: brr, p3: brrz, p4: blrz },
  ];

  faces.forEach((face) => drawFace(face, context));
}

function drawFace(face: { p1: Point3D; p2: Point3D; p3: Point3D; p4: Point3D }, context: CanvasRenderingContext2D) {
  const { p1, p2, p3, p4 } = face;

  context.beginPath();
  context.moveTo(p1.x, p1.y);
  context.lineTo(p2.x, p2.y);
  context.lineTo(p3.x, p3.y);
  context.lineTo(p4.x, p4.y);
  context.closePath();
  context.strokeStyle = 'white';
  context.stroke();
}

export default SpinningCube;