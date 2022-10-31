import { Box } from "@mui/material";
import { useSelector } from "react-redux";

export const MemeDisplayer = () => {
  const img = useSelector((state) => state.chosenMeme);
  
  return (
    <Box display="flex" justifyContent="center" width="50%">
      <img alt="meme" src={img} width="500px" height="500px" />
    </Box>
  );
};
