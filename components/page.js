import { Header, HeaderName } from "carbon-components-react";
import Head from "next/head";

export default ({ name, children }) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <title>{`${name} - Code Pattern`}</title>
    </Head>
    <Header aria-label={name}>
      <HeaderName href="/" prefix="IBM">
        {name}
      </HeaderName>
    </Header>
    <div className="content">{children}</div>
    <style jsx>{`
      .content {
        padding-top: 3rem;
      }
    `}</style>
  </>
);
