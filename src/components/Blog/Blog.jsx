import PropTypes from "prop-types";
import { FaRegBookmark } from "react-icons/fa6";

const Blog = ({ blog, handleBookmark, handleMarkAsRead }) => {
    // console.log(blog);
    const {
        title,
        cover,
        author,
        author_img,
        posted_date,
        reading_time,
        hashtags,
    } = blog;
    return (
        <div className="space-y-4 mb-9">
            <img className="w-full" src={cover} alt={`Cover of ${title}`} />

            <div className="flex justify-between">
                <div className="flex gap-6">
                    <img
                        className="w-14 rounded-full"
                        src={author_img}
                        alt=""
                    />
                    <div>
                        <h3>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>

                <div className="flex items-center gap-2 text-zinc-500">
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleBookmark(blog)}>
                        <FaRegBookmark />
                    </button>
                </div>
            </div>

            <h2 className="text-4xl">{title}</h2>
            <p>
                {hashtags.map((hashtag, index) => (
                    <span key={index} className="text-zinc-500">
                        <a href="">{hashtag} </a>
                    </span>
                ))}
            </p>

            <button
                onClick={() => handleMarkAsRead(reading_time)}
                className="text-blue-700 underline"
            >
                Mark as read
            </button>
            <hr />
        </div>
    );
};

// Define the prop types for the component
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmark: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired,
};

export default Blog;
