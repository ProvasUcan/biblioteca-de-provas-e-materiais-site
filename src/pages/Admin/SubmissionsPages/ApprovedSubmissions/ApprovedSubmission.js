import React, { useEffect, useState } from 'react'
import { getApprovedSubmissions } from '../../../../services/remote/submissions/submissionsRemote'
import SubmissionForm from '../components/SubmissionForm'

function ApprovedSubmission() {
  const [submissions, setSubmissions] = useState([])

  const handleGetApprovedSubmissions = async () => {
    const response = await getApprovedSubmissions()

    if (response !== undefined) {
      setSubmissions(response)
    }
  }

  useEffect(() => {
    handleGetApprovedSubmissions()
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
            updateAction={handleGetApprovedSubmissions}
          ></SubmissionForm>
        ))
      }
    </div>
  )
}

export default ApprovedSubmission
