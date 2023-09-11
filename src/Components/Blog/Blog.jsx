import PropTypes from "prop-types";
import { BsBookmark } from "react-icons/bs";
const Blog = ({ blog, handleBookMark, handleMarkAsRead }) => {
  const {
    id,
    title,
    cover,
    author,
    author_img,
    reading_time,
    posted_date,
    hashtags,
  } = blog;
  return (
    <div className="mb-10 p-5">
      <img
        className="w-full rounded-xl"
        src={cover}
        alt={`Cover picture of the title ${title}`}
      />
      <div className="flex justify-between items-center my-5">
        <div className="flex gap-5">
          <img className="w-14" src={author_img} alt="" />
          <div>
            <h1>{author}</h1>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <span>{reading_time} min read </span>
          <button
            onClick={() => handleBookMark(blog)}
            className="text-red-600 text-xl"
          >
            <BsBookmark />
          </button>
        </div>
      </div>
      <h2 className="text-4xl">{title}</h2>
      <p className="my-2">
        {hashtags.map((hash, idx) => (
          <span key={idx}>
            {" "}
            <a href="">#{hash}</a>{" "}
          </span>
        ))}
      </p>
      <button
        className="text-purple-700 font-bold underline"
        onClick={() => handleMarkAsRead(id,reading_time)}
      >
        Mark as read
      </button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleBookMark: PropTypes.func,
};
export default Blog;
