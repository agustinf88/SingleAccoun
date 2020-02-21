import { filter, mergeMap } from "rxjs/operators";
import { fetchAccount, postMovement, fetchBalance } from "../services";

const fetchAccountAction = action$ =>
  action$.pipe(
    filter(action => action.type === "FETCH_ACCOUNT"),
    mergeMap(async action => {
      const data = await fetchAccount();
      return { type: "FETCH_ACCOUNT_SUCCESS", payload: data };
    })
  );

const addMovementAction = action$ =>
  action$.pipe(
    filter(action => action.type === "ADD_MOVEMENT"),
    mergeMap(async action => {
      try {
        const { value } = action.payload;
        const data = await postMovement(value);
        return { type: "ADD_MOVEMENT_SUCCESS", payload: data };
      } catch (error) {
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
        const data = await fetchBalance();
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
