
function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    this.getName = function() {
        return `${this.firstName} ${this.lastName}`
    }
}

let author = new User('Truong', 'Nguyen', 'Avt');

author.title = 'Javascript';