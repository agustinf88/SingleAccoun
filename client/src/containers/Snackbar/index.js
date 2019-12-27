import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";

import SnackbarMaterial from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";

const Snackbar = props => {
  const dispatch = useDispatch();
  const { open, description } = useSelector(state => state.account.snackbar);
  const handleClose = () => dispatch({ type: "CLOSE_SNACKBAR" });

  return (
    <SnackbarMaterial open={open} onClose={handleClose} autoHideDuration={6000}>
      <SnackbarContent
        message={description}
        style={{ backgroundColor: "red" }}
        action={[
          <IconButton key="close" arial-babel="close" onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        ]}
      />
    </SnackbarMaterial>
  );
};

export default Snackbar;
