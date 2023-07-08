import React from 'react'
import { Card, Col, Row } from 'reactstrap'

const SkillList = ({ skills }: Props) => (
  <Card className="mt-5 mb-3 p-2">
    <Row className="justify-content-around">
      <Col xs={6}>
        <h3 className="text-center">Soft skills</h3>
      </Col>
      <Col xs={6}>
        <h3 className="text-center">Hard skills</h3>
      </Col>
    </Row>
    <Row className="justify-content-around">
      <Col xs={12} md={6}>
        <div>
          {skills.soft.featured.map((skill) => (
            <span key={skill} className="me-1 text-base badge" style={{ backgroundColor: '#722ed1' }}>
                {skill}
              </span>
          ))}
        </div>
        {skills.soft.other.map((skill) => (
          <span key={skill} className="me-1 text-base badge" style={{ backgroundColor: 'purple' }}>
              {skill}
            </span>
        ))}
      </Col>
      <Col xs={12} md={6}>
        <div>
          {skills.hard.featured.map((skill) => (
            <span key={skill} className="me-1 text-base badge" style={{ backgroundColor: '#1890ff' }}>
                {skill}
              </span>
          ))}
        </div>
        {skills.hard.other.map((skill) => (
          <span key={skill} className="me-1 text-base badge" style={{ backgroundColor: 'blue' }}>
              {skill}
            </span>
        ))}
      </Col>
    </Row>
  </Card>
)

interface Props {
  skills: {
    hard: SkillCollection;
    soft: SkillCollection;
  }
}

interface SkillCollection {
  featured: string[]
  other: string[]
}

export default SkillList
