import PropTypes from "prop-types";

const Blog = ({ blog }) => {
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

                <div>
                    <span>{reading_time} min read</span>
                </div>
            </div>

            <h2 className="text-4xl">{title}</h2>
            <p>
                {hashtags.map((hashtag, index) => (
                    <span key={index} className="text-gray-500">
                        <a href="">{hashtag} </a>
                    </span>
                ))}
            </p>
            <hr />
        </div>
    );
};

// Define the prop types for the component
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
};

export default Blog;
