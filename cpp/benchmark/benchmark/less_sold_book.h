#pragma once
#include <string>
#include "benchmark.h"


namespace algo {

	

	class less_sold_book_t
	{
	public:
		using book_id_t = int;
		using book_ids_t = std::vector<book_id_t>;
		using desired_nth_t = int;
		using occurences_t = int;

		struct input_t
		{
			input_t(book_ids_t book_sells, desired_nth_t desired_nth) : book_ids(book_sells), request(desired_nth) {}

			book_ids_t book_ids;
			desired_nth_t request{-1};
		};
		using output_t = bm::algo_output_t<int>;

	public:
		less_sold_book_t() = default;

		void run_batch();

	private:
		static auto method_0(input_t const& input) -> output_t;

	private:
		size_t m_iterations{1000};
		input_t m_input {
			{87, 87, 87, 87, 87, 95, 95, 95, 95, 42, 42, 42, 31, 31, 78},
			2
		};
	};


	auto less_sold_book() -> less_sold_book_t &;


} // namespace algo
