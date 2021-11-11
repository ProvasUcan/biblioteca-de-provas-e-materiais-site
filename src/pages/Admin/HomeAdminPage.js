import React, { useState, useEffect } from 'react'
import { Route, Link, Switch } from 'react-router-dom'
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
            <Link to="/biblioteca-de-provas-e-materiais-site/admin/submissions" className="control-panel-options-menu-item">Submissões</Link>
            <Link to="/biblioteca-de-provas-e-materiais-site/admin/management" className="control-panel-options-menu-item">Cursos & Disciplinas</Link>
            <Link to="/biblioteca-de-provas-e-materiais-site/admin/settings" className="control-panel-options-menu-item">Configurações</Link>
          </ul>
        </div>

        <div className="side-control-container">
          <Switch>
            <AdminGuard
              path="/biblioteca-de-provas-e-materiais-site/admin/submissions" auth={auth}
              component={SubmissionPage}
            ></AdminGuard>

            <AdminGuard
              path="/biblioteca-de-provas-e-materiais-site/admin/management" auth={auth}
              component={ManagementPage}
            ></AdminGuard>

          </Switch>
        </div>
      </div>
    </div>
  )
}

export default HomeAdminPage
