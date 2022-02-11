#pragma once
#include <chrono>
#include <vector>
#include <string_view>

namespace bm
{
	using delta_t = std::chrono::duration<int, std::milli>;
	using deltas_t = std::vector<delta_t>;

	using algo_result_t = std::tuple<std::string_view, delta_t>;
	using algo_results_t = std::vector<algo_result_t>;
	
	template <typename T>
	using algo_output_t = typename std::vector<T>;

	template <typename Func, typename... Inputs>
	auto execute(std::string_view tag, Func const& functor, size_t iterations, Inputs const& ...inputs) -> algo_result_t;

	void print_result(algo_results_t&& algo_results);
}

#include "benchmark.inl"
