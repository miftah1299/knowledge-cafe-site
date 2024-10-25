// import { useState } from "react";

import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
    return (
        <>
            <Header></Header>
            <div className="w-11/12 mx-auto md:flex gap-6 mt-8 mb-20">
                <Blogs></Blogs>
                <Bookmarks></Bookmarks>
            </div>
        </>
    );
}

export default App;
