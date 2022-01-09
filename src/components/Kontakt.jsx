import React from 'react'
import KontaktForm from './KontaktForm';

function Kontakt() {



  return (<>

    <div className="gridPrikazKontakt">
      <KontaktForm></KontaktForm>
      <div id="kontaktInfo">
        <h2>Kontakt informacije
        </h2>

        <div>
          <h5>FIRMA U ŠAPCU</h5>
          Dragoljuba Kulezića Boljševika 69, 15000 Šabac<br></br>
          +381 (0)21 750 070<br></br>
          +381 (0)65 488
          <br></br>
          <br></br>
          <br></br>

          <h5>GDE SE NALAZIMO</h5>

          <a target="_blank" href='https://www.google.com/maps/place/Dragoljuba+Kulezi%C4%87a+-+Bolj%C5%A1evika,+Pocerski+Pri%C4%8Dinovi%C4%87/@44.7270259,19.7065765,15.22z/data=!4m5!3m4!1s0x475bcb4ca8dea913:0xd7228e49d18d30f1!8m2!3d44.7255232!4d19.7122836?hl=sr'> Pogledaj na mapi</a>
          <br></br>
          <br></br>
          <br></br>
          <h5>PRONAĐITE NAS NA</h5>
          <a className="dm">Facebook</a><br></br>
          <a className="dm">Instagram</a>
          <br></br>
          <img id="slika-logo" src="../nenadex12.png" style={{ width: 250 + "px", height: 140 + "px", marginLeft: 22 + "%", marginTop: 150 + "px", position: "absolute" }}></img>


        </div>
      </div>

    </div>

    <div id="porukaUspešno" style={{ visibility: "hidden" }}>
      Uspešno ste nas kontaktirali. Odgovorićemo u najkraćem mogućem roku.
    </div>
    <div id="porukaNeuspešno" style={{ visibility: "hidden" }}>
      Došlo je do greške. Molimo Vas pokušajte kasnije.
    </div>

  </>

  );
}

export default Kontakt



