import { observable, action, computed } from 'mobx';
import axios from 'axios';

class EmailsStore {
  @observable emails = [];

  @observable activeEmailIndex;

  @observable state = 'loading' // "loading" / "done" / "error"

  @action
  changeActiveIndex = (index) => {
    this.activeEmailIndex = index;
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
    this.state = 'loading';
    axios.get('/emails').then(({ data: { data } }) => {
      this.state = 'done';
      this.emails = data;
    });
  }
}

export default new EmailsStore();
