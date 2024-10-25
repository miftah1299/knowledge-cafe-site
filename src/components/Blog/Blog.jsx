import PropTypes from "prop-types";

const Blog = ({ blog }) => {
    // console.log(blog);
    const { title, cover } = blog;
    return (
        <div className="blog">
            <img src={cover} alt={`Cover of ${title}`} />
            <h2 className="text-4xl">{title}</h2>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
};

export default Blog;
