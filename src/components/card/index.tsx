import { h } from 'preact';
import styles from './index.module.less';
import { cls } from '../../utils';

interface CardProps {
  url: string;
  title: string;
  disabled?: boolean;
  className?: string;
}

export const Card = (props: CardProps) => {
  const { className, url, title, disabled } = props;
  return (
    <div className={cls(styles.card, className)}>
      <title className={styles.title}>{title}</title>
      <a
        className={cls(styles.url, disabled ? styles.disabled : null)}
        href={url}
      >
        {url}
      </a>
    </div>
  );
};
