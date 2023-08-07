let phoneKey = 'phone';
let myInfo = {
    name: 'Truong',
    age: 18,
    address: 'Phu Yen, Viet Nam',
    [phoneKey]: '023894723',
    getName: function() {
        return this.name;
    }
};

myInfo.mail = 'xtuong121.work@gmail.com';

let myKey = 'name';

delete myInfo.address;

console.log(myInfo.age);
console.log(myInfo['address']);
console.log(myInfo[myKey]);
console.log(myInfo.getName());