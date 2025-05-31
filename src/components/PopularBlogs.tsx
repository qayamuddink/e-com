import { MessageCircle, ThumbsUp } from "lucide-react";

const PopularBlogs = () => {
  const blogs = [
    {
      title: "My Amazing Blog Title 1",
      author: "Jordon",
      likes: 142,
      comments: 44,
    },
    {
      title: "My Amazing Blog Title 2",
      author: "John",
      likes: 154,
      comments: 23,
    },
    {
      title: "My Amazing Blog Title 3",
      author: "Qyam",
      likes: 162,
      comments: 54,
    },
  ];

  return (
    <div className="w-full max-w-md mx-auto bg-white p-5 mt-4 border border-gray-200 rounded">
      <h2 className="text-xl font-bold mb-5 text-gray-900 ">
        Popular Blogs
      </h2>
      <ul>
        {blogs.map((blog, index) => (
          <li key={index} className="mb-4">
            <div className="flex justify-between items-center">
              <span className="font-bold mb-2 text-gray-900 ">
                {blog.title}
              </span>
              <span className="text-gray-600 ">
                Published by {blog.author}
              </span>
            </div>
            <div className="flex items-center mt-2">
              <ThumbsUp
                className="hover:cursor-pointer text-gray-600 dark:text-gray-400"
                size={16}
              />
              <span className="text-gray-600 dark:text-gray-400 mr-5 ml-1">
                {blog.likes}
              </span>
              <MessageCircle className="text-gray-600 dark:text-gray-400" size={16} />
              <span className="text-gray-600 dark:text-gray-400 ml-1">
                {blog.comments}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopularBlogs;