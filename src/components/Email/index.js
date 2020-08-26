import React from 'react';
import { Formik, Form as FormikForm, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import './style.scss'


import Button from '../Button';

const validations = yup.object().shape({
    user:yup.string().min(3).required(),
    email:yup.string().email().required(),
    phone:yup.number().min(10).required(),
    mensage:yup.string().required()
})

const Page = ({handleSubmit}) => {
    const initialValues = {
        user:'',
        email:'',
        phone:'',
        mensage:'',
    }
    return (
        <section className="email-page">
            <Formik initialValues={initialValues}  onSubmit={handleSubmit} validationSchema={validations}>
                <FormikForm className="email-container">
                    <div className="email-name">
                        <span className="email-span">*Nome:</span>
                        <Field type="text"  name="user" placeholder="Informe seu nome"/>
                    </div>
                    <ErrorMessage className="form-error user-input" component="div" name="user"/>
                    <div className="email-container-flex">
                        <div className="email-contact">
                            <span className="email-span">*E-mail:</span>
                            <Field name="email" type="email"  placeholder="Informe seu e-mail"/>
                        </div>
                        <ErrorMessage className="form-error form-email-container" component="div" name="email"/>
                        <div className="email-phone">
                            <span className="email-span">*Telefone:</span>
                            <Field name="phone" type="tel" placeholder="(__)____-____"/>
                        </div>
                        <ErrorMessage className="form-error form-email-container phone-form" component="div" name="phone"/>
                    </div>
                    
                    <div className="text-area-mensage">
                        <span className="">*Mensagem:</span>
                        <Field name="mensage" component="textarea" id="" cols="30" rows="10" placeholder="Escreva aqui"/>
                    </div>
                    <ErrorMessage className="form-error mensage-form-error" component="span" name="mensage"/>
                    <Button>
                        Enviar
                    </Button>
                </FormikForm>
            </Formik>
        </section>
    )
}

export default Page;