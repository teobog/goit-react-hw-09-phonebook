import React from "react";
import { useFilter } from "../../../hooks/useFilter";
const ClientsFilter = () => {
  const { filter, setFilter } = useFilter();
  return (
    <label>
      Поиск контакта по имени
      <div>
        <div>
        </div>
        <input
          placeholder="Поиск"
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
    </label>
  );
};

export default ClientsFilter;
