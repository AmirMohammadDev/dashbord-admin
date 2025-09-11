import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
    { field: "NAME", headerName: "NAME", flex: 2, disableColumnMenu: true },
    {
        field: "PROGRESS",
        headerName: "PROGRESS",
        flex: 1,
        disableColumnMenu: true,
    },
    {
        field: "QUANTITY",
        headerName: "QUANTITY",
        flex: 1,
        disableColumnMenu: true,
    },
    { field: "DATE", headerName: "DATE", flex: 2, disableColumnMenu: true },
];

const rows = [
    {
        id: 1,
        NAME: "Horizon UI PRO",
        PROGRESS: "70%",
        QUANTITY: 340,
        DATE: "12 Jan 2025",
    },
    {
        id: 2,
        NAME: "Weekly Update",
        PROGRESS: "90%",
        QUANTITY: 120,
        DATE: "15 Jan 2025",
    },
    {
        id: 3,
        NAME: "Marketplace",
        PROGRESS: "40%",
        QUANTITY: 210,
        DATE: "18 Jan 2025",
    },
    {
        id: 4,
        NAME: "Dashboard",
        PROGRESS: "55%",
        QUANTITY: 98,
        DATE: "22 Jan 2025",
    },
    {
        id: 5,
        NAME: "amin",
        PROGRESS: "15%",
        QUANTITY: 65,
        DATE: "2 Jan 2025",
    },
    {
        id: 6,
        NAME: "ali",
        PROGRESS: "24%",
        QUANTITY: 98,
        DATE: "9 Jan 2025",
    },
];

export default function DataGridTable() {
    return (
        <Box
            sx={{
                height: 400,
                width: "100%",
                 overflowX: "auto", 
                "& .MuiDataGrid-root": {
                    border: "none",
                    outline: "none",
                    boxShadow: "none",
                    borderRadius: "0",
                    minWidth: "600px",
                },
                "& .MuiCheckbox-root": {
                    // fill: "transparent !important", // بک‌گراند داخل خالی باشه
                    stroke: "white !important", // رنگ خط (دورش) سفید
                    strokeWidth: 0.1, // ضخامت خط دور
                    borderRadius: "4px !important",
                    color:"inherit"
                },
                "& .MuiDataGri d-row--borderBottom": {
                    borderBottom: "none !important",
                },
                "& .MuiDataGrid-columnSeparator": {
                    display: "none",
                },
                "& .MuiDataGrid-columnHeaderTitle": {
                    color: "#000", // متن عنوان ستون
                    fontWeight: "bold",
                    fontSize: "13px",
                },
                "& .MuiDataGrid-cell": {
                    fontSize: "15px",
                    fontWeight: "bold",
                    border: "none",
                    outline: "none",
                },
                "& .MuiDataGrid-row": {
                    border: "none",
                    outline: "none",
                },
                "& .MuiDataGrid-row:hover": {
                    backgroundColor: "transparent !important",
                },
                "& .MuiDataGrid-row.Mui-selected": {
                    backgroundColor: "transparent !important",
                },
                "& .MuiCheckbox-root.Mui-checked": {
                    color: "#7551FF !important",
                },
                "& .MuiDataGrid-footerContainer": {
                    border: "none",
                    outline: "none",
                    backgroundColor: "#111C44",
                    color: "#fff",
                },
                "& .MuiDataGrid-sortIcon": {
                    display: "none",
                },
                "& .MuiDataGrid-filler": {
                    display: "none",
                },
                "& .MuiDataGrid-cell:focus": {
                    outline: "none !important",
                },
                "& .MuiDataGrid-cell:focus-within": {
                    outline: "none !important",
                },
                "& .MuiDataGrid-columnHeader:focus": {
                    outline: "none !important",
                },
                "& .MuiDataGrid-columnHeader:focus-within": {
                    outline: "none !important",
                },
            }}
        >
            <DataGrid
                rows={rows}
                columns={columns}
                checkboxSelection
                disableRowSelectionOnClick
                hideFooter
                disableColumnMenu
                disableColumnFilter
                disableColumnSelector
                disableColumnResize
            />
        </Box>
    );
}
