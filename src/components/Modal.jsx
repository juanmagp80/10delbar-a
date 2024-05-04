// En Modal.js
import { useEffect } from 'react';
import { Button } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
const Modal = ({ isOpen, onClose, children }) => {
  const [isClosing, setIsClosing] = useState(false);
  useEffect(() => {
    if (isOpen) {
      setIsClosing(false);
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(onClose, 2000)
  }
  if (!isOpen && !isClosing) return null;

  return (
    <div className={`fixed top-0 left-1/4 w-1/2 h-full bg-black bg-opacity-50 z-50 flex items-center justify-center ${isClosing ? 'animate-slide-up' : 'animate-slide-down'}`}>
      <div className="bg-white font-just p-4 rounded max-w-90 max-h-90 overflow-auto">
        <Box display="flex" justifyContent="center" mb={2}>
          <Button variant="contained" color="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Box>
        {children}
      </div>
    </div>
  );
};


export default Modal;