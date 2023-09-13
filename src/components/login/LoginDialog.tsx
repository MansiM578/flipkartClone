// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { SyntheticEvent, useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useDispatch } from "react-redux";
import { login } from "reducers/UserSlice";
import { signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";
import { authentication } from "firebse";

const Component = styled(DialogContent)`
  height: 70vh;
  width: 90vh;
  padding: 0;
  padding-top: 0;
`;

const LoginButton = styled(Button)`
  text-transform: none;
  background: #fb641b;
  color: #fff;
  height: 48px;
  border-radius: 2px;
`;

const RequestOTP = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;
  height: 48px;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;

const Text = styled(Typography)`
  color: #878787;
  font-size: 12px;
`;

const Wrapper = styled("form")`
  padding: 25px 35px;
  display: flex;
  flex: 1;
  overflow: auto;
  flex-direction: column;
  & > div,
  & > button,
  & > p {
    margin-top: 20px;
  }
`;

const Image = styled(Box)`
  background: #2874f0
    url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png)
    center 85% no-repeat;
  width: 30%;
  height: 82.8%;
  padding: 45px 35px;
  & > p,
  & > h5 {
    color: #ffffff;
    font-weight: 600;
  }
`;

const accountInitialValues = {
  login: {
    view: "login",
    heading: "Login",
    subHeading: "Get access to your Orders, Wishlist and Recommendations",
  },
  signup: {
    view: "signup",
    heading: "Looks like you're new here",
    subHeading: "Signup to get started",
  },
};

type FormValues = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  phoneNumber: string;
  otp: string;
  username: string;
};

type props = {
  open: boolean;
  setOpen: (isOpen: boolean) => void;
};

const LoginDialog: React.FC<props> = ({ open, setOpen }) => {
  const [account, toggleAccont] = useState(accountInitialValues.login);
  const dispatch = useDispatch();
  const [showPhoneAuth, setShowPhoneAuth] = useState(false);

  const handleClose = () => {
    setOpen(false);
    toggleAccont(accountInitialValues.login);
  };

  const form = useForm<FormValues>({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      phoneNumber: "",
      otp: "",
      username: "",
    },
  });

  const { register, handleSubmit, formState, control, watch } = form;
  const { errors } = formState;

  const countryCode = "+91";
  const [phoneNumber, setPhoneNumber] = useState(countryCode);
  const [expandForm, setExpandForm] = useState(false);
  const [OTP, setOTP] = useState("");

  const generateRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        // size: "invisible",
        callback: () => {
          //reCaptcha solved
        },
      },
      authentication
    );
  };

  const requestOTP = (e: SyntheticEvent) => {
    e.preventDefault();
    if (phoneNumber.length >= 12) {
      setExpandForm(true);
      generateRecaptcha();
      const appVerifier = window.recaptchaVerifier;
      signInWithPhoneNumber(authentication, phoneNumber, appVerifier)
        .then((confirmationResult) => {
          window.confirmationResult = confirmationResult;
        })
        .catch((error) => {
          alert("Request OTP Error");
          alert(error);
          console.log(error);
        });
    }
  };

  const verifyOTP = (e: SyntheticEvent) => {
    const otp = e.target.value;
    setOTP(otp);
    if (otp.length === 6) {
      const confirmationResult = window.confirmationResult;
      confirmationResult
        .confirm(otp)
        .then((result) => {
          const user = result.user;
          localStorage.setItem("userName", JSON.stringify(user));

          dispatch(login(user));
          console.log("userName");
          // form.reset();
          setShowPhoneAuth(false);
          setPhoneNumber("");
          handleClose();
        })
        .catch((error) => {
          alert("Verify Error");
          alert(error);
        });
    }
  };

  const onSubmit = async (data: FormValues) => {
    setPhoneNumber(data.phoneNumber);
    setOTP(data.otp);

    localStorage.setItem("userData", JSON.stringify(data));
    dispatch(login(data));

    form.reset();
    handleClose();
  };

  const handleLoginWithPhoneNumber = () => {
    setShowPhoneAuth(true);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{ sx: { maxWidth: "unset" } }}
    >
      <Component>
        <Box sx={{ display: "flex", height: "100%" }}>
          <Image>
            <Typography variant="h5">{account.heading}</Typography>
            <Typography sx={{ marginTop: "20px" }}>
              {account.subHeading}
            </Typography>
          </Image>

          {showPhoneAuth ? (
            <>
              <form onSubmit={requestOTP} noValidate>
                <TextField
                  variant="standard"
                  label="Phone Number"
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />

                {expandForm ? (
                  <TextField
                    label="OTP Input"
                    variant="outlined"
                    fullWidth
                    value={OTP}
                    onChange={verifyOTP}
                  />
                ) : (
                  <RequestOTP type="submit" variant="outlined">
                    Request OTP
                  </RequestOTP>
                )}
                <div id="recaptcha-container"></div>
                <Text>
                  by continuing, you agree to Flipkart&#39;s Terms of Use and
                  Privacy Policy
                </Text>
                <LoginButton type="submit">Login</LoginButton>
              </form>
            </>
          ) : (
            <>
              <Wrapper onSubmit={handleSubmit(onSubmit)} noValidate>
                <TextField
                  variant="standard"
                  label="Username"
                  type="text"
                  {...register("username", {
                    required: "Username is required",
                  })}
                  error={!!errors.username}
                  helperText={errors.username?.message}
                />
                <TextField
                  variant="standard"
                  label="Email"
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value:
                        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                      message: "Invalid email format",
                    },
                  })}
                  error={!!errors.email}
                  helperText={errors.email?.message}
                />
                <TextField
                  variant="standard"
                  label="Password"
                  type="password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                  error={!!errors.password}
                  helperText={errors.password?.message}
                />
                <TextField
                  variant="standard"
                  label="Confirm Password"
                  type="password"
                  {...register("confirmPassword", {
                    required: "Confirm Password is required",
                    validate: (value) =>
                      value === watch("password") || "Passwords do not match",
                  })}
                  error={!!errors.confirmPassword}
                  helperText={errors.confirmPassword?.message}
                />
                <Text>
                  by continuing, you agree to Flipkart&#39;s Terms of Use and
                  Privacy Policy
                </Text>
                <LoginButton type="submit">Login</LoginButton>
                OR
                <Button
                  onClick={handleLoginWithPhoneNumber}
                  variant="contained"
                  color="primary"
                >
                  Login with Phone Number
                </Button>
              </Wrapper>
            </>
          )}

          <DevTool control={control} />
        </Box>
      </Component>
    </Dialog>
  );
};

export default LoginDialog;
