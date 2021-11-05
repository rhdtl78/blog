import React from 'react'
import { Card, Col, Row } from 'reactstrap'
import Divider from '@site/src/components/divider'

const Education = ({ education }: Props) => (
  <>
    <h3 className="text-center my-5">Education</h3>
    <Card className="education py-2 px-4">
      {education.map((institution, i) => (
        <Row
          key={institution.place}
          className="justify-content-around text-lg"
        >
          <Divider>{institution.period}</Divider>
          <Col xs={5}>
            <h3>{institution.place}</h3>
          </Col>
          <Col xs={7}>
            <h3>{institution.degree}</h3>
          </Col>
        </Row>
      ))}
    </Card>
  </>
)

interface Props {
  education: Institution[]
}

interface Institution {
  place: string;
  period: string;
  degree: string;
}

export default Education
