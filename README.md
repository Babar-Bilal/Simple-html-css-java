# beginner-html-site-styled
Source:
https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics

1. Go to your test site and create a new folder named scripts. Within the scripts folder, create a new text document called main.js, and save it.
2. In your index.html file, enter this code on a new line, just before the closing </body> tag:
        
        <script src="scripts/main.js"></script>

3. This is doing the same job as the <link> element for CSS. It applies the JavaScript to the   page, so it can have an effect on the HTML (along with the CSS, and anything else on the page).
4. Add this code to the main.js file:

        const myHeading = document.querySelector('h1');
        myHeading.textContent = 'MARKHOR is Cool!';

5. Make sure the HTML and JavaScript files are saved. Then load index.html in your browser. You should see something like this:

Before going any further, delete the current contents of your main.js file — the bit you added earlier during the "MARKHOR is Cool!" example — and save the empty file. If you don't, the existing code will clash with the new code you are about to add.
 ===============================================================================================

6. Adding an image changer in javascript:
        1. Choose an image you want to feature on your example site. Ideally, the image will be the same size as the image you added previously, or as close as possible.
        2. Save this image in your images folder.
        3. Rename the image markhor-icon2.png.
        4. Add the following JavaScript code to your main.js file.

        let myImage = document.querySelector('img');
        myImage.onclick = function() {
                let mySrc = myImage.getAttribute('src');
                if(mySrc === 'images/markhor-icon.png') {
                  myImage.setAttribute('src','images/markhor-icon2.png');
                } else {
                  myImage.setAttribute('src','images/markhor-icon.png');
                }
        }

        5. Save all files and load index.html in the browser. Now when you click the image, it should change to the other one.

This is what happened. You stored a reference to your <img> element in the myImage variable. Next, you made this variable's onclick event handler property equal to a function with no name (an "anonymous" function). So every time this element is clicked:

        1. The code retrieves the value of the image's src attribute.
        2. The code uses a conditional to check if the src value is equal to the path of the original image:
                If it is, the code changes the src value to the path of the second image, forcing the other image to be loaded inside the <img> element.
                If it isn't (meaning it must already have changed), the src value swaps back to the original image path, to the original state.

7. Adding a welcome message:
        1. In index.html, add the following line just before the <script> element:

        <button>Change user</button>

        2. In main.js, place the following code at the bottom of the file, exactly as it is written. This takes references to the new button and the heading, storing each inside variables:

        let myButton = document.querySelector('button');
        let myHeading = document.querySelector('h1');

        3. Add the following function to set the personalized greeting. This won't do anything yet, but this will change soon.

        function setUserName() {
           let myName = prompt('Please enter your name.');
           localStorage.setItem('name', myName);
           myHeading.textContent = 'MARKHOR is Cool!, ' + myName;
        }

The setUserName() function contains a prompt() function, which displays a dialog box, similar to alert(). This prompt() function does more than alert(), asking the user to enter data, and storing it in a variable after the user clicks OK. In this case, we are asking the user to enter a name. Next, the code calls on an API localStorage, which allows us to store data in the browser and retrieve it later. We use localStorage's setItem() function to create and store a data item called 'name', setting its value to the myName variable which contains the user's entry for the name. Finally, we set the textContent of the heading to a string, plus the user's newly stored name.

        4. Add the following condition block. We could call this initialization code, as it structures the app when it first loads.

        if(!localStorage.getItem('name')) {
          setUserName();
        } else {
          let storedName = localStorage.getItem('name');
          myHeading.textContent = 'MARKHOR is Cool!, ' + storedName;
        }

        5. Put this onclick event handler (below) on the button. When clicked, setUserName() runs. This allows the user to enter a different name by pressing the button.

        myButton.onclick = function() {
          setUserName();
        }

8. A User Name of null?
        When you run the example and get the dialog box that prompts you to enter your user name, try pressing the Cancel button. You should end up with a title that reads MARKHOR is Cool!, null. This happens because—when you cancel the prompt—the value is set as null.

        Also, try clicking OK without entering a name. You should end up with a title that reads MARKHOR is Cool!, for fairly obvious reasons.

        To avoid these problems, you could check that the user hasn't entered a blank name. Update your setUserName() function to this: At line 58.

        function setUserName() {
          let myName = prompt('Please enter your name.');
          if(!myName) {
                setUserName();
          } else {
                localStorage.setItem('name', myName);
                myHeading.textContent = 'MARKHOR is Cool!, ' + myName;
                }
        }





