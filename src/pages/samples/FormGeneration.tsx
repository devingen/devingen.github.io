import { Form, FormGenerator } from "dvn-antd";
import * as React from 'react';

export class FormGeneration extends React.Component {

  public render() {

    const fields: any[] = [
      new FormGenerator('someForm', 'en', true),
    ];

    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 padding-top">
            <h2>Form Generator</h2>
          </div>
          <div className="col-sm-12 col-md-12">
            <Form
              fields={fields}
              submitButtonLabel="Login"
              onSubmit={this.onSubmit}
            />
          </div>
        </div>
      </div>
    )
  }

  private onSubmit = (data: any): void => {
    console.log(data);
  }
}
