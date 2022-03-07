import styles from './index.module.scss';

interface Props {
    options: {
        text: string,
        value: string
    }[]
}

const Dropdown = ({ options }: Props) => {
  return (
    <>
      <label htmlFor="dropdown">Ver:</label>
      <select className={styles.dropdown} id="dropdown">
        { options.map(option => (
          <option key={option.value} value={option.value}>{option.text}</option>
        ))}
      </select>
    </>
  );
};

export default Dropdown;
