import React from "react";
import { ExpandableItemsProps } from "./ExpandableItems";
import { TermAccordion } from "./TermAccordion";
import { NormalEnd, ParentEnd, ParentsEnd } from "./HierarchyItem";

const HierarchyParents: React.FC<ExpandableItemsProps> = (props) => {
  if (props.items?.length === 1) {
    return (
      <TermAccordion
        term={props.items[0]}
        level={props.level}
        connector={<NormalEnd />}
      />
    );
  }
  //If there is more than one parent, connectors need to look differently
  return (
    <>
      {props.items?.map((item, index) => {
        const connector =
          index + 1 === props.items.length ? <ParentsEnd /> : <ParentEnd />;
        return (
          <TermAccordion
            level={props.level}
            term={item}
            key={item.uri}
            connector={connector}
          />
        );
      })}
    </>
  );
};

export default HierarchyParents;