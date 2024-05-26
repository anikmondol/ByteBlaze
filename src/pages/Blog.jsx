import { Link } from "react-router-dom";
import PropTypes from 'prop-types'; // ES6

const Blog = ({ blog }) => {
    const { cover_image, title, description, published_at } = blog;
    return (
        <Link to="/" className="max-w-3xl px-6 py-16 mx-auto space-y-12 overflow-hidden">
            <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://source.unsplash.com/random/480x360?4" />
            <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">In usu laoreet repudiare legendos</h3>
                <span className="text-xs dark:text-gray-600">January 24, 2021</span>
                <p>Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.</p>
            </div>
        </Link>
    );
};


Blog.propTypes = {
    blog: PropTypes.object,
}

export default Blog;