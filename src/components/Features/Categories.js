/* eslint-disable react/jsx-key */
import React from 'react';
import PropTypes from 'prop-types';

import { TableCell } from '@carbon/react';
import ProgressBar from '../ProgressBar';
import DataTableWrapper from './DataTableWrapper';

export const Categories = ({ language, result }) => {
  if (!result || result.length === 0) {
    return <p>{`No Categories returned for the input in language: ${language}.`}</p>;
  }

  const headers = [
    {
      header: 'Label',
      key: 'label',
    },
    {
      header: 'Score',
      key: 'score',
    },
  ];

  const rows = result.map((keyword, i) => ({ ...keyword, id: `${i}` }));

  const renderCell = cell => {
    return (
      <TableCell key={cell.id}>
        {cell.info.header === 'score' ? (
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

Categories.propTypes = {
  result: PropTypes.array,
  language: PropTypes.string,
};

Categories.defaultProps = {
  result: [],
  language: 'en',
};

export default Categories;
