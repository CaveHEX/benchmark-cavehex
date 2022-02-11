#pragma once
#include <iostream>

namespace console {

	template <typename Entry> inline
	void print_one(Entry&& entry)
	{
		std::cout << entry << " ";
	}

	template <typename Entry> inline
	void print_last(Entry&& entry)
	{
		std::cout << entry << "\n";
	}

	template <typename Entry, typename... Entries> inline
	void print(Entry&& entry, Entries&& ...entries)
	{
		if constexpr ( sizeof...(Entries) == 0 )
			print_last(std::move(entry));
		else
		{
			print_one(std::move(entry));
			print(std::forward<Entries>(entries)...);
		}
	}

	template <typename Collection> inline
	void print_collection(Collection&& col)
	{
		for ( auto const& elem : col )
			print(elem);
	}
}
