import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import useBaseUrl from '@docusaurus/useBaseUrl';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h6" className="hero__title" style={{fontSize: "2rem"}}>
          A comprehensive guide to:
        </Heading>
        <div className={styles.img}>
          <img
            src={useBaseUrl('/img/Banner.png')}
            alt="TOU Mira Logo"
            style={{width: "auto", height: "auto", maxHeight: "200px", maxWidth: "100%"}}
          />
        </div>
        {/* <p className="hero__subtitle">Town Of Us: Mira is a reimagining of Town of Us Reactivated, with new roles and modifiers, as well as visual and codebase overhauls.</p> */}
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      /* description="Town Of Us: Mira is a reimagining of Town of Us Reactivated, with new roles and modifiers, as well as visual and codebase overhauls." */>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
