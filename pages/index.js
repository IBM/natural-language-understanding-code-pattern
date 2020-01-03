import React from 'react';
import '../main.scss';
import Header from '../components/Header';
import ServiceContainer from '../components/ServiceContainer';
import Head from 'next/head';

const HEADER_TITLE = 'Watson Natural Language Understanding';
const HEADER_DESCRIPTION =
  'Natural Language Understanding is a collection of APIs that offer text analysis through natural language processing. This set of APIs can analyze text to help you understand its concepts, entities, keywords, sentiment, and more. Additionally, you can create a custom model for some APIs to get specific results that are tailored to your domain.';

export const Index = () => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <title>{'Natural Language Understanding - Code Pattern'}</title>
    </Head>
    <div className="app-container">
      <Header description={HEADER_DESCRIPTION} title={HEADER_TITLE} />
      <ServiceContainer />
    </div>
  </>
);

export default Index;
