import { Form, MultipleChoice, NumberInput, SectionHeader, SingleChoice, TextInput } from 'dvn-antd';
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
      new NumberInput('birthYear', 'Birth Year', 'Select a year', '', 1, 0, 2019)
        .showPreview()
        .setValue(1881),
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
      new RatingStars('rating', 'Rating').showPreview().setValue(0.8)
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
