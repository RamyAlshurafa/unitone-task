import { observable } from 'mobx';

class UserInfoStore {
  @observable username = 'Ramy Al Shurafa';
}

export default new UserInfoStore();
