import { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';
import { Point } from './interfaces/Point';
const InputPage = () => {
  const [pointA, setPointA] = useState({ x: '', y: '' });
  const [pointB, setPointB] = useState({ x: '', y: '' });
  const [pointC, setPointC] = useState({ x: '', y: '' });
  const navigate = useNavigate();

  const handleSubmit = () => {
    const points: Point[] = [
      { x: parseFloat(pointA.x), y: parseFloat(pointA.y) },
      { x: parseFloat(pointB.x), y: parseFloat(pointB.y) },
      { x: parseFloat(pointC.x), y: parseFloat(pointC.y) },
    ];
    navigate('/display', { state: { points } });
  };

  return (
    <Grid container spacing={2} justifyContent="center" style={{ padding: '20px' }}>
      <Grid size={{ xs: 12 }}>
        <Typography variant="h4" align="center">
          Enter Points
        </Typography>
      </Grid>
      <Grid size={{ xs: 12, sm: 4 }}>
        <TextField
          label="Point A - X"
          variant="outlined"
          fullWidth
          value={pointA.x}
          onChange={(e) => setPointA({ ...pointA, x: e.target.value })}
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 4 }}>
        <TextField
          label="Point A - Y"
          variant="outlined"
          fullWidth
          value={pointA.y}
          onChange={(e) => setPointA({ ...pointA, y: e.target.value })}
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 4 }}>
        <TextField
          label="Point B - X"
          variant="outlined"
          fullWidth
          value={pointB.x}
          onChange={(e) => setPointB({ ...pointB, x: e.target.value })}
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 4 }}>
        <TextField
          label="Point B - Y"
          variant="outlined"
          fullWidth
          value={pointB.y}
          onChange={(e) => setPointB({ ...pointB, y: e.target.value })}
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 4 }}>
        <TextField
          label="Point C - X"
          variant="outlined"
          fullWidth
          value={pointC.x}
          onChange={(e) => setPointC({ ...pointC, x: e.target.value })}
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 4 }}>
        <TextField
          label="Point C - Y"
          variant="outlined"
          fullWidth
          value={pointC.y}
          onChange={(e) => setPointC({ ...pointC, y: e.target.value })}
        />
      </Grid>
      <Grid size={{ xs: 12 }}>
        <Button variant="contained" color="primary" onClick={handleSubmit} fullWidth>
          Show Triangle
        </Button>
      </Grid>
    </Grid>
  );
};

export default InputPage;
