import React from "react";
import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import Filter from "./Components/Filter";
import Cards from "./Components/Cards";
// get all the filter data and api call response from data.js file
import { apiUrl, filterData } from "./data";
import LoadingIcon from "./Components/LoadingIcon";
import { toast } from "react-toastify";
const App = () => {
  // apicall se get data ko UI me show karne ke leaye we use useState()

  // array.forEach is not a function
  // TypeError: array.forEach is not a function
  // at http://localhost:3000/main.155e9244ae3c7db8630a.hot-
  // this error is came bcs we pass null here for solving this error we have to can pass empty array or
  const [courses, setCourses] = useState(null);

  // jab tak data na aaya ho so we have to show the Loadiing Icon component on UI
  const [loading, setLoading] = useState(true);

  // api ko call karne se we get the card data by calling the above apiUrl
  // dom ke render hone ke bad hame apicall karna hai so we use here useEffect()hook here.
  // ṣo fist make function inside function we call the api
  async function fetchApiData() {
    // we use try and cath for error handling
    // jab tak data aa rha hoga we have to set the loading true
    setLoading(true);
    try {
      let response = await fetch(apiUrl);
      var apiResponse = await response.json();
      console.log(apiResponse);
      // copy all the Api data into courses
      setCourses(apiResponse.data);
    } catch (e) {
      console.log("This error has Occured", e);
      toast.error("Some network issue");
      // agar hamari Api call fat jaye tab
      if (e === 404) {
        return (
          <div>
            <h1 className="text-bg-bgDark text-lg font-semibold">404 Error</h1>
          </div>
        );
      }
    }
    setLoading(false);
  }

  // we call the  fetchApiData() function by useEffect()Hook.
  useEffect(() => {
    fetchApiData();
  }, []);

  // we have to show the cards according to category so we use category in filter component
  // by default we set category all  filterData[0].title me "All" category vala data dala hai
  const [category, setCategory] = useState(filterData[0].title);

  return (
    <div className="bg-bgDark2 min-h-screen flex-col">
      <div>
        <Navbar />
      </div>
      <div>
        {/* we have to pass the category in filter bcs filter component se data ko category ke according filter kar rhe hai */}

        <Filter
          filterData={filterData}
          category={category}
          setCategory={setCategory}
        />
      </div>

      {/*  loading vale variable kee value me depend karega kha cards show karna hai kha LoadingIcon vala Component */}
      <div className="w-11/12 max-w-[1200px] mx-auto flex justify-center items-center flex-wrap min-h-[50vh]">
        {loading ? (
          <LoadingIcon />
        ) : (
          <Cards courses={courses} category={category} />
        )}
        {/* we have to specific card which belong to specific category thatswhy we pass category here  */}
      </div>
    </div>
  );
};

export default App;
