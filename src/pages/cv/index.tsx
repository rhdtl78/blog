import React from 'react';
import { Layout as ANTDLayout } from 'antd';
import Layout from '@theme/Layout';
import Header from '../../components/cv/Header';
import TopTech from '../../components/cv/TopTech';
import SkillList from '../../components/cv/SkillList';
import ExperienceData from '../../components/cv/Experience';
import PitchLine from '../../components/cv/PitchLine';
import Education from '../../components/cv/Education';
import Footer from '../../components/cv/Footer';
import data from './data.json';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import 'bootstrap/dist/css/bootstrap.min.css';

const { Content } = ANTDLayout;
const CV = () => (
  <Layout title={'Hello! I\'m ...'}>
    <Content className="m-5">
      {data.header && <Header header={data.header} />}
      {data.pitchLine && <PitchLine pitchLine={data.pitchLine} />}
      {data.tech && data.topTech && <TopTech topTech={data.topTech} tech={data.tech} />}
      {data.skills && <SkillList skills={data.skills} />}
      {data.experience && <ExperienceData experience={data.experience} />}
      {data.education && <Education education={data.education} />}
      {data.footer && <Footer footer={data.footer} />}
    </Content>
  </Layout>

);

export default CV;
