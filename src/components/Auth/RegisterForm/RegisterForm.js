import React from "react";
import {Form, Button} from "semantic-ui-react";
import {useFormik} from "formik";
import * as Yup from "yup";


import "./RegisterForm.scss"

export default function RegisterForm(props) {
    const {setShowLogin} = props;

    const formik = useFormik({
        initialValues: initialValue(),
        validationSchema: Yup.object({
            name: Yup.string()
                .required('Tu nombre es obligatorio'),
            username: Yup.string()
                .required('Nombre de usuario es obligatorio')
                .matches(/^[a-zA-Z0-9-]*$/, 'El nombre de usuario no puede tener espacios'),
            email: Yup.string()
                .required('Email es obligatorio')
                .email('El email no es válido'),
            password: Yup.string()
                .required('La contraseña es obligatoria')
                .oneOf([Yup.ref('repeatPassword')], 'Las contraseñas no son iguales'),
            repeatPassword: Yup.string()
                .required('La contraseña es obligatoria')
                .oneOf([Yup.ref('password')], 'Las contraseñas no son iguales'),
        }),
        onSubmit: (formValue) => {
            console.log(formValue)
        }

    })

    return (
        <>
            <h2 className={'register-form-title'}>Registrate para ver fotos y videos de tus amigos.</h2>
            <Form className={'register-form'} onSubmit={formik.handleSubmit}>
                <Form.Input
                    type="text"
                    placeholder="Nombre y Apellidos"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    error={formik.errors.name && true}
                />
                <Form.Input
                    type="text"
                    placeholder="Nombre de usuario"
                    name="username"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    error={formik.errors.username && true}
                />
                <Form.Input
                    type="email"
                    placeholder="Correo electrónico"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.errors.email && true}
                />
                <Form.Input
                    type="password"
                    placeholder="Contraseña"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.errors.password}
                />
                <Form.Input
                    type="password"
                    placeholder="Repetir Contraseña"
                    name="repeatPassword"
                    value={formik.values.repeatPassword}
                    onChange={formik.handleChange}
                    error={formik.errors.repeatPassword}
                />
                <Button className={'btn-submit'} type="submit">Registrarse</Button>
            </Form>
        </>
    )
}

function initialValue() {
    return {
        name: "",
        username: "",
        email: "",
        password: "",
        repeatPassword: ""
    }
}
