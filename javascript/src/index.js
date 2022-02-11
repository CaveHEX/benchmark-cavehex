import { perfect_square } from "./algorithms/perfect_square.js";
import { reverse_string } from "./algorithms/reverse_string.js";
import { benchmark, print_recap } from "./tools.js";


const main = () => {
    console.log("[ s t a r t ]");

    
    // reverse_string.run_batch();
    perfect_square.run_batch();
    

    console.log("[ e n d ]");
}
main();
