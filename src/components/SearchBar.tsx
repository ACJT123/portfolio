"use client";

import { debounce } from "@/utils/debounce";
import { useState, useCallback } from "react";

interface DropDownProps {
  options: string[];
  selected: string;
  setSelected: (value: string) => void;
}

export default function SearchBar() {
  const [selected, setSelected] = useState("All");
  const [options, setOptions] = useState<string[]>([]);

  const debouncedSearch = useCallback((search: string) => {
    debounce(() => {
      setOptions(search ? ["All", "Option 1", "Option 2", "Option 3"] : []);
    }, 1000)(search);
  }, []);

  const handleSearch = (search: string) => {
    debouncedSearch(search);
  };

  return (
    <form
      className="flex flex-col justify-center items-center mt-4 w-[50%] mx-auto"
      onSubmit={(e) => e.preventDefault()} // Prevents form submission
    >
      <input
        type="text"
        className="w-full p-2 border border-gray-300 rounded-lg bg-transparent"
        placeholder="Search"
        onChange={(e) => handleSearch(e.target.value)}
      />

      <DropDown
        options={options}
        selected={selected}
        setSelected={setSelected}
      />
    </form>
  );
}

function DropDown({ options, selected, setSelected }: DropDownProps) {
  return (
    <div
      className={`bg-white text-black w-full rounded-lg overflow-hidden ${
        options.length === 0 ? "opacity-0" : "opacity-100"
      }
        transition-opacity duration-100 ease-in-out
      `}
    >
      {options.map((option) => (
        <button
          key={option}
          type="button" // Prevents form submission
          className={`w-full p-2 text-left transition-all ${
            option === selected ? "bg-gray-200 font-semibold" : ""
          }`}
          onClick={() => setSelected(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
