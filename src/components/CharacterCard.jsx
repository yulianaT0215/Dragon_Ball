import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

function CharacterCard({ character }) {
  return (
    <Card
      sx={{
        background: 'linear-gradient(135deg, #d1c4e9 30%, #b39ddb 90%)',
        color: '#4a148c',
        boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
        borderRadius: '15px',
        overflow: 'hidden',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'scale(1.03)',
          boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.15)',
        },
        minHeight: '500px',
      }}
    >
      <Box sx={{ height: '400px', overflow: 'hidden', position: 'relative' }}>
        <img
          src={character.image}
          alt={character.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain', // Cambiado a 'contain' para que la imagen no se recorte
            filter: 'brightness(0.8)',
            transition: 'filter 0.3s ease',
          }}
        />
      </Box>
      <CardContent sx={{ textAlign: 'center', padding: '20px' }}>
        <Typography
          variant="h5"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            fontSize: '1.5rem',
            letterSpacing: '1px',
            color: '#6a1b9a',
          }}
        >
          {character.name}
        </Typography>
        <Link
          to={`/characters/${character.id}`}
          style={{
            color: '#ffffff',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '1rem',
            padding: '8px 12px',
            borderRadius: '20px',
            backgroundColor: '#9c27b0',
            transition: 'background-color 0.3s ease, color 0.3s ease',
            display: 'inline-block',
            marginTop: '10px',
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#ab47bc';
            e.target.style.color = '#ffffff';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = '#9c27b0';
            e.target.style.color = '#ffffff';
          }}
        >
          Ver Detalles
        </Link>
      </CardContent>
    </Card>
  );
}

export default CharacterCard;
