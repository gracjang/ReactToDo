import React from "react";
import styles from "./List.module.css";
import ListItem from "../ListItem";

const List = ({ items, finishedTaskFn }) => {
  return (
    <ul className={styles.wrapper}>
      {items.map((item) => (
        <ListItem key={item.name} finishedTaskFn={finishedTaskFn} {...item} />
      ))}
    </ul>
  );
};

export default List;
