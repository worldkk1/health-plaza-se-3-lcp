import { findLcp } from './lcp.js';
// const { findLcp } = require('./lcp');
// describe('test LCP', () => {
//   test('1', () => {
//     const testWords = ['flower','flow','flight'];

//     const lcp = findLcp(testWords);

//     expect(lcp).toEqual('fl');
//   });
// });


const dataTest = [
  {
    strs: ['flower','flow','flight'],
    lcp: 'fl',
  },
  {
    strs: ['dog','racecar','car'],
    lcp: '',
  },
  {
    strs: ['abc', 'abef', 'abccc', 'abftg'],
    lcp: 'ab',
  },
  {
    strs: ['apple', 'apply', 'apollo', 'abracadabra'],
    lcp: 'a',
  },
  {
    strs: ['qwerty', 'hello'],
    lcp: '',
  },
  {
    strs: ['helloworld', 'hell', 'hello'],
    lcp: 'hell',
  },
  {
    strs: ['hello'],
    lcp: 'hello',
  },
  {
    strs: ['hello'],
    lcp: 'hello',
  },
  {
    strs: ['geeksforgeeks', 'geeks', 'geek', 'geezer'],
    lcp: 'gee',
  },
  {
    strs: ['apple', 'ape', 'april'],
    lcp: 'ap',
  },
];


dataTest.forEach(({ strs, lcp }) => {
  test(`${strs} should have lcp: ${lcp}`, () => {
    const result = findLcp(strs);
  
    expect(result).toEqual(lcp);
  });
});
