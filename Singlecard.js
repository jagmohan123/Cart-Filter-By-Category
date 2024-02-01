import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";
function Singlecard(props) {
  let course = props.course;
  // data: {
    //   Business": [
    //     {
    // "id": "MK101",
    // "title": "Introduction to Marketing",
    // "image": {
    //     "url": "https://codehelp-apis.vercel.app/get-top-courses/Business/Introduction%20To%20Marketing.png",
    //     "alt": "Introduction to Marketing"
    //     }
    // so on
  // }

  const likedCourses = props.likedCourses;
  const setLikedCourses = props.setLikedCourses;

  function showMessageHandler() {
    //Logic
    // if course pahle se like hai to use dislike kar
    if (likedCourses.includes(course.id)) {
      // pahle se hee like hai
      setLikedCourses((prev) => prev.filter((cid) => cid !== course.id));
      toast.warning("Liked has removed");
    } else {
      // pahle se like nhi hai so add karo like me click karne par
      if (likedCourses.length === 0) {
        setLikedCourses([course.id]);
      }
      // like courses hai un me new like jo keaya hai us course ko  bhi dal do
      else {
        setLikedCourses((prev) => [...prev, course.id]);
      }
      toast.success("Liked Successfully");
    }
  }
  return (
    <div
      className="bg-bgDark 
    bg-opacity-80 w-[311px] rounded-md overflow-hidden"
    >
      <div className="relative">
        <img src={course.image.url} alt="loading"></img>
        <button
          onClick={showMessageHandler}
          className="w-[43px] h-[43px] rounded-full
         bg-white absolute bottom-[-14px] right-1
         grid place-items-center"
        >
          {likedCourses.includes(course.id) ? (
            <FcLike font-size="1.8rem" />
          ) : (
            <FcLikePlaceholder font-size="1.8rem" />
          )}
        </button>
      </div>
      <div></div>
      <div className="p-4">
        <p className="text-white font-bold leading-6">{course.title}</p>
         {/* description kee length 100 se jyada hai to 100 character dikhana hai otherwise pue dikhana hai   */}
        <p className=" mt-3 text-white">{
         
        course.description.length > 100 ?(course.description.substr(0,100)+". . ."):course.description
        
        }
        </p>
      </div>
    </div>
  );
}
export default Singlecard;
