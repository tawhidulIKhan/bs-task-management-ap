import React from 'react'
import { Link } from 'react-router-dom'

export default function MemberList() {
  return (
    <div className='container'>
      <div className='page__header'>
        <h2 className='page__header__title'>All Members</h2>
        <div>
          <Link to="/tasks/create" className='btn--link'>Create New Task</Link>
        </div>
      </div>
      <div className='page__content'>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Creation date</th>
              <th>Assigned to</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Reading Books</td>
              <td>28, July 2022</td>
              <td>Tawhid</td>
            </tr>
              <tr>
                <td>Reading Books</td>
                <td>28, July 2022</td>
                <td>Tawhid</td>
              </tr>
              <tr>
                <td>Reading Books</td>
                <td>28, July 2022</td>
                <td>Tawhid</td>
              </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
