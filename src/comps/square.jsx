import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Square(props) {
  const styleGreen = {
    fontSize: 30,
    borderRadius: 0,
    backgroundColor: 'green',
    margin: "10px",
    maxWidth: '50px',
    maxHeight: '50px',
    minWidth: '50px',
    minHeight: '50px',
  };

  const styleNorm = {
    fontSize: 30,
    borderRadius: 0,
    margin: "10px",
    maxWidth: '50px',
    maxHeight: '50px',
    minWidth: '50px',
    minHeight: '50px',
  };

  return (
    <Button variant="contained" style={props.highlight ? styleGreen : styleNorm} onClick={props.onClick}>
      <Typography>{props.value}</Typography>
    </Button>
  );
}
