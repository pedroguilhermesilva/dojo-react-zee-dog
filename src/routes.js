import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import login from "./pages/Login/index";
import responseList from "./pages/User/Components/ResposList/index";
import user from "./pages/User/Components/UserResponse/index";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={login} />
        <Route path="/user/:id" exact component={user} />
        <Route path="/repolist/:id/:respo" exact component={responseList} />
      </Switch>
    </BrowserRouter>
  );
}
