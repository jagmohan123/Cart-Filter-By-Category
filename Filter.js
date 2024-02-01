function Filter(props) {
  const filterData = props.filterData;
  // below 2 variable se we to show cards which belong to specific category

  const category = props.category;
  const setCategory = props.setCategory;

  //  when we click on buttons the specific category data cards come.

  function specificCategoryCard(title) {
    setCategory(title);
  }

  return (
    // map funtion se jab bhi koi component banana ho to return karana padega us tag ko
    <div className="w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center">
      {filterData.map((data) => {
        // map funtion se jab bhi koi component banana ho to return karana padega us tag ko
        // exapmle  neeche hai
        return (
          <button
            onClick={() => specificCategoryCard(data.title)}
            key={data.id}
            className={`text-lg px-2 py-1 
            font-medium border-2
          rounded-md
          text-white bg-black
          hover:bg-opacity-60 
          transition-all duration-200
          ${
            category== data.title
              ? "bg-opacity-60 border-blue"
              : "bg-opacity-40 border-transparent"
          }
              `}
          >
            {data.title}
            {/* ${category===data.title} */}
          </button>
        );
      })}
    </div>
  );
}
export default Filter;
