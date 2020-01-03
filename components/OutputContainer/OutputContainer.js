import React from 'react';
import PropTypes from 'prop-types';

import {
  CodeSnippet,
  CodeSnippetSkeleton,
  Tile,
} from 'carbon-components-react';

// <TabsSkeleton>

export const OutputContainer = ({ results, isAnalyzing }) => {
  const renderResults = results => {
    if (isAnalyzing) {
      return <CodeSnippetSkeleton type="multi" />;
    }
    if (results) {
      return (
        <CodeSnippet type="multi">
          {JSON.stringify(results, null, 2)}
        </CodeSnippet>
      );
    }
    return null;
  };

  return (
    <Tile className="output-container">
      <h3 className="container-title">Output</h3>
      {renderResults(results)}
    </Tile>
  );
};

OutputContainer.propTypes = {
  results: PropTypes.object,
  isAnalyzing: PropTypes.bool,
};

OutputContainer.defaultProps = {
  results: null,
  isAnalyzing: false,
};

export default OutputContainer;
