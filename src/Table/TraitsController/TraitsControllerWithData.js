import React, { useEffect, useState } from "react";
import TraitsController from "./TraitsController";
import { filters } from "../constants";
import { SortingHeaderItem } from "../SortingHeader/SortingHeaderItem";
import Button from "@mui/material/Button";
const TraitsControllerWithData = ({ getFilters }) => {
  const handleChange = (e) => {
    items.find((x) => x.id === e.target.id).isActive = e.target.checked;
  };

  const [items, setItems] = useState([
    {
      id: filters.SEX_ID,
      isActive: true,
      item: (
        <SortingHeaderItem
          label="Sex"
          id={filters.SEX_ID}
          handleChange={handleChange}
          defaultChecked
        ></SortingHeaderItem>
      ),
    },
    {
      id: filters.TRAITS_ID,
      isActive: true,
      item: (
        <SortingHeaderItem
          label="Personality Traits"
          id={filters.TRAITS_ID}
          handleChange={handleChange}
          defaultChecked
        ></SortingHeaderItem>
      ),
    },
    {
      id: filters.EXPERIENCE_ID,
      isActive: true,
      item: (
        <SortingHeaderItem
          label="Experience"
          id={filters.EXPERIENCE_ID}
          handleChange={handleChange}
          defaultChecked
        ></SortingHeaderItem>
      ),
    },
  ]);

  return (
    <div className="sorting-header">
      <TraitsController
        headerItems={items}
        updateHeaderItems={setItems}
      ></TraitsController>
      <Button
        className="sorting-button"
        variant="outlined"
        onClick={() => getFilters(items)}
      >
        CALCULATE
      </Button>
    </div>
  );
};

export { TraitsControllerWithData };
