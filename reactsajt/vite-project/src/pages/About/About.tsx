import React from "react";
import Button from "../../components/Button/Button";
import "./About.css";

const About: React.FC = () => {
  return (
    <div className="onama" style={{ padding: "50px" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <h1>O Sportster-u</h1>
        <p>
          Sportster je platforma koja entuzijastima za sport omogućava
          organizovanje i učestvovanje u raznim sportskim događajima širom
          sveta. Naša misija je povezati ljude kroz sport i omogućiti im da
          pronađu, planiraju i učestvuju u sportskim aktivnostima koje ih
          inspirišu i zabavljaju.
        </p>
        <h2>Naša Vizija</h2>
        <p>
          Naša vizija je stvoriti globalnu zajednicu sportskih entuzijasta koji
          dele strast prema sportu i aktivnom životnom stilu. Kroz inovativne
          alate i resurse, želimo inspirisati ljude da otkriju nove sportove,
          pronađu partnere za igru, organizuju sportske događaje i deluju kao
          mentori i podrška jedni drugima u ostvarivanju sportskih ciljeva.
        </p>
        <h2>Šta Nudimo</h2>
        <p>
          Naša platforma nudi niz funkcionalnosti koje olakšavaju organizovanje
          sportskih aktivnosti i povezivanje sa drugim sportistima:
        </p>

        <h2>Započnite Sa Nama</h2>
        <p>
          Ako delite našu strast prema sportu i želite se pridružiti dinamičnoj
          sportskoj zajednici, prijavite se na našu platformu i započnite svoje
          sportske avanture danas!
        </p>
        <Button />
      </div>
    </div>
  );
};

export default About;
