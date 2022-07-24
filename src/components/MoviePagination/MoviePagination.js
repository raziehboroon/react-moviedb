import "./MoviePagination.scss";
import React from "react";
// Context
import { useGlobalContext } from "../../context/context";
// Tools
import { Pagination } from "@material-ui/lab";

const MoviePagination = () => {
  const { page, setPage, screenWidth } = useGlobalContext();
  const handleChangePage = (event, value) => {
    window.scroll(0, 0);
    setPage(Number(value));
  };

  // proper pagination size base on screen size
  let sizeValue = "";
  if (screenWidth < 400) {
    sizeValue = "small";
  } else {
    sizeValue = "medium";
  }

  return (
    // total number of pages not working anymore, it apperars the maximom number of page which is available is 500
    // count={filmsObj.total_pages}
    <div className="pagination-container">
      <Pagination
        color="primary"
        variant="outlined"
        count={501}
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
