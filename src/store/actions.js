const params = {
  method: "GET",
  bottom: "",
  top: "",
  meme: "Doge",
  font_size: "50",
  font: "Impact",
};

const key = "yourKey";
const host = "ronreiter-meme-generator.p.rapidapi.com";

export const getMemesList = () => {
  const url = "https://ronreiter-meme-generator.p.rapidapi.com/images";

  params.headers = {
    "X-RapidAPI-Key": key,
    "X-RapidAPI-Host": host,
  };

  return (dispatch) => {
    fetch(url, params)
      .then((response) => response.json())
      .then((memesList) => {
        return dispatch({
          type: "MEMES_LIST",
          payload: {
            memesList,
          },
        });
      });
  };
};

export const getChosenMeme = (
  meme,
  top = "Top Text",
  bottom = "Bottom Text"
) => {
  const url = `https://ronreiter-meme-generator.p.rapidapi.com/meme?top=${top}%20&bottom=${bottom}%20&meme=${meme}&font_size=50&font=Impact`;

  params.headers = {
    "content-type": "image/jpeg",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, OPTIONS, POST, PUT",
    "X-RapidAPI-Key": key,
    "X-RapidAPI-Host": host,
  };

  return (dispatch) => {
    const myFetch = fetch(url, params);
    myFetch
      .then((response) => {
        return response.blob();
      })
      .then((chosenMeme) => {
        var reader = new FileReader();
        reader.readAsDataURL(chosenMeme);
        return (reader.onloadend = function () {
          var base64data = reader.result;
          dispatch({
            type: "CHOSEN_MEME",
            payload: {
              chosenMeme: base64data,
            },
          });
        });
      });
  };
};

export const topTextValue = (top) => {
  return {
    type: "TOP_TEXT",
    payload: {
      top,
    },
  };
};

export const bottomTextValue = (bottom) => {
  return {
    type: "BOTTOM_TEXT",
    payload: {
      bottom,
    },
  };
};

export const getMemeName = (name) => {
  return {
    type: "MEME_NAME",
    payload: {
      name,
    },
  };
};
