import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { routeCodes } from 'constants/routes';
import workAndCoLogoImg from 'img/workco-logo.svg';

export default class Menu extends Component {
  render() {
    return (
      <div className='Menu'>
        <div className='Menu-logo'>
          <a href='https://work.co' target='_blank' rel='noreferrer noopener' aria-label='Work & Co website'>
            <img
              src={ workAndCoLogoImg }
              alt='Work & Co logo'
            />
          </a>
        </div>
        <div className='Menu-links'>
          <NavLink
            activeClassName='Menu-link--active'
            className='Menu-link'
            exact
            to={ routeCodes.HOME }
          >
            <FormattedMessage
              id='menu.home'
              defaultMessage='Home'
            />
          </NavLink>
          <NavLink
            activeClassName='Menu-link--active'
            className='Menu-link'
            to={ routeCodes.PEOPLE }
          >
            <FormattedMessage
              id='menu.dataExample'
              defaultMessage='API data example'
            />
          </NavLink>
          <NavLink
            activeClassName='Menu-link--active'
            className='Menu-link'
            to='/404'
          >
            <FormattedMessage
              id='menu.404'
              defaultMessage='404'
            />
          </NavLink>
        </div>
      </div>
    );
  }
}
