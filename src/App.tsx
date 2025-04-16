import { h } from 'preact';
import styles from './App.module.less';
import { SiteInfo } from './interfaces';
import { Card } from './components/card';

const SITES: SiteInfo[] = [
  {
    title: '博客',
    url: 'https://zhen.blog',
  },
  {
    title: '项目',
    url: 'https://zhen.pro/',
    disabled: true,
  },
];

export const App = () => {
  return (
    <div className={styles.app}>
      <header className={styles.header}>ZhENO</header>
      <div className={styles.content}>
        <div className={styles.desc}>desc</div>
        <div className={styles.cards}>
          {SITES.map((item, _index) => {
            return (
              <Card
                className={styles.cardWrapper}
                key={item.title + item.url}
                {...item}
              />
            );
          })}
        </div>
      </div>
      <footer className={styles.footer}>hello</footer>
    </div>
  );
};
