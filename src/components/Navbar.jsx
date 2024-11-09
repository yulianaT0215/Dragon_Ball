import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#beff33', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
      <Toolbar sx={{ justifyContent: 'space-between', paddingY: 1 }}> {/* Añadir padding vertical */}
        <Typography 
          variant="h6" 
          sx={{ 
            flexGrow: 1, 
            fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
            color: '#000',
            fontWeight: 'bold',
            letterSpacing: '0.1rem',
          }}
        >
          DRAGONBALL Z
        </Typography>
        <div>
          {['Home', 'Aliens', 'Humans', 'About'].map((text) => (
            <Button 
              key={text}
              sx={{ 
                color: '#000', 
                fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif', 
                marginLeft: 2,
                padding: '8px 16px',
                transition: 'background-color 0.3s, color 0.3s',
                '&:hover': {
                  backgroundColor: '#d0ff7f',
                  color: '#fff',
                },
              }} 
              component={Link} 
              to={`/${text.toLowerCase()}`}
            >
              {text}
            </Button>
          ))}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
