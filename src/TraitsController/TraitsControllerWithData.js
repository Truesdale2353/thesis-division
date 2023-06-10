import React, { useState, useEffect } from "react";
import TraitsController from "./TraitsController";
import { filters } from "../Table/constants";
import { SortingHeaderItem } from "../Table/SortingHeader/SortingHeaderItem";
import { StyledTraitsController } from './StyledTraitsController'

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
          label="Пол"
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
          label="Личностни качества"
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
          label="Опит"
          id={filters.EXPERIENCE_ID}
          handleChange={handleChange}
          defaultChecked
        ></SortingHeaderItem>
      ),
    },
  ]);

  useEffect(()=>{
    getFilters(items);
  },[items]);

  return (
    <StyledTraitsController>
      <TraitsController
        headerItems={items}
        updateHeaderItems={setItems}
      ></TraitsController>
    </StyledTraitsController>
      
  );
};

export { TraitsControllerWithData };
