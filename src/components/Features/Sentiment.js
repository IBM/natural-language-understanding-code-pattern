/* eslint-disable react/jsx-key */
import React from 'react';
import PropTypes from 'prop-types';
import { TableCell } from '@carbon/react';

import ProgressBar from '../ProgressBar';
import DataTableWrapper from './DataTableWrapper';

export const Sentiment = ({ language, result }) => {
  if (!result || !result.document) {
    return <p>{`No Sentiment results returned for the input in language: ${language}.`}</p>;
  }

  const headers = [
    {
      header: 'Sentiment',
      key: 'label',
    },
    {
      header: 'Score',
      key: 'score',
    },
  ];

  const rows = [
    {
      id: 'sentiment',
      ...result.document,
    },
  ];

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

Sentiment.propTypes = {
  result: PropTypes.object,
  language: PropTypes.string,
};

Sentiment.defaultProps = {
  result: null,
  language: 'en',
};

export default Sentiment;
