import withApollo from '../lib/with-apollo'
import { compose } from 'redux'
import { useDispatch, } from 'react-redux';
import { withRedux, } from '../lib/redux';
import useInterval from '../lib/useInterval';
import Clock from '../components/clock';
import { GetAllUsersComponent, } from '../graphql/generate_file';

const Index = () => {
  const dispatch = useDispatch()
  useInterval(() => {
    dispatch({
      type: 'TICK',
      light: true,
      lastUpdate: Date.now(),
    })
  }, 1000);
  return (
    <>
      <GetAllUsersComponent>
        {(props: any) => {
          console.log(props);
          return <div>GetAllUsersComponent</div>
        }}
      </GetAllUsersComponent>
      <Clock />
    </>
  );
}

export default compose(withRedux, withApollo)(Index)
