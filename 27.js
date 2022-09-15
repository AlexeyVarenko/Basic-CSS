/*Prioritize One Style Over Another
Sometimes your HTML elements will receive multiple styles that conflict with one another.

For example, your h1 element can't be both green and pink at the same time.

Let's see what happens when we create a class that makes text pink, then apply it to an element. Will our class override the body element's color: green; CSS property?

Create a CSS class called pink-text that gives an element the color pink.

Give your h1 element the class of pink-text.

*/


<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }
  .pink-text{
    color:pink
  }

</style>
<h1 class="pink-text">Hello World!</h1>