import styles from "@/app/choose/_styles/Choose.module.css";
import Info from "@/app/src/components/icons/Info";
import Close from "@/app/src/components/icons/Close";

const Tooltip = ({ setLikesTooltip }: { setLikesTooltip: (value: string) => void }) => {
  return (
    <div className={styles.tooltip}>
      <div
        className={styles.closeWrapper}
        onClick={() => {
          setLikesTooltip('true');
          localStorage.setItem('likesTooltip', 'true');
        }}
      >
        <Close />
      </div>
      <Info />
      <span>
        Для того щоб нам простіше було підбирати для вас фільми не забувайте ставити лайки на відео.
      </span>
      <div className={styles.triangle}/>
      <div className={styles.triangleSecond}/>
    </div>
  )
};

export default Tooltip;
