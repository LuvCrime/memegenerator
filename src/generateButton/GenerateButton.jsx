import { Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { getChosenMeme } from "../store/actions";

export const GenerateButton = () => {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.name);
  const topText = useSelector((state) => state.top);
  const bottomText = useSelector((state) => state.bottom);

  return (
    <Button
      onClick={() => dispatch(getChosenMeme(name, topText, bottomText))}>Generate</Button>
  );
};
