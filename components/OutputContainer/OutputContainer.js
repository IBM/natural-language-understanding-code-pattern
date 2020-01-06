import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  CodeSnippetSkeleton,
  Tile,
  FormGroup,
  Dropdown,
} from 'carbon-components-react';

import {
  Categories,
  Concepts,
  Emotion,
  Entities,
  Keywords,
  Sentiment,
  Syntax,
  SemanticRoles,
} from '../Features';

const features = {
  sentiment: Sentiment,
  syntax: Syntax,
  semantic_roles: SemanticRoles,
  keywords: Keywords,
  entities: Entities,
  emotion: Emotion,
  concepts: Concepts,
  categories: Categories,
};

export const OutputContainer = ({ isAnalyzing, results }) => {
  const [selectedFeature, setSelectedFeature] = useState('keywords');

  const onSelectedFeatureChange = ({ selectedItem }) => {
    setSelectedFeature(selectedItem);
  };

  const renderResults = (isAnalyzing, results) => {
    if (isAnalyzing) {
      return <CodeSnippetSkeleton type="multi" />;
    }

    if (!results) {
      return null;
    }

    const Feature = features[selectedFeature];
    return (
      <>
        <FormGroup legendText="Features">
          <Dropdown
            disabled={!results}
            items={Object.keys(features)}
            selectedItem={selectedFeature}
            onChange={onSelectedFeatureChange}
          />
        </FormGroup>
        <FormGroup legendText="Result">
          <Feature result={results[selectedFeature]} />
        </FormGroup>
      </>
    );
  };

  return (
    <Tile className="output-container">
      <h3 className="container-title">Output</h3>
      {renderResults(isAnalyzing, results)}
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
