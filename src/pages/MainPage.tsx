import { Col, Row, Tabs } from "antd";
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
    <Row className="mainpage">
      <Col
        xs={{ span: 24, offset: 1 }}
        lg={{ span: 20, offset: 2 }}
        xl={{ span: 18, offset: 3 }}
      >
        <Tabs items={items} />
      </Col>
    </Row>
  );
};

export default MainPage;
