import React, { Component } from 'react';
import Board from './comps/board';
import './style.css';

import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ClearIcon from '@mui/icons-material/Clear';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';

export default class Page extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <CssBaseline />
        <AppBar position="static">
          <Toolbar
            sx={{
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography variant="p">
              <ClearIcon sx={{ verticalAlign: 'middle' }} />
              &nbsp; TIC-TAC-TOE MANIA &nbsp;
              <PanoramaFishEyeIcon sx={{ verticalAlign: 'middle' }} />
            </Typography>
          </Toolbar>
        </AppBar>

        <div className="board">
          <Board />
        </div>
      </>
    );
  }
}
