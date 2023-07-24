const sumIn = document.getElementById("sumIn");
const result = document.getElementById("result");
const choose = document.getElementById("choose");
const btnDark = document.getElementById("btnDark");
const dark = document.documentElement.classList;
let chooseValue = Number(choose.value);
const handleDarkMode = () => {
    dark.toggle("dark");
};
const handleOutPut = (a, b) => {
    if (Number(a))
        if ((a * b) % 1 === 0)
            return `${a * b}`;
        else {
            let str = `${a * b}`;
            let newArr = str.split(".");
            return `${newArr[0]}.${newArr[1].slice(0, newArr.length)}`;
        }
    else
        return "0";
};
btnDark.addEventListener("click", handleDarkMode);
choose.addEventListener("change", () => chooseValue = Number(choose.value));
sumIn.addEventListener("input", () => result.innerText = handleOutPut(Number(sumIn.value), chooseValue));
export {};
//# sourceMappingURL=Index.js.map