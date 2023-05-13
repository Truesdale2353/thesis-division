import React from "react";
import { Container, Draggable } from "react-smooth-dnd";
import { arrayMoveImmutable } from "array-move";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const TraitsController = ({ headerItems, updateHeaderItems }) => {
  const onDrop = ({ removedIndex, addedIndex }) => {
    updateHeaderItems((headerItems) =>
      arrayMoveImmutable(headerItems, removedIndex, addedIndex)
    );
  };

  return (
    <List>
      <Container
        dragHandleSelector=".drag-handle"
        lockAxis="x"
        orientation="horizontal"
        onDrop={onDrop}
      >
        {headerItems.map(({ id, item }) => (
          <Draggable key={id}>
            <ListItem className="drag-handle">{item}</ListItem>
          </Draggable>
        ))}      
      </Container>
    </List>
  );
};

export default TraitsController;
