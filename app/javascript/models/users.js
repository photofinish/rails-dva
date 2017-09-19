import * as usersService from '../services/users'
import qs from 'qs'

export default {
    namespace: 'users',
    state: {
        list: [],
        total: null,
        page: null
    },
    reducers: {
        save(state, { payload: { data: list, total, page } }) {
            return { ...state, list, total, page }
        },
    },
    effects: {
        *fetch({ payload: { page } }, { call, put }) {
            const res = yield call(usersService.fetch, { page })
            const { data, headers } = res
            yield put({
                type: 'save',
                payload: {
                    data,
                    page: parseInt(page, 10),
                    total: parseInt(headers['x-total-count'])
                }
            })
        },
    },
    subscriptions: {
        setup({ dispatch, history }) {
            return history.listen((location) => {
                const { pathname, search } = location
                const { page } = qs.parse(search, { ignoreQueryPrefix: true })
                if (pathname === '/users') {
                    dispatch({ type: 'fetch', payload: { page } })
                }
            })
        },
    },
}
