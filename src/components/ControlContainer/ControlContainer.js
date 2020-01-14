import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  FormGroup,
  TextArea,
  Tile,
  Button,
  ContentSwitcher,
  Switch,
} from 'carbon-components-react';
import isURL from 'validator/lib/isURL';

import defaultInputs from '../../data/input.json';

export const validateInput = (type, { url, text }) => {
  if (type === 'text' && text.length === 0) {
    return 'Text is required';
  }
  if (type === 'url' && !isURL(url)) {
    return 'A valid URL is required';
  }
  return null;
};

export const ControlContainer = ({ isAnalyzing, onAnalyzeCall }) => {
  const [inputType, setInputType] = useState('text');
  const [url, setUrl] = useState(defaultInputs.url);
  const [text, setText] = useState(defaultInputs.text);

  const onInputTypeChange = e => {
    setInputType(e.name);
  };

  const onInputChange = e => {
    if (inputType === 'url') {
      setUrl(e.target.value);
    } else {
      setText(e.target.value);
    }
  };
  let invalidInputMessage = validateInput(inputType, { text, url });
  return (
    <Tile className="control-container">
      <h3 className="control-container__title">
        Analyze a news article or other content
      </h3>
      <div className="control-container__control-panel">
        <ContentSwitcher
          className="control-container__content-switch"
          onChange={onInputTypeChange}
        >
          <Switch name="text" text="Text" selected={inputType === 'text'} />
          <Switch name="url" text="URL" selected={inputType === 'url'} />
        </ContentSwitcher>
      </div>
      <FormGroup legendText={`${inputType.toUpperCase()} to analyze`}>
        <TextArea
          id="custom-input"
          labelText="label"
          onChange={onInputChange}
          placeholder={`Type the ${inputType.toUpperCase()} to analyze...`}
          invalid={!!invalidInputMessage}
          invalidText={invalidInputMessage}
          value={inputType === 'url' ? url : text}
          hideLabel
          rows={10}
          light
        />
      </FormGroup>
      <FormGroup legendText="">
        <Button
          className="submit-button"
          disabled={isAnalyzing || !!invalidInputMessage}
          kind="primary"
          onClick={() => {
            onAnalyzeCall(inputType === 'url' ? { url } : { text });
          }}
        >
          Analyze
        </Button>
      </FormGroup>
    </Tile>
  );
};

ControlContainer.propTypes = {
  onAnalyzeCall: PropTypes.func,
  isAnalyzing: PropTypes.bool,
};

ControlContainer.defaultProps = {
  isAnalyzing: false,
};

export default ControlContainer;
