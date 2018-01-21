import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import { getPeople } from 'actions/people';

@connect(state => ({
  error: state.people.get('error'),
  loading: state.people.get('loading'),
  people: state.people.get('people'),
}))
export default class People extends Component {
  static propTypes = {
    error: PropTypes.string,
    loading: PropTypes.bool,
    people: PropTypes.object,
    // from react-redux connect
    dispatch: PropTypes.func,
  }

  componentWillMount() {
    const {
      dispatch,
      people,
    } = this.props;

    if (!people) {
      dispatch(getPeople());
    }
  }

  renderPeople() {
    const {
      people,
    } = this.props;

    return people.results.map(person => {
      return (
        <div key={ person.url } className='People-person'>
          <h3>{ person.name }</h3>
          <div>
            <FormattedMessage
              id='people.person.height'
              defaultMessage='Height: {height}'
              values={ { height: person.height } }
            />
          </div>
          <div>
            <FormattedMessage
              id='people.person.mass'
              defaultMessage='Mass: {mass}'
              values={ { mass: person.mass } }
            />
          </div>
          <div>
            <FormattedMessage
              id='people.person.eyeColor'
              defaultMessage='Eye color: {eyeColor}'
              values={ { eyeColor: person.eye_color } }
            />
          </div>
          <div>
            <FormattedMessage
              id='people.person.hairColor'
              defaultMessage='Hair color: {hairColor}'
              values={ { hairColor: person.hair_color } }
            />
          </div>
          <div>
            <FormattedMessage
              id='people.person.birthYear'
              defaultMessage='Birth year: {birthYear}'
              values={ { birthYear: person.birth_year } }
            />
          </div>
        </div>
      );
    });
  }

  render() {
    const {
      loading,
      error,
      people,
    } = this.props;

    return (
      <div className='People'>
        <h1>
          <FormattedMessage
            id='people.heading'
            defaultMessage='People'
          />
        </h1>
        { loading && <div>Loading people...</div> }
        { error && error.toString() }
        <div className='People-list'>
          { people && this.renderPeople() }
        </div>
      </div>
    );
  }
}
