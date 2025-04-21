import { h } from 'preact';
import styles from './index.module.less';
import { cls } from '../../utils';
import { SiteInfo } from '../../interfaces';

interface CardProps {
  siteInfo: SiteInfo;
  className?: string;
}

export const Card = (props: CardProps) => {
  const { className, siteInfo } = props;
  const { title, url, disabled } = siteInfo;

  const { display, target } = (() => {
    if (typeof url === 'string') {
      return {
        display: url,
        target: url,
      };
    } else {
      return url;
    }
  })();

  return (
    <div
      className={cls(styles.card, disabled ? styles.disabled : null, className)}
    >
      <p className={cls(styles.title, disabled ? styles.disabled : null)}>
        {title}
      </p>
      <a
        className={cls(styles.url, disabled ? styles.disabled : null)}
        target={'_blank'}
        onClick={(e) => {
          if (disabled) {
            e.preventDefault();
          }
        }}
        href={target}
      >
        {display}
      </a>
      {disabled && <span className={cls(styles.desc)}>即将推出</span>}
    </div>
  );
};
