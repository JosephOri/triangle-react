import { useLocation } from 'react-router-dom';
import { Typography } from '@mui/material';
import { Point } from './interfaces/Point';

const TriangleDisplay = () => {
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

  const minX = Math.min(A.x, B.x, C.x);
  const maxX = Math.max(A.x, B.x, C.x);
  const minY = Math.min(A.y, B.y, C.y);
  const maxY = Math.max(A.y, B.y, C.y);
  const width = maxX - minX;
  const height = maxY - minY;
  const centerX = (minX + maxX) / 2;
  const centerY = (minY + maxY) / 2;

  const getVertexOffset = (vertex: Point) => {
    const centroid = {
      x: (A.x + B.x + C.x) / 3,
      y: (A.y + B.y + C.y) / 3,
    };
    const dx = vertex.x - centroid.x;
    const dy = vertex.y - centroid.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    return {
      x: (dx / dist) * 20,
      y: (dy / dist) * 20,
    };
  };

  const offsetA = getVertexOffset(A);
  const offsetB = getVertexOffset(B);
  const offsetC = getVertexOffset(C);

  const pathD = `M ${A.x - centerX} ${A.y - centerY} L ${B.x - centerX} ${B.y - centerY} L ${C.x - centerX} ${
    C.y - centerY
  } Z`;
  const circleRadius = 2;
  const padding = 40;

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <Typography variant="h4">The Triangle</Typography>
      <svg
        viewBox={`${-width / 2 - padding} ${-height / 2 - padding} ${width + 2 * padding} ${height + 2 * padding}`}
        style={{ border: '1px solid black', marginTop: '20px', maxWidth: '600px', maxHeight: '600px' }}
      >
        <path d={pathD} fill="none" stroke="black" />
        <circle cx={A.x - centerX} cy={A.y - centerY} r={circleRadius} fill="red" />
        <circle cx={B.x - centerX} cy={B.y - centerY} r={circleRadius} fill="red" />
        <circle cx={C.x - centerX} cy={C.y - centerY} r={circleRadius} fill="red" />
        <text x={A.x - centerX + offsetA.x} y={A.y - centerY + offsetA.y} fill="black" textAnchor="middle" fontSize={7}>
          {angleA.toFixed(2)}°
        </text>
        <text x={B.x - centerX + offsetB.x} y={B.y - centerY + offsetB.y} fill="black" textAnchor="middle" fontSize={7}>
          {angleB.toFixed(2)}°
        </text>
        <text x={C.x - centerX + offsetC.x} y={C.y - centerY + offsetC.y} fill="black" textAnchor="middle" fontSize={7}>
          {angleC.toFixed(2)}°
        </text>
      </svg>
    </div>
  );
};

export default TriangleDisplay;
