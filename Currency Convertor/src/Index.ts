const sumIn = document.getElementById("sumIn") as HTMLInputElement|null;
const result = document.getElementById("result") as HTMLElement|null;

const handleOutPut=(a:number,b:number):string=>{
    if(Number(a))
        if((a*b)%1===0)
            return `${a*b}`;
        else{
            let str:string = `${a*b}`;
            let newArr:string[] = str.split(".");
           return `${newArr[0]}.${newArr[1].slice(0,newArr.length)}`; 
        }
    else
        return "0";
}

sumIn.addEventListener("input", () =>result.innerText= handleOutPut(Number(sumIn.value),4.95))

