type Foodsearch = {
  filter: string;
  onSearch: (value: string) => void;
};

const SearchState = ({ filter, onSearch }: Foodsearch) => {
  return (
    <input
      type="text"
      value={filter}
      onChange={(e) => onSearch(e.target.value)}
      placeholder="Search recipe..."
      className="bg-white px-5 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 w-full"
    />
  );
};

export default SearchState;