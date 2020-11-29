import React, { useState } from 'react';
import { Formik } from 'formik';
import { validationSchema } from './validationSchema';
import '../Modal/modal.css';

function Modal() {
  const [active, setActive] = useState(false);

  return (
    <div className="page">
      <button className="btn-open" onClick={() => setActive(true)}>
        open modal
      </button>
      <Formik
        initialValues={{
          login: '',
          password: '',
        }}
        validateOnBlur
        onSubmit={(values, { resetForm }) => {
          resetForm();
          console.log(values);
        }}
        validationSchema={validationSchema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          isValid,
          handleSubmit,
          dirty,
          resetForm,
        }) => (
          <div
            className={active ? 'modal active' : 'modal'}
            onClick={() => {
              setActive(!active);
              resetForm();
            }}
          >
            <div
              className="modal__content"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="title-container">
                <p className="text__title">Simple Flight Check</p>
              </div>
              <form className="form" autoComplete="off">
                <div className="input-login-container">
                  <label
                    htmlFor="login"
                    className="label"
                    style={{
                      color: errors.login && touched.login && '#eb1717',
                    }}
                  >
                    Логин:
                  </label>
                  <input
                    className="login-input"
                    type="text"
                    name="login"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.login}
                    style={{
                      borderColor: errors.login && touched.login && '#eb1717',
                    }}
                  />
                  <small
                    className={
                      errors.login && touched.login
                        ? 'small-error'
                        : 'small-error-none'
                    }
                  >
                    {errors.login && touched.login && errors.login} !
                  </small>
                </div>
                <div className="input-password-container">
                  <label
                    htmlFor="password"
                    className="label"
                    style={{
                      color: errors.password && touched.password && '#eb1717',
                    }}
                  >
                    Пароль:
                  </label>
                  <input
                    className="password-input"
                    name="password"
                    type="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    style={{
                      borderColor:
                        errors.password && touched.password && '#eb1717',
                    }}
                  />
                  <small
                    className={
                      errors.password && touched.password
                        ? 'small-error'
                        : 'small-error-none'
                    }
                  >
                    {errors.password && touched.password && errors.password} !
                  </small>
                </div>
                <div className="btn-container">
                  <button
                    className="btn-submit-form"
                    type="submit"
                    disabled={!isValid && !dirty}
                    onClick={handleSubmit}
                  >
                    Войти
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
}

export default Modal;
