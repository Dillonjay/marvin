import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';


import { increment } from 'actions/app';
import CircleSvg from 'svg/circle.svg';
import SquareSvg from 'svg/square.svg';
import TriangleSvg from 'svg/triangle.svg';
import bookImg from 'img/book2.jpg';

@connect(state => ({
  counter: state.app.get('counter'),
}))
export default class Home extends Component {
  static propTypes = {
    counter: PropTypes.number,
    // from react-redux connect
    dispatch: PropTypes.func,
  }

  handleTestButtonClick = () => {
    const { dispatch } = this.props;

    dispatch(increment());
  }

  render() {
    const {
      counter,
    } = this.props;

    return (
      <div className='Home'>
        <h1>Marvin</h1>
        <p>
          <FormattedMessage
            id='home.heading'
            defaultMessage='Boilerplate for kicking off React/Redux applications.'
          />
        </p>

        <h2>
          <FormattedMessage
            id='home.about.heading'
            defaultMessage='About'
          />
        </h2>

        <p>
          <FormattedHTMLMessage
            id='home.about.explanation'
            defaultMessage={ `Marvin is internal project by <a href='https://work.co'>Work & Co</a>.
            We love React and use it a lot. So Marvin is meant to be a starting point
            for our React projects. But as we love open source too, it is publicly
            available for anyone interested in using it.` }
          />
        </p>
        <p>
          <FormattedHTMLMessage
            id='home.about.moreInformation'
            defaultMessage={ `Visit documentation on 
            <a href="https://github.com/workco/react-redux-webpack2-boilerplate">GitHub</a>` }
          />
        </p>

        <hr />

        <h2>
          <FormattedMessage
            id='home.examples.heading'
            defaultMessage='Examples'
          />
        </h2>

        <h3>
          <FormattedMessage
            id='home.examples.action.heading'
            defaultMessage='Action'
          />
        </h3>
        <div className='Example'>
          <p>
            <FormattedMessage
              id='home.examples.action.counter'
              defaultMessage='Counter: {counter}'
              values={ { counter } }
            />
          </p>
          <button onClick={ this.handleTestButtonClick }>
            <FormattedMessage
              id='home.examples.action.increaseButton'
              defaultMessage='Increase'
            />
          </button>
        </div>

        <h3>
          <FormattedMessage
            id='home.examples.backgroundImage'
            defaultMessage='Background image'
          />
        </h3>
        <div className='Example'>
          <div className='BackgroundImgExample' />
        </div>

        <h3>
          <FormattedMessage
            id='home.examples.importedImage'
            defaultMessage='Image imported to the component'
          />
        </h3>
        <div className='Example'>
          <img src={ bookImg } alt='' className='ImgExample' />
        </div>

        <h3>
          <FormattedMessage
            id='home.examples.importedSVG'
            defaultMessagg='SVGs imported as react components'
          />
        </h3>
        <div className='Example'>
          <CircleSvg style={ { marginRight: 10 } } />
          <SquareSvg style={ { marginRight: 10 } } />
          <TriangleSvg />
        </div>
      </div>
    );
  }
}
