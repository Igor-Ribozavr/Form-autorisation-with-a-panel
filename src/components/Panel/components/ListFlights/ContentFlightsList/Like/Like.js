import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import './like.css';


function Like() {
 
  const [state, setState] = React.useState({
    checkedA: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <FormControlLabel
      control={
        <Checkbox
          onChange={handleChange}
          name="checkedA"
          icon={<FavoriteBorder />}
          checkedIcon={<Favorite />}
          classes={{ root: 'custom-checkbox-root' }}
        />
      }
    />
  );
}

export default Like;
