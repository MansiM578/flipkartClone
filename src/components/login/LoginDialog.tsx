import React, { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  Stack,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

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

const CreateAccount = styled(Typography)`
  margin: auto 0 5px 0;
  text-align: center;
  color: #2874f0;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
`;

const Wrappe = styled(Box)`
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

const Error = styled(Typography)`
  font-size: 10px;
  color: #ff6161;
  line-height: 0;
  margin-top: 10px;
  font-weight: 600;
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
};

const LoginDialog = ({ open, setOpen }: any) => {
  const [account, toggleAccont] = useState(accountInitialValues.login);

  const handleClose = () => {
    setOpen(false);
    toggleAccont(accountInitialValues.login);
  };

  const toggleSignup = () => {
    toggleAccont(accountInitialValues.signup);
  };

  const form = useForm<FormValues>({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  const { register, handleSubmit, formState, control, watch } = form;
  const { errors } = formState;

  const onSubmit = (data: FormValues) => {
    console.log(data);
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
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
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
              {...register("password", { required: "Password is required" })}
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
          </Wrapper>
          <DevTool control={control} />
          {/* {account.view === "login" ? (
            <Wrapper>
              <TextField variant="standard" label="Enter username" />
              <TextField variant="standard" label="Enter email" />
              <TextField variant="standard" label="Enter password" />
              <TextField variant="standard" label="Confirm password" />
              <Text>
                by continuing, you agree to Flipkart&#39;s Terms of Use and
                Privacy Policy
              </Text>
              <LoginButton>Login</LoginButton>
              <CreateAccount onClick={() => toggleSignup()}>
                New to Flipkart? Create an Account
              </CreateAccount>
            </Wrapper>
          ) : (
            <Wrapper>
              <TextField variant="standard" label="Enter name" />
            </Wrapper>
          )} */}
        </Box>
      </Component>
    </Dialog>
  );
};

export default LoginDialog;
