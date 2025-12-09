const kgToGMConverter= (input: number | string) : number|string|undefined=>{
    if( typeof input === "number"){
        return input*1000;
    }
    else if(typeof input === "string"){
        const [value] = input.split(" ");
        return `COnverted to gm ${Number(value)*100}`
    }
}

const result1= kgToGMConverter(2) as number;
console.log(result1)
const result2= kgToGMConverter("2 kg") as string;
console.log(result2)