import { Dispatch, SetStateAction } from "react";
import styles from "./FruitComponent.module.css";

interface FruitComponentProps {
  name: string;
  position: number;
  moveUp: (position: any) => void;
  moveDown: (position: any) => void;
}

export default function FruitComponent({
  name,
  position,
  moveUp,
  moveDown,
}: FruitComponentProps) {
  return (
    <li className={styles.fruit}>
      <p className={styles.fruitP}>{name}</p>
      <button className={styles.fruitB} onClick={() => moveUp(position)}>
        👍
      </button>
      <button className={styles.fruitB} onClick={() => moveDown(position)}>
        👎
      </button>
    </li>
  );
}
