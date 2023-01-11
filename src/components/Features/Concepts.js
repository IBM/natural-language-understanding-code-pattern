/* eslint-disable react/jsx-key */
import React from 'react';
import PropTypes from 'prop-types';

import { TableCell } from '@carbon/react';
import ProgressBar from '../ProgressBar';
import DataTableWrapper from './DataTableWrapper';

export const Concepts = ({ language, result }) => {
  if (!result || result.length === 0) {
    return <p>{`No Concepts returned for the input in language: ${language}.`}</p>;
  }

  const headers = [
    {
      header: 'Text',
      key: 'text',
    },
    {
      header: 'Relevance',
      key: 'relevance',
    },
  ];

  const rows = result.map((keyword, i) => ({ ...keyword, id: `${i}` }));

  const renderCell = cell => {
    return (
      <TableCell key={cell.id}>
        {cell.info.header === 'relevance' ? (
          <ProgressBar progress={cell.value} />
        ) : (
          cell.value
        )}
      </TableCell>
    );
  };

  return (
    <DataTableWrapper rows={rows} headers={headers} renderCell={renderCell} />
  );
};

Concepts.propTypes = {
  result: PropTypes.array,
  language: PropTypes.string,
};

Concepts.defaultProps = {
  result: [],
  language: 'en',
};

export default Concepts;
