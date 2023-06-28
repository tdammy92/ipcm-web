import React from "react";
import { Link, useHistory } from "react-router-dom";
import data from "./HeaderData";

const Links = ({ item }) => {
  const { name, path } = item;

  return <Link to={path}> {name}</Link>;
};

function DesktopNavBar() {
  const history = useHistory();

  return (
    <div className="navListContainer">
      <div className="navListWrapper">
        {data?.map((item) => {
          return (
            <div
              key={item.id}
              className="navListItem"
            >
              <Links item={item} />
            </div>
          );
        })}

        <div className="RegisterContainer">
          <button
            className="registerBtn"
            onClick={() => history.push("/register")}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default DesktopNavBar;
