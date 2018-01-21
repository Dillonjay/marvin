import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

// This component is used for Server rendering
// When you want to return 40x http statuses
const RouteStatus = ({ code, children }) => (
  <Route
    render={
      ({ staticContext }) => {
        if (staticContext) {
          staticContext.status = code; // eslint-disable-line no-param-reassign
        }

        return children;
      }
    }
  />
);

RouteStatus.propTypes = {
  code: PropTypes.number.isRequired,
  children: PropTypes.object,
};

export default class NotFound extends Component {
  render() {
    return (
      <RouteStatus code={ 404 }>
        <div className='NotFound'>
          <h1>
            <FormattedMessage id='notFound.heading' />
          </h1>
        </div>
      </RouteStatus>
    );
  }
}
