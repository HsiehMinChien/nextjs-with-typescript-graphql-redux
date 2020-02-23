import { compose } from "redux";
import { useDispatch } from "react-redux";
import { Table, Spin } from "antd";
import withApollo from "../lib/with-apollo";
import { withRedux } from "../lib/redux";
import useInterval from "../lib/useInterval";
import Clock from "../components/clock";
import { GetAllUsersComponent } from "../graphql/generate_file";
import "antd/dist/antd.css";

const columns = [
  {
    title: "id",
    dataIndex: "id",
    key: "id"
  },
  {
    title: "firstName",
    key: "firstName",
    dataIndex: "firstName"
  },
  {
    title: "lastName",
    key: "lastName",
    dataIndex: "lastName"
  }
];

function Home() {
  const dispatch = useDispatch();
  useInterval(() => {
    dispatch({
      type: "TICK",
      light: true,
      lastUpdate: Date.now()
    });
  }, 1000);
  return (
    <>
      <GetAllUsersComponent>
        {props => {
          if (props.loading) return <Spin size="large" />;
          return (
            <Table
              rowKey="id"
              columns={columns}
              dataSource={props.data ? props.data.allUsers : []}
            />
          );
        }}
      </GetAllUsersComponent>
      <Clock />
    </>
  );
}

export default compose(withRedux, withApollo)(Home);
