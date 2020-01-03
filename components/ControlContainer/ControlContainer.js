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
import defaultInputs from '../../data/input.json';

export const ControlContainer = ({ isAnalyzing, onAnalyzeCall }) => {
  const [inputType, setInputType] = useState('text');
  const [url, setUrl] = useState(defaultInputs.url);
  const [text, setText] = useState(defaultInputs.text);

  const onInputTypeChange = e => {
    setInputType(e.name);
  };

  const onInputChange = e => {
    console.log(e);
    if (inputType === 'url') {
      setUrl(e.target.value);
    } else {
      setText(e.target.value);
    }
  };

  return (
    <Tile className="control-container">
      <h3 className="container-title">
        Analyze a news article or other content
      </h3>
      <FormGroup legendText="">
        <ContentSwitcher onChange={onInputTypeChange}>
          <Switch name="text" text="Text" selected={inputType === 'text'} />
          <Switch name="url" text="URL" selected={inputType === 'url'} />
        </ContentSwitcher>
      </FormGroup>
      <FormGroup legendText={`${inputType.toUpperCase()} to analyze`}>
        <TextArea
          id="custom-input"
          labelText="label"
          onChange={onInputChange}
          placeholder={`Type the ${inputType.toUpperCase()} to analyze...`}
          invalidText={`Invalid ${inputType.toUpperCase()}`}
          value={inputType === 'url' ? url : text}
          hideLabel
          light
        />
      </FormGroup>
      <FormGroup legendText="">
        <Button
          className="submit-button"
          disabled={isAnalyzing}
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
