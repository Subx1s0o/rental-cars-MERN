import { useState } from "react";
import UserIsAuth from "./UserIsAuth/UserIsAuth";
import UserIsNotAuth from "./UserIsNotAuth/UserIsNotAuth";
export default function UserHeaderMenu() {
  const [a, setA] = useState(false); // Replace with actual authentication logic

  // Replace `false` or "true" with  actual authentication logic to determine if user is authenticated

  return (
    <div>
      {a ? (
        // Content when authenticated
        <UserIsAuth />
      ) : (
        // Content when not authenticated
        <UserIsNotAuth />
      )}
    </div>
  );
}
