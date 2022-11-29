import { Col, Layout, Row, Tabs } from "antd";
import RankingView from "../components/RankingView";

const MainPage = () => {
  const items = [
    {
      label: "ROMANCE",
      key: "romance",
      children: <RankingView genre="ROMANCE" />,
    },
    { label: "BL", key: "bl", children: <RankingView genre="BL" /> },
    { label: "드라마", key: "drama", children: <RankingView genre="DRAMA" /> },
  ];
  return (
    <Layout style={{ padding: 16, minHeight: "100vh" }}>
      <Row className="mainpage">
        <Col
          xs={{ span: 24, offset: 0 }}
          lg={{ span: 20, offset: 2 }}
          xl={{ span: 18, offset: 3 }}
        >
          <Tabs items={items} />
        </Col>
      </Row>
    </Layout>
  );
};

export default MainPage;
