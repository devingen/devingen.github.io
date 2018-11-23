import { Form, MultipleChoice, NumberInput, SectionHeader, SingleChoice, TextInput } from "dvn-antd";
import { RatingStars } from "dvn-antd/dist/inputs/RatingStars";
import * as React from 'react';

export class LongFormJson extends React.Component {

  public render() {

    const fields: any[] = [
      {
        header: 'Text Inputs',
        id: 'sectionTextInput',
        sectionDescription: 'These inputs can be used to display single/multi line text inputs.',
        type: SectionHeader.type,
      },
      {
        description: 'Simple text input that can be used for email, first name, last name etc.',
        id: 'simpleText',
        placeholder: 'Simple text placeholder',
        title: 'Simple Text',
        type: TextInput.type,
      },
      {
        description: 'This input can be used for addresses, comments etc. This one starts from 3 lines and goes up to 5 lines.',
        id: 'longText',
        lines: 3,
        linesMax: 5,
        placeholder: 'Long text placeholder',
        title: 'Long Text',
        type: TextInput.type,
      },
      {
        header: 'Number Inputs',
        id: 'sectionNumberInput',
        sectionDescription: 'This input can be used for numbers.',
        type: SectionHeader.type,
      },
      {
        description: 'This input can be used for amounts, decimals etc. Each step here will increase/decrease 0.5, max is 10, min is -3.',
        id: 'simpleNumber',
        max: 10,
        min: -3,
        placeholder: 'Type some number',
        step: 0.5,
        title: 'Number',
        type: NumberInput.type,
      },
      {
        header: 'Selecting single item',
        id: 'sectionSingleChoice',
        sectionDescription: 'The inputs below are used for providing single selection input.',
        title: '',
        type: SectionHeader.type,
      },
      {
        description: 'Displays the options with radio inputs.',
        id: 'radio',
        inputType: 'radio',
        options: [
          { label: 'Option 1', value: 1 },
          { label: 'Option 2', value: 2 },
        ],
        placeholder: 'Custom placeholder',
        title: 'Radio field',
        type: SingleChoice.type,
      },
      {
        description: 'Select input that shows the options as list.',
        id: 'select',
        inputType: 'select',
        options: [
          { label: 'Option 1', value: 1 },
          { label: 'Option 2', value: 2 },
        ],
        placeholder: 'Placeholder shown if no value is selected',
        title: 'Select field',
        type: SingleChoice.type,
      },
      {
        header: 'Selecting multiple item',
        id: 'sectionMultipleChoice',
        sectionDescription: 'The inputs below are used for providing multiple selection input.',
        title: '',
        type: SectionHeader.type,
      },
      {
        description: 'Displays checkboxes for multiple value selection.',
        id: 'checkboxes',
        inputType: 'checkbox',
        options: [
          { label: 'Option 1', value: 1 },
          { label: 'Option 2', value: 2 },
        ],
        title: 'Checkboxes',
        type: MultipleChoice.type,
      },
      {
        description: 'Displays a select input like the single option, the only difference is the way it shows the selected values.',
        id: 'multipleSelect',
        inputType: 'select',
        options: [
          { label: 'Option 1', value: 1 },
          { label: 'Option 2', value: 2 },
        ],
        placeholder: 'Custom placeholder',
        title: 'Multiple Select',
        type: MultipleChoice.type,
      },
      {
        description: 'Displays fancy tags, works as same as the checkboxes.',
        id: 'tagCloud',
        inputType: 'tag-cloud',
        options: [
          { label: 'Option 1', value: 1 },
          { label: 'Option 2', value: 2 },
        ],
        title: 'Tag Cloud',
        type: MultipleChoice.type,
      },
      {
        header: 'Other inputs',
        id: 'sectionOthers',
        sectionDescription: 'Other available inputs.',
        title: '',
        type: SectionHeader.type,
      },
      {
        description: 'Displays number of stars to get floating value between 0-1.',
        id: 'rating',
        starCount: 10,
        title: 'Rating stars',
        type: RatingStars.type,
      }
    ];

    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <Form
              formData={{ fields }}
              onSubmit={this.onSubmit}
              submitButtonLabel="Submit"
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
