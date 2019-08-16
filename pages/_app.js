import App, { Container } from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import withReduxStore from '../store/with-redux-store'
import Head from 'next/head';
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'

class MyApp extends App {
  constructor (props) {
    super(props)
    this.persistor = persistStore(props.reduxStore)
  }
  render() {
    const { Component, pageProps, router, reduxStore } = this.props;
    return (
      <Container>
        <Head>
          <title>SACC-CLI</title>
					<meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Provider store={reduxStore}>
          <PersistGate
            loading={<Component {...pageProps} />}
            persistor={this.persistor}
          >
            <Component {...pageProps} />
          </PersistGate>
        </Provider>
      </Container>
    );
  }
}
export default withReduxStore(MyApp)
