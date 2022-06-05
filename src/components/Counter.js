/* Import useState Hook */
import React, { useState } from "react";

function Counter() {
  /* Call useState with initial value and
     array destructure state value and state setter function. */
  const [count, setCount] = useState(0);

  /* Event handler callback function. */
  function increment() {
    /* Showing example of asynchronous nature of state. */
    // console.log(`Before setState: ${count}`)

    // /* Call setter function passing in state value reference. */
    // setCount(count + 1);
    // setCount(count + 1);

    // console.log(`After setState: ${count}`)

    /* Showing example of asynchronous nature of state. */
    // console.log(count);
    // // => 0

    // setCount(count + 1);
    // // equivalent to setCount(0 + 1)

    // console.log(count);
    // // => 0

    // setCount(count + 1);
    // // equivalent to setCount(0 + 1)

    // console.log(count);
    // // => 0

    /* Solution: Pass callback function. */
    console.log(`Before setState: ${count}`)

    setCount((currentCount) => currentCount + 1 );
    // setCount((currentCount) => currentCount + 1 );

    console.log(`After setState: ${count}`)
  }

  return <button onClick={increment}>I have been clicked {count} times</button>;
}

export default Counter;
