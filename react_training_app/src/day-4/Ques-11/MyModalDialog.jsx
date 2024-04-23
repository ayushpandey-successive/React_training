/*Design a modal dialog component using Material-UI's Dialog component. Use it to display additional information or capture user input within your app.*/

// MyModalDialog.js

import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

const MyModalDialog = ({ open, onClose }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleConfirm = () => {
    
    console.log('User input:', inputValue);
    onClose(); 
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>My Modal Dialog</DialogTitle>
      <DialogContent>
        <p>Enter something:</p>
        <input type="text" value={inputValue} onChange={handleInputChange} />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleConfirm} color="primary">
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default MyModalDialog;
