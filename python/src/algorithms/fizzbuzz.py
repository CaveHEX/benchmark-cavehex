from ..benchmark import execute_test, print_report


class fizzbuzz_t(object):
    def __init__(self):
        # self.iterations = 10000
        self.iterations = 1


    # Fastest
    def method_0(self, rng):
        [start, end] = rng
        res = []

        for i in range(start, end + 1):
            [fizz, buzz] = [i % 3 == 0, i % 5 == 0]

            if (not fizz and not buzz) or i == 0:
                res.append(f"{i}")
                continue

            res.append(f'{"fizz" if fizz else ""}{"buzz" if buzz else ""}')

        return res


    # Prefered
    def method_1(self, rng):
        [start, end] = rng
        res = []

        def append_word(line, i, test, word):
            if i % test == 0:
                return f"{line}{word}"
            return line

        for i in range(start, end + 1):
            if i == 0:
                res.append(f"{i}")
                continue

            line = ""
            line = append_word(line, i, 3, "fizz")
            line = append_word(line, i, 5, "buzz")

            if (len(line) == 0):
                line = append_word(line, i, i, f"{i}")

            res.append(line)

        return res


    def method_1l(self, rng):
        [start, end] = rng
        res = []

        add_word = lambda line, i, test, word: f"{line}{word if i % test == 0 else ''}"

        for i in range(start, end + 1):
            if i == 0:
                res.append(f"{i}")
                continue

            line = ""
            line = add_word(line, i, 3, "fizz")
            line = add_word(line, i, 5, "buzz")

            if (len(line) == 0):
                line = add_word(line, i, i, f"{i}")

            res.append(line)

        return res


    def run_batch(self):
        inputs = [0, 500]

        res = []
        res.append(execute_test("0", self.method_0, inputs, self.iterations))
        res.append(execute_test("1", self.method_1, inputs, self.iterations))
        res.append(execute_test("1l", self.method_1l, inputs, self.iterations))

        print_report(res)


fizzbuzz = fizzbuzz_t()
