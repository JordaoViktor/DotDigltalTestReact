import React from 'react';
import './style.scss'

const Page = () => {
    return (
        <section className="email-page">
            <form className="email-container">
                <div className="email-name">
                    <span className="email-span">*Nome:</span>
                    <input type="text" required placeholder="Informe seu nome"/>
                </div>
                <div className="email-container-flex">
                    <div className="email-contact">
                        <span className="email-span">*E-mail:</span>
                        <input type="email" required placeholder="Informe seu e-mail"/>
                    </div>
                    <div className="email-phone">
                        <span className="email-span">*Telefone:</span>
                        <input required type="tel" placeholder="(__)____-____"/>
                    </div>
                </div>
                <div className="text-area-mensage">
                    <span className="">*Mensagem:</span>
                    <textarea name="" id="" cols="30" rows="10" placeholder="Escreva aqui"></textarea>
                </div>
                <button className="submit-button"type="submit" href="#">
                    Enviar
                </button>
            </form>
        </section>
    )
}

export default Page;