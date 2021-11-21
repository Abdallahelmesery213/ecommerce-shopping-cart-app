// To format the number of price
export const FormatCurrency = (num)=>{
    return '$' + Number(num.toFixed(2)).toLocaleString() + ' ';
}