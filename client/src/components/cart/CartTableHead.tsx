import { TableHead, TableRow, TableCell } from "@mui/material";

export default function CartTableHead() {
  return (
    <TableHead sx={{ borderTop: "1px solid rgba(0, 0, 0, 0.3)" }}>
      <TableRow>
        <TableCell sx={{ borderBottom: "1px solid rgba(0, 0, 0, 0.3)" }}></TableCell>
        <TableCell sx={{ borderBottom: "1px solid rgba(0, 0, 0, 0.3)" }}>Product</TableCell>
        <TableCell sx={{ borderBottom: "1px solid rgba(0, 0, 0, 0.3)" }} align="center">
          Price
        </TableCell>
        <TableCell sx={{ borderBottom: "1px solid rgba(0, 0, 0, 0.3)" }} align="center">
          Qty
        </TableCell>
        <TableCell sx={{ borderBottom: "1px solid rgba(0, 0, 0, 0.3)" }} align="right">
          Total
        </TableCell>
      </TableRow>
    </TableHead>
  );
}
