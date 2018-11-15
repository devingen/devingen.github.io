import * as React from 'react';
import { Route } from "react-router";
import { LoginForm } from "./LoginForm";
import { LongForm } from "./LongForm";
import { LongFormJson } from "./LongFormJson";

export const SamplesPage = () => (
  <React.Fragment>
    <Route path="/samples/js" component={LongForm} />
    <Route path="/samples/json" component={LongFormJson} />
    <Route path="/samples/login" component={LoginForm} />
  </React.Fragment>
);
