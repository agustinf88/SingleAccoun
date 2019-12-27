import React from "react";
import List from "@material-ui/core/List";

import Movement from "../../components/Movement";

import { useSelector } from "react-redux";

const Movements = props => {
  const movements = useSelector(state => state.account.movements);

  return (
    <List>
      {movements &&
        movements.map((movement, i) => <Movement {...movement} key={i} />)}
    </List>
  );
};

export default Movements;
