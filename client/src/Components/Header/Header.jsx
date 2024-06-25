import Logotype from "./Logotype/Logotype";
import SearchInput from "./SearchInput/SearchInput";
import UserHeaderMenu from "./UserHeaderMenu/UserHeaderMenu";
import { header_container, splitter } from "./header.module.css";
export default function Header() {
  return (
    <header>
      <div className={`container ${header_container}`}>
        <Logotype />
        <div className={splitter}>
          <SearchInput />
          <UserHeaderMenu />
        </div>
      </div>
    </header>
  );
}
