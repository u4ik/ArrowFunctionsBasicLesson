/* Objectives following Bloom's Taxonomy:
? Knowledge
* - Identify what a function is, recognize the keywords that they use, and memorize the terminologies involved with them.
? Understand 
* - Compare and contrast the differences between Traditional Functions and Arrow Functions. 
? Apply
* - Determine whether the presented usage and syntax is correct. 
? Analyze  
* - Experiment with the challenges, break down what is needed to illustrate how a function works.
? Evaluating
* - Combine your knowledge with what you previously know, and construct your own functions for handling logic.
? Creating
* - Summarize what you've learned by explaining what is occurring in each of the functions below, along with putting in additional practice to support your knowledge. 

What is a function?
    function lookAtMeImAFunction (){
        <-What do we do in here??->
    }
*/

//? Can we take any guesses on what a function is, or to think about what purpose functions serve within our code?

// A function allows us to store logic within a specific container. Allowing us to execute that logic as many times as we want, whenever the function is invoked or called, which provides us with the perk of reusable logic. A function can also accept values, which are called arguments when passed in, and parameters when they are being used within a function's scope. Functions also allow us to split our code up to make our logical operations a bit more organized.

// To execute/call/invoke a function, we use the name that we declared for the function, or the variable that contains the expression of a function, and we provide parenthesis right after that name to invoke it. Within the parenthesis, we have the option to provide the function with single or multiple arguments.

function callOnMe() { return 'called' };

//? Student Research: What does the return keyword do? 
//A: The return keyword is what a function uses to stop its execution and/or to output a value.

//? Which of these is the correct syntax for invoking the function above? On-Track-Checker
//1
callOnMe;
//2
callOnMe();

// Since we know the function outputs a value, we can store that value in a variable, if we'd like, or use it elsewhere.
let storedVariable = callOnMe(); // Stored in variable
console.log(storedVariable) // "called"
console.log(`I ${callOnMe()} my mom today!`)// Call the function directly where we need the value

/* Imagine you have a giant list of cooking instructions read top down, with an instruction on each line, while some may take up multiple lines.
 And it turns out you have to make some changes, due to finding a better recipe. Well one could scroll through the massive list and change and replace what they need, but it would be a bit time consuming to track down and change those specific lines. With functions, we can split up the logic that's involved with each specific instruction, and easily know where to look to make those changes.
/*
?    Pizza Recipe:
     
*        Get ingredients for the dough
            1-1/2 cups (375 ml) warm water
            1 package or 2-1/4 tsp (11.25 ml) active dry yeast
            3-1/2 cups (875 ml) bread flour
            2 Tbsp (30 ml) olive oil
            2 tsp (10 ml) salt
            1 tsp (5 ml) sugar
*        Get ingredients for the sauce
            1 Tbsp (15 ml) olive oil
            2 tsp (10 ml) minced garlic
            1/4 cup (60 ml) minced sweet onion
            1/2 tsp (2.5 ml) dried oregano
            1/2 tsp (2.5 ml) dried basil
            1 lb (450 g) diced fresh tomatoes OR 14.5-oz (430-ml) can of diced tomatoes, undrained
            1/2 tsp (2.5 ml) sugar
            1/4 tsp (1.25 ml) salt
            1/4 tsp (1.25 ml) ground black pepper
*       Get Ingredients for the toppings
            8 oz (225 g) mozzarella cheese
            4-inch (10-cm) stick of pepperoni
            4 oz (110 g) bulk sausage
            1/2 of a small onion, roughly chopped
            1 sweet bell pepper, roughly chopped
            Olive oil
            1/4 cup (60 ml) fresh basil
        
*       Prepare the Dough__

            Combine the water, yeast, salt, and sugar. Place all four ingredients in a small mixing bowl and stir gently to combine.
            Ideally, the water should be "blood temperature," or between 96 to 98.6 degrees Fahrenheit (35.5 to 37 degrees Celsius).
            Allow the mixture to sit for 5 minutes, or until the yeast fully dissolves and starts to foam.

            Form a well with the flour. Dump the flour out onto a clean, sturdy work surface and form it into a mound. Use your hands to alter the shape of this mound into a deep well with high walls.[1]
            For this recipe, you'll knead the dough by hand. If you plan to use a stand mixer, however, you can place the flour into the bowl of the mixer instead of the table or counter.

            Gradually combine the water and flour. Add one-third of the water mixture. Use a fork to carefully knock some of the flour from the wall of the well into this puddle, but do not allow the well to collapse.
            After mixing the water into the flour, repeat this step with another one-third of the water, followed by the remaining third.
            When finished, a very sticky dough should form.

            Knead for 10 minutes. Dust your hands with flour, then knead the dough by hand for 10 minutes. Stop only when the dough feels firm and cohesive.
            If you'd prefer to knead the dough using a stand mixer, fit it with the dough hook attachment and work the dough on low to medium spread for 10 minutes.[2]

            Place the dough in an oiled bowl. Spread the olive oil over the bottom and sides of a large mixing bowl. Place the dough inside, then turn it several times to coat the surface of the dough with oil.

            Let the dough rise. Cover the bowl with plastic wrap and allow it to sit in a warm spot for 60 minutes, or until the dough doubles in size.
            Ideally, the air temperature should be between 75 and 85 degrees Fahrenheit (24 to 29 degrees Celsius).
            If you do not have a warm enough spot, heat the oven to 150 degrees Fahrenheit (65 degrees Celsius). Turn off the preheated oven and give it several minutes to cool slightly, then allow the bowl of dough to rise inside.

            Divide the dough. Separate the risen dough into two halves. Roll each half into a ball.
            Place the balls of dough 1 inch (2.5 cm) apart on a lightly floured surface. When they expand enough to touch, they'll be ready to use or store.
            If you wish to save one or both rounds for another time, you can place the dough in an airtight container and freeze it for up to two weeks. Fully thaw frozen dough to room temperature before working with it, though.

*       Prepare the Sauce__
            ......
*/

//? SPLIT THE TASKS AND LOGIC -
/*
let recipe1 = {
    name: 'hawaiian style',
    toppings: ['pineapple', 'ham'],
    sauce: ['tomato'],
    dough: [],
    instructions: {
        doughPrep: '',
        toppingPrep: '',
        saucePrep: '',
        cookingPrep: '',
        etc: ''
    }
}

let recipe2 = {}
Object.assign(recipe2, recipe1, {
    name: 'meat lovers',
    toppings: ['bacon', 'pepperoni'],
    instructions: {
        ...recipe1.instructions,
        cookingPrep: 'cook longer than 18min'
    }
})

console.log({ recipe1 });
console.log({ recipe2 });



    function makePizzaFromRecipe(recipeParam) {

        const {instructions: {cookingPrep, doughPrep, toppingPrep, saucePrep}, toppings, sauce, dough} = recipe2

        prepareDough(getDoughIngredients(dough), doughPrep);

        prepareSauce(getSauceIngredients(sauce), saucePrep);

        prepareToppings(getToppingIngredients(toppings), toppingPrep);

        beginCooking(cookingPrep)
        ...
    };
    
-Reusability:
    Make a pizza...
    makePizzaFromRecipe();
    Make another pizza..
    makePizzaFromRecipe();

    Make 10 pizzas!
    for(let i = 0; i < 10; i++){
        makePizzaFromRecipe();
    };
*/

/* An arrow function provides another way to create a function in JS.
    Two Types:
          -Concise Body
          -Block Body
    

 Arrow functions are NOT hoisted, meaning that this function must be defined before it is called or invoked in a top-down order.

? Will this work?
 */

arrowFunc();

let arrowFunc = () => 'Hi!';

/*
 This is one with a concise body, notice that this functions is also being passed a value (argument) when called. The function will then use that value upon execution and do something with it. In this case, it is using that value to form a new templated string.

 - The argument (what we pass into the function when called), must be a reference to something that exists, or that we have access to. The parameter (the represented value of an argument that's used within a function) can be named anything we want.
*/
let value1 = "concise body"

const arrowFuncConcise = (str) => `Hello, I'm being returned in a ${str} function!`;

console.log(arrowFuncConcise(value1));

//? If I changed the name of the str variable, what can we expect to happen, will it still work?
//? If I changed the name of 'value1' that's being passed to the function, what can we expect to happen?

// However in a concise body arrow function, as seen above, the return is implicit or automatic.

let value2 = "block body"

const arrowFuncBlock = str => {
    return `Hello, I'm being returned in a ${str} function!`;
};

console.log(arrowFuncBlock(value2));

// In a block body arrow function, as seen above, the return keyword MUST be present within the scope of the function in order for it to stop its execution and/or output a value.


//? Student Research:
//? Now say that we wished to return an object in a concise body arrow function without using the 'return' keyword. How would we go about this?
//? Write you own arrow function that returns an object. 

// ? BONUS! Allow this function to accept input to replace the values within the object. 
// Solution:

const returnObjFunc = () => ({ name: 'Amit', favNumber: 10 });

returnObjFunc();

// We wrap the {} braces in parenthesis, because without the parenthesis present, JS will think that we're trying to create a block body.

//? Create an arrow function that is called 2 times and returns back the sum of 2 numbers. These numbers should be different for each call. Invoke each function within a console.log. This can be a concise body or block body function.
//? BONUS! Research: JS provides a built-in object that can allow you to randomize the numbers each call. Can you find and implement it?
//? BONUS BONUS!: Round the numbers, and each random number should be a value between 1-10, giving us a max sum of 20, and a minimum of 2.
//? BONUS BONUS BONUS Previous Knowledge!: Create a for loop that will invoke the randomized function 10 times, store the output in a variable, and only console log it, if it is even.

// Solution Concise:
const sum = (x, y) => x + y;
// Solution Block:
// const sum = (x, y) => {
//     return    x + y
// };

// console.log(sum(1, 1))
// console.log(sum(4, 4))

// Bonus Solution 1

// console.log(sum(Math.random(), Math.random())

// Bonus Solution 2
// console.log(sum(Math.floor(Math.random() * 10 + 1), Math.floor(Math.random() * 10 + 1)))

// Bonus Solution 3

const loopNLog = (loopCount) => {
    const sum = (x, y) => x + y;
    const randSum = () => sum(Math.floor(Math.random() * 10 + 1), Math.floor(Math.random() * 10 + 1));
    for (let i = 0; i < loopCount; i++) {
        let num = randSum();
        num % 2 === 0 && console.log(num);
    };
};

loopNLog(10000);

