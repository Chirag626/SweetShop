import { useState } from "react";

interface Props {
  onSearch: (name: string, category: string, minPrice: string, maxPrice: string) => void;
}

const SearchBar = ({ onSearch }: Props) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleSearch = () => {
    onSearch(name, category, minPrice, maxPrice);
  };

  return (
    <div className="flex gap-3 mb-4 bg-white p-4 rounded-lg shadow-md">
      <input className="border p-2 rounded w-40" type="text"
        placeholder="Name…" value={name} onChange={(e) => setName(e.target.value)} />

      <input className="border p-2 rounded w-40" type="text"
        placeholder="Category…" value={category} onChange={(e) => setCategory(e.target.value)} />

      <input className="border p-2 rounded w-32" type="number"
        placeholder="Min Price" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />

      <input className="border p-2 rounded w-32" type="number"
        placeholder="Max Price" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />

      <button className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
