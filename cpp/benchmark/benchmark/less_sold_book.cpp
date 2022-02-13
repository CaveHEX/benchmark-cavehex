#include "less_sold_book.h"
#include <string_view>
#include <unordered_map>
#include <map>

namespace algo {


	void less_sold_book_t::run_batch()
	{
		auto results = bm::algo_results_t{};

		using namespace std::literals;
		results.push_back(bm::execute("0"sv, [this](auto const& input) { return this->method_0(input); }, m_iterations, m_input));

		bm::print_result(std::move(results));
	}

	auto less_sold_book_t::method_0(input_t const& input) -> output_t
	{
		auto res = int{};

		auto const& [book_sells, request] = input;

		auto occurences = std::unordered_map<book_id_t, occurences_t>{};
		for ( auto const& book_id : book_sells )
		{
			if ( occurences.find(book_id) == occurences.end() )
			{
				occurences[book_id] = 1;
				continue;
			}

			++occurences[book_id];
		}

		auto sorted_book_sells = std::map<occurences_t, book_id_t>{};
		for ( auto const& [id, occ_count] : occurences )
			sorted_book_sells[occ_count] = id;

		auto it = sorted_book_sells.begin();
		std::advance(it, (request - 1));
		res = it->second;

		return { res };
	}

	auto less_sold_book() -> less_sold_book_t&
	{
		static less_sold_book_t _;
		return _;
	}


} // namespace algo
