import { useLocation } from 'react-router-dom';
import { Typography } from '@mui/material';
import { Point } from './interfaces/Point';

function TriangleDisplay() {
  const location = useLocation();
  const points: Point[] = location.state?.points || [];

  if (points.length !== 3) {
    return <Typography variant="h6">No data to display</Typography>;
  }

  const [A, B, C] = points;

  const distance = (p1: Point, p2: Point) => Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
  const a = distance(B, C);
  const b = distance(A, C);
  const c = distance(A, B);

  const angleA = Math.acos((b ** 2 + c ** 2 - a ** 2) / (2 * b * c)) * (180 / Math.PI);
  const angleB = Math.acos((a ** 2 + c ** 2 - b ** 2) / (2 * a * c)) * (180 / Math.PI);
  const angleC = Math.acos((a ** 2 + b ** 2 - c ** 2) / (2 * a * b)) * (180 / Math.PI);

  const pathD = `M ${A.x} ${A.y} L ${B.x} ${B.y} L ${C.x} ${C.y} Z`;
  const circleRadius = 5;
  const textOffset = 10;

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <Typography variant="h4">The Triangle</Typography>
      <svg width={'100%'} height={'100%'} style={{ border: '1px solid black', marginTop: '20px' }}>
        <path d={pathD} fill="none" stroke="black" />
        <circle cx={A.x} cy={A.y} r={circleRadius} fill="red" />
        <circle cx={B.x} cy={B.y} r={circleRadius} fill="red" />
        <circle cx={C.x} cy={C.y} r={circleRadius} fill="red" />
        <text x={A.x + textOffset} y={A.y} fill="black">
          {angleA.toFixed(2)}°
        </text>
        <text x={B.x + textOffset} y={B.y} fill="black">
          {angleB.toFixed(2)}°
        </text>
        <text x={C.x + textOffset} y={C.y} fill="black">
          {angleC.toFixed(2)}°
        </text>
      </svg>
    </div>
  );
}

export default TriangleDisplay;
