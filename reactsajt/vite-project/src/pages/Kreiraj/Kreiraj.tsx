import React, { useState } from "react";
import "./Kreiraj.css";

const Kreiraj: React.FC = () => {
  const [sport, setSport] = useState<string>("");
  const [datum, setDatum] = useState<string>("");
  const [vreme, setVreme] = useState<string>("");
  const [lokacija, setLokacija] = useState<string>("");
  const [kreiranTurnir, setKreiranTurnir] = useState<boolean>(false);

  const handleSportChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSport(e.target.value);
  };

  const handleDatumChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDatum(e.target.value);
  };

  const handleVremeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVreme(e.target.value);
  };

  const handleLokacijaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLokacija(e.target.value);
  };

  const handleKreirajClick = () => {
    if (sport && datum && vreme && lokacija) {
      console.log("Kreiran turnir:", { sport, datum, vreme, lokacija });
      setKreiranTurnir(true);
    } else {
      alert("Molimo Vas popunite sva polja pre kreiranja turnira.");
    }
  };

  return (
    <div>
      <h2>Kreiraj novi turnir</h2>
      <div>
        <label>Sport:</label>
        <input type="text" value={sport} onChange={handleSportChange} />
      </div>
      <div>
        <label>Datum:</label>
        <input type="date" value={datum} onChange={handleDatumChange} />
      </div>
      <div>
        <label>Vreme:</label>
        <input type="time" value={vreme} onChange={handleVremeChange} />
      </div>
      <div>
        <label>Lokacija:</label>
        <input type="text" value={lokacija} onChange={handleLokacijaChange} />
      </div>
      <button onClick={handleKreirajClick}>Kreiraj</button>
      {kreiranTurnir && <p>Uspešno ste kreirali turnir!</p>}
    </div>
  );
};

export default Kreiraj;
