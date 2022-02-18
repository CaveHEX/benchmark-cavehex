from colorama import Fore, Style, init
from art import tprint
import time

def execute_test(tag, func, inputs, iterations):
    """Execute the given function with the given settings as many times as indicated in the iterations arg.

    :param tag: Name to give to the current execution of
    :type tag: str
    :param func: Function to test 
    :type func: function object
    :param inputs: func's set of inputs
    :type inputs: any
    :param iterations: Number of times func will be called
    :type iterations: int

    :return: Result of the test
    :rtype: dict
    """
    start = time.perf_counter()

    for i in range(0, iterations):
        res = func(inputs)

        if i != 0:
            continue

        print(f"{tag} {res}")

    end = time.perf_counter()

    return {"tag": tag, "duration": end - start}


def print_report(results):
    print(Fore.GREEN)
    tprint("RESULTS")
    print(Style.RESET_ALL)
    for result in results:
        print(f"{result['tag']:>5} took {result['duration']:>8.5f}")
    tprint("----------")
