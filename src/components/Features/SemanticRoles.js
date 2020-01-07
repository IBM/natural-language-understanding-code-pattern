import React from 'react';
import PropTypes from 'prop-types';

import { CodeSnippet } from 'carbon-components-react';

export const SemanticRoles = props => {
  const renderResult = result => {
    if (!result) {
      return null;
    }

    return (
      <CodeSnippet type="multi">{JSON.stringify(result, null, 2)}</CodeSnippet>
    );
  };

  return <div>{renderResult(props.result)}</div>;
};

SemanticRoles.propTypes = {
  result: PropTypes.array,
};

SemanticRoles.defaultProps = {
  result: null,
};

export default SemanticRoles;
