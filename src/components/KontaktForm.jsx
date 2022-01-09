import React from 'react';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

function KontaktForm() {
    const form = useRef();
    function showDiv(elementId) {
        document.getElementById(elementId).style.visibility = "visible";
        setTimeout(function () { document.getElementById(elementId).style.visibility = "hidden" }, 4000);

    }
    function resetForm() {
        document.getElementById('myform').reset();
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_j7b0k0n', 'template_8cxrsup', form.current, 'user_uGV5v5JL9TmqkjoUhRgwZ')
            .then((result) => {
                showDiv("porukaUspešno");
                resetForm();

            },
                (error) => {
                    showDiv("porukaNeuspešno");
                    resetForm();

                });


    };
    return (
        <div className='form-div'>

            <form ref={form} id="myform"
                onSubmit={handleSubmit}
                method="POST"
                target="_blank"
            >
                <div className="mb-3 pt-0">
                    <label className='lbl'>Šta Vam je potrebno?</label><br></br>
                    <select name="narudzbina" id="narudzbina" >
                        <option value="" disabled selected hidden>Izaberi...</option>
                        <option value="decje-sobe">Dečje sobe</option>
                        <option value="dnevnesobe">Dnevne sobe</option>
                        <option value="spavace-sobe">Spavaće sobe</option>
                        <option value="kuhinje">Kuhinje</option>
                        <option value="kupatila">Kupatila</option>
                        <option value="plakari">Ugradni plakari</option>
                        <option value="namestaj">Nameštaj po meri</option>
                        <option value="obrada">Obrada drveta</option>
                    </select>
                </div>
                <div className="mb-3 pt-0">
                    <label className='lbl'>Okvirna količina ili kvadratura:</label><br></br>
                    <input
                        type="text"
                        placeholder="Okvirna količina"
                        name="kol" id="kol"
                        className=" placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                        required
                    />
                </div>

                <div className="mb-3 pt-0">
                    <label className='lbl'>Mesto izvođenja radova?</label><br></br>
                    <input
                        type="text"
                        placeholder="Lokacija izvođenja radova"
                        name="mesto" id="mesto"
                        className=" placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                        required
                    />
                </div>
                <div className="mb-3 pt-0">
                    <label className='lbl'>Kada biste želeli da počnete sa radom?</label><br></br>
                    <select name="vreme" id="vreme">
                        <option value="" disabled selected hidden>Izaberi...</option>
                        <option value="odmah">Odmah</option>
                        <option value="mesec">Do 1 mesec</option>
                        <option value="jedan-tri">1-3 meseca</option>
                        <option value="tri-sest">3-6 meseci</option>
                        <option value="prekoSest">Više od 6 meseci</option>
                        <option value="sokvirnaCena">Zanima me samo okvirna cena</option>
                    </select>
                </div>
                <div className="mb-3 pt-0">
                    <label className='lbl'>E-mail za slanje ponude:</label><br></br>
                    <input
                        type="text"
                        placeholder="Vaš e-mail"
                        name="email" id="email"
                        className=" placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                        required
                    />
                </div>
                <div className="mb-3 pt-0">
                    <button
                        className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase  rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="submit" value="send" style={{ backgroundColor: "#7D4F20", height: 35 + "px", border: "#7D4F20" }}
                    >
                        Pošalji poruku
                    </button>
                </div>
            </form>

        </div>
    )
}

export default KontaktForm
