import React from 'react'
import { connect } from 'dva'
import { routerRedux } from 'dva/router'
import { Table, Pagination, Popconfirm } from 'antd'
import qs from 'qs'
import styles from './Users.css'
import { PAGE_SIZE } from 'constants'



function Users({ loading, dispatch, list: dataSource, total, page: current }) {
  console.log('total', total, PAGE_SIZE)
  function deleteHandler(id) {
    console.warn(`TODO: ${id}`)
  }

  function pageChangeHandler(page) {
    dispatch(routerRedux.push({
      pathname: '/users',
      search: qs.stringify({ page }, { addQueryPrefix: true })
    }))
  }

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a href="">{text}</a>,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Website',
      dataIndex: 'website',
      key: 'website',
    },
    {
      title: 'Operation',
      key: 'operation',
      render: (text, { id }) => (
        <span className={styles.operation}>
          <a href="">Edit</a>&nbsp;
        <Popconfirm title="Confirm to delete?" onConfirm={deleteHandler.bind(null, id)}>
          <a href="">Delete</a>
        </Popconfirm>
        </span>
      ),
    },
  ]

  return (
    <div className={styles.normal}>
      <div>
        <Table
          columns={columns}
          dataSource={dataSource}
          loading={loading}
          rowKey={record => record.id}
          pagination={false}
        />
        <Pagination
          className="ant-table-pagination"
          total={total}
          current={current}
          pageSize={PAGE_SIZE}
          onChange={pageChangeHandler}
        />
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  const { list, total, page } = state.users
  return {
    loading: state.loading.models.users,
    list,
    total,
    page,
  }
}

export default connect(mapStateToProps)(Users)
