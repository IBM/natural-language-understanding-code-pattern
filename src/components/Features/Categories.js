/* eslint-disable react/jsx-key */
import React from 'react';
import PropTypes from 'prop-types';

import { DataTable } from 'carbon-components-react';
import ProgressBar from '../ProgressBar';

import { renderTable } from './utils';

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
    <DataTable rows={rows} headers={headers} render={renderTable(renderCell)} />
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
