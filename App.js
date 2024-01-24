// showing hello world using javascript
// const heading = document.createElement("h1");
// heading.innerHTML = "Hello World From Javascript";

// const root = document.getElementById("root");
// root.appendChild(heading);

// showing hello world using react

// const heading = React.createElement(
//         "h1",
//         {id: "heading"},
//         "Hello World From React!"
// );

/**
 * 
 * <div id="parent">
 *      <div id="child">
 *              <h1>I'm h1 tag</h1>
 *              <h2>I'm h2 tag</h2>
 *      </div>
*        <div id="child2">
*             <h1>I'm h1 tag</h1>
*              <h2>I'm h2 tag</h2>
*         </div>
 * </div>
 * let create this nested element by using react
 */

const parent = React.createElement(
        "div",
        { id: "parent" },[
                React.createElement(
                        "div",
                        { id: "child" }, [
                        React.createElement("h1", {}, "I'm h1 tag"),
                        React.createElement("h2", {}, "I'm h2 tag")
                ]),
                React.createElement(
                        "div",
                        { id: "child2" }, [
                        React.createElement("h1", {}, "I'm h1 tag"),
                        React.createElement("h2", {}, "I'm h2 tag")
                ])
        ]
        
);

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

/**
 * react is only work for the element which is targeted
 * For Example: in the above example the root div is targeted 
 * if there is another div with the id we can targeted it by telling the react his id.
 * Then the react will work only for the id which is targeted.
 */