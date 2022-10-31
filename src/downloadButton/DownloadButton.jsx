import { Button } from "@mui/material";
import { useSelector } from "react-redux";

export const DownloadButton = () => {
  const img = useSelector((state) => state.chosenMeme);

  const downloadImage = (src) => {
    console.log(src)
    const img = new Image();
    img.crossOrigin = "anonymous"; 
    img.src = src;
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      const a = document.createElement("a");
      a.download = "download.png";
      a.href = canvas.toDataURL("image/png");
      a.click();
    };
  }

  return <Button onClick={() => downloadImage(img)}>Download</Button>;
};
