import React from 'react'
import Layout from '@theme/Layout'
import Header from '../../components/cv/Header'
import TopTech from '../../components/cv/TopTech'
import SkillList from '../../components/cv/SkillList'
import Experience from '../../components/cv/Experience'
import PitchLine from '../../components/cv/PitchLine'
import Education from '../../components/cv/Education'
import Footer from '../../components/cv/Footer'
import data from './data.json'
import { Container } from 'reactstrap'
import { Helmet } from 'react-helmet'

const CV = () => (
  <Layout title={'Hello! I\'m ...'}>
    <Helmet>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" />
    </Helmet>
    <Container className="bg-transparent p-md-5" fluid={"md"}>
      {data.header && <Header header={data.header} />}
      {data.tech && data.topTech && <TopTech topTech={data.topTech} tech={data.tech} />}
      {data.skills && <SkillList skills={data.skills} />}
      {data.experience && <Experience experience={data.experience} />}
      {data.education && <Education education={data.education} />}
      {data.footer && <Footer footer={data.footer} />}
    </Container>
  </Layout>

)

export default CV
