import * as React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { PickersCalendarHeader } from "@mui/x-date-pickers/PickersCalendarHeader";
import dayjs from "dayjs";

function CustomCalendarHeader(props) {
    return (
        <PickersCalendarHeader
            {...props}
            sx={{
                "& .MuiPickersCalendarHeader-labelContainer": {
                    justifyContent: "center", // ماه/سال وسط
                },
                "& .MuiPickersArrowSwitcher-button": {
                    backgroundColor: "#4318FF",
                    borderRadius: "30%",
                    color: "white",
                },
                "& .MuiPickersArrowSwitcher-root": {
                    gap: "10px",
                },
                "& .MuiTypography-root": {
                    backgroundColor: "gray !important",
                },
                "& .MuiPickersCalendarHeader-switchViewButton": {
                    display: "none ",
                },
            }}
        />
    );
}

export default function Calendar() {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar
            
                slots={{
                    calendarHeader: CustomCalendarHeader,
                }}
                fixedWeekNumber={6}
                defaultValue={dayjs()}
                sx={{
                    width:"100%",
                    "& .MuiPickersDay-root": {
                        color: "#000",
                        // backgroundColor: "transparent",
                    },
                    "&  .MuiPickersDay-root.Mui-selected": {
                        backgroundColor: "#4318FF",
                        color: "#fff !important",
                        "&:hover": {
                            backgroundColor: "#4318FF !important",
                        },
                    },
                    "& .dark.MuiPickersDay-root.Mui-selected": {
                        backgroundColor: "#7551FF !important",
                        color: "#fff !important",
                        "&:hover": {
                            backgroundColor: "#7551FF",
                        },
                    },
                    "& .MuiPickersArrowSwitcher-button:hover": {
                        backgroundColor: "red",
                    },
                    "& .MuiPickersDay-root.MuiPickersDay-today": {
                        border: "1px solid #4318FF !important",
                    },
                    "& .MuiYearCalendar-button.Mui-selected": {
                        border: "1px solid #4318FF !important",
                        color: "#fff", // متن مشکی
                        backgroundColor: "#4318FF",
                    },
                    "& .MuiPickersDay-root.MuiPickersDay-today:not(.Mui-selected)":
                        {
                            border: "1px solid #4318FF !important",
                            backgroundColor: "transparent !important",
                        },
                }}
            />
        </LocalizationProvider>
    );
}
