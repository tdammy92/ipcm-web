import React, { useState } from "react";
import { Link } from "react-router-dom";
import data from "./HeaderData";
import { MenuToggle } from "./NavToggle";

const Links = ({ item, setIsopen }) => {
  const { name, path } = item;

  return (
    <Link
      to={path}
      onClick={() => {
        setIsopen(false);
      }}
    >
      {" "}
      {name}
    </Link>
  );
};

function MobileNavBar() {
  const [isOpen, setIsopen] = useState(false);

  return (
    <div className="MobileNavListContainer">
      <MenuToggle
        isOpen={isOpen}
        toggle={() => {
          setIsopen(!isOpen);
        }}
      />

      {isOpen && (
        <>
          <div className="MobileNavListWrapper">
            {data?.map((item) => {
              return (
                <div key={item.id} className="MobileNavListItem">
                  <Links item={item} setIsopen={setIsopen} />
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

export default MobileNavBar;
