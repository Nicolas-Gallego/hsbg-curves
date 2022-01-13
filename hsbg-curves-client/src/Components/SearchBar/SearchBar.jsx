/* eslint-disable react-hooks/rules-of-hooks */
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Paper from '@material-ui/core/Paper';
import heroes from '../../heroes.json';
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

const searchBar = () => {
  const heroesNames = heroes.map((id) => id.name);
  console.log(heroesNames);
  const classes = useStyles();
  return (
    <Autocomplete
      classes={classes}
      disablePortal
      clearOnEscape
      id="combo-box-demo"
      options={heroesNames}
      sx={{ width: 300 }}
      PaperComponent={({ children }) => (
        <Paper
          style={{
            background: '#6a2d56',
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
  );
};
export default searchBar;
