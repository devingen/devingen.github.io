import { Form, getFirstError, SubmitCallbackResponse, TextInput, ValidatorEmail, ValidatorLength } from "dvn-antd";
import * as React from 'react';

export class LoginFormWithExtraButtons extends React.Component {

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
              formData={{ fields }}
              layout="compact"
              submitButtonLabel="Login"
              onSubmit={this.onSubmit}
              extraButtons={[{
                label: 'Send Magic Link',
                loading: false,
                onClick: this.onSendMagicLinkClick
              }] as any}
            />
          </div>
        </div>
      </div>
    )
  }

  private onSendMagicLinkClick = (values: any, errors: any): SubmitCallbackResponse => {

    console.log('onSendMagicLinkClick', values, errors);

    // delete the password error
    delete errors.password;

    if (!!getFirstError(errors)) {
      return {
        errors: { ...errors },
      }
    }

    // TODO send the magic link request
    return { errors: {} }
  };

  private onSubmit = (values: any, errors: any): void => {

    console.log('onSubmit', values, errors);
    if (!!getFirstError(errors)) {
      return
    }
    // TODO send the login request
  }
}
