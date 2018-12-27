import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import SummaryCard from './SummaryCard';
import {
  EmailsListWrapper,
} from './StyledComponents';

@inject('EmailsStore')
@observer
class EmailsList extends Component {
  render() {
    const { EmailsStore: { emails } } = this.props;
    return (
      <EmailsListWrapper>
        { emails.map((email, index) => (
          <SummaryCard email={email} key={email.id} index={index} />
        )) }
      </EmailsListWrapper>
    );
  }
}

export default EmailsList;
