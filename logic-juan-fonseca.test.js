const  {fibonacci,repeatedWords,fizzBuzz} = require('./logic-juan-fonseca');

//fibonacci tests start  ft=fibonacci test
test ("n=0 should be 0 ", ()=> {
  const ft1 = fibonacci(0);
  expect(ft1).toBe(0);
});

test ("n=1 should be 1 ", ()=> {
  const ft2 = fibonacci(1);
  expect(ft2).toBe(1);
});

test ("n=10 should be 55 ", ()=> {
  const ft3 = fibonacci(10);
  expect(ft3).toBe(55);
});

//repeatedWords test start rwt=repeated words test
test ("hello must have 3 repetitions", ()=> {
  const rwt1 =repeatedWords("hello my name is Hello and we come from hello");
  expect(rwt1['hello']===3).toBe(true);
});

test ("'how' must have 2 repetitions, 'are' 3 repetitions, 'you' 2 repetitions, 'a' 2 repetitions and 'developer' 2 repetitions",
()=> {
  const rwt2 =repeatedWords("Hi how are things? How are you?Are you a developer? I am also a developer");
  expect(rwt2['how']===2 && rwt2['are']===3 && rwt2['you']===2 && rwt2['a']===2 && rwt2['developer']===2).toBe(true);
});

//fizzbuzz tests start fbt=fizzbuzz test
test ("the array must have 31 fizz and 14 buzz and 6 fizzbuzz", ()=> {
  const fbt = fizzBuzz();
  expect(
    fbt.filter(word => word==="fizz").length===27 &&
    fbt.filter(word => word==="buzz").length===14 &&
    fbt.filter(word => word==="fizz buzz").length===6
  ).toBe(true);
});
//fizzbuzz tests end
