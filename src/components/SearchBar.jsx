import useSearchLogic from "/src/hooks/useSearchLogic";
import { XCircle as X } from "react-feather";

function SearchBar() {
  const { searchTerm, handleInputChange, handleFormSubmit, clear } =
    useSearchLogic();
  const purpleBg = "hsl(275, 80%, 56%)";

  return (
    <div className="search-bar rounded-md my-2 md:my-6 p-4   bg-[#f4f4f4]">
      <form
        className="flex items-center gap-4"
        onSubmit={(e) => handleFormSubmit(e)}
      >
        <input
          type="text"
          name="search"
          id="search"
          className="flex-1 bg-[#f4f4f4] outline-none focus:outline-none"
          placeholder="Type to search"
          value={searchTerm}
          onChange={(e) => handleInputChange(e)}
        />
        {searchTerm && (
          <span className="pl-4" onClick={() => clear()}>
            {" "}
            <X size={24} color={purpleBg} />{" "}
          </span>
        )}
        <button aria-label="submit" role="search">
          <img src="./assets/search.svg" alt="Search " />
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
