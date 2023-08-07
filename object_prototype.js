
function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    this.getName = function() {
        return `${this.firstName} ${this.lastName}`
    }
}

User.prototype.phoneNumber = '0892374';
User.prototype.getPhone = function() {
    return this.phoneNumber;
}

let user1 = new User('Truong', 'Nguyen', 'Avt1');