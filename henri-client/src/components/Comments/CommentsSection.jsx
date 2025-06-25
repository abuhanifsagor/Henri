import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../provider/AuthContextProvider";
import { toast } from "react-toastify";

const CommentsSection = ({ taskId }) => {
  const { user } = useContext(AuthContext);
  const [comments, setComments] = useState([]);
  const [newCommentText, setNewCommentText] = useState("");
  const API_URL = "https://henri-server.vercel.app/comments";

  // Fetch comments
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error("Failed to fetch comments");
        const data = await res.json();
        setComments(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchComments();
  }, []);

  // Handle adding a new comment
  const handleAddComment = async (e) => {
    e.preventDefault();
    if (!newCommentText.trim()) return;

    const nowISO = new Date().toISOString();

    const newComment = {
      author: user.displayName,
      avatar: user.photoURL,
      content: newCommentText,
      likes: 0,
      replies: 0,
      createdAt: nowISO,
      taskId: taskId,
    };

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newComment),
      });

      if (res.ok) {
        toast.success("Comment added successfully.");
      } else {
        toast.error("Failed to add comment.");
      }

      const savedComment = await res.json();

      setComments([
        savedComment.insertedId
          ? { ...newComment, _id: savedComment.insertedId }
          : newComment,
        ...comments,
      ]);
      setNewCommentText("");
    } catch (err) {
      alert("Could not save comment.");
      console.error(err);
    }
  };

  const handleLike = async (commentId) => {
    try {
      const res = await fetch(API_URL + `/${commentId}/like`, {
        method: "PATCH",
      });
      const data = await res.json();
      if (data.modifiedCount > 0) {
        toast.success("Like added successfully.");

        // Update the like
        setComments((prevComments) =>
          prevComments.map((comment) =>
            comment._id === commentId
              ? { ...comment, likes: comment.likes + 1 }
              : comment
          )
        );
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to add like.");
    }
  };

  return (
    <div className="max-w-4xl p-4 mt-5 bg-base-200 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Reviews</h2>

      <form onSubmit={handleAddComment} className="mb-6 ">
        <textarea
          value={newCommentText}
          onChange={(e) => setNewCommentText(e.target.value)}
          placeholder="Write a comment..."
          rows="3"
          className="w-full p-3 border border-base-100 bg-base-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="mt-2 px-4 py-2 bg-[#226e5a] text-white rounded hover:bg-[#1F4B3F] duration-300"
        >
          Submit
        </button>
      </form>

      {/* Comments List */}
      <div className="space-y-4">
        {comments.map((comment, index) => {
          if (comment.taskId === taskId) {
            return (
              <div
                key={comment._id || index}
                className="border border-base-200 rounded-lg p-4 bg-base-100 shadow-sm"
              >
                <div className="flex mb-2">
                  <div className="mr-2">
                    <img
                      loading="lazy"
                      src={comment.avatar}
                      alt={comment.author}
                      className="w-8 object-cover h-8 rounded-full mr-2"
                    />
                  </div>
                  <div className="flex w-full justify-between">
                    <p>{comment.author}</p>
                    <p className="text-sm text-gray-500 ml-2">
                      {comment.createdAt
                        ? new Date(comment.createdAt).toLocaleString()
                        : "Unknown date"}
                    </p>
                  </div>
                </div>

                <p className="mb-3">{comment.content}</p>

                <div className="flex space-x-4 text-sm text-gray-500">
                  <button className="flex items-center hover:text-blue-500">
                    <span
                      onClick={() => handleLike(comment._id)}
                      className="mr-1"
                    >
                      👍
                    </span>{" "}
                    {comment.likes}
                  </button>
                  <button className="flex items-center hover:text-green-500">
                    <span className="mr-1">💬</span> Reply{" "}
                    {comment.replies > 0 && `(${comment.replies})`}
                  </button>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default CommentsSection;
