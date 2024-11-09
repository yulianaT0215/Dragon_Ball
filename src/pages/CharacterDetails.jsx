import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, Typography, Box, Grid, Button, Card, CardContent, CircularProgress, Alert } from '@mui/material';

function CharacterDetail() {
  const { id } = useParams(); // Obtener el ID del personaje de la URL
  const navigate = useNavigate(); // Inicializar useNavigate
  const [characters, setCharacters] = useState([]); // Estado para almacenar todos los personajes
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        let allCharacters = [];
        let url = 'https://dragonball-api.com/api/characters';

        // Recorrer la API para obtener todos los personajes
        while (url) {
          const response = await axios.get(url);
          const data = response.data;

          allCharacters = [...allCharacters, ...data.items]; // Agregar los personajes a la lista

          // Configurar la URL para la siguiente página, si existe
          url = data.links.next || null;
        }

        setCharacters(allCharacters); // Almacenar todos los personajes
        const foundCharacter = allCharacters.find(char => char.id === parseInt(id)); // Buscar el personaje específico
        setCharacter(foundCharacter); // Configurar el personaje encontrado
      } catch (err) {
        console.error(err);
        setError('No se pudieron cargar los detalles del personaje.');
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, [id]);

  if (loading) {
    return (
      <Container maxWidth="lg" style={{ marginTop: '20px', textAlign: 'center' }}>
        <CircularProgress color="primary" />
        <Typography variant="h5" style={{ marginTop: '20px' }}>Cargando...</Typography>
      </Container>
    );
  }

  if (error || !character) {
    return (
      <Container maxWidth="lg" style={{ marginTop: '20px', textAlign: 'center' }}>
        <Alert severity="error">{error || 'Personaje no encontrado.'}</Alert>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" style={{ marginTop: '20px', padding: '20px' }}>
      <Typography
        variant="h4"
        style={{
          fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
          textAlign: 'center',
          marginBottom: '20px',
          color: '#673AB7', // Color morado
          fontWeight: 'bold',
          marginLeft: '40px' // Ajustar la posición del título hacia la derecha
        }}
      >

      </Typography>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={6} md={4} style={{ display: 'flex', justifyContent: 'center' }}>
          <img
            src={character.image}
            alt={character.name}
            style={{ width: '70%', height: 'auto', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)', marginBottom: '20px' }} // Ajustado a 70%
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Card sx={{ padding: '20px', backgroundColor: '#7E57C2', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}>
            <CardContent style={{ textAlign: 'center' }}>
              <Typography variant="h5" component="div" style={{ color: '#FFF', fontWeight: 'bold', marginBottom: '10px' }}>
                {character.name}
              </Typography>
              <Typography variant="body2" style={{ marginBottom: '20px', textAlign: 'left', color: '#FFF' }}>
                <strong>Ki:</strong> {character.ki}<br />
                <strong>Max Ki:</strong> {character.maxKi}<br />
                <strong>Raza:</strong> {character.race}<br />
                <strong>Género:</strong> {character.gender}<br />
                <strong>Descripción:</strong> {character.description}<br />
                <strong>Afilicación:</strong> {character.affiliation}
              </Typography>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#BA68C8', // Color morado pastel
                  color: '#FFF',
                  '&:hover': { backgroundColor: '#9C27B0' } // Color morado más oscuro al pasar el mouse
                }}
                onClick={() => navigate(-1)} // Navegar a la página anterior
              >
                Atrás
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default CharacterDetail;
