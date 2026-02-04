import {formatCurrency} from '../scripts/utils/money.js'

console.log('test suite: formatCurrency')

console.log('converts cents into dollars')
//format currency takes number in cents and converts it to dollar
if (formatCurrency(2095)==='20.95'){  //the situation for which we are testing is called test case
    console.log('passed')
}else{
    console.log('failed')
}

console.log('works with 0')
if(formatCurrency(0)==='0.00'){
    console.log('passed')
}else{
    console.log('failed')
}

console.log('rounds up to the nearest cent')
if(formatCurrency(2000.5)==='20.01'){
    console.log('passed')   
}else{
    console.log('failed')
}

//group of related test is called test Suite
