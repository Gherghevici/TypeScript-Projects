const sumIn = document.getElementById("sumIn");
const result = document.getElementById("result");
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
sumIn.addEventListener("input", () => result.innerText = handleOutPut(Number(sumIn.value), 4.95));
export {};
//# sourceMappingURL=Index.js.map