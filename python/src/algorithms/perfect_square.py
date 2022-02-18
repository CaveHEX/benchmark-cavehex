from ..benchmark import execute_test, print_report
import math


class perfect_square_range_t(object):
    def __init__(self):
        # self.iterations = 500000
        self.iterations = 1

    def method_0(self, rng):
        [start, end] = rng
        res = []

        [true_start, true_end] = [math.floor(math.sqrt(start)), math.floor(math.sqrt(end))]
        for i in range(true_start, true_end + 1):
            res.append(i * i)

        
        return res

    # Fastest
    def method_1(self, rng):
        [start, end] = rng
        [true_start, true_end] = [math.floor(math.sqrt(start)), math.floor(math.sqrt(end))]
        return [i * i for i in range(true_start, true_end + 1)]

    def method_2(self, rng):
        [start, end] = rng
        [true_start, true_end] = [math.floor(math.sqrt(start)), math.floor(math.sqrt(end))]
        lbd = lambda x: x * x
        return list(map(lbd, range(true_start, true_end + 1)))

    def run_batch(self):
        inputs = [0, 1000]

        res = []
        res.append(execute_test("0", self.method_0, inputs, self.iterations))
        res.append(execute_test("1", self.method_1, inputs, self.iterations))
        res.append(execute_test("2", self.method_2, inputs, self.iterations))

        print_report(res)


class perfect_square_test_t(object):
    def __init__(self):
        # self.iterations = 500000
        self.iterations = 1

    def method_0(self, values):
        res = []

        for value in values:
            res.append({
                "num": value,
                "is_psqr": (math.sqrt(value) % 1 == 0)
            })

        return res

    # Fastest
    def method_1(self, values):
        return [value for value in values if (math.sqrt(value) % 1 == 0)]

    def method_2(self, values):
        return list(filter(lambda v: math.sqrt(v) % 1 == 0, values))

    def run_batch(self):
        inputs = [0, 3, 4, 1, 9, 16, 20, 22, 25, 60, 64, 440, 441, 100, 900, 950, 961]

        res = []
        res.append(execute_test("0", self.method_0, inputs, self.iterations))
        res.append(execute_test("1", self.method_1, inputs, self.iterations))
        res.append(execute_test("2", self.method_2, inputs, self.iterations))

        print_report(res)


perfect_square_range = perfect_square_range_t()
perfect_square_test = perfect_square_test_t()
