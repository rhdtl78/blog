import {Badge, Card, Col, Row} from 'reactstrap'
import React from 'react'
import Divider from '@site/src/components/divider'

const Experience = ({experience}: Props) => (
    <>
        <h3 className="text-center my-5">Work experience</h3>
        <Card className="work-experience p-4">
            {experience.map((item, i) => (
                <Row className="justify-content-around" key={`${item.company.name}-${i}`}>
                    <Divider className="mb-4">{item.company.period}</Divider>
                    <Col xs={12} md={2} className="hide-mobile">
                        {item.company.logo ? (
                            <img
                                src={`/companies/${item.company.logo}`}
                                alt={item.company.name}
                                className="max-w-3/4 inline"
                            />
                        ) : (
                            <h2 className="text-2xl">{item.company.name}</h2>
                        )}
                    </Col>
                    <Col xs={12} sm={12} md={10} lg={10} xl={10}>
                        {item.projects.map((project) => (
                            <Row className="justify-content-around mb-5" key={project.name}>
                                {project.logo && (
                                    <Col xs={2}>
                                        <img
                                            src={`/companies/${project.logo}`}
                                            alt={project.name}
                                            className="max-w-3/4 inline"
                                        />
                                    </Col>
                                )}
                                <Col xs={project.logo ? 9 : 12} className="text-lg">
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
                                                <Badge color={"success"}
                                                       key={tech}
                                                       className="mb-1 me-1 text-base">
                                                    {tech}
                                                </Badge>
                                            ))}
                                        {project.stack.all
                                            && project.stack.all.map((tech) => (
                                                <Badge
                                                    key={tech}
                                                    className="mb-1 me-1 text-base">
                                                    {tech}
                                                </Badge>
                                            ))}
                                    </div>
                                </Col>
                                {item.projects.length - 1 > i && <Divider/>}
                            </Row>
                        ))}
                    </Col>
                </Row>
            ))}
        </Card>
    </>
)

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

export default Experience
