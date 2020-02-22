import withApollo from '../lib/with-apollo'
import Link from 'next/link'
import { withRedux } from '../lib/redux';
import { useDispatch } from 'react-redux';
import useInterval from '../lib/useInterval';
import { compose } from 'redux'
import Clock from '../components/clock';
import { useViewerQuery } from '../lib/viewer.graphql'

const Index = () => {
  const { data } = useViewerQuery()
  const dispatch = useDispatch()
  useInterval(() => {
    dispatch({
      type: 'TICK',
      light: true,
      lastUpdate: Date.now(),
    })
  }, 1000)
  if (data) {
    const { viewer } = data
    return (
      <div>
        You're signed in as {viewer.name} and you're {viewer.status} goto{' '}
        <Link href="/about">
          <a>static</a>
        </Link>{' '}
        page.
        <Clock />
      </div>
    )
  }

  return <div>...</div>
}

export default compose(withRedux, withApollo)(Index)
