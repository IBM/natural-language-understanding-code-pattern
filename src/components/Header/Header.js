import React from 'react';
import PropTypes from 'prop-types';
import { Tile } from 'carbon-components-react';
import { Button, Link } from 'carbon-components-react';
import Api124 from '@carbon/icons-react/lib/API--1/24';
import Document24 from '@carbon/icons-react/lib/document/24';
import IbmCloud24 from '@carbon/icons-react/lib/ibm-cloud/24';
import Launch16 from '@carbon/icons-react/lib/launch/16';
import LogoGithub24 from '@carbon/icons-react/lib/logo--github/24';

export const Header = ({ description, links, title }) => (
  <Tile className="header">
    <div className="title-container">
      <h2 className="header-title">{title}</h2>
      <p>{description}</p>
    </div>
    <div className="link-container">
      <div className="link-wrapper">{links.map(link => link)}</div>
    </div>
  </Tile>
);

Header.propTypes = {
  description: PropTypes.string,
  links: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
};

Header.defaultProps = {
  description: '',
  links: [
    <Link
      className="link"
      key="api-link"
      target="_blank"
      rel="noopener noreferrer"
      href="https://cloud.ibm.com/apidocs/natural-language-understanding"
    >
      <p className="link-text">API reference</p>
      <Api124 className="link-icon" />
    </Link>,
    <Link
      className="link"
      key="docs-link"
      target="_blank"
      rel="noopener noreferrer"
      href="https://cloud.ibm.com/docs/services/natural-language-understanding?topic=natural-language-understanding-getting-started"
    >
      <p className="link-text">Documentation</p>
      <Document24 className="link-icon" />
    </Link>,
    <Link
      className="link"
      key="github-link"
      target="_blank"
      rel="noopener noreferrer"
      href="https://github.com/IBM/natural-language-understanding-code-pattern"
    >
      <p className="link-text">GitHub</p>
      <LogoGithub24 className="link-icon" />
    </Link>,
    <Link
      className="link getting-started"
      key="ibm-cloud-link"
      target="_blank"
      rel="noopener noreferrer"
      href="https://cloud.ibm.com/registration?target=%2Fcatalog%2Fservices%2Fnatural-language-understanding%3FhideTours%3Dtrue%26&cm_sp=WatsonPlatform-WatsonPlatform-_-OnPageNavCTA-IBMWatson_NaturalLanguageUnderstanding-_-Watson_Developer_Website"
    >
      <Button className="link-button" kind="tertiary" renderIcon={Launch16}>
        Start for free on IBM Cloud
      </Button>
      <IbmCloud24 className="link-icon" />
    </Link>,
  ],
  title: '',
};

export default Header;
