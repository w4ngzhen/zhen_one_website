import { h } from 'preact';
import styles from './App.module.less';
import { SiteInfo } from './interfaces';
import { Card } from './components/card';
import { IconLove } from './components/icon/IconLove';

const SITES: SiteInfo[] = [
  {
    title: "zhen's 博客",
    url: {
      display: 'https://zhen.blog',
      target: 'https://zhen.blog?from=zhen_one',
    },
  },
  {
    title: "zhen's 项目",
    url: {
      display: 'https://zhen.pro',
      target: 'https://zhen.pro?from=zhen_one',
    },
    disabled: true,
  },
];

export const App = () => {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <div className={styles.title}>ZHEN ONE</div>
        <div className={styles.desc}>关于zhen的一切</div>
      </header>
      <div className={styles.content}>
        <div className={styles.cards}>
          {SITES.map((item, _index) => {
            return (
              <Card
                className={styles.cardWrapper}
                key={item.title}
                siteInfo={item}
              />
            );
          })}
        </div>
      </div>
      <footer className={styles.footer}>
        <span>© {new Date().getFullYear()}</span>
        <IconLove />
        <a
          className={styles.author}
          target={'_blank'}
          href={'https://github.com/w4ngzhen'}
        >
          ZHEN
        </a>
      </footer>
    </div>
  );
};
