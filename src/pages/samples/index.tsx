import * as React from 'react';
import { Route } from 'react-router';
import { FormGeneration } from './FormGeneration';
import { LoginForm } from './LoginForm';
import { LoginFormWithExtraButtons } from './LoginFormWithExtraButtons';
import { LongForm } from './LongForm';
import { LongFormJson } from './LongFormJson';
import { LongFormWithInitialValues } from './LongFormWithInitialValues';
import { PreviewFields } from './PreviewFields';

export const SamplesPage = () => (
  <React.Fragment>
    <Route path="/samples/generator" component={FormGeneration} />
    <Route path="/samples/js" component={LongForm} />
    <Route path="/samples/js-with-values" component={LongFormWithInitialValues} />
    <Route path="/samples/json" component={LongFormJson} />
    <Route path="/samples/login" component={LoginForm} />
    <Route path="/samples/loginWithExtraButtons" component={LoginFormWithExtraButtons} />
    <Route path="/samples/previewFields" component={PreviewFields} />
  </React.Fragment>
);
