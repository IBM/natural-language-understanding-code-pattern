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
      href="https://www.github.com" // TODO: Update with actual repo.
    >
      <p className="link-text">GitHub</p>
      <LogoGithub24 className="link-icon" />
    </Link>,
    <Link
      className="link getting-started"
      key="ibm-cloud-link"
      target="_blank"
      rel="noopener noreferrer"
      href="https://cloud.ibm.com/registration?target=%2Fcatalog%2Fservices%2Fnatural-language-understanding%3FhideTours%3Dtrue%26cm_mmc%3D-_-Watson%2BCore_Watson%2BCore%2B-%2BPlatform-_-WW_WW-_-wdc-ref%26cm_mmc%3D-_-Watson%2BCore_Watson%2BCore%2B-%2BPlatform-_-WW_WW-_-wdc-ref%26cm_mmca1%3D000000OF%26cm_mmca2%3D10000409&_ga=2.158846578.918027017.1572271296-1405764752.1539884377&_gac=1.250083700.1571850605.Cj0KCQjw3JXtBRC8ARIsAEBHg4m4g1PSkKQRoI6YUe4A-6ysul0ziiWU0DVbqlbWAQpq3721u-bxkd0aAkV3EALw_wcB&cm_mc_uid=83381689395615475202389&cm_mc_sid_50200000=82214471572470185115&cm_mc_sid_52640000=21949701572470185117&cm_mmc=Earned-_-Watson%20Core%20-%20Platform-_-WW_WW-_-intercom&cm_mmca1=000000OF&cm_mmca2=10000409"
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
