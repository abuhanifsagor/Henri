import React, { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthContextProvider";
import { AiOutlineMail } from "react-icons/ai";
import { updateProfile } from "firebase/auth";
import { toast } from "react-toastify";

const MyProfile = () => {
  const { user, setUser } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [errors, setErrors] = useState({ name: "", photoURL: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    let hasError = false;
    const newErrors = { name: "", photoURL: "" };

    if (!name.trim()) {
      newErrors.name = "Name is required";
      hasError = true;
    }

    if (!photoURL.trim()) {
      newErrors.photoURL = "Photo URL is required";
      hasError = true;
    }

    setErrors(newErrors);

    if (hasError) return;

    updateProfile(user, {
      displayName: name,
      photoURL: photoURL,
    })
      .then(() => {
        setUser({ ...user, displayName: name, photoURL: photoURL });
        toast.success("Profile updated successfully.");
      })
      .catch((error) => {
        console.error(error);
        toast.error("Failed to update profile.");
      });
  };

  return (
    <div className="flex px-5  items-center justify-center min-h-screen bg-base-100">
      <div className=" min-w-xs md:min-w-md  rounded-lg shadow-sm p-8 sm:flex sm:space-x-6 bg-base-200">
        <div className=" w-full flex justify-center  mb-6 max-h-[300px] max-w-[400px] sm:mb-0">
          <img
            loading="lazy"
            src={user?.photoURL}
            alt={user?.displayName}
            title={user?.displayName}
            className="object-cover object-center  rounded dark:bg-gray-500"
          />
        </div>
        <div className="flex flex-col space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">{user?.displayName}</h2>
            <span className="badge badge-soft ml-5 badge-success">new</span>
          </div>
          <div className="space-y-1">
            <span className="flex items-center space-x-2">
              <AiOutlineMail />
              <span className="dark:text-gray-600">{user?.email}</span>
            </span>

            <form className="mt-4 space-y-3" onSubmit={handleSubmit}>
              <div className="form-control w-full max-w-xs">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Type here your name"
                  className="input input-bordered w-full max-w-xs"
                />
                {errors.name && (
                  <span className="text-red-500 text-sm">{errors.name}</span>
                )}
              </div>
              <div className="form-control w-full max-w-xs">
                <input
                  type="text"
                  value={photoURL}
                  onChange={(e) => setPhotoURL(e.target.value)}
                  placeholder="Type here Photo URL"
                  className="input input-bordered w-full max-w-xs"
                />
                {errors.photoURL && (
                  <span className="text-red-500 text-sm">
                    {errors.photoURL}
                  </span>
                )}
              </div>
              <div className="flex items-center justify-center mt-4 sm:mt-0 sm:justify-end">
                <button
                  type="submit"
                  className="btn mt-5 text-white bg-[#195545e3] hover:bg-[#1d443a] cursor-pointer"
                >
                  Update Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
