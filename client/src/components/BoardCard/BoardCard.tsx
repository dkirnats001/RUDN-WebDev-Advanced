import styles from "./BoardCard.module.css";

type BoardCardProps = {
  title: string;
  isDone?: boolean;
};

export function BoardCard({ title, isDone }: BoardCardProps) {
  console.log({isDone})
  return <div className={isDone ? styles.isDone : styles.card}>{title}</div>;
}
