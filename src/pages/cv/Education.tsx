import React from 'react';
import {
  Card, Col, Divider, Row,
} from 'antd';

const Education = ({ education }: Props) => (
  <>
    <h3 className="text-center my-5">Education</h3>
    <Card className="education">
      {education.map((institution, i) => (
        <Row
          justify="space-around"
          key={institution.place}
          className="text-lg"
        >
          <Divider orientation="left" className={i === 0 && 'mt-0'}>
            {institution.period}
          </Divider>
          <Col span={10}>
            <h3>{institution.place}</h3>
          </Col>
          <Col span={13}>
            <h3>{institution.degree}</h3>
          </Col>
        </Row>
      ))}
    </Card>
  </>
);

interface Props {
  education :Institution[]
}

interface Institution {
  place: string;
  period: string;
  degree: string;
}

export default Education;
