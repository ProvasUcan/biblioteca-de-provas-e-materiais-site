import React, { useEffect, useState } from 'react'
import { getRejectedSubmissions } from '../../../../services/remote/submissions/submissionsRemote'
import SubmissionForm from '../components/SubmissionForm'

function RejectedSubmission() {
  const [submissions, setSubmissions] = useState([])

  const handleGetRejectedSubmissions = async () => {
    const response = await getRejectedSubmissions()

    if (response !== undefined) {
      setSubmissions(response)
    }
  }

  useEffect(() => {
    handleGetRejectedSubmissions()
  }, [])

  return (
    <div className="submissions-container">
      {
        submissions.map((submission, id) => (
          <SubmissionForm
            key={submission._id}
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
            updateAction={handleGetRejectedSubmissions}
          ></SubmissionForm>
        ))
      }
    </div>
  )
}

export default RejectedSubmission
