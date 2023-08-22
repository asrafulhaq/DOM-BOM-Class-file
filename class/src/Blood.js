class Blood {
  static createMember(data) {
    const users = this.getAllUsers();
    users.push(data);
    Storage.sendDataLS("user", users);
  }

  static getAllUsers() {
    return Storage.getDataLS("user");
  }
}
