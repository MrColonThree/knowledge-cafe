import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="md:w-1/3 mt-[52px] p-4  ">
      <div className="text-center my-3 p-4 bg-purple-100 rounded-lg">
        <h3 className="text-2xl text-purple-700">
          Spent time on read : {readingTime} min
        </h3>
      </div>
      <div className="bg-green-500 rounded-lg p-4 my-5">
        <h1 className="text-2xl lg:text-3xl text-red-600 mb-5 text-center font-semibold">
          BookMarked Blogs : {bookmarks.length}
        </h1>
        {bookmarks.map((bookmark, idx) => (
          <Bookmark key={idx} bookmark={bookmark}></Bookmark>
        ))}
      </div>
    </div>
  );
};

export default Bookmarks;
