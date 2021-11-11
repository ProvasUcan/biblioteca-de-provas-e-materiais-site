import React from 'react'
import { Link, Switch } from 'react-router-dom'
import AdminGuard from '../../../services/security/guards/adminGuard'
import ManagementCoursePage from './Course/ManagementCoursePage'
import ManagementCourseSubjectPage from './CourseSubject/ManagementCourseSubjectPage'
import ManagementSubjectPage from './Subject/ManagementSubjectPage'


function ManagementPage({ auth }) {
  return (
    <div className="submission-controller-main-container">
      <div className="top-container">
        <ul className="submissions-types-menu-container">
          <Link to="/biblioteca-de-provas-e-materiais-site/admin/management/course" className="submission-type-item">Cursos</Link>
          <Link to="/biblioteca-de-provas-e-materiais-site/admin/management/subject" className="submission-type-item">Disciplinas</Link>
          <Link to="/biblioteca-de-provas-e-materiais-site/admin/management/course-subject" className="submission-type-item">Cursos & Disciplinas</Link>
        </ul>
      </div>

      <div className="display-container">
        <Switch>
          <AdminGuard
            path="/biblioteca-de-provas-e-materiais-site/admin/management/course"
            auth={auth}
            component={ManagementCoursePage}
          ></AdminGuard>

          <AdminGuard
            path="/biblioteca-de-provas-e-materiais-site/admin/management/subject"
            auth={auth}
            component={ManagementSubjectPage}
          ></AdminGuard>

          <AdminGuard
            path="/biblioteca-de-provas-e-materiais-site/admin/management/course-subject"
            auth={auth}
            component={ManagementCourseSubjectPage}
          ></AdminGuard>
        </Switch>
      </div>
    </div>
  )
}

export default ManagementPage
