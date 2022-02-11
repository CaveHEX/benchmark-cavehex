#include "reverse_string.h"
#include <string_view>

namespace algo {


void reverse_string_t::run_batch()
{
	auto results = bm::algo_results_t{};

	using namespace std::literals;
	results.push_back(bm::execute("0"sv, [this](auto const& input) { return this->method_0(input); }, m_iterations, m_input));
	results.push_back(bm::execute("1"sv, [this](auto const& input) { return this->method_1(input); }, m_iterations, m_input));

	bm::print_result(std::move(results));
}

auto reverse_string_t::method_0(input_t const& input) -> output_t
{
	auto res = std::string{};

	for ( auto i = (static_cast<int>(input.length()) - 1); i >= 0; --i )
		res = res + input.at(i);

	return {res};
}

auto reverse_string_t::method_1(input_t const& input) -> output_t
{
	auto res = std::string{};

	for ( auto i = (static_cast<int>(input.length()) - 1); i >= 0; --i )
		res = res + input.at(i);

	return {res};
}


auto reverse_string() -> reverse_string_t&
{
	static reverse_string_t _;
	return _;
}


} // namespace algo
