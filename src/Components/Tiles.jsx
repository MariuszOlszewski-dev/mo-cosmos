

const Tiles = (props) => {

    const setModalVisible = props.setModalVisible;

    const handleTileClick = modalType => {
        setModalVisible(modalType);
    }

    return(
        <>
            <div className="tile first" onClick={() => handleTileClick(1)}>
                <span className="capsules">Capsules</span>
            </div>
            <div className="tile second" onClick={() => handleTileClick(2)}>
                <span className="crew">Crew</span>
            </div>
            <div className="tile third" onClick={() => handleTileClick(3)}>
                <span className="rockets">Rockets</span>
            </div>
            <div className="tile fourth" onClick={() => handleTileClick(4)}>
                <span className="starlink">Starlink</span>
            </div>
        </>
    )
}

export default Tiles;