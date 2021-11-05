import React from 'react';
import { Card, Col, Row } from 'reactstrap'
import Tech from './tech';

const TopTech = ({ topTech, tech }: Props) => (
  <Card className="my-5 p-3">
    <Row className="justify-content-around">
      {topTech.map((techName) => (
        <Col
          xs={6}
          sm={6}
          md={2}
          lg={2}
          xl={1}
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
  </Card>
);

interface Props {
  topTech: string[];
  tech: Record<string, Tech>;
}
export default TopTech;
