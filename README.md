<h1 align="center" style="border-bottom: none;">🔎 Natural Language Understanding Code Pattern </h1>
<h3 align="center">Natural Language Understanding is a collection of APIs that offer text analysis through natural language processing. This set of APIs can analyze text to help you understand its concepts, entities, keywords, sentiment, and more. Additionally, you can create a custom model for some APIs to get specific results that are tailored to your domain.</h3>
<p align="center">
  <a href="http://travis-ci.org/watson-developer-cloud/natural-language-understanding-code-pattern">
    <img alt="Travis" src="https://travis-ci.org/watson-developer-cloud/natural-language-understanding-code-pattern.svg?branch=master">
  </a>
  <a href="#badge">
    <img alt="semantic-release" src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg">
  </a>
</p>
</p>

Demo: https://natural-language-understanding-code-pattern.ng.bluemix.net/

## Prerequisites

### Public Cloud

1. Sign up for an [IBM Cloud account](https://console.bluemix.net/registration/).
1. Download the [IBM Cloud CLI](https://console.bluemix.net/docs/cli/index.html#overview).
1. Create an instance of the Natural Language Understanding service and get your credentials:
   - Go to the [Natural Language Understanding](https://console.bluemix.net/catalog/services/natural-language-understanding) page in the IBM Cloud Catalog.
   - Log in to your IBM Cloud account.
   - Click **Create**.
   - Click **Show** to view the service credentials.
   - Copy the `apikey` value.
   - Copy the `url` value.

### Cloud Pak for Data

To use this code pattern in a Cloud Pak for Data, you can use your cpd `username` and `password` credentials or an `access_token` to authenticate your requests. You also need the service `url` as described [here](https://cloud.ibm.com/apidocs/natural-language-understanding/natural-language-understanding-data#authentication).

## Configuring the application

Depending on where your service instance is you may have different ways to download the credentials file.

> Need more information? See the [authentication wiki](https://github.com/IBM/node-sdk-core/blob/master/AUTHENTICATION.md).

### Automatically

Copy the credential file to the application folder.

**Cloud Pak for Data**
![](https://watson-developer-cloud.github.io/images/credentials-cpd.png)
**Public Cloud**
![](https://watson-developer-cloud.github.io/images/credentials-public.png)

### Manually

1. In the application folder, copy the _.env.example_ file and create a file called _.env_

   ```
   cp .env.example .env
   ```

2. Open the _.env_ file and add the service credentials depending on your environment.

   Example _.env_ file that configures the `apikey` and `url` for a Natural Language Understanding service instance hosted in the US East region:

   ```
   NATURAL_LANGUAGE_UNDERSTANDING_IAM_APIKEY=X4rbi8vwZmKpXfowaS3GAsA7vdy17Qh7km5D6EzKLHL2
   NATURAL_LANGUAGE_UNDERSTANDING_URL=https://gateway-wdc.watsonplatform.net/natural-language-understanding/api
   ```

   - **CPD using username and password:** If your service instance is running in Cloud Pak for Data and you want to use `username` and `password` credentials, add the `NATURAL_LANGUAGE_UNDERSTANDING_USERNAME` and `NATURAL_LANGUAGE_UNDERSTANDING_PASSWORD` variables to the _.env_ file.

   Example _.env_ file that configures the `username`, `password`, and `url` for a Natural Language Understanding service instance:

   ```
   NATURAL_LANGUAGE_UNDERSTANDING_USERNAME=admin
   NATURAL_LANGUAGE_UNDERSTANDING_PASSWORD=password
   NATURAL_LANGUAGE_UNDERSTANDING_URL=https://my-cp4d-url.cloud.ibm.com/natural-language-understanding/api
   NATURAL_LANGUAGE_UNDERSTANDING_AUTH_TYPE=cp4d
   ```

   - **CPD using access token:** If your service instance is running in Cloud Pak for Data and you want to use the `access_token` from the service instance detail page.

     ```
     NATURAL_LANGUAGE_UNDERSTANDING_BEARER_TOKEN=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.ey...
     NATURAL_LANGUAGE_UNDERSTANDING_URL=https://my-cp4d-url.cloud.ibm.com/natural-language-understanding/api
     NATURAL_LANGUAGE_UNDERSTANDING_AUTH_TYPE=bearerToken
     ```

## Running locally

1. Install the dependencies

   ```
   npm install
   ```

1. Build the application

   ```
   npm run build
   ```

1. Run the application

   ```
   npm run dev
   ```

1. View the application in a browser at `localhost:3000`

## Deploying to IBM Cloud as a Cloud Foundry Application

Click on the button below to deploy this demo to the IBM Cloud.

[![Deploy to IBM Cloud](https://cloud.ibm.com/devops/setup/deploy/button.png)](https://cloud.ibm.com/devops/setup/deploy?repository=https://github.com/watson-developer-cloud/natural-language-understanding-code-pattern)

### Manually

1. Build the application

   ```
   npm run build
   ```

1. Login to IBM Cloud with the [IBM Cloud CLI](https://console.bluemix.net/docs/cli/index.html#overview)

   ```
   ibmcloud login
   ```

1. Target a Cloud Foundry organization and space.

   ```
   ibmcloud target --cf
   ```

1. Edit the _manifest.yml_ file. Change the **name** field to something unique. For example, `- name: my-app-name`.
1. Deploy the application

   ```
   ibmcloud app push
   ```

1. View the application online at the app URL, for example: https://my-app-name.mybluemix.net

## Tests

#### Unit tests

Run unit tests with `npm run test-unit`, then `a` to run all tests. See the output for more info.

#### Integration tests

First you have to make sure your code is built: `npm run build`

Then run integration tests with: `npm run test-integration-runner`

## Directory structure

```none
.
├── app.js                      // express routes
├── config                      // express configuration
│   ├── error-handler.js
│   ├── express.js
│   └── security.js
├── package.json
├── public                      // static resources
├── server.js                   // entry point
├── test                        // integration tests
└── src                         // react client
    ├── __test__                // unit tests
    └── index.js                // app entry point
```

## License

This sample code is licensed under the [MIT License](https://opensource.org/licenses/MIT).

## Contributing

See [CONTRIBUTING](.github/CONTRIBUTING.md).

## Open Source @ IBM

Find more open source projects on the [IBM Github Page](http://ibm.github.io/)

[getting_started]: https://www.ibm.com/watson/developercloud/doc/common/index.html
[docs]: http://www.ibm.com/watson/developercloud/doc/natural-language-understanding/index.html
[sign_up]: https://console.ng.bluemix.net/registration/
