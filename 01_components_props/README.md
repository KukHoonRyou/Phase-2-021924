# Components and Props
## SWBATs:

- [ ] Review the benefits of React over Vanilla JS
- [ ] Explain the difference between HTML and JSX 
- [ ] Explain the ReactDOM.render() method including what arguments it takes and why it's important
<br /><br />
- [ ] Explain the difference between declarative and imperative programming
- [ ] Review the importance of components and modular code
- [ ] Explain what props are and how to create them
- [ ] Recognize best practices when writing components and props
<br /><br />
- [ ] Review how a component is written
- [ ] Recognize destructured props and how to work with them
- [ ] Observe how to render multiple components from a list

---

## ❓ Why React 

Writing vanilla JavaScript is hard especially when it comes to
- Creating/Updating DOM elements
- Code organization (separation of concerns)

---

## 💡 React Philosophy 

- Use declarative syntax (JSX)
- Make it easier to work with the DOM

---

## Declarative vs Imperative 

- Imperative: Instead of describing how to do something (an explicit sequence of events):

```js
const h1 = document.createElement("h1");
h1.id = "main";
h1.className = "blue";
h1.textContent = "Hello!";
```

- Declarative: We can just describe what we want (specifies the result):

```js
const h1 = (
  <h1 id="main" className="blue">
    Hello from JSX!
  </h1>
);
```

---

## JS vs. JSX 
Under the hood, React apps use a tool called Babel to transpile the JSX syntax to valid JS

- we write JSX
- babel transpiles JSX into valid JS
- That transpiled code is what actually runs in the browser

---

The code you write
```js
const h1 = (
  <h1 id="main" className="blue">
    Hello from JSX!
  </h1>
);
 
```

The code the browser runs
```js
"use strict";
var h1 =
  /*#__PURE__*/
  React.createElement(
    "h1",
    { id: "main", className: "blue" },
    "Hello from JSX!"
  );
```

---

## ReactDOM.render 

```js
ReactDOM.render(<App />, document.getElementById('root'))
```
- inserts a react element into the DOM
- first arg is the react element we'd like to render to the DOM(JSX)
- the second argument is the DOM node where we want to insert that react element

--- 

NOTE: ReactDOM.render only works with React up to version 17.  We will be using version 16.  React 18 now uses ReactDOM.createRoot() but it does the same thing as ReactDOM.render().

---

## Virtual DOM

- React creates a virtual representation of the UI that is saved in memory
- ReactDOM is responsible for making sure the real DOM matches the virtual DOM
- This process abstracts out the manual updating, element creation, etc. from phase 1

---

## 🚗 React Roadmap

The goals for Phase 2: 

- Create a static frontend site with components and props (DOM Manipulation)
- Use state and events to make your site dynamic (Event Handling)
- Add side effects and data fetching to communicate with a server (Network Communication)

---

## Components 
Components are the building blocks of React. A component is a function that:

- Takes in some raw data (props)
- Returns user interface (JSX)

```js
const Header = () => {
  return (
    <div>
      <h3>Hello World</h3>
    </div>
  );
};

ReactDOM.render(<Header />, document.getElementById("root"));
```

---

## ⚙️ Component Gotchas 

This is okay:

```js
function Card() {
  return (
    <div id="card1" className="card">
      <h1>hi</h1>
      <p>wassup?</p>
    </div>
  );
}
```

This is NOT okay:

```js
function card() {
  return (
    <h1>hi</h1>
    <p>wassup?</p>
  )
}
```

- Component name needs to be capitalized
- Components can only return one element

---

## 🎩 Props! 

When you create components, one way to make them dynamic and reusable is by passing in props. For example, if we wanted to create several cards on our page using a Card component, we could do so like this:

```js
function Card(props) {
  return (
    <div id="card1" className="card">
      <h1>{props.greeting}</h1>
      <p>{props.subGreeting}</p>
    </div>
  );
}

// Inside another component

return (
  <div>
    <Card greeting="hi" subGreeting="hello" />
    <Card greeting="sup" subGreeting="what's up" />
  </div>
);
```

---

## 🎩 Props Continued 

The props argument in our Card component defines an object that React will pass to our function when it is called, and it will use whatever attributes we add to our JSX component as key-value pairs on that props object.

For example, if we were to add a console.log in the Card component above, we'd end up seeing this object:

```js
function Card(props) {
  console.log(props); // => { greeting: "hi", subGreeting: "hello" }

  return (
    <div id="card1" className="card">
      <h1>{props.greeting}</h1>
      <p>{props.subGreeting}</p>
    </div>
  );
}
```

---


## Modular Coding 

- Clearer connection between the code we write and what is displayed in the browser
- Use components to break down complex UI into smaller pieces which creates a better separation of concerns
- Easier to maintain

---

## Wireframes 

<img src="https://res.cloudinary.com/dnocv6uwb/image/upload/v1643721399/wireframe_bfc35e.png">