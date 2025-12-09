//type alius
type User = {
    name: string,
    age: number,
};

type role = {
    role: "admin" | "user";
};

type userWithRole= User & role;

const user1:userWithRole = {
    name: "mst",
    age: 25,
    role:"admin"
}

//interface
//function

type Add = (num1: number, num2: number) => number;

interface IAdd {
    (num1 : number, num2:number) : number;
};
const add:IAdd = (num1,num2)=> num1+num2;