import React, { useState, useContext } from "react";
import { AuthContext } from "../../provider/AuthContextProvider";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet";

const Login = () => {
  const { login, setUser, googleLogin } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    setLoginError("");

    if (password.length < 6) {
      setLoginError("Password must be at least 6 characters.");
      return;
    }

    login(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success("Login successful.");
        navigate(location.state?.from || "/");
      })
      .catch((error) => {
        if (error.code === "auth/invalid-credential") {
          setLoginError("Invalid email or password.");
          toast.error("Invalid email or password.");
        }
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success("Login successful.");
        navigate(location.state?.from || "/");
      })
      .catch((error) => {
        console.error(error);
        setLoginError("Invalid email or password.");
        toast.error("Google login failed.");
      });
  };

  const handleForgetPassword = () => {
    if (!email) {
      toast.info("Please enter your email first.");
      return;
    }
    navigate("/auth/forget-password", { state: { email } });
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <Helmet>
        <title>Freeio - Login</title>
      </Helmet>

      <div className="bg-base-200 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full text-center max-w-md mx-auto">
        <h3 className="text-lg font-bold mb-4">Login</h3>

        <form onSubmit={handleLogin} className="space-y-3">
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Email"
            className="input input-bordered w-4/5"
          />

          <div className="relative w-4/5 mx-auto">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              autoComplete="off"
              className="input input-bordered w-full pr-10"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 z-30 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-600"
            >
              {showPassword ? (
                <AiOutlineEyeInvisible size={20} />
              ) : (
                <AiOutlineEye size={20} />
              )}
            </span>
          </div>

          {loginError && (
            <p className="text-sm text-red-600 mt-1">{loginError}</p>
          )}

          <button type="submit" className="btn btn-primary w-4/5">
            Login
          </button>

          <div className="flex w-4/6 mx-auto items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
            <p className="px-3 gap-2 flex items-center text-sm text-gray-600">
              Login with
              <span onClick={handleGoogleLogin} className="cursor-pointer">
                <FcGoogle size={30} />
              </span>
              accounts
            </p>
            <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
          </div>
        </form>

        <div className="mt-4">
          <button
            onClick={handleForgetPassword}
            className="text-sm text-blue-600 underline hover:text-blue-800"
          >
            Forgot Password?
          </button>
        </div>

        <p className="text-sm mt-4">
          Don’t have an account?
          <Link to="/auth/signup" className="text-blue-600 underline ml-1">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
