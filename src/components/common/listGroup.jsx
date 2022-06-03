import React from "react";

const ListGroup = (props) => {
  const { items, textProperty, valueProperty, onItemSelect, seletedItem } =
    props;
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          onClick={() => onItemSelect(item)}
          key={item[valueProperty]}
          className={
            item === seletedItem ? "list-group-item active " : "list-group-item"
          }
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultPtops = {
  textProperty: "name",
  valueProperty: "_id",
};

export default ListGroup;
