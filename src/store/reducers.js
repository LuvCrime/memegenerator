const initialState = {
  memesList: [], 
  chosenMeme: "",
  top: "",
  bottom: "",
  name: "Doge",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "MEMES_LIST":
      return {
        ...state,
        memesList: action.payload.memesList,
      };

    case "CHOSEN_MEME":
      return {
        ...state,
        chosenMeme: action.payload.chosenMeme,
      };

    case "TOP_TEXT":
      return {
        ...state,
        top: action.payload.top,
      };

    case "BOTTOM_TEXT":
      return {
        ...state,
        bottom: action.payload.bottom,
      };

    case "MEME_NAME":
      return {
        ...state,
        name: action.payload.name,
      };

    default:
      return state;
  }
};
export default reducer;
