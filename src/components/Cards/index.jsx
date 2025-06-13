import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const card = (
  <React.Fragment>
    <CardContent>
      <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
        Task
      </Typography>
      <Typography variant="h5" component="div">
        Fazer relatório
      </Typography>
      <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>22/05</Typography>
      <Typography variant="body2">
        Relatório de pentest
        <br />
        {'"e-commerce"'}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Mover tarefa</Button>
    </CardActions>
  </React.Fragment>
);

export default function OutlinedCard() {
  return (
    <Box className='w-64' sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}