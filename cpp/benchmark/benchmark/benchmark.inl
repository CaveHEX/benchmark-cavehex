#pragma once

#include <iostream>
#include "print.h"

namespace bm {

	template <typename Func, typename ...Inputs>
	auto execute(std::string_view tag, Func const& functor, size_t iterations, Inputs const& ...inputs) -> algo_result_t
	{
		auto start = std::chrono::steady_clock::now();

		for ( auto i = size_t{}; i < iterations; ++i )
		{
			auto res = functor(inputs...);

			if ( i != 0 )
				continue;

			console::print("ALGO RESULT FOR", tag);
			console::print_collection(std::move(res));
			console::print("");
		}

		auto end = std::chrono::steady_clock::now();
		return
		{
			tag,
			std::chrono::duration_cast<std::chrono::milliseconds>(end - start)
		};
	}
}
