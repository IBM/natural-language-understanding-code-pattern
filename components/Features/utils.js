/* eslint-disable react/jsx-key */
import React from 'react';
import { DataTable } from 'carbon-components-react';

const {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableHeader,
} = DataTable;

export const renderTable = renderCell => ({
  rows,
  headers,
  getHeaderProps,
}) => (
  <TableContainer>
    <Table>
      <TableHead>
        <TableRow>
          {headers.map(header => (
            <TableHeader {...getHeaderProps({ header })}>
              {header.header}
            </TableHeader>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map(row => (
          <TableRow key={row.id}>{row.cells.map(renderCell)}</TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);
