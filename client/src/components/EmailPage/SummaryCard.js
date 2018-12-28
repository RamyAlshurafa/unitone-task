import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import {
  EmailSummaryWrapper,
  FirstLetter,
  EmailSummaryFrom as From,
  MessageSummary as Message,
  EmailOverview,
} from './StyledComponents';

@inject('EmailsStore')
@observer
class EmailSummary extends Component {
  // handle clicking on Email summary card
  // and call changeActiveIndex function from stores
  handleClick = (event) => {
    const { EmailsStore: { changeActiveIndex } } = this.props;
    const index = event.target.id;
    changeActiveIndex(index);
  }

  render() {
    const { email, index, EmailsStore: { activeEmailIndex } } = this.props;

    return (
      <EmailSummaryWrapper
        id={index}
        onClick={this.handleClick}
        new={email.new}
        active={Number(activeEmailIndex) === index}
      >
        <FirstLetter>{email.from[0]}</FirstLetter>
        <EmailOverview>
          <From>{email.from}</From>
          <Message>{email.message.substring(0, 50)}</Message>
        </EmailOverview>
      </EmailSummaryWrapper>
    );
  }
}

export default EmailSummary;
