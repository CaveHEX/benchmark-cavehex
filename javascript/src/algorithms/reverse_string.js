import { benchmark, print_recap } from "../tools.js";

// Premise :
// You receive a string
// You return this string, reversed


class reverse_string_t {
    constructor() {
        this.iterations = 500000;
    }

    method_0(str) {
        return str.split("").reverse().join("");
    }

    method_1(str) {
        let reversed = "";
        const l = str.length;
        for (let i = l-1; i >= 0; --i) {
            reversed = `${reversed}${str[i]}`;
        }
        return reversed;
    }

    method_2(str) {
        let reversed = "";
        for (const character of str) {
            reversed = character + reversed;
        }
        return reversed;
    }

    method_3(str) {
        return str.split("").reduce((reversed, character) => character + reversed, "");
    }

    method_4(str) {
        return [...str].reverse().join("");
    }

    run_batch() {
        const input = "Voluptate elit duis reprehenderit in et in nisi elit dolore non mollit anim. Voluptate elit duis reprehenderit in et in nisi elit dolore non mollit anim. Voluptate elit duis reprehenderit in et in nisi elit dolore non mollit anim. Voluptate elit duis reprehenderit in et in nisi elit dolore non mollit anim. Voluptate elit duis reprehenderit in et in nisi elit dolore non mollit anim. Voluptate elit duis reprehenderit in et in nisi elit dolore non mollit anim. Voluptate elit duis reprehenderit in et in nisi elit dolore non mollit anim. Voluptate elit duis reprehenderit in et in nisi elit dolore non mollit anim."

        let res = {};
        res[0] = benchmark(this.method_0, input, this.iterations);
        res[1] = benchmark(this.method_1, input, this.iterations);
        res[2] = benchmark(this.method_2, input, this.iterations);
        res[3] = benchmark(this.method_3, input, this.iterations);
        res[4] = benchmark(this.method_4, input, this.iterations);

        print_recap(res);
    }
}

let reverse_string = new reverse_string_t();

export { reverse_string };
