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
  handleClick = (event) => {
    const index = event.target.id;
    const { EmailsStore: { changeActiveIndex } } = this.props;
    changeActiveIndex(index);
  }

  render() {
    const { email, index } = this.props;
    return (
      <EmailSummaryWrapper id={index} onClick={this.handleClick}>
        <FirstLetter>{!!email.from && email.from[0]}</FirstLetter>
        <EmailOverview>
          <From>{email.from}</From>
          <Message>{!!email.message && email.message.substring(0, 50)}</Message>
        </EmailOverview>
      </EmailSummaryWrapper>
    );
  }
}

export default EmailSummary;
