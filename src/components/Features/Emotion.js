/* eslint-disable react/jsx-key */
import React from 'react';
import PropTypes from 'prop-types';
import { TableCell } from '@carbon/react';

import ProgressBar from '../ProgressBar';
import DataTableWrapper from './DataTableWrapper';

export const Emotion = ({ language, result }) => {
  if (!result || !result.document) {
    return <p>{`No Emotion results returned for the input in language: ${language}.`}</p>;
  }

  const { emotion } = result.document;

  const headers = [
    {
      header: 'Emotion',
      key: 'emotion',
    },
    {
      header: 'Score',
      key: 'score',
    },
  ];

  const rows = Object.keys(emotion).map(e => ({
    emotion: e,
    score: emotion[e],
    id: e,
  }));

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

Emotion.propTypes = {
  result: PropTypes.object,
  language: PropTypes.string,
};

Emotion.defaultProps = {
  result: null,
  language: 'en',
};

export default Emotion;
