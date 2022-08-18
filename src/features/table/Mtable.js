import React from 'react';
import { Col, Row } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import { useState } from "react";


const Mtable = () => {
  const [bulletins, setBulletins] = React.useState([]);
 // const [pageCount, setPageCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [pageNumber, setPageNumber] = useState(0);


  const dataPerPage = 10;
  React.useEffect(() => {
    const getData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/albums")
      const res1 = await res.json()
      setBulletins(res1)
     // setPageCount(Math.ceil(res1?.length / dataPerPage))
    }
    getData()
  }
    , [])

  const pagesVisited = pageNumber * dataPerPage;

  const displayBulletins = bulletins
    .filter((bulletin) => {
      if (searchTerm === "") {
        return bulletin;
      } else if (
        bulletin.title.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return bulletin;
      }
      return false;
    })
    .slice(pagesVisited, pagesVisited + dataPerPage)
    .map((bulletin) => {
      return (
        <>
          <div key={bulletin.id} >
            <p>{bulletin.title}</p>
          </div>
        </>
      );
    });

    const pageCount = Math.ceil(
      bulletins.filter((bulletin) => {
        if (searchTerm === "") {
          return bulletin;
        } else if (
          bulletin.title.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          return bulletin;
        }
        return false;
      }).length / dataPerPage
    );

  const handlePageChange = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className='container mt-4'>
      <div className="search-wrapper">

        <label for="search-form">
          <input
            type="search"
            className="search-input"
            placeholder="Search..."
            onChange={(e) => {
              setSearchTerm(e.target.value);
              handlePageChange({ selected: 0 });
            }}
          />
        </label>
      </div>
      <Row xs={1} md={12} className="g-4">
        {displayBulletins}
      </Row>
      <Row>
        <Col className="bulletinPagination" md={12}>
          <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            pageCount={pageCount}
            onPageChange={handlePageChange}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
            containerClassName={"pagination"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextClassName={"page-item"}
            nextLinkClassName={"page-link"}
            activeClassName={"active"}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Mtable;
