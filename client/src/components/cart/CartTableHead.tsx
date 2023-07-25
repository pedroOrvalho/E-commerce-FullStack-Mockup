import { TableHead, TableRow, TableCell } from "@mui/material";

export default function CartTableHead() {
  return (
    <TableHead>
      <TableRow>
        <TableCell></TableCell>
        <TableCell>Product</TableCell>
        <TableCell align="center">Price</TableCell>
        <TableCell align="center">Qty</TableCell>
        <TableCell align="right">Total</TableCell>
      </TableRow>
    </TableHead>
  );
}
