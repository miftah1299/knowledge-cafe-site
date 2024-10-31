import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
    return (
        <div className="md:w-1/3 space-y-8">
            <div className="bg-purple-100 border border-purple-700 p-4 rounded-lg">
                <h3 className="text-indigo-500 text-2xl font-semibold">
                    Spent time on read: {readingTime} min
                </h3>
            </div>

            <div className="bg-zinc-100 p-8 rounded-lg">
                <h2 className="text-3xl font-bold">
                    Bookmarks: {bookmarks.length}
                </h2>
                {bookmarks.map((bookmark, index) => (
                    <Bookmark key={index} bookmark={bookmark}></Bookmark>
                ))}
            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number.isRequired,
};

export default Bookmarks;
