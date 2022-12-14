import React, { useState } from "react";

import Button from "@calcom/ui/Button";
import { List, ListItem } from "@calcom/ui/List";

import { sandboxPage } from ".";

const page = sandboxPage(() => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="p-4">
      Unstyled -{" "}
      <Button size="sm" color="minimal" onClick={() => setExpanded((state) => !state)}>
        Toggle expanded
      </Button>
      <List>
        <ListItem expanded={expanded} className="transition-all">
          An item
        </ListItem>
        <ListItem expanded={expanded} className="transition-all">
          An item
        </ListItem>
        <ListItem expanded={expanded} className="transition-all">
          An item
        </ListItem>
        <ListItem expanded={expanded} className="transition-all">
          An item
        </ListItem>
      </List>
      One expanded
      <List>
        <ListItem>An item</ListItem>
        <ListItem expanded>Spaced</ListItem>
        <ListItem>An item</ListItem>
        <ListItem>An item</ListItem>
      </List>
    </div>
  );
});

export default page.default;
export const getStaticProps = page.getStaticProps;
