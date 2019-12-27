const fetchAccount = async dispatch =>
  fetch("http://localhost:8080/account")
    .then(res => res.json())
    .then(data => dispatch({ type: "GET_ACCOUNT", payload: data }))
    .catch(err => console.error(err));

const postMovement = async (dispatch, value) =>
  fetch("http://localhost:8080/account/movement", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ value: Number(value) })
  })
    .then(r => {
      if (r.status === 200) {
        return r.json();
      }

      if (r.status === 403) {
        return Promise.reject("Can't add movement");
      }
    })
    .then(data => data && dispatch({ type: "ADD_MOVEMENT", payload: data }))
    .catch(err => dispatch({ type: "FORBIDDEN_MOVEMENT", payload: err }));

const fetchBalance = async dispath =>
  fetch("http://localhost:8080/account/balance")
    .then(r => r.json())
    .then(data => dispath({ type: "GET_BALANCE", payload: data.balance }))
    .catch(err => console.error(err));
export { fetchAccount, postMovement, fetchBalance };
