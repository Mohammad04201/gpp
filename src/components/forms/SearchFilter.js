function SearchFilter({ 
  searchTerm, 
  onSearchChange, 
  filterOptions, 
  selectedFilter, 
  onFilterChange, 
  placeholder 
}) {
  return (
    <div className="search-filter">
      <div className="row g-3">
        <div className="col-md-6">
          <label className="form-label">{placeholder}</label>
          <input
            type="text"
            className="form-control"
            placeholder={placeholder}
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">الفلترة</label>
          <select
            className="form-select"
            value={selectedFilter}
            onChange={(e) => onFilterChange(e.target.value)}
          >
            {filterOptions.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default SearchFilter;
