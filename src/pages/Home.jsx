import { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterCard from '../components/CharacterCard';
import { Grid, Container, Typography } from '@mui/material';

function Home() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      setLoading(true);
      setError(null);

      let allCharacters = [];
      let url = 'https://dragonball-api.com/api/characters';

      try {
        while (url) {
          const response = await axios.get(url);
          const data = response.data;

          // Agrega los personajes de la página actual al array total
          allCharacters = [...allCharacters, ...data.items];
          
          // Configura la URL para la siguiente página, si existe
          url = data.links.next || null;
        }

        setCharacters(allCharacters);
      } catch (err) {
        console.error(err);
        setError(err.response?.data?.message || 'Failed to load characters.');
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  if (loading) {
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
        <Typography variant="h5">Loading...</Typography>
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
        color: '#f00',
        marginTop: '20px',
        padding: '20px',
        minHeight: '100vh',
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
          textAlign: 'center',
          marginBottom: '50px', // Margen entre el título y las tarjetas
          color: '#673AB7', // Color morado
          fontWeight: 'bold', // Negrita
          textTransform: 'uppercase', // Texto en mayúsculas
          letterSpacing: '1px', // Espaciado entre letras
        }}
      >
        Todos los personajes
      </Typography>
      <Grid container spacing={2}>
        {characters.map(character => (
          <Grid item xs={12} sm={6} md={4} key={character.id}>
            <CharacterCard character={character} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Home;
