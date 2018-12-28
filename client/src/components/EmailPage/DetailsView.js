import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import {
  EmailDetailsWrapper,
  DetailsFrom,
  DetailsTitle,
  DetailsMessage,
  DetailsTime,
} from './StyledComponents';

@inject('EmailsStore')
@observer
class EmailDetails extends Component {
  render() {
    const { EmailsStore: { activeEmailIndex, emails } } = this.props;
    // get the active email
    const activeEmail = emails[activeEmailIndex];
    // get the date and the time for email
    const time = new Date(activeEmail.time).toLocaleTimeString();
    const date = new Date(activeEmail.time).toLocaleDateString();

    return (
      <EmailDetailsWrapper>
        <DetailsFrom>
          From:
          {' '}
          {activeEmail && activeEmail.from}
        </DetailsFrom>
        <DetailsTime>{time}</DetailsTime>
        <DetailsTime>{date}</DetailsTime>
        <DetailsTitle>{activeEmail && activeEmail.title}</DetailsTitle>
        <DetailsMessage>{activeEmail && activeEmail.message}</DetailsMessage>
      </EmailDetailsWrapper>
    );
  }
}

export default EmailDetails;
