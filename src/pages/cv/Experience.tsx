import {
  Card, Col, Divider, Row, Tag,
} from 'antd';
import React from 'react';

const Experience = ({ experience }: Props) => (
  <>
    <h3 className="text-center my-5">Work experience</h3>
    <Card className="work-experience">
      {experience.map((item, i) => (
        <Row justify="space-around" key={`${item.company.name}-${i}`}>
          <Divider orientation="left" className={i === 0 && 'mt-0'}>
            {item.company.period}
          </Divider>
          <Col span={4} className="hide-mobile">
            {item.company.logo ? (
              <div>
                <img
                  src={`/companies/${item.company.logo}`}
                  alt={item.company.name}
                  className="max-w-3/4 inline"
                />
              </div>
            ) : (
              <h2 className="text-2xl">{item.company.name}</h2>
            )}
          </Col>
          <Col xs={24} sm={24} md={20} lg={20} xl={20}>
            {item.projects.map((project) => (
              <Row justify="space-around" key={project.name} className="mb-5">
                {project.logo && (
                  <Col span={5}>
                    <img
                      src={`/companies/${project.logo}`}
                      alt={project.name}
                      className="max-w-3/4 inline"
                    />
                  </Col>
                )}
                <Col span={project.logo ? 19 : 24} className="text-lg">
                  <h3>{project.role}</h3>
                  <p>{project.description}</p>
                  {project.achievements && (
                    <ul>
                      {project.achievements.map((achievement) => (
                        <li key={achievement}>{achievement}</li>
                      ))}
                    </ul>
                  )}
                  <div className="py-1">
                    {project.stack.me
                    && project.stack.me.map((tech) => (
                      <Tag color="#0B9B00" key={tech} className="mb-1 text-base">
                        {tech}
                      </Tag>
                    ))}
                    {project.stack.all
                    && project.stack.all.map((tech) => (
                      <Tag color="#a2a2a2" key={tech} className="mb-1 text-base">
                        {tech}
                      </Tag>
                    ))}
                  </div>
                </Col>
                {item.projects.length - 1 > i && <Divider />}
              </Row>
            ))}
          </Col>
        </Row>
      ))}
    </Card>
  </>
);

interface Props {
  experience: ExperienceData[];
}

interface ExperienceData {
  company: Company;
  projects: Project[];
}

interface Company {
  name: string;
  logo: string;
  period: string;
}

interface Project {
  name: string;
  achievements: string[];
  role: string;
  logo: string;
  description: string;
  stack: {
    me: string[];
    all: string[];
  }
}

export default Experience;
