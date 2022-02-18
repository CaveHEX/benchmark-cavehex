import { benchmark, print_recap } from "../tools.js";

// Premise :
// For number from start to end:
// If % by 3 : fizz
// If % by 5: buzz


class fizzbuzz_t {
    constructor() {
        this.iterations = 1;
    }

    method_0(args) {
        const [start, end] = args;

        let res = [];
        for (let i = start; i < end; ++i) {
            const [fizz, buzz] = [i % 3 === 0, i % 5 === 0];

            if (!fizz && !buzz || (i === 0)) {
                res.push(`${i}`);
                continue;
            }

            res.push(`${fizz ? "fizz" : ""}${buzz ? "buzz" : ""}`);
        }

        return res;
    }

    method_1(args) {
        const [start, end] = args;

        const append_word = (str, i, test, word) => {
            if (i % test === 0)  return `${str}${word}`;
            return str;
        };
        
        let res = [];
        for (let i = start; i < end; ++i) {
            let line = "";

            if (i === 0) {
                res.push("0");
                continue;
            }

            line = append_word(line, i, 3, "fizz");
            line = append_word(line, i, 5, "buzz");

            if (!line) line = append_word(line, i, i, `${i}`);

            res.push(line);
        }

        return res;
    }

    run_batch() {
        const input = [0, 20];

        let res = {};
        res[0] = benchmark("0", this.method_0, input, this.iterations);
        res[1] = benchmark("1", this.method_1, input, this.iterations);

        print_recap(res);
    }
}

let fizzbuzz = new fizzbuzz_t();

export { fizzbuzz };
