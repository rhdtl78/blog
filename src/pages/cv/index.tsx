import React from 'react';
import { Layout as ANTDLayout } from 'antd';
import Layout from '@theme/Layout';
import Header from './Header';
import TopTech from './TopTech';
import SkillList from './SkillList';
import ExperienceData from './Experience';
import PitchLine from './PitchLine';
import Education from './Education';
import Footer from './Footer';
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
