import React from 'react'
import { connect } from 'dva'
import styles from './HomePage.css'
import MainLayout from '../components/MainLayout/MainLayout'


const HomePage = ({location}) => (
  <MainLayout location={location}>
    <div className={styles.normal}>
      <h1 className={styles.welcome}>Yay! Welcome to dva</h1>
      <ul className={styles.list}>
        <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
        <li><a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">Getting Started</a></li>
      </ul>
    </div>
  </MainLayout>
)

export default HomePage
