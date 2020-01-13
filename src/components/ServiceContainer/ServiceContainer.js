import React, { useState } from 'react';
import ControlContainer from '../ControlContainer';
import OutputContainer from '../OutputContainer';
import Toast from '../Toast';

const GDPR_DISCLAIMER =
  'This system is for demonstration purposes only and is not intended to process Personal Data. No Personal Data is to be entered into this system as it may not have the necessary controls in place to meet the requirements of the General Data Protection Regulation (EU) 2016/679.';

const features = {
  concepts: {},
  entities: {},
  keywords: {},
  categories: {},
  emotion: {},
  sentiment: {},
  semantic_roles: {},
  syntax: { tokens: { lemma: true, part_of_speech: true }, sentences: true },
};

export const ServiceContainer = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);

  const onAnalyzeCall = params => {
    setIsAnalyzing(true);
    fetch('/api/analyze', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...params, features }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          setResults(null);
          setError(data.error);
        } else {
          setResults(data);
        }
      })
      .catch(err => {
        setResults(null);
        setError({
          error: {
            title: 'Internal Server Error',
            description: err.message,
          },
        });
      })
      .finally(() => setIsAnalyzing(false));
  };

  return (
    <div className="service-container">
      <Toast kind="info" subtitle={GDPR_DISCLAIMER} />
      {error && (
        <Toast
          kind="error"
          title={error.title}
          subtitle={error.description}
          hideAfterFirstDisplay={false}
          timeout={5000}
          onCloseButtonClick={() => setError(null)}
        />
      )}
      <ControlContainer
        onAnalyzeCall={onAnalyzeCall}
        isAnalyzing={isAnalyzing}
      />
      <OutputContainer isAnalyzing={isAnalyzing} results={results} />
    </div>
  );
};

export default ServiceContainer;
