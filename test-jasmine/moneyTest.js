import {formatCurrency} from '../scripts/utils/money.js'

describe('test suite: formatCurrency',()=>{  //describe is a function provided by jasmine which indicate its a suite
    it('converts cents into dollars',()=>{
        expect(formatCurrency(2095)).toEqual('20.95')  //expect lets us compare value to another value
    })  //it is another function give by jasmine -expect gives us an object and object has many method like .toEqual

    it('works with 0',()=>{
        expect(formatCurrency(0)).toEqual('0.00')
    })

    it('rounds up to the nearest cent',()=>{
        expect(formatCurrency(2000.5)).toEqual('20.01')
    }
    )
})

