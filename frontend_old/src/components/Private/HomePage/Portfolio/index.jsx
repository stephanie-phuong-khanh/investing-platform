import React from "react";
import ReactDom from "react-dom";
import { makeStyles, Modal, Fade, Backdrop } from "@material-ui/core";

import styled from "@emotion/styled";
import {
  PortfolioButtonContent1,
  PortfolioButtonContent2,
  PortfolioButtonContent3,
} from "./PortfolioButtonContent";
import {
  PortfolioModalContent1,
  PortfolioModalContent2,
  PortfolioModalContent3,
} from "./PortfolModalContent";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: "40px 80px 40px 80px",
    height: "600px",
    width: "60%",
    outline: "none",
    borderRadius: "2px",
    overflow: "scroll",
  },
}));

const CuratedPitches = styled("div")`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 52px;
  letter-spacing: 0.05em;
  color: #000000;
`;

const PitchButton = styled("button")`
  width: 100%;
  height: 200px;
  background-color: white;
  &:focus {
    outline: none;
  }
  margin-top: 30px;
  box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.1);
  &:hover {
    background-color: rgba(0.8, 0.8, 0.8, 0.02) !important;
    transition: all 0.4s ease;
  }
`;

export default function Portfolio() {
  return (
    <div styles={{ backgroundColor: "#F9F9F9" }}>
      <CuratedPitches>My Companies</CuratedPitches>
      <Portfolio1 />
      <Portfolio2 />
      <Portfolio3 />
    </div>
  );
}

function Portfolio1() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <PitchButton type="button" onClick={handleOpen}>
        <PortfolioButtonContent1 />
      </PitchButton>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title"></h2>
            <p id="transition-modal-description">
              <PortfolioModalContent1 />
            </p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

function Portfolio2() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <PitchButton type="button" onClick={handleOpen}>
        <PortfolioButtonContent2 />
      </PitchButton>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title"></h2>
            <p id="transition-modal-description">
              <PortfolioModalContent2 />
            </p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

function Portfolio3() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <PitchButton type="button" onClick={handleOpen}>
        <PortfolioButtonContent3 />
      </PitchButton>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title"></h2>
            <p id="transition-modal-description">
              <PortfolioModalContent3 />
            </p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
