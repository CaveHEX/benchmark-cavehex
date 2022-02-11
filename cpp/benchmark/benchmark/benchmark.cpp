#include "benchmark.h"
#include <tuple>
#include <string_view>

namespace bm {


void print_result(algo_results_t&& algo_results)
{
	console::print("Result:");
	for ( auto const& [tag, time] : algo_results )
		console::print("[", tag, "]", static_cast<int>(time.count()), "ms");
}


}
