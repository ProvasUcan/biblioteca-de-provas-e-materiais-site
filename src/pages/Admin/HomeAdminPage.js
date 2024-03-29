import React  from 'react'
import { Link, Switch } from 'react-router-dom'
import AdminGuard from '../../services/security/guards/adminGuard'
import ManagementPage from './Management/ManagementPage'
import SubmissionPage from './SubmissionsPages/SubmissionPage'

function HomeAdminPage({ auth }) {
  return (
    <div className="admin-main-container">
      <div className="top-greeting-header">
        <span className="top-greeting-header-sub-text">Bem-vindo sr(a).</span> <h1 className="user-important-info">Admin</h1>
      </div>

      <div className="main-container">
        <div className="main-control-panel-container">
          <ul className="control-panel-options-menu">
            <Link to="/admin/submissions" className="control-panel-options-menu-item">Submissões</Link>
            <Link to="/admin/management" className="control-panel-options-menu-item">Cursos & Disciplinas</Link>
            <Link to="/admin/settings" className="control-panel-options-menu-item">Configurações</Link>
          </ul>
        </div>

        <div className="side-control-container">
          <Switch>
            <AdminGuard
              path="/admin/submissions" auth={auth}
              component={SubmissionPage}
            ></AdminGuard>

            <AdminGuard
              path="/admin/management" auth={auth}
              component={ManagementPage}
            ></AdminGuard>

          </Switch>
        </div>
      </div>
    </div>
  )
}

export default HomeAdminPage
