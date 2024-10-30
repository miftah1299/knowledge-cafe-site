import PropTypes from "prop-types";

const Bookmark = ({ bookmark }) => {
    const { title } = bookmark;
    return (
        <div className="bg-white p-4 my-4 rounded-xl">
            <h3 className="text-xl font-semibold">{title}</h3>
        </div>
    );
};

Bookmark.prototype = {
    bookmark: PropTypes.object.isRequired,
};

export default Bookmark;
