/**
 * State Management
 * ==> Passing Data with Props between parent and child components
 * ==> Add State to a Component, which represents mutable data
 * ==> Update State with useState(), one of the key Hooks of React
 * ==> Typechecking with PropTypes, allowing us to ensure proper data flow to components
 * ==> Building Forms with Controlled Components, leveraging React state as the source of truth
 */


/**
 * Best Practices
 * ==> Minimize State: Limit the use of state to situations where the data changes over time or cannot be computed from props. 
 * Too much state can make your code hard to understand and debug.
 * ==> Don't Mutate State Directly: Always use this.setState() or setState function returned by useState hook to change state.
 * ==> Use Functional Updates When New State Depends on Old State: If your new state depends on the previous state, you should 
 * pass a function to this.setState() or setState function. This function will receive the previous state as its argument and should return the new state.
 */