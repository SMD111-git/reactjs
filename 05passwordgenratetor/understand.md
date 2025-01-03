`useCallback` is a React Hook that returns a memoized version of a callback function. It is used to optimize performance by preventing unnecessary re-creations of the callback function on every render. 

### Why Use `useCallback`?

In React, when a component re-renders, all functions defined inside that component (even if they haven't changed) are re-created. This can be an issue in scenarios where functions are passed down to child components or used in expensive computations, causing unnecessary re-renders or recalculations.

By using `useCallback`, you ensure that a function is not redefined on every render unless its dependencies change.

### Syntax of `useCallback`

```javascript
const memoizedCallback = useCallback(
  () => {
    // Your callback logic here
  },
  [dependencies], // list of dependencies
);
```

- **Callback Function:** The first argument is the function you want to memoize.
- **Dependencies:** The second argument is an array of dependencies. The callback function will only be re-created if one of the dependencies has changed since the last render.

### Example:

Let's say we have a counter component that increments a number, and we want to prevent unnecessary re-renders of the child component when the counter changes.

```javascript
import React, { useState, useCallback } from 'react';

const ChildComponent = React.memo(({ increment }) => {
  console.log("Child re-rendered!");
  return <button onClick={increment}>Increment</button>;
});

function ParentComponent() {
  const [count, setCount] = useState(0);

  // Memoize the callback to prevent re-creation of the function unless `count` changes
  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <ChildComponent increment={increment} />
    </div>
  );
}

export default ParentComponent;
```

### Explanation:

- **`ChildComponent`** is wrapped with `React.memo`, which prevents it from re-rendering unless its props change.
- The `increment` function is created using `useCallback`. It will only be redefined when the `count` dependency changes. Without `useCallback`, the `increment` function would be recreated on every render, which could trigger unnecessary re-renders of the child component.

### When to Use `useCallback`?

1. **Performance optimization**: To prevent unnecessary re-renders of child components that depend on functions passed as props.
2. **Passing functions to optimized components**: If you're using `React.memo` or `PureComponent` in child components and passing functions down as props, `useCallback` can help avoid unnecessary re-renders.
3. **Dependencies in `useEffect` or `useMemo`**: If you're passing a function as a dependency in `useEffect` or `useMemo`, `useCallback` can help prevent the effect from running unnecessarily.

### When Not to Use `useCallback`?

1. **Premature optimization**: If the function isn't being passed down to child components or isn’t part of an expensive calculation, using `useCallback` might not be necessary.
2. **Simple components**: In small applications or components, the performance gain of `useCallback` is often negligible and can just add complexity.

In summary, `useCallback` is helpful for optimizing performance in scenarios where functions are passed down to child components or dependencies in hooks. It ensures that a function isn't re-created unless it's necessary.