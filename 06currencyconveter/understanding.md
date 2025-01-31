The `useEffect` hook in React is used to perform side effects in function components. Side effects are operations that interact with the outside world (e.g., fetching data, setting up subscriptions, manually changing the DOM) or any code that doesn't directly involve rendering UI.

### Basic Syntax:
```jsx
useEffect(() => {
  // Code that performs the side effect
}, [dependencies]);
```

- The **first argument** is a function that contains the code you want to run as a side effect.
- The **second argument** is an array of dependencies, which determines when the side effect should run. If you pass an empty array `[]`, it runs only once (like `componentDidMount` in class components). If you omit it, the effect runs after every render.

### Use Case Examples:

#### 1. **Fetching Data**
One of the most common uses of `useEffect` is to fetch data from an API when the component mounts. For example:

```jsx
import React, { useState, useEffect } from 'react';

const DataFetcher = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch data when the component mounts
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);  // Empty dependency array: runs once on mount

  if (!data) return <div>Loading...</div>;
  return <div>{JSON.stringify(data)}</div>;
};
```
- In this case, `useEffect` is used to fetch data from an API when the component is first rendered.

#### 2. **Event Listeners**
Another example is adding event listeners that need to be cleaned up afterward:

```jsx
import React, { useEffect } from 'react';

const WindowSizeListener = () => {
  const handleResize = () => {
    console.log('Window resized');
  };

  useEffect(() => {
    // Add event listener on mount
    window.addEventListener('resize', handleResize);

    // Cleanup: remove event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);  // Empty array ensures this only runs on mount and unmount

  return <div>Resize the window and check the console.</div>;
};
```
- Here, the `useEffect` hook adds an event listener for the `resize` event and cleans it up when the component is unmounted.

#### 3. **Effect with Dependencies**
Sometimes, you might want to run an effect whenever a certain value changes. For example, if you want to run a side effect when a specific state or prop changes:

```jsx
import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    // Cleanup on unmount or when seconds change
    return () => clearInterval(timerId);
  }, [seconds]);  // Effect runs whenever `seconds` changes

  return <div>Timer: {seconds} seconds</div>;
};
```
- In this case, the effect runs whenever the `seconds` state updates, and it clears the timer when the component is unmounted or before running the effect again.

### Key Points:
1. **Side effects in functional components:** `useEffect` is the tool for running side effects like fetching data, setting up subscriptions, or directly manipulating the DOM.
2. **Dependency array:** The second argument helps control when the effect should run. It can be:
   - `[]`: Run only once after the initial render (componentDidMount).
   - `[dep1, dep2]`: Run when any of the specified dependencies change.
   - No array: Runs after every render.
3. **Cleanup:** Return a function inside the effect to clean up when the component unmounts or when dependencies change.

Is there a particular example of `useEffect` you’re working on that you need help with?