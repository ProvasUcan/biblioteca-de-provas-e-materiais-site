import React, { useState, useEffect } from 'react'
import { getSpecificNotification } from '../../services/remote/notifications/notificationRemote'
import { getSpecificSubmission } from '../../services/remote/submissions/submissionsRemote'
import SubmissionForm from '../Admin/SubmissionsPages/components/SubmissionForm'

function NotificationPage({ getUserInfo }) {
  const [notificationId, setNotificationId] = useState(window.location.pathname.split('/')[window.location.pathname.split('/').length - 1])
  const [notification, setNofication] = useState({})
  const [isSubmissionGetted, setIsSubmissionGetted] = useState(false)
  const [submission, setSubmission] = useState({
    _id: '',
    isApproved: false,
    isRejected: true,
    userId: '',
    subject: '',
    documentType: '',
    createdAt: '',
    quantFiles: 0,
    filesTypes: [],
    filesUrls: []
  })

  const handleGetNotification = async () => {
    const res = await getSpecificNotification(notificationId)

    if (res !== undefined) {
      const notification = res.notification;
      setNofication(notification)
      handleGetSpecificSubmission(notification.referenceId)
    }
  }

  const handleGetSpecificSubmission = async (submissionId) => {
    const res = await getSpecificSubmission(submissionId)

    setSubmission(res.data.submission)
    setIsSubmissionGetted(true)
  }

  useEffect(() => {
    handleGetNotification()
  }, [])

  return (
    <div>
      {
        isSubmissionGetted &&
        <SubmissionForm
          submissionId={submission._id}
          isApproved={submission.isApproved}
          isRejected={submission.isRejected}
          userId={submission.userId}
          subject={submission.subject}
          documentType={submission.documentType}
          createdAt={submission.createdAt}
          quantFiles={submission.quantFiles}
          filesTypes={submission.filesTypes}
          files={submission.filesUrls}
          updateAction={() => {}}
          userInterface={true}
        ></SubmissionForm>
      }

    </div>
  )
}

export default NotificationPage
