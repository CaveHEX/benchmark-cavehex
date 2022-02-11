import { benchmark, print_recap } from "../tools.js";

// Premise :
// You receive a string
// You return this string, reversed


class perfect_square_t {
    constructor() {
        this.iterations = 500000;
    }

    method_0(up_to) {
        let res = [];

        let count = Math.floor(Math.sqrt(up_to));
        for (let i = 1; i <= count; ++i) {
            res.push(i * i);
        }

        return res;
    }

    run_batch() {
        const input = 10000;

        let res = {};
        res[0] = benchmark(this.method_0, input, this.iterations);

        print_recap(res);
    }
}

let perfect_square = new perfect_square_t();

export { perfect_square };
