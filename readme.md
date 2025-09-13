### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
2. How do you **create and insert a new element into the DOM**?
3. What is **Event Bubbling** and how does it work?
4. What is **Event Delegation** in JavaScript? Why is it useful?
5. What is the difference between **preventDefault() and stopPropagation()** methods?

### -------------------------------------------------
1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

### getElementById : It returns only one element.The returned element can be accessed directly.If that ID does not exist, it returns null.Returns only one element.Works very fastand it finds specific id directly from DOM


### getElementsByClassName : If multiple elements use the same class, return them all together.It updates automatically when the DOM is updated.

### querySelector : It is used to select a specific element, similar to a CSS selector.This returns the first matching element.

### querySelectorAll :  This returns a NodeList of all matching elements.Looping is easy with forEach


 2. How do you **create and insert a new element into the DOM**?
### at first web have to create  elements such as div a h p ect. then we have to insert by element in the dom 

 3. What is **Event Bubbling** and how does it work?

### The event will first occur on the button then on the div then on its parent then on the root. The event will first execute on the target element and the event will continue to rise according to the structure of the DOM.

 4. What is **Event Delegation** in JavaScript? Why is it useful?
### Event Delegation is a technique where you set an event listener on the parent element, but use that event for clicks or actions on child elements.Reduces code, increases performance, events run even on dynamic elements

 5. What is the difference between **preventDefault() and stopPropagation()** methods?
 ### preventDefault() is used to disable the default behavior of an HTML element.stopPropagation() is used to stop event bubbling. That is, to stop an event from going to its parent or upper DOM element.

