import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { apiBaseUrl } from '../../config/apiConfig'
import readerImage from '../../assets/images/undraw_book_lover_mkck.svg'
import { login } from '../../services/remote/auth/login'
//
function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailIsOn, setEmailIsOn] = useState(false)
  const [passwordIsOn, setPasswordIsOn] = useState(false)

  const loginSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await login({
        email,
        password
      })

      if (response.status === 200) {
        localStorage.setItem('auth-token-biblioteca-de-provas', response.token)
        window.location.pathname = 'biblioteca-de-provas-e-materiais-site/'
      } else {
        alert('Dados incorrectos')
      }
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div style={styles.loginContainer}>
      <img srcSet={readerImage} style={styles.backgroundImage} alt="" />

      <form
        onSubmit={loginSubmit}
        style={styles.formContainer}
        method='post'
      >
        <div className="login-container">
          <div style={styles.formRow}>
            <label
              htmlFor="emai"
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
              onChange={(e) => {
                const text = e.target.value;
                setPassword(text)
              }}
            />
          </div>

          <input type="submit" value="Login" style={styles.submitButton} />
        </div>


        <p style={styles.signupText}>Não possui uma conta? <Link to="/biblioteca-de-provas-e-materiais-site/signup">Registre-se</Link> </p>

      </form>

    </div>
  )
}

export default LoginPage

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
    transform: 'translateX(-50%)',
    zIndex: -1
  }
}