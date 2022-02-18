import { benchmark, print_recap } from "../tools.js";

// Premise :
// You receive a string
// You return this string, reversed


class perfect_squares_in_range_t {
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
        const input = 1000;

        let res = {};
        res[0] = benchmark("0", this.method_0, input, this.iterations);

        print_recap(res);
    }
}

class test_perfect_squares_in_list_t {
    constructor() {
        this.iterations = 500000;
    }

    method_0(numbers) {
        let res = [];

        numbers.map(n => {
            res.push({
                Number: n,
                IsPerfectSquare: (Math.sqrt(n) % 1 === 0)
            });
        });

        return res;
    }

    run_batch() {
        const input = [3, 4, 1, 9, 16, 20, 22, 25, 60, 64, 440, 441, 100, 900, 950, 961];

        let res = {};
        res[0] = benchmark("0", this.method_0, input, this.iterations);

        print_recap(res);
    }
}

let perfect_square_in_range = new perfect_squares_in_range_t();
let test_perfect_square_in_list = new test_perfect_squares_in_list_t();

export { perfect_square_in_range, test_perfect_square_in_list };
