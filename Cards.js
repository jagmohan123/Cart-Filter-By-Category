import { useState } from "react";
import Singlecard from "./Singlecard";

function Cards(props) {
  let courses = props.courses;

  // for checking the empty UI
  // courses = null;

  // agar hamare courses vale array me koi data aaya
  //  hee nhi to we have to show this No Data Found Screen

  // jo data above line se aaya hai uske basis par i have to make the multiple cards
  // multiple cards banane ke leaye we have to use map function

  /*
data": {
"Development":
[
"id": "WD101",
"title": "Web Development Fundamentals",
"description": "This course covers],

"Business": [
id": "MK101",
"title": "Introduction to Marketing",
"description": "This course provides an overview of marketing principles and practices, including market research, segmentation, targeting, and positioning. Students will learn how to create effective marketing plans and campaigns, using both traditional and digital marketing techniques.",
"image": {
"url": "https://codehel
}],

hamara data key value ke form me hai but we use only map function on array so convert above data on array which contain single array 
Object.values() eski help se sabhi key hat jayegi*/

  // we have to get category here
  let category = props.category;
  // by category we classify the data into filter button click then specific data come
  function getCourses() {
    if (category === "All") {
      let allcoursesData = [];
      Object.values(courses).forEach((array) => {
        array.forEach((CourseData) => {
          allcoursesData.push(CourseData);
        });
      });
      // we must return the data in array
      return allcoursesData;
    } else {
      return courses[category];
    }
  }

  // es function se ham all data show kar rhe hai hae ek tab me
  // function getCourses() {
  //     let allcoursesData = [];
  //     Object.values(courses).forEach((array) => {
  //       array.forEach((CourseData) => {
  //         allcoursesData.push(CourseData);
  //       });
  //     });
  //     // we must return the data in array
  //     return allcoursesData;
  //   }

  // track all the cards here thats why we make here likedcourses variable
  const [likedCourses, setLikedCourses] = useState([]);

  if (courses === null) {
    return (
      <div>
        <h2 className="text-bg-bgDark text-lg  text-white font-semibold">
          No Data Found
        </h2>
      </div>
    );
  } else {
    return (
      <div className="flex flex-wrap justify-center gap-3 mb-3">
        {getCourses().map((course1) => {
          return (
            <Singlecard
              key={course1.id}
              course={course1}
              likedCourses={likedCourses}
              setLikedCourses={setLikedCourses}
            />
          );
        })}
      </div>
    );
  }
}
export default Cards;
