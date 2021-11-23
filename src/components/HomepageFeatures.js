import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: '新媒体介绍',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        新媒体是利用数字技术，通过计算机网络、无线通信网、卫星等渠道，以及电脑、手机、数字电视机等终端，向用户提供信息和服务的传播形态。从空间上来看，“新媒体”特指当下与“传统媒体”相对应的，以数字压缩和无线网络技术为支撑，利用其大容量、实时性和交互性，可以跨越地理界线最终得以实现全球化的媒体。
      </>
    ),
  },
  {
    title: '起源',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        中文的“新媒体”一词是英文“New Media”的直接翻译，所以要了解“新媒体”的起源，还得从“New Media”一词的来源说起。一般认为，“新媒体”作为传播媒介的一个专有术语，最早是由美国一个叫P.戈尔德马克（Peter Carl Goldmark）的人提出来的。P.戈尔德马克是LP（留声机唱片，the long-playing microgroove 33-1/3 rpm vinyl phonograph disc）和EVR（电子录像，Electronic Video Recording）的发明者，还是参与制定彩色电视NTSC标准的重要成员，曾担任过美国CBS（哥伦比亚广播公司）技术研究所所长。他在1967年发表了一份关于开发EVR商品的计划，在这个计划里他第一次提出了“新媒体”一词之后，有一个叫E.罗斯托（E.Rostow）的人，他是美国传播政策总统特别委员会主席。他在1969年向当时的美国总统尼克松提交的报告书中，也多处使用“New Media”（新媒体）一词从此以后，“新媒体”一词就开始在美国社会流行，并逐步流传到全世界，“新媒体”也逐渐成为全世界的热门话题。
      </>
    ),
  },
  {
    title: '时代带来的新',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        这个新，是相对来说的新。在媒体漫长的发展史中，伴随着技术的革新，媒体经历了5次大的变革，从报纸到无线电，从电视到互联网，每次媒体手段的进步都是人类进步的阶梯。每当有新的媒体传播手段出现的时候，我们都可以称他为新媒体。比如今日头条、公众号相对于报纸是新媒体，抖音、b站相对于电视是新媒体。
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
