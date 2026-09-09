import { achievements } from "@/data/constants";

import styles from "./AchievementList.module.css";

export default function AchievementList() {
  return (
    <ul className={styles.list}>
      {achievements.map((achievement) => (
        <li className={styles.item} key={achievement}>
          {achievement}
        </li>
      ))}
    </ul>
  );
}
