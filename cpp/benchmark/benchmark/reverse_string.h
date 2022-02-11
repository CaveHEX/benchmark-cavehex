#pragma once
#include <string>
#include "benchmark.h"

namespace algo {


class reverse_string_t
{
public:
	using input_t = std::string;
	using output_t = bm::algo_output_t<std::string>;

public:
	reverse_string_t() = default;

	void run_batch();

private:
	static auto method_0(input_t const& input) -> output_t;
	static auto method_1(input_t const& input) -> output_t;

private:
	size_t m_iterations{1000};
	std::string m_input{"Voluptate elit duis reprehenderit in et in nisi elit dolore non mollit anim. Voluptate elit duis reprehenderit in et in nisi elit dolore non mollit anim. Voluptate elit duis reprehenderit in et in nisi elit dolore non mollit anim. Voluptate elit duis reprehenderit in et in nisi elit dolore non mollit anim. Voluptate elit duis reprehenderit in et in nisi elit dolore non mollit anim. Voluptate elit duis reprehenderit in et in nisi elit dolore non mollit anim. Voluptate elit duis reprehenderit in et in nisi elit dolore non mollit anim. Voluptate elit duis reprehenderit in et in nisi elit dolore non mollit anim."};
};


auto reverse_string() -> reverse_string_t&;


} // namespace algo
