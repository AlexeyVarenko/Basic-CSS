/*Inherit Styles from the Body Element
Now we've proven that every HTML page has a body element, and that its body element can also be styled with CSS.

Remember, you can style your body element just like any other HTML element, and all your other elements will inherit your body element's styles.

First, create a h1 element with the text Hello World

Then, let's give all elements on your page the color of green by adding color: green; to your body element's style declaration.

Finally, give your body element the font-family of monospace by adding font-family: monospace; to your body element's style declaration.

*/


<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }
</style>

<h1>Hello World</h1>