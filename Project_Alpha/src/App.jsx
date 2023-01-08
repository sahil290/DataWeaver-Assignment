import {useState, useEffect} from "react";
import CountryList from "./Components/CountryList";
import {GiHamburgerMenu} from "react-icons/gi";
import {RxExit, RxCross1} from "react-icons/rx";
import axios from "axios";
import "./App.css";
import Navbar from "./Components/Navbar";
import EditModal from "./Components/EditModal";
import ReactPaginate from "react-paginate";
import Pagination from "./Components/Pagination";
const App = () => {
  const [loading, setloading] = useState(false);
  const [data, setData] = useState([]);
  const [navbar, setNavbar] = useState(false);
  const [modal, setModal] = useState(false);
  const [brandName, setBrandName] = useState("");
  const [brandCategory, setBrandCategory] = useState("");
  const [dataPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    handleData();
  }, []);
  const handleData = () => {
    setloading(true);
    const url = "https://dummyjson.com/products";
    axios
      .get(url)
      .then((res) => {
        let data = res.data?.products;
        setData(data);

        setloading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleNavbar = (type) => {
    if (type == "open") {
      setNavbar(true);
    } else if (type == "close") {
      setNavbar(false);
    }
  };
  const handleEditingData = (brandName, brandCategory) => {
    if (brandName !== undefined || brandName !== "") {
      setBrandName(brandName);
      setModal(true);
    }
    if (brandCategory !== undefined || brandCategory !== "") {
      setBrandCategory(brandCategory);
      setModal(true);
    }
  };
  const cancelModal = () => {
    setModal(false);
  };
  //Get current posts
  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = data.slice(indexOfFirstData, indexOfLastData);

  //Change page
  const Paginate = (number) => {
    setCurrentPage(number);
  };
  const previousPage = () => {
    setCurrentPage(currentPage - 1);
  };
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };
  return (
    <>
      <div id="main-wrapper">
        <div id="top-bar">
          <span onClick={() => handleNavbar("open")}>
            <GiHamburgerMenu id="icon" />
          </span>
          <span>
            <RxExit id="icon" />
          </span>
        </div>
        {navbar && <Navbar RxCross1={RxCross1} handleNavbar={handleNavbar} />}
        <CountryList data={currentData} handleEditingData={handleEditingData} />
        <Pagination
          dataPerPage={dataPerPage}
          totalData={data.length}
          Paginate={Paginate}
          currentPage={currentPage}
          nextPage={nextPage}
          previousPage={previousPage}
        />
        {loading && <div className="loader"></div>}
      </div>
      {modal && (
        <EditModal
          RxCross1={RxCross1}
          brandCategory={brandCategory}
          brandName={brandName}
          cancelModal={cancelModal}
        />
      )}
    </>
  );
};

export default App;
