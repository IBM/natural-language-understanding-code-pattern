/* eslint-disable react/jsx-key */
import React from 'react';
import PropTypes from 'prop-types';
import { DataTable } from 'carbon-components-react';

import ProgressBar from '../ProgressBar';
import { renderTable } from './utils';

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
      <DataTable.TableCell key={cell.id}>
        {cell.info.header === 'score' ? (
          <ProgressBar progress={cell.value} />
        ) : (
          cell.value
        )}
      </DataTable.TableCell>
    );
  };

  return (
    <div>
      <DataTable
        rows={rows}
        headers={headers}
        render={renderTable(renderCell)}
      />
    </div>
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
