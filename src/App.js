import React from 'react';
import { Provider } from "react-redux";
import { ConnectedRouter } from 'react-router-redux';
import { Route, Switch } from 'react-router';
import { ScrollContext } from 'react-router-scroll-4';
import HomePageContainer from './Containers/HomePage';
import DetailsContainer from './Containers/Details';
import Header from './Components/Header';
import configureStore, { history } from './store';
import './App.css';

const App = () => (
  <Provider store={configureStore()}>
    <ConnectedRouter history={history}>
      <ScrollContext>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={HomePageContainer} />
            <Route path="/details/:id" component={DetailsContainer} />
          </Switch>
        </div>
      </ScrollContext>
    </ConnectedRouter>
  </Provider>
)

export default App;
