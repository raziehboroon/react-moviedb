import React from "react";
import { Pagination } from "@material-ui/lab";
import { useGlobalContext } from "../context";

const MoviePagination = () => {
  const { page, setPage, totalPages, screenWidth } = useGlobalContext();
  const handleChangePage = (event, value) => {
    window.scroll(0, 0);
    setPage(Number(value));
  };

  let sizeValue = "";
  if (screenWidth < 400) {
    sizeValue = "small";
  } else {
    sizeValue = "medium";
  }

  return (
    <div className="pagination-container">
      <Pagination
        color="primary"
        variant="outlined"
        count={totalPages}
        page={page}
        siblingCount={1}
        boundaryCount={1}
        size={sizeValue}
        onChange={handleChangePage}
        // onChange={(e) => handleChangePage(e.target.textContent)}
        // showLastButton
        // showFirstButton
      />
    </div>
  );
};

export default MoviePagination;
