import React, { useState } from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import { useDispatch, useSelector } from 'react-redux';
import './like.css';

function Like() {
  const data = useSelector((state) => state.panelReduser.count);
  const dispatch = useDispatch();
  const [state, setState] = useState({
    checkedA: true,
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    event.target.checked ? data.push(event.target.checked) : data.pop();
    dispatch({ type: 'COUNT', payload: data });
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
