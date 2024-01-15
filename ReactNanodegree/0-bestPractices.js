// ---------------Declarative Code----------

// ==> Use PureComponent or memo: Use PureComponent or the memo higher-order component to prevent unnecessary re-renders 
// of components when their props or state haven't changed.

// ==> Avoid unnecessary re-renders: Optimize your components by using shouldComponentUpdate or React.memo to prevent 
// re-rendering when it's not necessary.

//stateManagement
/**
 * ==> Minimize State: Limit the use of state to situations where the data changes over time or cannot be computed from props. 
 * Too much state can make your code hard to understand and debug.
 * ==> Don't Mutate State Directly: Always use this.setState() or setState function returned by useState hook to change state.
 * ==> Use Functional Updates When New State Depends on Old State: If your new state depends on the previous state, you should 
 * pass a function to this.setState() or setState function. This function will receive the previous state as its argument and should return the new state.
 */

//hooks
/**
 * Only Call Hooks at the Top Level: Don’t call Hooks inside loops, conditions, or nested functions. Always use Hooks at the top level of your React function.
 * Only Call Hooks from React Functions: Don’t call Hooks from regular JavaScript functions. You can call Hooks from React function components or from custom Hooks.
 */

// when it comes to re-rendering the page, we just have to think about updating state. 

// hash of the content and use that as a key


/**
 * https://react.dev/learn/thinking-in-react
 * thinking in react
 * 1) break the UI into a component hierarchy
 * 2) build a static version in react
 * 3) identify the minimal (but complete) representation of UI state
 * 4) identify where your state should live
 * 5) add inverse data flow
 */

/**
 * How to NOT React: Common Anti-Patterns and Gotchas in React
 * https://www.youtube.com/watch?v=ZmVBCpefQe8
 * 
 * 1) Don't use index as key
 * 2) Don't mutate state directly
 * 3) Don't use setState in constructor
 * 4) setState() is async
 * 5) Components Name should be in PascalCase
 * 
 * 
 */