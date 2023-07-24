const sumIn = document.getElementById("sumIn") as HTMLInputElement|null;
const result = document.getElementById("result") as HTMLElement|null;
const choose = document.getElementById("choose") as HTMLSelectElement;
const btnDark = document.getElementById("btnDark") as HTMLButtonElement;
const dark = document.documentElement.classList;
let chooseValue:number = Number(choose.value); 

const handleDarkMode = ()=>{
    dark.toggle("dark");
}
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
btnDark.addEventListener("click",handleDarkMode);
choose.addEventListener("change", ()=>chooseValue = Number(choose.value))

sumIn.addEventListener("input", () =>result.innerText= handleOutPut(Number(sumIn.value),chooseValue))

