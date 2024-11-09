import React, { useEffect, useState } from 'react';
import { Container, Grid, CircularProgress, Typography, Alert, Box } from '@mui/material';
import CharacterCard from '../components/CharacterCard';
import axios from 'axios';

const Aliens = () => {
  const [aliens, setAliens] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAliens = async () => {
      setLoading(true);
      setError(null);

      let allAliens = [];
      let url = 'https://dragonball-api.com/api/characters';

      try {
        while (url) {
          const response = await axios.get(url);
          const data = response.data;

          console.log('Datos recibidos:', data); // Verifica la estructura de los datos

          // Filtrar los personajes que no son humanos
          const filteredAliens = data.items.filter(character => character.race && character.race.toLowerCase() !== 'human');
          console.log('Filtrados:', filteredAliens); // Inspecciona los personajes filtrados
          allAliens = [...allAliens, ...filteredAliens];

          // Configura la URL para la siguiente página, si existe
          url = data.links.next || null;
        }

        setAliens(allAliens);
      } catch (error) {
        console.error('Error fetching alien characters:', error.response ? error.response.data : error.message);
        setError(`No se pudieron cargar los personajes alienígenas: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchAliens();
  }, []);

  if (loading) {
    return (
      <Container>
        <Typography variant="h6" align="center">Cargando alienígenas...</Typography>
        <CircularProgress />
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Alert severity="error">{error}</Alert>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" style={{ marginTop: '20px' }}>
      <Box mb={10} textAlign="center"> {/* Aumenta el espacio entre el título y las tarjetas */}
        <Typography variant="h3" style={{ fontWeight: 'bold', color: '#6A1B9A' }}> {/* Cambiado a un tono morado */}
          PERSONAJES NO_HUMANOS
        </Typography>
        <Typography variant="subtitle1" style={{ color: '#9C27B0' }}>
          
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {aliens.length > 0 ? (
          aliens.map(alien => (
            <Grid item xs={12} sm={6} md={4} key={alien.id}>
              <CharacterCard character={alien} />
            </Grid>
          ))
        ) : (
          <Typography variant="h6" align="center">No se encontraron personajes alienígenas.</Typography>
        )}
      </Grid>
    </Container>
  );
};

export default Aliens;
