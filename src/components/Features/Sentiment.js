/* eslint-disable react/jsx-key */
import React from 'react';
import PropTypes from 'prop-types';
import { DataTable } from 'carbon-components-react';

import ProgressBar from '../ProgressBar';
import { renderTable } from './utils';

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

Sentiment.propTypes = {
  result: PropTypes.object,
  language: PropTypes.string,
};

Sentiment.defaultProps = {
  result: null,
  language: 'en',
};

export default Sentiment;
