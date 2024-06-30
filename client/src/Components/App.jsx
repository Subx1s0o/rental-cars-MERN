import { useEffect } from "react";
import { useSelector } from "react-redux";
import { refreshUser } from "../redux/user/operations";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { selectIsRefreshing } from "../redux/user/selectors";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import { lazy } from "react";
import { Suspense } from "react";
import { HomeSkeleton } from "./HomeSkeleton/HomeSkeleton";
import { delay } from "../utils/delay";
import HeaderSkeleton from "./HeaderSkeleton/HeaderSkeleton";
function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const HomePage = lazy(() => delay(200).then(() => import("../Pages/Home")));

  const Header = lazy(() =>
    delay(200).then(() => import("./HeaderSkeleton/HeaderSkeleton"))
  );

  return isRefreshing ? (
    "loading..."
  ) : (
    <>
      <Suspense fallback={<HeaderSkeleton />}>
        <Header />
      </Suspense>

      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<HomeSkeleton />}>
              <HomePage />
            </Suspense>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
