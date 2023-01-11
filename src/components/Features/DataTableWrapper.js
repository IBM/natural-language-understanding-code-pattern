/* eslint-disable react/jsx-key */
import React from 'react'
import { DataTable } from '@carbon/react';
import PropTypes from 'prop-types';

import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableHeader,
} from '@carbon/react';

function DataTableWrapper({ rows, headers, renderCell, sortRow }) {
  return (
    <DataTable
      sortRow={sortRow}
      rows={rows}
      headers={headers}
    >
      {({ rows, headers, getHeaderProps }) => (
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
      )}
    </DataTable>
  )
}

DataTableWrapper.propTypes = {
  rows: PropTypes.array,
  headers: PropTypes.array,
  renderCell: PropTypes.func,
  sortRow: PropTypes.func
};

DataTableWrapper.defaultProps = {
  rows: [],
  headers: [],
  renderCell: null,
  sortRow: null
};

export default DataTableWrapper;
