import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks }) => {
    return (
        <div className="md:w-1/3 bg-zinc-100 px-8 py-4">
            <h2 className="text-3xl font-bold">
                Bookmarks: {bookmarks.length}
            </h2>
            {bookmarks.map((bookmark) => (
                <Bookmark key={bookmark} bookmark={bookmark}></Bookmark>
            ))}
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
};

export default Bookmarks;
