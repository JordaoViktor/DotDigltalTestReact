import React from 'react';
import './style.scss'

const Page = () => {
    return (
        <section class="email-page">
            <form class="email-container">
                <div class="email-name">
                    <span class="email-span">*Nome:</span>
                    <input type="text" required placeholder="Informe seu nome"/>
                </div>
                <div class="email-container-flex">
                    <div class="email-contact">
                        <span class="email-span">*E-mail:</span>
                        <input type="email" required placeholder="Informe seu e-mail"/>
                    </div>
                    <div class="email-phone">
                        <span class="email-span">*Telefone:</span>
                        <input required type="tel" placeholder="(__)____-____"/>
                    </div>
                </div>
                <div class="text-area-mensage">
                    <span class="">*Mensagem:</span>
                    <textarea name="" id="" cols="30" rows="10" placeholder="Escreva aqui"></textarea>
                </div>
                <button class="submit-button"type="submit" href="#">
                    Enviar
                </button>
            </form>
        </section>
    )
}

export default Page;