import { magic } from './server'; 

export default function Home() {
  return (
    <div>
      Hello World
    </div>
  )
}

// function* numbers() {
//   let index = 1;
//   while (true) {
//     yield index;
//     index = index + 1;
//     if (index > 10) {
//       break;
//     }
//   }
// }

(Symbol as any).asyncIterator =
  (Symbol as any).asyncIterator
  || Symbol.for("Symbol.asyncIterator");

async function* numbers() {
  let index = 1;
  while (true) {
    yield index;
    index = await magic(index);
    if (index > 10) {
      break;
    }
  }
}

// function main() {
//    for (const num of numbers()) {
//      console.log(num);
//    }
// }
// main();

async function main() {
  for await (const num of numbers()) {
    console.log(num);
  }
}
main();
