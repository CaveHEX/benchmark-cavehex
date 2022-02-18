from ..benchmark import execute_test, print_report
import re

class camel_to_kebab_t(object):
    def __init__(self):
        self.iterations = 500000
        # self.iterations = 1

    def method_0(self, words):
        res = []

        rgx = re.compile(r'[A-Z]+(?![a-z])|[A-Z]')
        def convert_func(match):
            replacement = match.group()
            if (match.start() != 0):
                replacement = f"-{replacement}"
            return replacement.lower()

        for word in words:
            kebab = re.sub(rgx, convert_func, word)
            res.append(kebab)

        return res


    def method_0g(self, words):
        rgx = re.compile(r'[A-Z]+(?![a-z])|[A-Z]')
        def convert_func(match):
            replacement = match.group()
            if (match.start() != 0):
                replacement = f"-{replacement}"
            return replacement.lower()

        return [re.sub(rgx, convert_func, word) for word in words]

    # Prefered
    def method_0gl(self, words):
        rgx = re.compile(r'[A-Z]+(?![a-z])|[A-Z]')

        convert_func = lambda match: f"{'-' if match.start() != 0 else ''}{match.group().lower()}"

        return [re.sub(rgx, convert_func, word) for word in words]


    def method_1(self, words):
        res = []

        rgx = re.compile(r'(?<!^)(?=[A-Z])')

        for word in words:
            kebab = re.sub(rgx, "-", word).lower()
            res.append(kebab)

        return res

    # Fastest
    def method_1g(self, words):
        rgx = re.compile(r'(?<!^)(?=[A-Z])')
        return [re.sub(rgx, "-", word).lower() for word in words]

    def method_2(self, words):
        rgx = re.compile(r'(?<=[a-z])(?=[A-Z]|\d)|(?<=[A-Z]|\d)(?=[A-Z]{1}(?!$))(?!([A-Z]|\d){2,})|(?<=[A-Z])(?=\d{2,})|(?<=\d)(?=[A-Z]|[a-z])|(?<=[A-Z]|[a-z])(?=\d)')
        return[re.sub(rgx, "-", word).lower() for word in words]

    def run_batch(self):
        words = """helloWorld
                clippyTheAssistant
                BeanBurrito
                tastySalamanderA
                Los5000GatitosMuchoGrazie
                _1000SpicyHUDJuice80
                HELLO5000
                Hello5000
                HELLO
                H300
                5000A
                1545A158BOBTheBUILDER8
                0a1a5000heyHello
                _8000
                8000O
                8000A7000"""
        words = words.splitlines()
        words = [word.strip() for word in words]

        res = []
        res.append(execute_test("0", self.method_0, words, self.iterations))
        res.append(execute_test("0g", self.method_0g, words, self.iterations))
        res.append(execute_test("0gl", self.method_0gl, words, self.iterations))
        res.append(execute_test("1", self.method_1, words, self.iterations))
        res.append(execute_test("1g", self.method_1g, words, self.iterations))
        res.append(execute_test("2", self.method_2, words, self.iterations))

        print_report(res)


camel_to_kebab = camel_to_kebab_t()
