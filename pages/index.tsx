
export default function Home() {
  return (
    <div>
      Hello World
    </div>
  )
}

// async function foo() {
//   return 123
// }
// // console.log(foo());
// foo().then(value => {
//   console.log(value);
// });


process.on('unhandledRejection', () => null);

const notAPromise =
  123;
const promiseThatWillResolve =
  new Promise(res => res(456));
const promiseThatWillReject =
  new Promise((res, rej) => rej(new Error('Hello')));

// async function foo() {
//   const res1 = await notAPromise;
//   console.log({ forNotAPromise: res1 });
//   const res2 = await promiseThatWillResolve;
//   console.log({ forPromiseThatWillResolve: res2 });
//   try {
//     const res3 = await promiseThatWillReject;
//     console.log('I will never get called as error is thrown in previous line');
//   }
//   catch (e) {
//     console.log({ forPromiseThatWillReject: e.message });
//   }
// }
// foo();

async function foo() {
  console.log('Waiting 5 seconds');
  await new Promise(res => setTimeout(res, 5000));
  console.log('Done waiting!');
}
foo();