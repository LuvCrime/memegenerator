import { Box, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { topTextValue, bottomTextValue } from "../store/actions";

export const TextFields = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Box mb={1}>
        <TextField
          label="Top Text"
          sx={{ width: "100%" }}
          onChange={(e) => dispatch(topTextValue(e.target.value))}
        ></TextField>
      </Box>
      <Box mb={1}>
        <TextField
          label="Bottom Text"
          sx={{ width: "100%" }}
          onChange={(e) => dispatch(bottomTextValue(e.target.value))}
        ></TextField>
      </Box>
    </>
  );
};
