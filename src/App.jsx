import { useState } from "react";

import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
    const [bookmarks, setBookmarks] = useState([]);
    const [readingTime, setReadingTime] = useState(0);

    const handleBookmark = (blog) => {
        // console.log(blog);
        const newBookmarks = [...bookmarks, blog];
        setBookmarks(newBookmarks);
    };

    const handleMarkAsRead = (id, time) => {
        // console.log("mark as read", time);
        const newReadingTime = readingTime + time;
        setReadingTime(newReadingTime);
        // remove the read blog from the bookmarks
        const remainingBookmarks = bookmarks.filter((bookmark) => bookmark.id !== id);
        setBookmarks(remainingBookmarks);
    };

    return (
        <>
            <Header></Header>
            <div className="w-11/12 mx-auto md:flex gap-6 mt-8 mb-20">
                <Blogs
                    handleBookmark={handleBookmark}
                    handleMarkAsRead={handleMarkAsRead}
                ></Blogs>
                <Bookmarks
                    bookmarks={bookmarks}
                    readingTime={readingTime}
                ></Bookmarks>
            </div>
        </>
    );
}

export default App;
