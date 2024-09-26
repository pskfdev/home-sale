import React from 'react';
import Button from '@mui/material/Button';

export const StyleButton = ({ children, ...props }) => {
    return (
      <Button
        {...props}
        className="!bg-red-500 !text-white hover:!bg-red-700"
      >
        {children}
      </Button>
    );
  };
  