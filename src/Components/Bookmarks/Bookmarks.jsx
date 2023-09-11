import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="md:w-1/3 my-4 p-4 bg-green-500 rounded-lg">
      <div>
        <h3 className="text-4xl">Reading Time : {readingTime}</h3>
      </div>
      <h1 className="text-3xl mb-5 text-center">
        BookMarked Blogs : {bookmarks.length}
      </h1>
      {bookmarks.map((bookmark, idx) => (
        <Bookmark key={idx} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};

export default Bookmarks;
