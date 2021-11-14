# PASSWORD GENERATOR

## ABOUT THIS PROJECT
The aim of this project was to use JavaScript to generate a completely unique password but also take in the wants of the user to customize the conditions that the password generated would follow. What type of characters they would like included for example. This was achieved by taking the information from multiple arrays, pulling at random using the math.floor and math.random math methods then adding that selected value into a new array and loop over this process to match the users want. I used a loop to make sure that the amount of characters could be dynamically effected by the users input and we use the "userlimit" var twice in this. one to generate the loop amounts and then also to slice the string value we have at the end to make sure it meets the users request. I also used a randomize string function to stop the patterns occurring in longer passwords as for practical reasons this would be less secure for example "Aa12Bab23" is too structured even though it is technically random. I also used functions with in functions to achieve my goals with this project and also connected the html buttons to the JavaScript with OnClick and also getElementIds too.

## SOME OF THE ISSUES 
I did have issues with how I would go about validating my users choices against what arrays would pass but used if statements and "==" overcome that, but it was also ordering my functions in a logical way to make sure certain values were not being defined to early was key to this project as when I started values were being called too early. This project also utilizes local and global scope of defining variables. 

## IMAGES
- https://github.com/HarkyDev/Password-Generator/blob/main/Images/ERROR%20FOR%20CHARACTER%20AMOUNT.png
- https://github.com/HarkyDev/Password-Generator/blob/main/Images/EXAMPLE%20OF%20USE%20.png
- https://github.com/HarkyDev/Password-Generator/blob/main/Images/Logic%20explained.png
- https://github.com/HarkyDev/Password-Generator/blob/main/Images/PROMPTS.png

## LINKS
- REPO https://github.com/HarkyDev/Password-Generator
- DEPLOYED SITE https://harkydev.github.io/Password-Generator/

## SIDE NOTES & DISCLAIMER
I enjoyed this project and felt it really helped me get my head around the ideas of basic functions and feel very confident about using them now. Including loops and functions within functions. 