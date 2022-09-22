import React from 'react'
import { Link, Switch } from 'react-router-dom'
import AdminGuard from '../../../services/security/guards/adminGuard'
import ApprovedSubmission from './ApprovedSubmissions/ApprovedSubmission'
import NotApprovedSubmission from './NotApprovedSubmissions/NotApprovedSubmission'
import RejectedSubmission from './RejectedSubmissions/NotApprovedSubmission'


function SubmissionPage({ auth }) {
  return (
    <div className="submission-controller-main-container">
      <div className="top-container">
        <input type="text" name="submission-search-input" id="submission-search-input" />

        <ul className="submissions-types-menu-container">
          <Link to="/admin/submissions/approved" className="submission-type-item">Aprovados</Link>
          <Link to="/admin/submissions/notapproved" className="submission-type-item">Não Aprovados</Link>
          <Link to="/admin/submissions/rejected" className="submission-type-item">Rejeitados</Link>
        </ul>
      </div>

      <div className="display-container">
        <Switch>
          <AdminGuard
            path="/admin/submissions/approved"
            auth={auth}
            component={ApprovedSubmission}
          ></AdminGuard>

          <AdminGuard
            path="/admin/submissions/notapproved"
            auth={auth}
            component={NotApprovedSubmission}
          ></AdminGuard>

          <AdminGuard
            path="/admin/submissions/rejected"
            auth={auth}
            component={RejectedSubmission}
          ></AdminGuard>

        </Switch>
      </div>
    </div>
  )
}

export default SubmissionPage
