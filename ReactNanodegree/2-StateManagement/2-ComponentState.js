/**
 * By having a component manage its own state, any time there are changes made to that 
 * state, React will know and automatically make the necessary updates to the page.
 * 
 * This is one of the key benefits of using React to build UI components:
 *  when it comes to re-rendering the page, we just have to think about updating state. 
 * We don't have to keep track of exactly which parts of the page change each time there are updates. 
 * We don't need to decide how we will efficiently re-render the page. React compares the previous output and 
 * new output, determines what has changed, and makes these decisions for us. This process of determining what 
 * has changed in the previous and new outputs is called Reconciliation
 */

/**
 * While a component can set its state when it initializes, we expect that state to change over time, usually 
 * due to user input. The component is able to change its own internal state using a function. Each time state 
 * is changed, React knows and will re-render the component. This allows for fast, efficient updates to your 
 * application's user interface.
 */

/**
 * Avoid Direct Mutations
 * Always return a new value instead of mutating the current state value, especially for objects and arrays.
 */

const [items, setItems] = useState([]);
function addItem(item) {
  setItems(prevItems => [...prevItems, item]);
}

/**
 * Don't Call useState Inside Loops, Conditions, or Nested Functions
 * Always use useState at the top level of your component. React relies on the order of hook calls being consistent across renders.
 */

/**
 * Optimizing Performance]
 * If you're facing performance issues due to frequent re-renders, you might consider using React.memo or 
 * useMemo and useCallback to optimize components and functions respectively.
 */

/**
 * immutability
 */