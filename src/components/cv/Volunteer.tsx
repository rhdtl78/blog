import React from 'react'
import { Card, Col, Row } from 'reactstrap'
import Divider from '@site/src/components/divider'

const Volunteer = ({ volunteer }: Props) => (
  <>
    <h3 className="text-center mt-1 mb-0">Volunteer</h3>
    <Card>
      {volunteer.map((activity, i) => (
        <Row justify="space-around" key={activity.place} className="text-lg">
          <Divider>{activity.period}</Divider>
          <Col span={6}>
            <img
              src={`/companies/${activity.logo}`}
              alt={activity.place}
              className="max-w-3/4 inline"
            />
          </Col>
          <Col span={17}>
            <h3>{activity.description}</h3>
          </Col>
        </Row>
      ))}
    </Card>
  </>
)

interface Props {
  volunteer: VolunteerActivity[];
}

interface VolunteerActivity {
  description: string;
  place: string;
  period: string;
  logo: string;
}

export default Volunteer
