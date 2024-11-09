import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';

const Sidebar = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      sx={{
        width: '220px',
        backgroundColor: 'linear-gradient(135deg, #d1c4e9 30%, #b39ddb 90%)',
        color: '#333',
        position: 'fixed',
        top: 0,
        right: 0,
        height: '100vh',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        boxShadow: '-2px 0 10px rgba(0, 0, 0, 0.2)',
        borderRadius: '0 0 0 15px',
      }}
    >
      <Box
        sx={{
          marginBottom: '20px',
          width: '100%',
          textAlign: 'center',
          overflow: 'hidden', // Asegura que la imagen se mantenga dentro del contenedor
        }}
        onMouseEnter={() => setIsHovered(true)} // Cambia el estado al pasar el mouse
        onMouseLeave={() => setIsHovered(false)} // Restablece el estado al salir el mouse
      >
        <img
          src="https://static.bandainamcoent.eu/high/dragon-ball/dragon-ball-sparking-zero/00-page-setup/Page-Setup-Revamp/DBSZ_thumbnail.jpg"
          alt="Encabezado"
          style={{
            width: '70%',
            borderRadius: '50%',
            border: '2px solid #ba68c8',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            marginBottom: '30px', // Aumentado el espacio entre la imagen y los botones
            transition: 'transform 0.3s ease', // Suaviza la transición
            transform: isHovered ? 'scale(1.1)' : 'scale(1)', // Escala la imagen al pasar el mouse
          }}
        />
      </Box>
      <Typography
        variant="h6"
        sx={{
          marginBottom: '15px',
          color: '#ba68c8',
          textAlign: 'center',
          fontSize: '1.4rem',
          fontWeight: 'bold',
          textTransform: 'uppercase', // Asegura que el texto esté en mayúsculas
        }}
      >
        DRAGONBALL Z
      </Typography>

      {['Home', 'NoHumanos', 'Humans', 'About'].map((text, index) => (
        <Button
          key={text}
          component={Link}
          to={`/${text.toLowerCase()}`}
          sx={{
            color: '#fff',
            backgroundColor: index % 2 === 0 ? '#ce93d8' : '#9575cd',
            marginBottom: '12px',
            padding: '10px 15px',
            width: '100%',
            justifyContent: 'flex-start',
            borderRadius: '5px',
            transition: 'background-color 0.3s, transform 0.2s',
            '&:hover': {
              backgroundColor: index % 2 === 0 ? '#ab47bc' : '#7e57c2',
              transform: 'scale(1.05)',
            },
          }}
        >
          {text}
        </Button>
      ))}
    </Box>
  );
};

export default Sidebar;
