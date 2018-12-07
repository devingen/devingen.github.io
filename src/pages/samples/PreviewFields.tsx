import { DateInput, Form, MultipleChoice, NumberInput, SectionHeader, SingleChoice, TextInput } from 'dvn-antd';
import { RatingStars } from 'dvn-antd/dist/inputs/RatingStars';
import * as React from 'react';

export class PreviewFields extends React.Component {

  public render() {
    const fields: any[] = [
      new SectionHeader(
        'header',
        'Preview Fields',
        'Some field types contain a preview mode which allows you to make just few of the fields editable in a form.',
      ),
      new TextInput('fullName', 'Full Name', 'Full Name')
        .showPreview()
        .setValue('Mustafa Kemal'),
      new TextInput('address', 'Adress', 'Type your address', '', 'text', 3, 5)
        .showPreview()
        .setValue('Apostolou Pavlou 17, Thessaloniki 546 34, Greece'),
      new NumberInput('id', 'Identity Number', 'Type identity number', '', 10000000146, 0, 99999999990)
        .showPreview()
        .setValue(10000000146),
      new DateInput('birthDate', 'Birth Date', '', '')
        .setDateFormat('DD MMM YYYY')
        .showPreview()
        .setValue(new Date(1881, 4, 19)),
      new DateInput('birthDate', 'Date of Passing', '', '')
        .setDateFormat('DD MMM YYYY - HH:mm')
        .setInputType('dateTime')
        .showPreview()
        .setValue(new Date(1938, 9, 10, 9, 5)),
      new MultipleChoice('profession',
        'Profession',
        [
          new MultipleChoice.Option('Leader', 'leader'),
          new MultipleChoice.Option('Teacher', 'teacher'),
          new MultipleChoice.Option('Warrior', 'warrior'),
        ])
        .showPreview()
        .setValue(['leader', 'warrior', 'teacher']),
      new MultipleChoice('skills',
        'Skills',
        [
          new MultipleChoice.Option('Foresight', 'foresight'),
          new MultipleChoice.Option('Community Management', 'communityManagement'),
          new MultipleChoice.Option('Strategy', 'strategy'),
          new MultipleChoice.Option('Imperturbability', 'imperturbability'),
        ], '', 'tag-cloud')
        .showPreview()
        .setValue(['foresight', 'communityManagement', 'strategy', 'imperturbability']),
      new SingleChoice('favouriteFootballTeam',
        'Favourite Football Team',
        [
          new SingleChoice.Option('Beşiktaş', 'besiktas'),
          new SingleChoice.Option('Fenerbahçe', 'fenerbahce'),
          new SingleChoice.Option('Galatasaray', 'galatasaray'),
        ])
        .showPreview()
        .setValue('besiktas'),
      new RatingStars('rating', 'Rating').showPreview().setValue(0.8),
    ];

    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12">
            <Form
              fields={fields}
              onChange={this.onChange}
              onSubmit={this.onSubmit}
              submitButtonLabel="Submit"
            />
          </div>
        </div>
      </div>
    );
  }

  private onChange = (data: any): void => {
    console.log('onChange', data);
  };

  private onSubmit = (data: any): void => {
    console.log('onSubmit', data);
  };
}
