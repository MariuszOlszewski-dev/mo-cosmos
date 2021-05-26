import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp, faSpinner} from '@fortawesome/free-solid-svg-icons';

const Crew = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [crewList, setCrewList] = useState([]);
    const [sortOrder, setSortOrder] = useState(0);

    useEffect(() => {
        setLoading(true);
        fetch(`https://api.spacexdata.com/v4/crew`)
        .then(response => response.json())
        .then(response => {
            setCrewList(response.map(el => {
                return {name: el.name, status: el.status}
            }))
            setLoading(false);
        })
        .catch(error => {
            setLoading(false);
            setError('Failed to API connection');
        })
    }, []);

    const sortData = () =>{
        if(sortOrder === 0 || sortOrder === 1){
            crewList.sort((a,b) => a.name > b.name ? 1 : -1);
            setSortOrder(-1);
        }
        else{
            crewList.sort((a,b) => a.name > b.name ? -1 : 1);
            setSortOrder(1);
        }
    }

    return(
        <div className="modalView">
            <span className="modalTitle">Crew</span>
            {loading && <div className="spinner"><FontAwesomeIcon icon={faSpinner} spin /></div>}
            {error && <div>{error}</div>}
            {!loading && !error &&
            <>
                <ul>
                    <li className="nav">
                        <span className="dataTitle" onClick={sortData}>
                            <span >Name</span>
                            {sortOrder === 0 && <span className="sortStatus arrowsHide">
                                <FontAwesomeIcon icon={faArrowUp} />
                                <FontAwesomeIcon icon={faArrowDown} />
                            </span>} 
                            {sortOrder === 1 && <span className="sortStatus">
                                <FontAwesomeIcon icon={faArrowUp} />
                            </span>}
                            {sortOrder === -1 && <span className="sortStatus">
                                <FontAwesomeIcon icon={faArrowDown} />
                            </span>}
                        </span>
                        <span>Status</span>
                    </li>
                </ul>
                <ul className="scroll">
                    {crewList.map((crew, idx) => <li key={idx}><span>{crew.name}</span><span>{crew.status}</span></li>)}
                </ul>
                <div className="liBlur"></div>
            </>
            }
        </div>
    )
}

export default Crew;