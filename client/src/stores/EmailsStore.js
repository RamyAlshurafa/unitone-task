import { observable, action, computed } from 'mobx';
import axios from 'axios';
import moment from 'moment';


class EmailsStore {
  // store emails list
  @observable emails = [];

  // store active email index (default = undefined)
  @observable activeEmailIndex;

  // change active index and update email be not new
  // in the back-end
  @action
  changeActiveIndex = (index) => {
    this.activeEmailIndex = index;
    // email status (new => true)
    const emailStatus = this.emails[index].new;
    // if the email new make it old
    if (emailStatus) {
      this.emails[index].new = false;
      const activeEmail = this.emails[index];
      // convert the time format to be accepted for mysql datetime type
      const time = moment(activeEmail.time).format('YYYY-MM-DD HH:MM:SS');

      // update the email value by id
      axios.put(`/emails/${activeEmail.id}`,
        { ...this.emails[index], time });
    }
  }

  // get the count of new emails
  @computed get newEmailsCount() {
    return this.emails.filter(item => item.new).length;
  }

  // get the count of all emails
  @computed get totalEmailsCount() {
    return this.emails.length;
  }

  // fetch emails data from backend
  @action
  fetchEmails = () => {
    // clear old emails data
    this.emails = [];
    axios.get('/emails').then(({ data: { data } }) => {
      // set new emails
      this.emails = data;
    });
  }
}

export default new EmailsStore();
