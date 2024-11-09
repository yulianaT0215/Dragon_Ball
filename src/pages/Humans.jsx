import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Grid, CircularProgress, Typography } from '@mui/material';
import CharacterCard from '../components/CharacterCard';

const Humans = () => {
  const [humans, setHumans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHumans = async () => {
      setLoading(true);
      setError(null);

      let allHumans = [];
      let url = 'https://dragonball-api.com/api/characters';

      try {
        while (url) {
          const response = await axios.get(url);
          const data = response.data;

          // Filtra y agrega los personajes humanos al array total
          const filteredHumans = data.items.filter(character =>
            character.race && character.race.toLowerCase() === 'human'
          );

          allHumans = [...allHumans, ...filteredHumans];

          // Configura la URL para la siguiente página, si existe
          url = data.links.next || null;
        }

        setHumans(allHumans);
      } catch (err) {
        console.error(err);
        setError(err.response?.data?.message || 'Failed to load human characters.');
      } finally {
        setLoading(false);
      }
    };

    fetchHumans();
  }, []);

  if (loading) {
    return (
      <Container
        maxWidth="lg"
        sx={{
          backgroundColor: '#000',
          color: '#f00',
          padding: '20px',
          textAlign: 'center',
          minHeight: '100vh',
        }}
      >
        <Typography variant="h6" sx={{ color: '#00f' }}>
          Cargando humanos...
        </Typography>
        <CircularProgress sx={{ color: '#f00' }} />
      </Container>
    );
  }

  if (error) {
    return (
      <Container
        maxWidth="lg"
        sx={{
          backgroundColor: '#000',
          color: '#f00',
          textAlign: 'center',
          padding: '20px',
          minHeight: '100vh',
        }}
      >
        <Typography variant="h5">{error}</Typography>
      </Container>
    );
  }

  return (
    <Container
      maxWidth="lg"
      sx={{
        backgroundColor: '#000',
        color: '#00f',
        marginTop: '20px',
        padding: '20px',
        minHeight: '100vh',
      }}
    >
      <Typography
        variant="h3" // Cambiado a h3 para un tamaño más grande
        sx={{
          color: '#673AB7', // Cambiado a un color dorado
          marginBottom: '60px', // Margen de separación
          textAlign: 'center',
        }}
      >
        PERSONAJES HUMANOS
      </Typography>
      <Grid container spacing={2}>
        {humans.length > 0 ? (
          humans.map(human => (
            <Grid item xs={12} sm={6} md={4} key={human.id}>
              <CharacterCard character={human} />
            </Grid>
          ))
        ) : (
          <Typography variant="h6" sx={{ color: '#f00', textAlign: 'center' }}>
            No se encontraron personajes humanos.
          </Typography>
        )}
      </Grid>
    </Container>
  );
};

export default Humans;
