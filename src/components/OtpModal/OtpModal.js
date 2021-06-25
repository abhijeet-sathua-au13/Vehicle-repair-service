import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import OTPInput, { ResendOTP } from "otp-input-react";
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import useStyles from './OytpModalStyles';
import { useDispatch, useSelector } from 'react-redux';
import modalActions from '../../redux/actions/modalActions/modalActions';


const OtpModal = () => {
  const classes = useStyles();

  const [OTP, setOTP] = useState("");

  const dispatch = useDispatch();

  const modal = useSelector(state => state.modal);

  const renderButton = buttonProps => {
    return (
      <Button variant="contained" className={classes.resend} {...buttonProps}>
        {buttonProps.remainingTime !== 0
          ? `Please wait for ${buttonProps.remainingTime} sec`
          : "Resend"}
      </Button>
    );
  };

  const renderTime = () => React.Fragment;

//   const handleOpen = () => {
//     dispatch(modalActions.open())
//   }

  const handleClose = () => {
      dispatch(modalActions.close())
  }

  return (
    <div>
      {/* <button type="button" onClick={handleOpen}>
        react-transition-group
      </button> */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={modal}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={modal}>
            <div className={classes.paper}>
                <h3>We sent you a code to verify your mobile number</h3>
                <Typography >Enter your OTP</Typography>
                <br/>
              <OTPInput
                value={OTP}
                onChange={setOTP}
                autoFocus
                OTPLength={6}
                otpType="number"
                disabled={false}
                />
                <ResendOTP style={{ marginTop: "1rem" }} 
                renderButton={renderButton}
                renderTime={renderTime} />
            </div>  
        </Fade>
      </Modal>
    </div>
  );
}

export default OtpModal;