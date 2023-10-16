import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const createData = (Name, Stock, Price, Sales) => {
  return { Name, Stock, Price, Sales };
};

const rows = [
  createData("Abstract 3D", 32, 45.99, 20),
  createData("Sarphins Illusion", 32, 45.99, 20),
  createData("Absolute 4K", 32, 45.99, 20),
];

const TableData = () => {
  return (
    <TableContainer component={Paper} sx={{ width: "100%" }}>
      <h2 style={{ textAlign: "left", paddingLeft: "40px" }}>Product Sell</h2>

      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Product Name</TableCell>
            <TableCell align="right">Stock</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Total Sales</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.Name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <h2>{row.Name}</h2>
              </TableCell>
              <TableCell align="right">{row.Stock} in Stock</TableCell>
              <TableCell align="right">$ {row.Price}</TableCell>
              <TableCell align="right">{row.Sales}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default TableData;
