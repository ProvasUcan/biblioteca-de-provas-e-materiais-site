import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { apiBaseUrl } from '../../config/apiConfig'
import readerImage from '../../assets/images/undraw_book_lover_mkck.svg'
//
function SignupPage() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const signupSubmit = (e) => {
    e.preventDefault()

    fetch(`${apiBaseUrl}/signup`, {
      method: 'POST',
      body: JSON.stringify({
        username,
        email,
        password
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        if (data.status === 200) {
          localStorage.setItem('auth-token-biblioteca-de-provas', data.token)
          window.location.pathname = 'biblioteca-de-provas-e-materiais-site/'
        } else {
          alert('Dados incorrectos')
        }

      })
      .catch(error => {
        console.log(error)
      })
  }
  return (
    <div style={styles.loginContainer}>
      <img className="login-signup-form-img" srcSet={readerImage} style={styles.backgroundImage} alt="" />

      <form
        className="login-signup-form"
        onSubmit={signupSubmit}
        style={styles.formContainer}
        method='post'
      >
        <h2 className="form-login-signup-heading-2">Cadastro</h2>
        <div className="login-container">
          <div style={styles.formRow}>
            <label
              htmlFor="username"
              style={
                styles.formLabel
              }
            >Username</label>
            <input
              type="text"
              name="username"
              id="username-input"
              style={styles.formInput}
              value={username}
              required
              onChange={(e) => {
                const text = e.target.value;
                setUsername(text)
              }}
            />
          </div>

          <div style={styles.formRow}>
            <label
              htmlFor="email"
              style={
                styles.formLabel
              }
            >Email</label>
            <input
              type="email"
              name="email"
              id="email-input"
              style={styles.formInput}
              value={email}
              required
              onChange={(e) => {
                const text = e.target.value;
                setEmail(text)
              }}
            />
          </div>
          <div style={styles.formRow}>
            <label htmlFor="password" style={styles.formLabel}>Password</label>
            <input
              type="password"
              name="password"
              id="password-input"
              style={styles.formInput}
              value={password}
              required
              onChange={(e) => {
                const text = e.target.value;
                setPassword(text)
              }}
            />
          </div>

          <input type="submit" value="Registrar" style={styles.submitButton} />
        </div>


        <p style={styles.signupText}>Já possui uma conta? <Link to="/biblioteca-de-provas-e-materiais-site/login">Acesse agora</Link> </p>

      </form>

    </div>
  )
}

export default SignupPage

const styles = {
  loginContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  formContainer: {
    width: '35%',
    backgroundColor: 'white',
    position: 'relative',
    padding: '4rem',
    border: '0.1rem solid #00B2FF',
    borderRadius: '0.5rem',
    display: 'flex',
    flexDirection: 'column',
    marginTop: '10rem'
  },
  formRow: {
    display: 'flex',
    flexDirection: 'column',
    margin: '4rem 0',
  },
  formLabel: {
    fontSize: '1.8rem',
    marginBottom: '1rem',
  },
  formInput: {
    fontSize: '1.8rem',
    color: '#333',
    padding: '1rem 2rem',
    borderRadius: '0.5rem',
    border: '0.1rem solid #0003'
  },
  submitButton: {
    fontSize: '2rem',
    padding: '1rem 2rem',
    border: 'none',
    backgroundColor: '#00B2FF',
    color: '#fff',
    borderRadius: '0.5rem',
    marginBottom: '2rem',
    cursor: 'pointer'
  },
  signupText: {
    fontSize: '1.4rem'
  },
  backgroundImage: {
    position: 'absolute',
    width: '50%',
    left: '50%',
    transform: 'translateX(-50%)'
  },
  zIndex: -1
}