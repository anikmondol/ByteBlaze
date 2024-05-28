import { useEffect, useState } from "react";
import { deleteBlog, getBlogs } from "../utils";
import Blog from "./Blog";
import EmptyState from "../components/EmptyState";


const Bookmarks = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() =>{
        const storedBlogs = getBlogs();
        setBlogs(storedBlogs)
    }, [])

    const handleDelete = id =>{
        deleteBlog(id);
        const storedBlogs = getBlogs();
        setBlogs(storedBlogs);
    }

    if(blogs.length < 1) return <EmptyState address={'/blogs'} label={'Go to Blogs'} message='No Bookmarks Available'></EmptyState>


    return (
        <div className="grid justify-center my-8 grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                
                {
                    blogs.map((blog, index) => <Blog handleDelete = {handleDelete}
                    deletable={true} key={index} blog={blog}></Blog>)
                }
                
                
            </div>
    );
};

export default Bookmarks;