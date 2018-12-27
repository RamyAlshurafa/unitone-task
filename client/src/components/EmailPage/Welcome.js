import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import {
  WellcomeWrapper,
  WelcomeTitle,
  WelcomeSummary,
  WelcomeImage,
} from './StyledComponents';

@inject('EmailsStore', 'UserInfoStore')
@observer
class Welcome extends Component {
  render() {
    const { EmailsStore: { newEmailsCount }, UserInfoStore: { username } } = this.props;

    return (
      <WellcomeWrapper>
        <WelcomeTitle>
          Hi
          {' '}
          {username}
          {' '}
          :)
        </WelcomeTitle>
        <WelcomeSummary>
          You have
          {' '}
          {newEmailsCount}
          {' '}
          new emails
        </WelcomeSummary>
        <WelcomeImage />
      </WellcomeWrapper>
    );
  }
}

export default Welcome;
