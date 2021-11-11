import React, { useEffect, useState } from 'react'
import { getNotApprovedSubmissions } from '../../../../services/remote/submissions/submissionsRemote'
import SubmissionForm from '../components/SubmissionForm'

function NotApprovedSubmission() {
  const [submissions, setSubmissions] = useState([])

  const handleGetNotApprovedSubmissions = async () => {
    const response = await getNotApprovedSubmissions()

    if (response !== undefined) {
      setSubmissions(response)
    }
  }

  useEffect(() => {
    handleGetNotApprovedSubmissions()
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
            updateAction={handleGetNotApprovedSubmissions}
          ></SubmissionForm>
        ))
      }
    </div>
  )
}

export default NotApprovedSubmission
