import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Menu,
  MenuItem,
  LinearProgress,
  Typography,
  Box,
  Stack
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import ErrorIcon from "@mui/icons-material/Error";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

const rows = [
  {
    name: "Horizon UI PRO",
    status: "Approved",
    date: "18 Apr 2022",
    progress: 75.5
  },
  {
    name: "Horizon UI Free",
    status: "Disable",
    date: "18 Apr 2022",
    progress: 25.5
  },
  {
    name: "Marketplace",
    status: "Error",
    date: "20 May 2021",
    progress: 90
  },
  {
    name: "Weekly Updates",
    status: "Approved",
    date: "12 Jul 2021",
    progress: 50.5
  }
];

export default function Grid() {

  return (
    <Box>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h5" className="dark:text-white">Complex Table</Typography>
        <div className="bg-[#F4F7FE] rounded-xl w-10 h-10 cursor-pointer dark:bg-[#1F294F] dark:text-white text-[#422AFB] flex justify-center items-center">
          <MenuRoundedIcon>
          </MenuRoundedIcon>
        </div>
      </Stack>

      <TableContainer component={Paper} sx={{ boxShadow: "none", marginTop:"20px"}}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>NAME</TableCell>
              <TableCell>STATUS</TableCell>
              <TableCell>DATE</TableCell>
              <TableCell>PROGRESS</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Typography>{row.name}</Typography>
                </TableCell>
                <TableCell>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    {row.status === "Approved" && (
                      <CheckCircleIcon color="success" fontSize="small" />
                    )}
                    {row.status === "Disable" && (
                      <CancelIcon color="error" fontSize="small" />
                    )}
                    {row.status === "Error" && (
                      <ErrorIcon color="warning" fontSize="small" />
                    )}
                    <Typography>{row.status}</Typography>
                  </Stack>
                </TableCell>
                <TableCell>
                  <Typography>{row.date}</Typography>
                </TableCell>
                <TableCell>
                  <Box sx={{ width: "100%", mr: 1 }}>
                    <LinearProgress
                      variant="determinate"
                      value={row.progress}
                      sx={{
                        height: 8,
                        borderRadius: 5
                      }}
                    />
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
