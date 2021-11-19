import React, { useState, useEffect } from 'react'
import { getActualUserData, updateUser } from '../../../services/remote/user/user'

function UserConfigurationPage() {
  const [email, setEmail] = useState('')
  const [userId, setUserId] = useState('')
  const [username, setUsername] = useState('')
  const [showUpInContributorsTab, setIsInContributors] = useState(false)

  const handleGetUserInfo = async () => {
    const res = await getActualUserData();

    if (res.data !== undefined) {
      const data = res.data.user;

      setUserId(data._id)
      setUsername(data.username)
      setEmail(data.email)
      setIsInContributors(data.showUpInContributorsTab !== undefined ? data.showUpInContributorsTab : false)
    }
  }

  const onUpdate = async (e) => {
    e.preventDefault()

    try {
      const response = await updateUser(userId, {
        email,
        username,
        showUpInContributorsTab
      })

      if (response.status === 200) {
        alert('Dados Actualizados')
      } else {
        alert('Dados incorrectos')
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    handleGetUserInfo();
  }, [])

  return (
    <div>
      <form
        onSubmit={onUpdate}
        className="config-form"
        style={styles.formContainer}
        method='post'
      >
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
              onChange={(e) => {
                const text = e.target.value;
                setUsername(text)
              }}
            />
          </div>

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
            <label
              htmlFor="contributors-input"
              style={
                styles.formLabel
              }
            >Aparecer como Contribuidores</label>

            <input type="checkbox" name="contributors-input" id="contributors-input" checked={showUpInContributorsTab}
              onChange={(e) => {
                setIsInContributors(e.target.checked)
              }} />

          </div>

          <input type="submit" value="Actualizar" style={styles.submitButton} />
        </div>

      </form>
    </div>
  )
}

export default UserConfigurationPage

const styles = {
  formContainer: {
    backgroundColor: 'white',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
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