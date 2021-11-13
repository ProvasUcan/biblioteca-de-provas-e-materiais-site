import React, { useState, useEffect } from 'react'
import { apiBaseUrl } from '../../../../config/apiConfig'
import { createNotification } from '../../../../services/remote/notifications/notificationRemote'
import { approveSubmission, desapproveSubmission, rejectSubmission, deleteSubmission } from '../../../../services/remote/submissions/submissionsRemote'
import { getUserById } from '../../../../services/remote/user/user'


function SubmissionForm(
  {
    submissionId,
    isApproved,
    isRejected,
    userId,
    subject,
    documentType,
    createdAt,
    quantFiles,
    filesTypes,
    files,
    updateAction,
    ...rest
  }
) {
  const [username, setUsername] = useState('')
  const [isImagePreviewerOpen, setIsImagePreviewerOpen] = useState(false)

  const handleGetUserInfo = async () => {
    const user = (await getUserById(userId)).user

    setUsername(user.username ? user.username : user.email)
  }
  const handleApproveSubmission = async () => {
    const result = await approveSubmission(submissionId)
    const data = result.data

    await createNotification({
      notification: {
        referenceId: data._id,
        reciverId: data.userId,
        notificationType: 'SUBMISSION_NOTIFICATION_APPROVED',
        message: '',
      }
    })
      .then((data) => {
        console.log(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const handleDesapproveSubmission = async () => {
    await desapproveSubmission(submissionId)
  }

  const handleRejectSubmission = async () => {
    await rejectSubmission(submissionId)
  }

  const handleDeleteRejectedSubmission = async () => {
    await deleteSubmission(submissionId)
  }


  useEffect(() => {
    handleGetUserInfo()
  }, [])

  return (
    <div className="submission-form-model">
      <div className="form-model-top-container">
        <div className="form-model-top-container-label">
          <span className="normal-label-layout">Status</span>
          <span className="submission-status" style={{
            backgroundColor: isRejected ? '#E80000' : '#00A7CC'
          }}>{isRejected ? 'Rejeitado' : 'Não Reijatada'}</span>
          <span className="submission-status" style={{
            backgroundColor: isApproved ? '#00A7CC' : '#FB8500'
          }}>{isApproved ? 'Aprovada' : 'Não Aprovada'}</span>
        </div>
      </div>

      <div className="submission-info-container">
        <div className="submission-info-row">
          <span className="normal-label-layout">Usuario: </span>
          <span className="normal-label-layout bold">{username}</span>
        </div>
        <div className="submission-info-row">
          <span className="normal-label-layout">Disciplina: </span>
          <span className="normal-label-layout bold">{subject}</span>
        </div>
        <div className="submission-info-row">
          <span className="normal-label-layout">Documento: </span>
          <span className="normal-label-layout bold">{documentType}</span>
        </div>
        <div className="submission-info-row">
          <span className="normal-label-layout">Data Submissão: </span>
          <span className="normal-label-layout bold">{createdAt}</span>
        </div>

        <div className="photo-container">
          {
            files.map((file, index) => (
              <div className="individual-file-container">
                <img
                  srcSet={file}
                  alt=""
                  className="file-preview-img"
                />

                <button className="individual-file-container-delete-button" onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  //deleteIndividualFile(index);
                }}>X</button>
              </div>
            ))
          }
        </div>

        <div className="submission-info-row">
          <span className="normal-label-layout opacity-70">{quantFiles} ficheiro(s) {`(${filesTypes.join(',')})`}</span>
        </div>

        <div className="btns-form-model-container">
          {
            rest.userInterface !== true &&
            <>
              <button
                onClick={
                  () => {
                    isApproved ? handleDesapproveSubmission() : handleApproveSubmission()

                    updateAction()
                  }}
                className="submission-form-model-btn active-button">
                {isApproved ? 'Desaprovar' : 'Aprovar'}
              </button>

              <button
                onClick={() => {
                  isRejected ? handleDeleteRejectedSubmission() : handleRejectSubmission()

                  updateAction()
                }}
                className="submission-form-model-btn reject-button">
                {isRejected ? 'Deletar' : 'Rejeitar'}
              </button>
            </>
          }

        </div>


      </div>
    </div>
  )
}

export default SubmissionForm
