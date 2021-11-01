import React from 'react'
import image1 from '../../assets/images/pexels-fauxels-3184325.jpg'
import winnerPhoto from '../../assets/images/pexels-nataliya-vaitkevich-6120397.jpg'
import ContributeWayCard from './components/ContributeWayCard'


function AboutPage() {
  return (
    <div style={styles.container} className="about-page-main-container">
      <div style={styles.questionRow}>

        <img srcSet={image1} style={styles.firstImage} alt="" />

        <div style={styles.questionRowContent}>
          <h1 className="h1--heading" style={styles.heading1}>O que é a <strong>Biblioteca de Provas UCAN</strong> ?</h1>
          <p style={styles.normalText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae praesentium sed corporis totam temporibus dolores eos non est illo, ex doloribus blanditiis repudiandae provident saepe maiores magni rerum dolorum. Tempora quod amet recusandae porro necessitatibus vitae vero labore, neque sunt blanditiis obcaecati assumenda. Doloribus consequuntur impedit, ipsa sequi at, deleniti officia accusamus voluptas non corporis mollitia omnis laudantium perspiciatis sunt dolorum pariatur consequatur officiis! Ipsa, consequatur veniam odit doloremque, id facilis, error sed voluptatum saepe maxime facere debitis quod ullam illo quis optio! Repudiandae nobis vero praesentium aut sint, dicta laboriosam quam consequuntur quibusdam culpa ipsam voluptatibus. Libero, in maiores.</p>
        </div>
      </div>

      <div style={styles.secondRow}>
        <div style={styles.questionSpecialContainer}>
          <img srcSet={winnerPhoto} style={styles.winnerPhoto} alt="" />
          <h1 className="h1--heading" style={styles.heading1}>Quem pode ajudar?</h1>
        </div>
        <div style={styles.questionRowContent}>
          <p style={styles.normalText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae praesentium sed corporis totam temporibus dolores eos non est illo, ex doloribus blanditiis repudiandae provident saepe maiores magni rerum dolorum. Tempora quod amet recusandae porro necessitatibus vitae vero labore, neque sunt blanditiis obcaecati assumenda. Doloribus consequuntur impedit, ipsa sequi at, deleniti officia accusamus voluptas non corporis mollitia omnis laudantium perspiciatis sunt dolorum pariatur consequatur officiis! Ipsa, consequatur veniam odit doloremque, id facilis, error sed voluptatum saepe maxime facere debitis quod ullam illo quis optio! Repudiandae nobis vero praesentium aut sint, dicta laboriosam quam consequuntur quibusdam culpa ipsam voluptatibus. Libero, in maiores.</p>
        </div>
      </div>


      <div style={styles.thirdRow}>
        <div style={styles.questionRowContent}>
          <h1 className="h1--heading" style={styles.heading1}>Como contribuir?</h1>
        </div>

        <div style={styles.contributeWayCardsContainer}>
          <ContributeWayCard
            title="Contribuidor Anônimo"
            instructions={
              [
                '1º Você ajuda sem partilhar a sua identidade.',
                '2º Você não possui seus dados estatísticos.',
                '3º Não podera fazer parte do nosso memorial.'
              ]
            }
          ></ContributeWayCard>
          <ContributeWayCard
            title="Contribuidor Registrado"
            instructions={
              [
                '1º Você ajuda sabendo quem vc é.',
                '2º Você tem acesso aos dados estatísticos.',
                '3º Podera fazer parte do nosso memorial, caso concorde.'
              ]
            }
          ></ContributeWayCard>
        </div>
      </div>
    </div>
  )
}

export default AboutPage


const styles = {
  container: {
    marginTop: '5rem'
  },
  questionRow: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '15rem'
  },
  heading1: {
    fontSize: '6.2rem',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
    color: '#333',
  },
  normalText: {
    fontSize: '2rem',
    color: '#444',
    lineHeight: '1.5',
  },
  firstImage: {
    width: '45%',
    borderRadius: '1rem',
    borderWidth: '1rem',
    borderColor: '#00B2FF',
    objectFit: 'cover',
    marginRight: '5rem'
  },
  winnerPhoto: {
    height: '12.8rem',
    width: '12.8rem',
    objectFit: 'cover',
    borderRadius: '1rem',
    marginRight: '4rem'
  },
  questionSpecialContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: '5rem'
  },
  secondRow: {
    marginBottom: '15rem'
  },
  thirdRow: {
    display: 'flex',
    flexDirection: 'column'
  },
  contributeWayCardsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    marginBottom: '15rem',
  },

}