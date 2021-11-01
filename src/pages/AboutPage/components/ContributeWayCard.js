import React from 'react'

function ContributeWayCard({ title, instructions }) {
  return (
    <div style={styles.contributeWayCard}>
      <h2 style={styles.contributeWayTitle}>{title}</h2>

      <div style={styles.contributeWayDescContainer}>
        {
          instructions.map(instruction => (
            <p style={styles.contributeWayDesc}>{instruction}</p>
          ))
        }
      </div>
    </div>
  )
}

export default ContributeWayCard

const styles = {
  contributeWayCard: {
    display: 'flex',
    flexDirection: 'column',
    width: '30%',
    boxShadow: '0 0rem 1rem #0003',
    borderRadius: '1rem',
    padding: '4rem 2rem',
    borderTop: '1rem solid #00B2FF',
    margin: '0 5rem 0 0'
  },
  contributeWayCardImage: {
    width: '24.2rem',
    height: '24.2rem',
    borderRadius: '1rem',
    objectFit: 'cover',
    marginBottom: '1.5rem',
    border: '1rem solid #00B2FF',
    display: 'none'
  },
  contributeWayTitle: {
    fontSize: '2.4rem',
    color: '#333',
    marginBottom: '2rem'
  },
  contributeWayDescContainer: {
    marginTop: '1rem',
    padding: '1rem',
    backgroundColor: '#0002',
    borderRadius: '1rem'
  },
  contributeWayDesc: {
    fontSize: '1.8rem',
    marginBottom: '1rem'
  },

}