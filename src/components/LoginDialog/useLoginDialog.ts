// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { SyntheticEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { login } from "reducers/UserSlice";
import { signInWithPhoneNumber } from "firebase/auth";
import { authentication } from "firebse";

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
};

type props = {
  open: boolean;
  setOpen: (isOpen: boolean) => void;
};

function useLoginDialog({ setOpen }: props) {
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
          form.reset();
          setPhoneNumber("");
          setShowPhoneAuth(false);
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

  return {
    account,
    showPhoneAuth,
    handleClose,
    register,
    handleSubmit,
    control,
    watch,
    errors,
    phoneNumber,
    setPhoneNumber,
    expandForm,
    OTP,
    requestOTP,
    verifyOTP,
    onSubmit,
    handleLoginWithPhoneNumber,
  };
}

export default useLoginDialog;
