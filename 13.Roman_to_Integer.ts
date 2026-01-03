const symbols = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};
const subtractions= {
    IV:4,
    IX:9,
    XL:40,
    XC:90,
    CD:400,
    CM:900
}
function romanToInt(s: string): number {
    let total:number = 0; 
    Object.entries(subtractions).forEach(([subtraction,value])=>{
        if(s.includes(subtraction)){
            s = s.replace(subtraction,"")
            total+=value
        }
    })
    Object.entries(symbols).forEach(([symbol,value])=>{
        if(s.includes(symbol)){
            const occurrences = s.split(symbol).length-1 
            if(occurrences){
                total+=(value*occurrences)
            }
            s.replaceAll(symbol ,"")
        }
    })
    

    return total
}

console.log(romanToInt("MMMXLV"))