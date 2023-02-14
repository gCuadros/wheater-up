import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      html: {
        width: "100%",
        height: "100%",
        backgroundColor: "gray.50",
      },
      body: {
        width: "100%",
        height: "100%",
        overflow: "hidden",
        backgroundColor: "gray.50",
      },
      "#__next": {
        width: "100%",
        minHeight: "100%",
        color: "wBlack.300",
        display: "flex",
        flexDirection: "column",
      },
    },
  },
});

export default theme;
