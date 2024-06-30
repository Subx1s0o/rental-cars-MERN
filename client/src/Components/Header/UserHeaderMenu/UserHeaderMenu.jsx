import UserIsAuth from "./UserIsAuth/UserIsAuth";
import UserIsNotAuth from "./UserIsNotAuth/UserIsNotAuth";
import { useSelector } from "react-redux";

import {
  selectIsLoggedIn,
  selectIsRefreshing,
} from "../../../redux/user/selectors";
export default function UserHeaderMenu() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  return (
    <div className="">
      {!isRefreshing && isLoggedIn ? (
        // Content when authenticated
        <UserIsAuth />
      ) : (
        // Content when not authenticated
        <UserIsNotAuth />
      )}
    </div>
  );
}
