import { observable } from 'mobx';

class UserInfoStore {
  // store the logged in user's name
  @observable username = 'Ramy Al Shurafa';
}

export default new UserInfoStore();
