import * as React from 'react';

export class HomePage extends React.Component {

  public render() {

    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12 padding-vertical">
            <h1>Devingen</h1>

            <p>
              Devingen is a framework for form generation, validation and submit. There is only one implementation of
              the framework right now and it is ReactJS library created with Ant Design components.
            </p>
          </div>

          <div className="col-sm-12">
            <h2>Installation</h2>

            <pre>npm i dvn-antd</pre>
          </div>

          <div className="col-sm-12">
            <h2>Usage</h2>

            <pre>
              {`import { Form, TextInput, ValidatorEmail, ValidatorLength } from "dvn-antd";`}
              <br />
              {`ReactDOM.render(<Form ... />, mountNode);`}
            </pre>
          </div>
        </div>
      </div>
    )
  }
}