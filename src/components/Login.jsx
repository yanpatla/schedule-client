import React, { useContext } from "react";
import "../index.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "./UI/base/Button";
import Form from "./UI/layout/Form";
import Error from "./UI/base/Errors";
import authContext from "../context/auth/authContext";
import { useHistory } from "react-router";
import Container from "./UI/base/Container";
const Login = () => {
  const AuthContext = useContext(authContext);
  let history = useHistory();
  const { authenticated, logIn } = AuthContext;

  //*Formulario y Validacion con Formik
  const formik = useFormik({
    //*Configuracion
    initialValues: {
      email: "",
      password: "",
    },
    //*Schema de Validacion
    validationSchema: Yup.object({
      email: Yup.string()
        .email("The E-mail is not Valid")
        .required("Pelase Put an E-mail"),
      password: Yup.string().required("Please Put a Password"),
    }),
    onSubmit: (values) => {
      logIn(values);
      if (authenticated) {
        history.push("/tasks");
      }
    },
  });
  return (
    <Container className="container">
      <Form id="loginUser" onSubmit={formik.handleSubmit}>
        {formik.touched.email && formik.errors.email ? (
          <Error>
            <p>{formik.errors.email}</p>
          </Error>
        ) : null}

        {formik.touched.password && formik.errors.password ? (
          <Error>
            <p>{formik.errors.password} </p>{" "}
          </Error>
        ) : null}
        <div className="loginUser__container">
          <h3>Enter your login data</h3>

          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>

          <Button type="submit" value="Login" className="button-form" />
        </div>
      </Form>
    </Container>
  );
};

export default Login;
