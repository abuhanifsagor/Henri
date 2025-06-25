import React, { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthContextProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { updateProfile } from "firebase/auth";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";

const Signup = () => {
  const { signUp, setUser, googleLogin } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    upperCase: "",
    lowerCase: "",
    length: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const handleSignup = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    // Perform validation
    const newErrors = { upperCase: "", lowerCase: "", length: "" };
    if (password.toLowerCase() === password) {
      newErrors.upperCase = "Must contain at least one uppercase letter.";
    }
    if (password.toUpperCase() === password) {
      newErrors.lowerCase = "Must contain at least one lowercase letter.";
    }
    if (password.length < 6) {
      newErrors.length = "Must be at least 6 characters long.";
    }

    if (newErrors.upperCase || newErrors.lowerCase || newErrors.length) {
      setErrors(newErrors);
      return;
    }

    setErrors({ upperCase: "", lowerCase: "", length: "" });

    signUp(email, password)
      .then((result) => {
        const user = result.user;
        updateProfile(user, {
          displayName: name,
          photoURL: photoURL,
        })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photoURL });
            toast.success("Signup successful.");
            navigate(location.state ? location.state : "/");
          })
          .catch((err) => console.error("Profile update error:", err));
      })
      .catch((error) => {
        console.error(error);
        if (error.code === "auth/email-already-in-use") {
          return toast.error("Email already in use.");
        }
        toast.error("Signup failed.");
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(location.state ? location.state : "/");
        toast.success("Login successful.");
      })
      .catch((error) => {
        console.error(error);
        toast.error("Google login failed.");
      });
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <Helmet>
        <title>Freeio - Signup</title>
      </Helmet>
      <div className="bg-base-200 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full text-center max-w-md mx-auto">
        <h3 className="text-lg font-bold mb-4">Signup</h3>

        <form
          onSubmit={handleSignup}
          className="space-y-3 flex flex-col items-center"
        >
          <input
            type="text"
            name="name"
            required
            placeholder="Username"
            className="input input-bordered w-4/5"
          />
          <input
            type="text"
            name="photoURL"
            required
            placeholder="Photo URL"
            className="input input-bordered w-4/5"
          />
          <input
            type="email"
            required
            name="email"
            placeholder="Email"
            className="input input-bordered w-4/5"
          />
          <div className="relative  w-full">
            <input
              type={showPassword ? "text" : "password"}
              required
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              autoComplete="off"
              placeholder="Password"
              className="input input-bordered w-4/5"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-12 top-1/2 transform -translate-y-1/2 cursor-pointer"
            >
              {showPassword ? (
                <AiOutlineEyeInvisible size={20} />
              ) : (
                <AiOutlineEye size={20} />
              )}
            </span>
          </div>

          {(errors.upperCase || errors.lowerCase || errors.length) && (
            <div className="text-left text-xs mt-1 w-4/5">
              {errors.upperCase && (
                <p className="text-red-500">• {errors.upperCase}</p>
              )}
              {errors.lowerCase && (
                <p className="text-red-500">• {errors.lowerCase}</p>
              )}
              {errors.length && (
                <p className="text-red-500">• {errors.length}</p>
              )}
            </div>
          )}

          <button className="btn bg-black text-white w-4/5">Signup</button>

          <div className="flex w-4/6 mx-auto items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16 bg-gray-300" />
            <p className="px-3 gap-2 flex items-center text-sm text-gray-600">
              Login with{" "}
              <span onClick={handleGoogleLogin} className="cursor-pointer">
                <FcGoogle size={30} />
              </span>{" "}
              accounts
            </p>
            <div className="flex-1 h-px sm:w-16 bg-gray-300" />
          </div>
        </form>

        <p className="text-sm mt-4">
          Already have an account?{" "}
          <Link to="/auth/login" className="text-blue-600 underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
