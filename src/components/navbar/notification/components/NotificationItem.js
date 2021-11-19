import React from 'react'
import { Link } from 'react-router-dom'

function NotificationItem({
  id,
  notificationType,
  referenceId,
  createdAt,
  isReaded,
  handleShowNotificationContainer
}) {
  return (
    <Link 
    to={`/biblioteca-de-provas-e-materiais-site/notification/${id}`} 
    className={(isReaded ? 'readed-notification' : 'unreaded-notification') + ' notification-item'}
    onClick={() => {
      handleShowNotificationContainer(false)
    }}
    >
      <h3 className="notification-type">
        {
          notificationType.includes('APPROVED') ? 'Submissão aceite!' : 'Submissão recusada!'
        }
      </h3>

      <p className="notification-date">{createdAt}</p>
    </Link>
  )
}

export default NotificationItem
