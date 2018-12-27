import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import {
  EmailHeaderWrapper,
  WelcomeSummary,
} from './StyledComponents';

@inject('EmailsStore')
@observer
class EmailHeader extends Component {
  render() {
    const { EmailsStore: { newEmailsCount, totalEmailsCount } } = this.props;
    return (
      <EmailHeaderWrapper>
        <WelcomeSummary>
          You have
          {' '}
          {newEmailsCount}
          /
          {totalEmailsCount}
          {' '}
          new emails
        </WelcomeSummary>
      </EmailHeaderWrapper>
    );
  }
}


export default EmailHeader;
