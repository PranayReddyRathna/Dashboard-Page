import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField } from '@mui/material';

const AddWidgetModal = ({ open, onClose, onSave }) => {
  const [widgetName, setWidgetName] = useState('');
  const [widgetText, setWidgetText] = useState('');

  const handleSave = () => {
    if (widgetName && widgetText) {
      onSave(widgetName, widgetText);
      onClose(); 
      setWidgetName(''); 
      setWidgetText('');
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add New Widget</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Widget Name"
          type="text"
          fullWidth
          value={widgetName}
          onChange={(e) => setWidgetName(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Widget Text"
          type="text"
          fullWidth
          value={widgetText}
          onChange={(e) => setWidgetText(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSave} color="primary">Save</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddWidgetModal;
