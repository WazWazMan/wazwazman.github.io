'use client';

import { VscGithub, VscMail, VscLinkExternal } from 'react-icons/vsc';
import Link from 'next/link';

import styles from '@/styles/AboutPage.module.css';

const AboutPage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {/* Header */}
        <header className={styles.header}>
          <div className={styles.headerContent}>
            <div className={styles.headerText}>
              <h1 className={styles.name}>Daniel bogachevsky</h1>
              <p className={styles.role}>Third year computer science student at the technion</p>
              <div className={styles.location}>
                <span className={styles.dot} />
                Haifa, Israel
              </div>
            </div>
          </div>

          <div className={styles.headerActions}>
            <a
              href="https://github.com/WazWazMan"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconButton}
            >
              <VscGithub size={20} />
            </a>
            <Link href="/contact" className={styles.iconButton}>
              <VscMail size={20} />
            </Link>
          </div>
        </header>

        <div className={styles.content}>
          {/* Bio Section */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>01</span>
              <h2 className={styles.sectionTitle}>About</h2>
            </div>

            <div className={styles.sectionBody}>
              <p className={styles.paragraph}>
                I'm a Computer Science student at the Technion passionate about
                building software solutions and tackling complex problems , crafting
                everything from custom developer tools to hardware integrations.
              </p>
            </div>
          </section>

          {/* Experience Section */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>02</span>
              <h2 className={styles.sectionTitle}>Experience</h2>
            </div>

            <div className={styles.sectionBody}>
              <div className={styles.experienceCard}>
                <div className={styles.expMeta}>
                  {/* <span className={styles.expPeriod}>Present</span> */}
                </div>
                <h3 className={styles.expRole}>Tier 1 Help desk</h3>
                <p className={styles.expCompany}>Ness Technologies</p>
                <ul className={styles.expList}>
                  <li>Provided technical assistance, troubleshooting software and network issues.</li>
                  <li>Diagnosed and resolved a wide range of software, hardware, and network issues to ensure seamless operations.</li>
                </ul>
              </div>

              {/* <div className={styles.experienceCard}>
                <div className={styles.expMeta}>
                  <span className={styles.expPeriod}>Freelance</span>
                </div>
                <h3 className={styles.expRole}>Technical Writer</h3>
                <p className={styles.expDesc}>
                  Contributing to publications like <strong>100ms Blog</strong>,
                  <strong>LogRocket Blog</strong>, and <strong>DEV.to</strong>.
                </p>
              </div> */}
            </div>
          </section>

          {/* Skills Section */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>03</span>
              <h2 className={styles.sectionTitle}>Skills</h2>
            </div>

            <div className={styles.sectionBody}>
              <div className={styles.skillsGrid}>
                <div className={styles.skillCategory}>
                  <h4 className={styles.skillTitle}>Languages</h4>
                  <div className={styles.skillTags}>
                    <span className={styles.skillTag}>C/C++</span>
                    <span className={styles.skillTag}>Python</span>
                    <span className={styles.skillTag}>TypeScript</span>
                  </div>
                </div>

                <div className={styles.skillCategory}>
                  <h4 className={styles.skillTitle}>Technologies</h4>
                  <div className={styles.skillTags}>
                    <span className={styles.skillTag}>MQTT</span>
                    <span className={styles.skillTag}>Node.js</span>
                    <span className={styles.skillTag}>MongoDB</span>
                  </div>
                </div>


                <div className={styles.skillCategory}>
                  <h4 className={styles.skillTitle}>Tools</h4>
                  <div className={styles.skillTags}>
                    <span className={styles.skillTag}>Git</span>
                    <span className={styles.skillTag}>Docker</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Beyond Code Section */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>04</span>
              <h2 className={styles.sectionTitle}>Beyond Code</h2>
            </div>

            <div className={styles.sectionBody}>
              <p className={styles.paragraph}>
                Aside from programming, I love flying drones, tinkering with new maker projects, or just enjoying some downtime.
              </p>
            </div>
          </section>
        </div>

        <footer className={styles.footer}>
          <Link href="/projects" className={styles.footerLink}>
            View my projects →
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default AboutPage;
