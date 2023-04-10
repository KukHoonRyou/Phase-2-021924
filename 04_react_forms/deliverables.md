# React Forms

## SWBATs:

- [ ] Explain the difference between a controlled and uncontrolled input
- [ ] Explain why controlled inputs are preferred by the React community
- [ ] Review how to use callback functions with events in React
- [ ] Review how to change parent state from a child component

---

## Deliverables

#### 1. Make the `ProjectForm` component a controlled component

##### 1a. Initialize state for all the form fields found in the component

##### 1b. Add an `onChange` event to each field that will update state associated to the field that is interacted with

##### 1c.  Provide a `value` attribute to each form field that will return the associated piece of state

##### 1d.  Add an `onSubmit` event handler to the form

<br />

#### 2. Handle submitting the form and update state in parent using inverse data flow

##### - When the form is submitted:

##### 2a. Update the `projects` state located in the parent component, `App` using inverse data flow

##### 2b. Use the spread operator to return a new array with the new project included

##### 2c. Set the `projects` state to the new array value