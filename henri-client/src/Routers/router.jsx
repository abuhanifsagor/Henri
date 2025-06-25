import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Root from "../pages/Root/Root";
import EventDetailPage from "../pages/EventDetails/EventDetailPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import PrivateRoute from "../provider/PrivateRoute";
import Login from "../pages/lgoin/Login";
import Singup from "../pages/SingUp/Singup";
import PublicRoute from "../provider/PublicRoute";
import MyProfile from "../pages/MyProfile/MyProfile";
import Policy from "../pages/Bottom/Policy";
import ForgetPassword from "../pages/ForgotPasswordPage/ForgetPassword";
import Loading from "../components/Loading/Loading";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import MyPostingTask from "../pages/MyPostingFood/MyPostingFood";

import Gallery from "../pages/Gallery/Gallery";
import BrowseAllFoods from "../pages/BrowseAllFoods/BrowseAllFoods";
import AddFood from "../pages/AddFood/AddFood";
import MyOrders from "../pages/MyOrders/MyOrders";
import OrderPages from "../pages/OrderPages/OrderPages";

async function loadFoodData() {
  try {
    const response = await fetch("https://henri-server.vercel.app/foods");
    if (!response.ok) throw new Error("Failed to load event data");
    return await response.json();
  } catch (error) {
    console.error("Error loading event data:", error);
    throw new Response("Event data not found", { status: 500 });
  }
}
async function loadAllFoodData() {
  try {
    const response = await fetch("https://henri-server.vercel.app/allFoods");
    if (!response.ok) throw new Error("Failed to load event data");
    return await response.json();
  } catch (error) {
    console.error("Error loading event data:", error);
    throw new Response("Event data not found", { status: 500 });
  }
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        loader: loadFoodData,
        element: <HomePage />,
        hydrateFallbackElement: <Loading />,
      },

      {
        path: "/foods/:taskId",
        loader: async ({ params }) => {
          try {
            const data = await loadAllFoodData();
            const taskData = data.find((task) => task._id === params.taskId);
            if (!taskData) {
              console.error("Task data not found");
            }
            return taskData;
          } catch (error) {
            console.error("Error  Task data :", error);
            throw new Response("Task data not found", { status: 404 });
          }
        },

        element: <EventDetailPage />,
        hydrateFallbackElement: <Loading />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/order/:id",
        loader: async ({ params }) => {
          try {
            const data = await loadAllFoodData();
            const foodData = data.find((food) => food._id === params.id);
            if (!foodData) {
              console.error("Food data not found");
            }
            return foodData;
          } catch (error) {
            console.error("Error  Food data :", error);
            throw new Response("Food data not found", { status: 404 });
          }
        },
        element: (
          <PrivateRoute>
            <OrderPages />
          </PrivateRoute>
        ),
      },
      {
        path: "/auth",
        children: [
          {
            path: "login",
            element: (
              <PublicRoute>
                <Login />
              </PublicRoute>
            ),
            hydrateFallbackElement: <Loading />,
          },
          {
            path: "signup",
            element: (
              <PublicRoute>
                <Singup />
              </PublicRoute>
            ),
            hydrateFallbackElement: <Loading />,
          },
          {
            path: "forget-password",
            element: <ForgetPassword />,
          },
        ],
      },
      {
        path: "/my-profile",
        element: (
          <PrivateRoute>
            <MyProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "/add-food",
        element: (
          <PrivateRoute>
            <AddFood />
          </PrivateRoute>
        ),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/all-foods",
        loader: loadAllFoodData,
        element: <BrowseAllFoods></BrowseAllFoods>,
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },

      {
        path: "/privacy&policy",
        element: <Policy />,
      },
      {
        path: "/my-posted-food",
        loader: loadAllFoodData,
        element: (
          <PrivateRoute>
            <MyPostingTask></MyPostingTask>
          </PrivateRoute>
        ),
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "/my-orders",
        element: (
          <PrivateRoute>
            <MyOrders></MyOrders>
          </PrivateRoute>
        ),
        hydrateFallbackElement: <Loading />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default router;
