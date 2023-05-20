import * as React from "react";
import { LocalizationProvider, DateCalendar } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: "red", // Set the font color to red
        },
      },
    },
  },
});

const CalendarComponent = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ThemeProvider theme={theme}>
        <DateCalendar />
      </ThemeProvider>
    </LocalizationProvider>
  );
};

export default CalendarComponent;
