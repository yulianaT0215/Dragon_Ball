import React from 'react';
import { Container, Typography, Card, CardContent, CardMedia, Box } from '@mui/material';

const About = () => {
  return (
    <Container 
      maxWidth="md" 
      style={{ 
        marginTop: '20px', 
        padding: '20px', 
        backgroundColor: '#F3E5F5', // Color de fondo pastel
        borderRadius: '10px', 
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' 
      }}
    >
      <Box display="flex" justifyContent="center">
        <Card 
          sx={{ 
            borderRadius: '15px', 
            boxShadow: 3, 
            backgroundColor: '#E1BEE7' // Color de la tarjeta pastel
          }}
        >
          <CardMedia
            sx={{
              height: { xs: 200, md: 300 },
              width: '100%',
              objectFit: 'contain', // Cambiado a 'contain' para ajustar sin recortes
            }}
            image="https://i.blogs.es/6776c9/dragon-ball-z/500_333.jpeg" // Imagen de Dragon Ball
            alt="Dragon Ball Z"
          />
          <CardContent>
            <Typography 
              variant="h4" 
              component="div" 
              align="center" 
              gutterBottom
              style={{ color: '#AB47BC' }} // Tono de morado más oscuro
            >
              DRAGON BALL Z
            </Typography>
            <Typography 
              variant="body1" 
              color="text.secondary" 
              align="justify" 
              style={{ lineHeight: '1.6' }} // Espaciado de línea para mejor legibilidad
            >
              "Dragon Ball" es una serie de manga y anime creada por Akira Toriyama, que se publicó por primera vez en 1984. La historia sigue las aventuras de un joven guerrero llamado Goku, quien, a lo largo de la serie, busca las legendarias Esferas del Dragón, objetos mágicos que, al reunirse, pueden invocar a un dragón que concede deseos.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default About;
