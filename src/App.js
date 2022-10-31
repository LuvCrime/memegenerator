import { Header } from "./header/Header";
import { TextFields } from "./memeFields/TextFields";
import { AutocompleteMemesList } from "./memeFields/AutocompleteMemesList";
import { Box, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { MemeDisplayer } from "./memeDisplayer/MemeDisplayer";
import { DownloadButton } from "./downloadButton/DownloadButton";
import { GenerateButton } from "./generateButton/GenerateButton";

export const App = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box p={4}>
      <Header />
      <Box
        mt={2}
        display="flex"
        justifyContent="space-between"
        flexDirection={matches ? "column" : "row"}
      >
        <Box mr={1} width="50%">
          <AutocompleteMemesList />
          <TextFields />
          <Box mt={2} display="flex" justifyContent="space-between">
            <DownloadButton />
            <GenerateButton />
          </Box>
        </Box>
        <MemeDisplayer />
      </Box>
    </Box>
  );
};
