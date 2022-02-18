from ..benchmark import execute_test, print_report
import functools

class reverse_string_t(object):
    def __init__(self):
        # self.iterations = 900000
        self.iterations = 1
    
    def method_0(self, str):
        return str[::-1]

    def method_1(self, str):
        return ''.join(reversed(str))

    def method_2(self, str):
        return functools.reduce(lambda res, char: f"{char}{res}", str, "")

    def run_batch(self):
        inputs = "Baked beans pie with hot sauce cider in a cupcake paper cup."

        res = []
        res.append(execute_test("0", self.method_0, inputs, self.iterations))
        res.append(execute_test("1", self.method_1, inputs, self.iterations))
        res.append(execute_test("2", self.method_2, inputs, self.iterations))

        print_report(res)

reverse_string = reverse_string_t()
