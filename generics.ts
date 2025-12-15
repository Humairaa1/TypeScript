type GenericsArry<v> = Array<v>;

// const number : Number[] = [1,2,3,4,5];
const number : GenericsArry<Number> = [1,2,3,4,5];


// const string : String[] = ["a",'ee','fff','hhh'];
const string : GenericsArry<String> = ["a",'ee','fff','hhh'];


// const boolean : Boolean[] = [true,false,true];
const boolean : GenericsArry<Boolean> = [true,false,true];

type GenericsArry2<x,y> = [x,y];
const coordinates1 : GenericsArry2<number,number> = [20,30];
const coordinates2 : GenericsArry2<String,String> = ['20','30'];

// object 

const userList : GenericsArry<{
    name: String,
    age:number,
}> = [
    {
        name: "humaira",
        age:20,
    },
    {
        name:"kkkk",
        age: 98,
    }
]

