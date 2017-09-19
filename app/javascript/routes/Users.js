import React from 'react'
import { connect } from 'dva'
import UsersComponent from '../components/Users/Users'
import MainLayout from '../components/MainLayout/MainLayout'
import styles from './Users.css'

const Users = ({ location }) => (
  <MainLayout location={location}>
    <div className={styles.normal}>
      <UsersComponent />
    </div>
  </MainLayout>
)

export default connect()(Users)
