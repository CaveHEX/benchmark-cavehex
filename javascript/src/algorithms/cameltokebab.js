import { benchmark, print_recap } from "../tools.js";

// Premise :
// You receive a string list of word
// You kebab them, assuming they are camelCase



class camel_to_kebab_t {
    constructor() {
        // this.iterations = 1000000;
        this.iterations = 1;
    }

    method_0(words) {
        const regex = /[A-Z]+(?![a-z])|[A-Z]/g;

        return words.map(word => word.replace(regex, ($, pos) => {
            return `${(pos > 0) ? "-" : ""}${$.toLowerCase()}`;
        }));
    }

    method_1(words) {
        const regex = /([a-z])([A-Z])/g;
        return words.map(word => word.replace(regex, "$1-$2").toLowerCase());
    }

    method_2(words) { // Fastest (Template literals)
        const reg_find_maj = /[A-Z]+(?![a-z])|[A-Z]/g;
        const to_kebab = (strings, ...values) => {
            let str = values.reduce((final_string, val, idx) => {
                return `${final_string}${val}${strings[idx]}`;
            });

            return str.replace(reg_find_maj, (match, offset) => {
                return `${(offset > 0) ? "-" : ""}${match.toLowerCase()}`;
            });
        };

        return words.map(word => to_kebab`${word}`);
    }

    run_batch() {
        const input = ["helloWorld", "clippyTheAssistant", "BeanBurrito", "tastySalamanderA"];

        let res = {};
        res[0] = benchmark(this.method_0, input, this.iterations);
        res[1] = benchmark(this.method_1, input, this.iterations);
        res[2] = benchmark(this.method_2, input, this.iterations);

        print_recap(res);
    }
}

let camel_to_kebab = new camel_to_kebab_t();

export { camel_to_kebab };

/*
What happens in method 0?
const regex = /[A-Z]+(?![a-z])|[A-Z]/g;

In this regex we find : [A-Z]+(?![a-z])
This means, return every occurence of [A-Z] which is followed by an occurence of [a-z]
The negative lookahead (?!expr) simply means that we check were it is possible, but don't
actually return the second lowercase charater, only the first upper case character.

/g option simply means that we don't want to stop the operation after the first occurence,
but that we desire to keep going afterward and repeat the search

Then we have : |([A-Z])
Meaning OR any upper case letter, and this can only happen if a potential match
couldn't be done by the first test on the left of the OR operator

Finally, depending if we it's the first character or not, we just want to lowercase
the match, or add a - kebab stick.

We do so using the function as an argument in the replace string function, it will go
through this with every match

First, we filter based on the second argument of the functor, "offset"
this is the location in the string where the occurence was found, so in our case, 
if offset === 0, this means it's the first character, and that we do not want to add
a kebab stick, so we simply lowercase the match and return that.
If offset > 0, this means the occurence needs a kebabstick right before the lowercase
version of the match.


What happens in method 1?
const regex = /([a-z])([A-Z])/g;

This regex is much simpler, we simply return a match for every lowercase character
immediately followed by an uppercase character, this way if the first char is a maj,
it won't be given a kebab stick.

In the replace function, we use an expression to describe what to do with every match.
"$1-$2"
Here, $1 means everything on the left of the match, and $2 means everything on the right.
So we simply add a kebab stick in between this way

Finally, we lowercase the whole string.



*/
