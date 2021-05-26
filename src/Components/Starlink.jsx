import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faArrowUp,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";

const Starlink = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [starlinkList, setStarlinkList] = useState([]);
  const [sortOrder, setSortOrder] = useState(0);

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.spacexdata.com/v4/starlink`)
      .then((response) => response.json())
      .then((response) => {
        setStarlinkList(
          response.map((el) => {
            return { name: el.spaceTrack.OBJECT_NAME, version: el.version };
          })
        );
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError("Failed to API connection");
      });
  }, []);

  const sortData = () => {
    if (sortOrder === 0 || sortOrder === 1) {
      starlinkList.sort(function (a, b) {
        return a.name.localeCompare(b.name, undefined, {
          numeric: true,
          sensitivity: "base",
        });
      });
      setSortOrder(-1);
    } else {
      starlinkList.sort(function (a, b) {
        return b.name.localeCompare(a.name, undefined, {
          numeric: true,
          sensitivity: "base",
        });
      });
      setSortOrder(1);
    }
  };

  return (
    <div className="modalView">
      <span className="modalTitle">Starlink</span>
      {loading && (
        <div className="spinner">
          <FontAwesomeIcon icon={faSpinner} spin />
        </div>
      )}
      {error && <div>{error}</div>}
      {!loading && !error && (
        <>
          <ul>
            <li className="nav">
              <span className="dataTitle" onClick={sortData}>
                <span>Name</span>
                {sortOrder === 0 && (
                  <span className="sortStatus arrowsHide">
                    <FontAwesomeIcon icon={faArrowUp} />
                    <FontAwesomeIcon icon={faArrowDown} />
                  </span>
                )}
                {sortOrder === 1 && (
                  <span className="sortStatus">
                    <FontAwesomeIcon icon={faArrowUp} />
                  </span>
                )}
                {sortOrder === -1 && (
                  <span className="sortStatus">
                    <FontAwesomeIcon icon={faArrowDown} />
                  </span>
                )}
              </span>
              <span>Version</span>
            </li>
          </ul>
          <ul className="scroll">
            {starlinkList.map((starlink, idx) => (
              <li key={idx}>
                <span>{starlink.name}</span>
                <span>{starlink.version}</span>
              </li>
            ))}
          </ul>
          <div className="liBlur"></div>
        </>
      )}
    </div>
  );
};

export default Starlink;
