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

  shape: {
    borderRadius: 6,
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "8px", // 👈 bo góc nhẹ (đẹp hơn 999px)
          transition: "all 0.3s ease",
        },

        containedPrimary: {
          backgroundColor: "#111",
          color: "#fff",
          border: "1px solid #111",

          "&:hover": {
            backgroundColor: "#fff", // 👈 đảo sang trắng
            color: "#111", // 👈 chữ đen
            border: "1px solid #111", // 👈 giữ viền
          },
        },

        outlinedPrimary: {
          border: "1px solid #111",
          color: "#111",

          "&:hover": {
            backgroundColor: "#111",
            color: "#fff",
          },
        },
      },
    },

    MuiIconButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "#f2f2f2",
          },
        },
      },
    },
  },
});

export default CustomeTheme;
