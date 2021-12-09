import React, { useState } from "react";
import "./App.css";
import Tiles from "./Components/Tiles";
import Modal from "./Components/Modal";

function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [anim, setAnim] = useState(0);
  const [anim2, setAnim2] = useState(0);

  return (
    <div className="App">
      <div className="title">
//         {" "}
//         <span className="titleVector1"></span>{" "}
//         <span className="titleVector2"></span>
      </div>
      <div className="leftPage">
        <Tiles setModalVisible={setModalVisible} />
        {modalVisible !== false && (
          <Modal
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
          />
        )}
      </div>
      <div className="rightPage">
        <div
          className={anim2 ? "cloudLeft anim2" : "cloudLeft"}
          onAnimationEnd={() => setAnim2(0)}
        ></div>
        <div
          className={anim ? "rocket anim" : "rocket"}
          onAnimationEnd={() => setAnim(0)}
        ></div>
        <div className="landing"></div>
        <div
          className={anim2 ? "cloudRight anim2" : "cloudRight"}
          onAnimationEnd={() => setAnim2(0)}
        ></div>
        <div className="planet"></div>
        <button
          className="startRocket"
          onClick={() => {
            setAnim(1);
            setAnim2(1);
          }}
        >
          Lunch rocket
        </button>
      </div>
      <div className="footer">
        <span className="leftFooter">Copyright © SpaceX API</span>
        <span className="rightFooter"> Summer 2021</span>
      </div>
    </div>
  );
}

export default App;
