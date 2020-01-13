import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  CodeSnippetSkeleton,
  Tile,
  FormGroup,
  Dropdown,
  ContentSwitcher,
  Switch,
} from 'carbon-components-react';
import ReactJson from 'react-json-view';

import {
  Categories,
  Concepts,
  Emotion,
  Entities,
  Keywords,
  Sentiment,
  Syntax,
  //SemanticRoles,
} from '../Features';

const features = {
  //semantic_roles: SemanticRoles,
  categories: Categories,
  concepts: Concepts,
  emotion: Emotion,
  entities: Entities,
  keywords: Keywords,
  sentiment: Sentiment,
  syntax: Syntax,
};

export const OutputContainer = ({ isAnalyzing, results }) => {
  const [selectedFeature, setSelectedFeature] = useState('keywords');
  const [outputType, setOutputType] = useState('table');

  const onOutputTypeChange = e => {
    setOutputType(e.name);
  };
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
        <FormGroup legendText="Feature">
          <Dropdown
            id="feature-dropdown"
            label="Features"
            disabled={!results}
            items={Object.keys(features)}
            selectedItem={selectedFeature}
            onChange={onSelectedFeatureChange}
          />
        </FormGroup>
        {results && (
          <div className="output-switch">
            <ContentSwitcher
              className="output-switch__type"
              onChange={onOutputTypeChange}
            >
              <Switch
                name="table"
                text="Table"
                selected={outputType === 'table'}
              />
              <Switch
                name="json"
                text="JSON"
                selected={outputType === 'json'}
              />
            </ContentSwitcher>
          </div>
        )}
        <FormGroup legendText="Result">
          {outputType === 'table' ? (
            <Feature result={results[selectedFeature]} />
          ) : (
            <ReactJson
              name={false}
              style={{ lineHeight: '1.3em' }}
              src={results[selectedFeature]}
            />
          )}
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
