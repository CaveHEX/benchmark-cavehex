from art import tprint
from colorama import Fore, Style, init
from src.algorithms.reverse_string import reverse_string
from src.algorithms.fizzbuzz import fizzbuzz
from src.algorithms.camel_to_kebab import camel_to_kebab
from src.algorithms.perfect_square import perfect_square_range, perfect_square_test


def main():
    init(convert=True)

    print(Fore.CYAN)
    tprint("Benchmark    START")
    print(Style.RESET_ALL)


    # reverse_string.run_batch()
    # fizzbuzz.run_batch()
    camel_to_kebab.run_batch()
    # perfect_square_range.run_batch()
    # perfect_square_test.run_batch()


    print(Fore.CYAN)
    tprint("Benchmark    END")
    print(Style.RESET_ALL)


if __name__ == "__main__":
    main()
