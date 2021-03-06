import React from "react";

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className="pa4">
      <input
        className="pa3 ba b--gray bg-lightest-gray tc"
        type="search"
        placeholder="    Find My Mentor"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
