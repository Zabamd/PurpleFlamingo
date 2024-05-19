export default class User {
  constructor(
    userId,
    email,
    password,
    username,
    firstName,
    secondName,
    birthday
  ) {
    this.userId = userId;
    this.email = email;
    this.password = password;
    this.username = username;
    this.firstName = firstName;
    this.secondName = secondName;
    this.birthday = new Date(birthday);
  }
}

