import { filter, mergeMap } from "rxjs/operators";
import { fetchAccount, postMovement, fetchBalance } from "../services";

const fetchAccountAction = action$ =>
  action$.pipe(
    filter(action => action.type === "FETCH_ACCOUNT"),
    mergeMap(async action => {
      const response = await fetch("http://localhost:8080/account");
      const data = await response.json();
      console.log("FETCH_ACCOUNT_SUCCESS epic", data);
      return { type: "FETCH_ACCOUNT_SUCCESS", payload: data };
    })
  );

const addMovementAction = action$ =>
  action$.pipe(
    filter(action => action.type === "ADD_MOVEMENT"),
    mergeMap(async action => {
      const { value } = action.payload;
      console.log("ADD_MOVEMENT", action);
      const response = await fetch("http://localhost:8080/account/movement", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ value: Number(value) })
      });
      if (response.status === 200) {
        const data = await response.json();
        console.log("ADD_MOVEMENT_SUCCESS", data);
        return { type: "ADD_MOVEMENT_SUCCESS", payload: data };
      }

      if (response.status === 403) {
        return { type: "FORBIDDEN_MOVEMENT", payload: "Can't add movement" };
      }

      return;
    })
  );

const addMovementSuccessAction = action$ =>
  action$.pipe(
    filter(action => action.type === "ADD_MOVEMENT_SUCCESS"),
    mergeMap(async action => {
      try {
        const response = await fetch("http://localhost:8080/account/balance");
        const data = await response.json();
        console.log("fetchBalance epic", data);
        return { type: "GET_BALANCE_SUCCESS", payload: data.balance };
      } catch (error) {
        console.error(error);
      }
    })
  );

export default observableMiddleware => {
  observableMiddleware.run(fetchAccountAction);
  observableMiddleware.run(addMovementAction);
  observableMiddleware.run(addMovementSuccessAction);
};
