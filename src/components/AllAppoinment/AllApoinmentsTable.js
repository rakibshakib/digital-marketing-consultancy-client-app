import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React from 'react';

const AllApoinmentsTable = ({allApoinments}) => {
    return (

        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Cutomer Name</TableCell>
                        <TableCell align="right">Apoinment On</TableCell>
                        <TableCell align="right">Phone</TableCell>
                        <TableCell align="right">Time</TableCell>
                        <TableCell align="right">Payment</TableCell>
                        <TableCell align="right">Date</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {allApoinments.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                            {row?.customerName}
                            </TableCell>
                            <TableCell align="right">{row?.appoinmentName}</TableCell>
                            <TableCell align="right">{row?.phone}</TableCell>
                            <TableCell align="right">{row?.bookingTime}</TableCell>
                            <TableCell align="right">{row?.payment}</TableCell>
                            <TableCell align="right">{row?.date}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>

    )
}

export default AllApoinmentsTable
