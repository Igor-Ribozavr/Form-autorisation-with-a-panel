import React, { useState } from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import { useDispatch } from 'react-redux';
import './like.css';

let arr = [];

function Like() {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    checkedA: true,
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    event.target.checked ? arr.push(event.target.checked) : arr.pop();
    dispatch({ type: 'COUNT', payload: arr });
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
