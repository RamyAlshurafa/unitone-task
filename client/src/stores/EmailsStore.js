import { observable } from "mobx";

class EmailsStore {
  @observable Emails = [];
}

export default new EmailsStore();