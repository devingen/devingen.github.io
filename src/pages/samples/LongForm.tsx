import { Form, MultipleChoice, SectionHeader, SingleChoice, TextInput } from "dvn-antd";
import { RatingStars } from "dvn-antd/dist/inputs/RatingStars";
import * as React from 'react';

export class LongForm extends React.Component {

  public render() {
    const fields: any[] = [
      new SectionHeader(
        'sectionTextInput',
        'Text Inputs',
        'These inputs can be used to display single/multi line text inputs.',
      ),
      new TextInput(
        'simpleText',
        'Simple Text',
        'Simple text placeholder',
        'Simple text input that can be used for email, first name, last name etc.',
      ),
      new TextInput(
        'longText',
        'Long Text',
        'Long text placeholder',
        'This input can be used for addresses, comments etc. This one starts from 3 lines and goes up to 5 lines.',
        'text',
        3,
        5
      ),
      new SectionHeader(
        'sectionSingleChoice',
        'Selecting single item',
        'The inputs below are used for providing single selection input.',
      ),
      new SingleChoice(
        'select',
        'Radio field',
        [
          new SingleChoice.Option('Option 1', 1),
          new SingleChoice.Option('Option 2', 2),
        ],
        'Displays the options with radio inputs.',
      ),
      new SingleChoice(
        'select',
        'Select field',
        [
          new SingleChoice.Option('Option 1', 1),
          new SingleChoice.Option('Option 2', 2),
        ],
        'Select input that shows the options as list.',
        'select',
        'Placeholder shown if no value is selected',
      ),
      new SectionHeader(
        'sectionMultipleChoice',
        'Selecting multiple item',
        'The inputs below are used for providing multiple selection input.',
      ),
      new MultipleChoice(
        'multipleChoice',
        'Checkboxes',
        [
          new MultipleChoice.Option('Option 1', 1),
          new MultipleChoice.Option('Option 2', 2),
        ],
        'Displays checkboxes for multiple value selection.',
      ),
      new MultipleChoice(
        'multipleChoice',
        'Multiple Select',
        [
          new MultipleChoice.Option('Option 1', 1),
          new MultipleChoice.Option('Option 2', 2),
        ],
        'Displays a select input like the single option, the only difference is the way it shows the selected values.',
        'select',
        'Custom placeholder',
      ),
      new MultipleChoice(
        'multipleChoice',
        'Tag Cloud',
        [
          new MultipleChoice.Option('Option 1', 1),
          new MultipleChoice.Option('Option 2', 2),
        ],
        'Displays fancy tags, works as same as the checkboxes.',
        'tag-cloud',
      ),
      new SectionHeader(
        'sectionOthers',
        'Other Inputs',
        'Other available inputs.',
      ),
      new RatingStars(
        'ratingStars',
        'Rating stars',
        'Displays number of stars to get floating value between 0-1.',
        10,
      )
    ];

    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12">
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
