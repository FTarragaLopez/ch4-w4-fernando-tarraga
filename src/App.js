import React, { useState, useEffect } from "react";

function PhoneCall() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isCalling, setIsCalling] = useState(false);
  const [callButton, setCallButton] = useState("Llamar");

  function handleNumberInput(event) {
    if (phoneNumber.length < 9) {
      setPhoneNumber(phoneNumber + event.target.value);
    }
  }

  function handleDelete() {
    setPhoneNumber(phoneNumber.slice(0, -1));
  }

  function handleCall() {
    setIsCalling(true);
    setCallButton("Colgar");
  }

  function handleHangUp() {
    setIsCalling(false);
    setCallButton("Llamar");
    setPhoneNumber("");
  }

  useEffect(() => {
    if (isCalling) {
      const hangUpTimer = setTimeout(() => {
        handleHangUp();
      }, 5000);

      return () => clearTimeout(hangUpTimer);
    }
  }, [isCalling]);

  return (
    <div>
      <div className={`call-message ${isCalling ? "" : "off"}`}>
        Llamando...
      </div>
      <div className="keypad">
        <div className="number-display">{phoneNumber}</div>
        <div className="number-buttons">
          <button onClick={handleNumberInput} value="1">
            1
          </button>
          <button onClick={handleNumberInput} value="2">
            2
          </button>
          <button onClick={handleNumberInput} value="3">
            3
          </button>
          <button onClick={handleNumberInput} value="4">
            4
          </button>
          <button onClick={handleNumberInput} value="5">
            5
          </button>
          <button onClick={handleNumberInput} value="6">
            6
          </button>
          <button onClick={handleNumberInput} value="7">
            7
          </button>
          <button onClick={handleNumberInput} value="8">
            8
          </button>
          <button onClick={handleNumberInput} value="9">
            9
          </button>
          <button onClick={handleDelete}>Borrar</button>
        </div>
      </div>
      <div className="call-controls">
        <button
          className={`${phoneNumber.length === 9 ? "active" : ""}`}
          onClick={handleCall}
          disabled={phoneNumber.length !== 9}
        >
          {callButton}
        </button>
        {isCalling ? <button onClick={handleHangUp}>Colgar</button> : null}
      </div>
    </div>
  );
}

export default PhoneCall;
