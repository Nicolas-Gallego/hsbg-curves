import { useEffect, useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import heroes from '../../heroes.json';
import { Link } from 'react-router-dom';
import styles from './LandingPage.module.scss';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  inputRoot: {
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#ffa400',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: '#ffa400 !important',
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#ffa400 !important',
    },
    '&.Mui-focused .MuiInputLabel-formControl': {
      color: '#ffa400 !important',
    },
    '& .MuiAutocomplete-popupIndicator': {
      color: '#ffa400 !important',
    },
    '& .MuiAutocomplete-clearIndicator': {
      color: '#ffa400 !important',
    },
    '& #combo-box-demo': {
      color: '#ffff',
    },
  },
}));

function LandingPage() {
  const heroesNames = heroes.map((id) => id.name);
  const classes = useStyles();
  const [selected, setSelected] = useState('');
  const [selectedHero, setSelectedHero] = useState('');

  useEffect(() => {
    if (selected) {
      setSelectedHero(heroes.find((h) => h.name === selected));
    }
  }, [selected]);

  const handleChange = (event, value) => setSelected(value);

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <div className={styles.searchBar}>
          <Autocomplete
            classes={classes}
            disablePortal
            clearOnEscape
            onChange={handleChange}
            id="combo-box-demo"
            options={heroesNames}
            sx={{ width: 300 }}
            PaperComponent={({ children }) => (
              <Paper
                style={{
                  background: '#3d002df1',
                  color: '#ffff',
                  border: 'solid 1px #ffa400',
                  borderTop: 'none',
                }}
              >
                {children}
              </Paper>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                InputLabelProps={{
                  style: { color: '#fff' },
                }}
                label="Search for a hero"
              />
            )}
          />
        </div>
        <div className={styles.heroesList}>
          {selected !== undefined && selected !== null && selectedHero ? (
            <div key={selectedHero.id} className={styles.hero}>
              <Link to={`/hero/${selectedHero.id}/${selectedHero.name}`}>
                <img
                  src={selectedHero.image}
                  alt={selectedHero.name}
                  className={styles.heroImage}
                />
              </Link>
            </div>
          ) : (
            <>
              {heroes.map((data) => (
                <div key={data.id} className={styles.hero}>
                  <Link to={`/hero/${data.id}/${data.name}`}>
                    <img
                      src={data.image}
                      alt={data.name}
                      className={styles.heroImage}
                    />
                  </Link>
                </div>
              ))}
            </>
          )}
        </div>
      </main>
    </>
  );
}
export default LandingPage;
