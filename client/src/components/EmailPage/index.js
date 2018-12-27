import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import {
  EmailWrapper,
  EmailBody,
} from './StyledComponents';

import DetailsView from './DetailsView';
import ListView from './ListView';
import Welcome from './Welcome';
import Header from './Header';

@inject('EmailsStore')
@observer
class EmailPage extends Component {
  componentDidMount() {
    const { EmailsStore: { fetchEmails } } = this.props;
    fetchEmails();
  }

  render() {
    const { EmailsStore: { activeEmailIndex } } = this.props;

    return (
      <EmailWrapper>
        <Header />
        <EmailBody>
          <ListView />
          {activeEmailIndex ? <DetailsView /> : <Welcome />}
        </EmailBody>
      </EmailWrapper>
    );
  }
}

export default EmailPage;
