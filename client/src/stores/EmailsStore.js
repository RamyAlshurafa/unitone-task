import { observable, action, computed } from 'mobx';
import axios from 'axios';
import moment from 'moment';


class EmailsStore {
  @observable emails = [];

  @observable activeEmailIndex;

  @action
  changeActiveIndex = (index) => {
    this.activeEmailIndex = index;
    const emailStatus = this.emails[index].new;
    if (emailStatus) {
      this.emails[index].new = false;
      const activeEmail = this.emails[index];
      const time = moment(activeEmail.time).format('YYYY-MM-DD HH:MM:SS');

      axios.put(`/emails/${activeEmail.id}`,
        { ...this.emails[index], time });
    }
  }

  @computed get newEmailsCount() {
    return this.emails.filter(item => item.new).length;
  }

  @computed get totalEmailsCount() {
    return this.emails.length;
  }

  @action
  fetchEmails = () => {
    this.emails = [];
    axios.get('/emails').then(({ data: { data } }) => {
      this.emails = data;
    });
  }
}

export default new EmailsStore();
