/* eslint-disable react/jsx-key */
import React from 'react';
import PropTypes from 'prop-types';

import { DataTable } from 'carbon-components-react';

import { renderTable } from './utils';

export const Syntax = ({ language, result }) => {
  if (!result || !result.tokens) {
    return <p>{`No Syntax returned for the input in language: ${language}.`}</p>;
  }

  const headers = [
    {
      header: 'Text',
      key: 'text',
    },
    {
      header: 'Part of Speech',
      key: 'part_of_speech',
    },
    {
      header: 'Lemma',
      key: 'lemma',
    },
  ];

  const rows = result.tokens.map((keyword, i) => ({ ...keyword, id: `${i}` }));

  const renderCell = cell => {
    return (
      <DataTable.TableCell key={cell.id}>{cell.value}</DataTable.TableCell>
    );
  };

  return (
    <DataTable rows={rows} headers={headers} render={renderTable(renderCell)} />
  );
};

Syntax.propTypes = {
  result: PropTypes.shape({
    tokens: PropTypes.array,
  }),
  language: PropTypes.string,
};

Syntax.defaultProps = {
  result: null,
  language: 'en',
};

export default Syntax;
