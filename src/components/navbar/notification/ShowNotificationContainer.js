

import React, { useState, useEffect } from 'react'
import { getNotifications } from '../../../services/remote/notifications/notificationRemote'
import NotificationItem from './components/NotificationItem'

function ShowNotificationContainer({handleShowNotificationContainer}) {
  const [notifications, setNotifications] = useState([])

  const handleGetNotifications = async () => {
    try {
      const response = await getNotifications()

      if (response.status === 200) {
        setNotifications(response.notifications)
      }
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    handleGetNotifications()
  }, [])

  return (
    <div className="notification-container">
      <button className="back-notification-container" onClick={() => {
        handleShowNotificationContainer(false)
      }}>Back</button>
      {
        notifications.map(notification => (
          <NotificationItem
            key={notification._id}
            id={notification._id}
            isReaded={notification.isReaded}
            createdAt={notification.createdAt}
            notificationType={notification.notificationType}
            referenceId={notification.referenceId}
            handleShowNotificationContainer={handleShowNotificationContainer}
          ></NotificationItem>
        ))
      }
    </div>
  )
}

export default ShowNotificationContainer
