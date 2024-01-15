/**
 * 
 * Note: 
 * useEffect allows access ot lifecycle methods
 * This hook allows us to run special code or custom logic at specific points of a component's lifecycle, including after the component 
 * is mounted to the DOM, after the component is updated, and even before the component is destroyed (i.e., unmounted from the DOM).
 * 
 * Array as the Second Argument: When you pass an empty array as the second argument to useEffect, it tells React that your 
 * effect does not depend on any values from props or state, so it doesn't need to run more than once after the initial render. 
 * This effectively simulates the componentDidMount and componentWillUnmount lifecycle methods, as it will only run when 
 * the component mounts and unmounts.
 * 
 * If you do not return a function from within the useEffect hook, then no cleanup logic will be executed when the component unmounts or
 *  before the effect runs again due to changes in dependencies.
 * 
 * The cleanup function is optional. You only need to provide one if there are side effects that need to be cleaned up to prevent memory leaks or 
 * other unwanted behavior
 * 
 * 
 * useContext
 * useReducer
 * useCallback
 * useMemo
 * useRef
 * useImperativeHandle
 * useLayoutEffect
 * useDebugValue
 */