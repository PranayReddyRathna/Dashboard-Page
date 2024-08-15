// src/components/AddWidgetCard.js

import React from 'react';
import { Card, CardContent, Typography, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const AddWidget = ({ onAddWidget }) => {
  return (
    <Card
      variant="outlined"
      style={{
        margin: '20px',
        width: '300px',
        height:'310px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        backgroundColor: '#f0f0f0',
      }}
      onClick={onAddWidget}
    >
      <CardContent style={{ textAlign: 'center' }}>
        <IconButton color="primary">
          <AddIcon style={{ fontSize: '3rem' }} />
        </IconButton>
        <Typography variant="h6" component="div">
          Add Widget
        </Typography>
      </CardContent>
    </Card>
  );
};

export default AddWidget;

