import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ListItems from '../components/ListItems';
import FileUpload from '../components/FileUpload';

const AppRoutes = (props: any) => {
  return (
    <>
      <Switch>
        <Route exact path="/" render={props => <ListItems />} />
        <Route exact path="/upload" render={props => <FileUpload />} />
      </Switch>
    </>
  );
};

export default AppRoutes;
