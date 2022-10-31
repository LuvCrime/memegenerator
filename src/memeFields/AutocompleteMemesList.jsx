import { Box, TextField, Autocomplete, InputLabel } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMemesList, getChosenMeme, getMemeName } from "../store/actions";

export const AutocompleteMemesList = () => {
  const [value, setValue] = useState("Doge");
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getChosenMeme(value));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(getMemesList());
  }, [dispatch]);

  const autocompleteHendler = (e, newValue) => {
    setValue(newValue);
    dispatch(getMemeName(newValue));
    dispatch(getChosenMeme(newValue));
  };

  return (
    <Box className="fields" display="flex" flexDirection="column">
      <Box mb={1}>
        <InputLabel>Choose meme</InputLabel>
        <Autocomplete
          value={value}
          inputValue={inputValue}
          onChange={(e, newValue) => {
            autocompleteHendler(e, newValue);
          }}
          onInputChange={(e, newInputValue) => {
            setInputValue(newInputValue);
          }}
          options={useSelector((state) => state.memesList)}
          renderInput={(params) => <TextField {...params} />}
        ></Autocomplete>
      </Box>
    </Box>
  );
};
