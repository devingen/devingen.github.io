import { Form, TextInput } from "dvn-antd";
import * as React from 'react';

export class LoginForm extends React.Component {

  public render() {

    const fields: any[] = [
      new TextInput(
        'simpleText',
        'Simple Text',
        'Simple text placeholder',
        'Simple text input that can be used for email, first name, last name etc.',
      ),
    ];

    return (
      <Form
        formData={{ fields }}
        onSubmit={this.onSubmit}
        submitButtonLabel="Login"
      />
    )
  }

  private onSubmit = (data: any): void => {
    console.log(data);
  }
}

