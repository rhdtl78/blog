import React from 'react';
import { Col, Row } from 'antd';
import Tech from './tech';

const TopTech = ({ topTech, tech }: Props) => (
  <div className="my-5">
    <Row justify="space-around">
      {topTech.map((techName) => (
        <Col
          xs={6}
          sm={6}
          md={3}
          lg={3}
          xl={3}
          className="text-center my-1"
          key={techName}
        >
          <a href={tech[techName].website} target="_blank" rel="noopener noreferrer">
            <img
              src={`/tech/${tech[techName].logo}`}
              alt={tech[techName].name}
              height={40}
              className="max-w-3/4"
            />
            <h5>{tech[techName].name}</h5>
          </a>
        </Col>
      ))}
    </Row>
  </div>
);

interface Props {
  topTech: string[];
  tech: Record<string, Tech>;
}
export default TopTech;
