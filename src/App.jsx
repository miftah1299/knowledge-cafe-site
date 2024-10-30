import { useState } from "react";

import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
    const [bookmarks, setBookmarks] = useState([]);

    const handleBookmark = (blog) => {
        // console.log(blog);
        const newBookmarks = [...bookmarks, blog];
        setBookmarks(newBookmarks);
    };

    return (
        <>
            <Header></Header>
            <div className="w-11/12 mx-auto md:flex gap-6 mt-8 mb-20">
                <Blogs handleBookmark={handleBookmark}></Blogs>
                <Bookmarks bookmarks={bookmarks}></Bookmarks>
            </div>
        </>
    );
}

export default App;
