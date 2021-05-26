import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp, faSpinner} from '@fortawesome/free-solid-svg-icons';

const Rockets = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [rocketsList, setRocketsList] = useState([]);
    const [sortOrder, setSortOrder] = useState(0);

    useEffect(() => {
        setLoading(true);
        fetch(`https://api.spacexdata.com/v4/rockets`)
        .then(response => response.json())
        .then(response => {
            setRocketsList(response.map(el => {
                return {name: el.name, company: el.company}
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
            rocketsList.sort((a,b) => a.name > b.name ? 1 : -1);
            setSortOrder(-1);
        }
        else{
            rocketsList.sort((a,b) => a.name > b.name ? -1 : 1);
            setSortOrder(1);
        }
    }

    return(
        <div className="modalView">
            <span className="modalTitle">Rockets</span>
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
                        <span>Company</span>
                    </li>
                </ul>
                <ul className="scroll">
                    {rocketsList.map((rocket, idx) => <li key={idx}><span>{rocket.name}</span><span>{rocket.company}</span></li>)}
                </ul>
                <div className="liBlur"></div>
            </>
            }
        </div>
    )
}

export default Rockets;