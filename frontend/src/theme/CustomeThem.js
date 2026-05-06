import { createTheme } from "@mui/material";

const CustomeTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#111111",
    },
    secondary: {
      main: "#C9A96E",
    },
    background: {
      default: "#FAFAFA",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#1A1A1A",
      secondary: "#666",
    },
    divider: "#EAEAEA",
  },

  typography: {
    fontFamily: "'Be Vietnam Pro', sans-serif",
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 600 },
    h4: { fontWeight: 600 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
    button: { fontWeight: 600 },
  },

  shape: {
    borderRadius: 8,
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "8px",
          transition: "all 0.3s ease",
          fontWeight: 600,
        },
        containedPrimary: {
          backgroundColor: "#111",
          color: "#fff",
          "&:hover": {
            backgroundColor: "#fff",
            color: "#111",
            border: "1px solid #111",
          },
        },
      },
    },
  },
});

export default CustomeTheme;
