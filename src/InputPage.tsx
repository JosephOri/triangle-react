import { useState } from 'react';
import { Grid, TextField, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function InputPage() {
  const [pointA, setPointA] = useState({ x: '', y: '' });
  const [pointB, setPointB] = useState({ x: '', y: '' });
  const [pointC, setPointC] = useState({ x: '', y: '' });
  const navigate = useNavigate();

  const handleSubmit = () => {
    const points = [
      { x: parseFloat(pointA.x), y: parseFloat(pointA.y) },
      { x: parseFloat(pointB.x), y: parseFloat(pointB.y) },
      { x: parseFloat(pointC.x), y: parseFloat(pointC.y) },
    ];
    navigate('/display', { state: { points } });
  };

  return (
    <Grid container direction="column" spacing={3} alignItems="center" style={{ padding: '20px' }}>
      <Grid>
        <Typography variant="h4">Enter Points</Typography>
      </Grid>
      <Grid container direction="row" spacing={2} alignItems="center">
        <Grid>
          <Typography variant="h6">Point A</Typography>
        </Grid>
        <Grid>
          <TextField
            label="X"
            variant="outlined"
            value={pointA.x}
            onChange={(e) => setPointA({ ...pointA, x: e.target.value })}
          />
        </Grid>
        <Grid>
          <TextField
            label="Y"
            variant="outlined"
            value={pointA.y}
            onChange={(e) => setPointA({ ...pointA, y: e.target.value })}
          />
        </Grid>
      </Grid>
      {/* Point B */}
      <Grid container direction="row" spacing={2} alignItems="center">
        <Grid>
          <Typography variant="h6">Point B</Typography>
        </Grid>
        <Grid>
          <TextField
            label="X"
            variant="outlined"
            value={pointB.x}
            onChange={(e) => setPointB({ ...pointB, x: e.target.value })}
          />
        </Grid>
        <Grid>
          <TextField
            label="Y"
            variant="outlined"
            value={pointB.y}
            onChange={(e) => setPointB({ ...pointB, y: e.target.value })}
          />
        </Grid>
      </Grid>
      {/* Point C */}
      <Grid container direction="row" spacing={2} alignItems="center">
        <Grid>
          <Typography variant="h6">Point C</Typography>
        </Grid>
        <Grid>
          <TextField
            label="X"
            variant="outlined"
            value={pointC.x}
            onChange={(e) => setPointC({ ...pointC, x: e.target.value })}
          />
        </Grid>
        <Grid>
          <TextField
            label="Y"
            variant="outlined"
            value={pointC.y}
            onChange={(e) => setPointC({ ...pointC, y: e.target.value })}
          />
        </Grid>
      </Grid>
      {/* Submit Button */}
      <Grid>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Show Triangle
        </Button>
      </Grid>
    </Grid>
  );
}

export default InputPage;
