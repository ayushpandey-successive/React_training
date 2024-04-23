import React, { useState } from 'react';
import Button from '@mui/material/Button';
import MyModalDialog from './MyModalDialog'; // Import your modal component

const ButtonDialog = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleOpenDialog}>
        Open Modal Dialog
      </Button>
      <MyModalDialog open={dialogOpen} onClose={handleCloseDialog} />
    </div>
  );
};

export default ButtonDialog;