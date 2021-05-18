// hard-coding object
const user = [
  {
    name: "Jamshid",
    age: 21,
    job: "student",
    status: "student",
    regDate: "12/05/2021",
    update: false,
    isAdmin: false,
  },
  {
    name: "Quvonch",
    age: 22,
    job: "student",
    status: "student",
    regDate: "12/05/2020",
    update: false,
    isAdmin: false,
  },
  {
    name: "Bekdiyor",
    age: 21,
    job: "student",
    status: "student",
    regDate: "12/05/2021",
    update: true,
    isAdmin: true,
  },
  {
    name: "Qudrat",
    age: 27,
    job: "driver",
    status: "student",
    regDate: "12/05/2021",
    update: false,
    isAdmin: false,
  },
  {
    name: "Daston",
    age: 21,
    job: "student",
    status: "student",
    regDate: "12/05/2021",
    update: true,
    isAdmin: false,
  },
  {
    name: "Xudoyor",
    age: 21,
    job: "student",
    status: "student",
    regDate: "12/05/2021",
    update: true,
    isAdmin: false,
  },
  {
    name: "Jahongir",
    age: 24,
    job: "employee",
    status: "student",
    regDate: "12/05/2021",
    update: false,
    isAdmin: true,
  },
];

// template function

function Humans(name, age, status) {
  this.name = name;
  this.age = age;
  this.status = status;
}

// Class constructor
class Teacher {
  constructor(age) {
    this._age = age;
  }

  start() {
    console.log(`Parent class... ${this._age}`);
  }

  get age() {
    return this._age;
  }

  set age(newAge) {
    this._age = newAge;
  }
}

class Pupil extends Teacher {
  constructor(name, isAdmin, update, age) {
    super(age);
    this.name = name;
    this.isAdmin = isAdmin;
    this.update = update;
    this._age = age;
  }

  countAge() {
    return console.log(this._age + 6);
  }

  start() {
      super.start();
    console.log(`child class... ${this._age}`);
  }
  static log() {
    return console.log("All is ok...");
  }
}

const Student = new Humans(user[0].name, user[0].age, user[0].status);
const studentClass = new Pupil(
  user[1].name,
  user[0].isAdmin,
  user[0].update,
  user[1].age
);

// console.log(Student.name);
console.log(studentClass.start());
