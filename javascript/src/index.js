import { reverse_string } from "./algorithms/reverse_string.js";
import { camel_to_kebab } from "./algorithms/cameltokebab.js";
import { benchmark, print_recap } from "./tools.js";
import { fizzbuzz } from "./algorithms/fizzbuzz.js";
import { perfect_square_in_range, test_perfect_square_in_list } from "./algorithms/perfect_square.js";


const main = () => {
    console.log("[ s t a r t ]");
    
    // reverse_string.run_batch();
    // camel_to_kebab.run_batch();
    // fizzbuzz.run_batch();

    perfect_square_in_range.run_batch();
    test_perfect_square_in_list.run_batch();

    console.log("[ e n d ]");
}
main();
