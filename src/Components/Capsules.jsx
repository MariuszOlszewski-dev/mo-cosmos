import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faArrowUp,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";

const Capsules = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [capsulesList, setCapsulesList] = useState([]);
  const [sortOrder, setSortOrder] = useState(0);

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.spacexdata.com/v4/capsules`)
      .then((response) => response.json())
      .then((response) => {
        setCapsulesList(
          response.map((el) => {
            return { type: el.type, status: el.status };
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
      capsulesList.sort((a, b) => (a.type > b.type ? 1 : -1));
      setSortOrder(-1);
    } else {
      capsulesList.sort((a, b) => (a.type > b.type ? -1 : 1));
      setSortOrder(1);
    }
  };

  return (
    <div className="modalView">
      <span className="modalTitle">Capsules</span>
      {loading && (
        <div className="spinner">
          <FontAwesomeIcon icon={faSpinner} spin />
        </div>
      )}
      {error && <div className="error">{error}</div>}
      {!loading && !error && (
        <>
          <ul>
            <li className="nav">
              <span className="dataTitle" onClick={sortData}>
                <span>Type</span>
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
              <span>Status</span>
            </li>
          </ul>
          <ul className="scroll">
            {capsulesList.map((capsule, idx) => (
              <li key={idx}>
                <span>{capsule.type}</span>
                <span>{capsule.status}</span>
              </li>
            ))}
          </ul>
          <div className="liBlur"></div>
        </>
      )}
    </div>
  );
};

export default Capsules;
