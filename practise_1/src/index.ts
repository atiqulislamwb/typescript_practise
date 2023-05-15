let course: string = "Hello World from Typescript from ts node dev";
course = "next level";
console.log(course);
let price: number = 220;

const isAdmin: boolean = false;

const names: string[] = ["ami", "tumi", "she"];
let prices: number[] = [112, 3, 344, 5, 12];
prices[10] = 222;

console.log(prices);

//const user: [number, string] = [222, "Russell"];

//object

const user: {
  id: number;
  name: string;
  company: string;
  age: number;
  isMarried: boolean;
  wife?: string;
} = {
  id: 112,
  name: "Ali",
  company: "PH",
  age: 52,
  isMarried: true,
  wife: "Begum",
};

type NumberType = (num1: number, num2: number) => number;

interface INumber {
  (num1: number, num2: number): number;
}

const addNumber: NumberType = (num1, num2) => {
  return num1 + num2;
};

// console.log(addNumber(2, 2));
const arr = [1, 2, 44];
const newArray = arr.map((item: number) => item * item);
console.log(newArray);

const person: {
  name: string;
  balance: number;
  addMoney(money: number): void;
} = {
  name: "something",
  balance: 5,
  addMoney(money: number) {
    return `My balance is ${this.balance + money}`;
  },
};

const friends = ["ami", "tumi", "she"];
const newFriends = ["tui", "apni"];
friends.push(...newFriends);

console.log(friends);
type OperationType = (x: number, y: number) => number;

const calculate = (
  num1: number,
  num2: number,
  operator: OperationType
): number => {
  return operator(num1, num2);
};

type User = {
  name: string;
  age: number;
};
interface IUser {
  name: string;
  age: number;
}

interface IExtendedUser extends IUser {
  role: string;
}

const student: IExtendedUser = {
  name: "Bilkish",
  age: 20,
  role: "student",
};

const rollNumber: Array<number> = [1, 23, 4, 5];
type GenericArray<T> = Array<T>;

type InternetUser = {
  name: string;
  age: number;
  role: string;
};

const internetUsers: GenericArray<InternetUser> = [
  { name: "Jhon", age: 21, role: "user" },
  { name: "King", age: 30, role: "admin" },
];

type PersonType = {
  name: string;
  age: number;
  address: string;
};

type newType = "name" | "age" | "address";

type NewTypeUsingKeyOf = keyof PersonType;

const newPromise = (): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const data: string = "Data fetching";
    if (data) {
      resolve(data);
    } else {
      reject("something went wrong");
    }
  });
};

const getData = async () => {
  const data = await newPromise();
  return data;
};

const newPromise1 = (): Promise<object> => {
  return new Promise<object>((resolve, reject) => {
    const data: object = { name: "ami", age: 25 };
    if (data) {
      resolve(data);
    } else {
      reject("something went wrong");
    }
  });
};

interface Human {
  name: string;
  age: number;
  face: string;
}

type Describe = Pick<Human, "face">;
type Call = Omit<Human, "face">;

//Partial & Require
type Optional = Partial<Human>; //optional ?
type Require = Required<Human>;
