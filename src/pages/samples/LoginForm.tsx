import { Form, TextInput, ValidatorEmail, ValidatorLength } from "dvn-antd";
import * as React from 'react';

export class LoginForm extends React.Component {

  public render() {

    const fields: any[] = [
      new TextInput(
        'email',
        'Email',
        'Type your email here',
        '',
        'email',
      ).addInterceptor('onSubmit', new ValidatorEmail())
        .require(),
      new TextInput(
        'password',
        'Password',
        'Password please!',
        '',
        'password',
      ).addInterceptor('onSubmit', new ValidatorLength(6, 10))
        .require(),
    ];

    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 padding-top">
            <h2>Login Form</h2>
          </div>
          <div className="col-sm-12 col-md-12">
            <Form
              fields={fields}
              layout="compact"
              submitButtonLabel="Login"
              onSubmit={this.onSubmit}
            />
          </div>

          <div className="col-sm-12 col-md-12">
            <h2>Configuration with JavaScript/TypeScript Objects</h2>
            <pre>
            <code>
              {code}
            </code>
            </pre>
          </div>

          <div className="col-sm-12 col-md-12">
            <h2>Configuration with Plain JSON</h2>
            <pre>
            <code>
              {json}
            </code>
            </pre>
          </div>
        </div>
      </div>
    )
  }

  private onSubmit = (data: any): void => {
    console.log(data);
  }
}

const code = `const fields: any[] = [
  new TextInput(
    'email',
    'Email',
    'Type your email here',
    '',
    'email',
  ).addInterceptor('onSubmit', new ValidatorEmail())
   .require(),
  new TextInput(
    'password',
    'Password',
    'Password please!',
    '',
    'password',
  ).addInterceptor('onSubmit', new ValidatorLength(6, 10))
   .require(),
];

return (
  <Form
    fields={fields}
    layout="compact"
    submitButtonLabel="Login"
    onSubmit={this.onSubmit}
  />
)`;

const json = `const fields: any[] = [
  {
    "type": "text",
    "id": "email",
    "title": "Email",
    "placeholder": "Type your email here",
    "inputType": "email",
    "interceptors": {
      "onSubmit": [
        {
          "id": "validatorEmail"
        }
      ]
    },
    "required": true
  },
  {
    "type": "text",
    "id": "password",
    "title": "Password",
    "placeholder": "Password please!",
    "inputType": "password",
    "interceptors": {
      "onSubmit": [
        {
          "id": "validatorLength",
          "min": 6,
          "max": 10
        }
      ]
    },
    "required": true
  }
];

return (
  <Form
    fields={fields}
    layout="compact"
    submitButtonLabel="Login"
    onSubmit={this.onSubmit}
  />
)`;
