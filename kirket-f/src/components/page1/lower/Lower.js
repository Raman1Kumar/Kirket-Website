import React, { useState } from "react";
import { authentication } from "../../../firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

function Lower() {
  const [Phone, setPhone] = useState("");

  const [OTP, setOTP] = useState("");
  const generateCaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          onSignInSubmit();
        },
      },
      authentication
    );
  };
  const onOTPSubmit = (e) => {
    e.preventDefault();
  };

  const onSignInSubmit = (e) => {
    const headers = {
      "Content-Type": "text/plain",
    };
    e.preventDefault();

    generateCaptcha();
    const phoneNumber = "+91" + Phone;
    const appVerifier = window.recaptchaVerifier;

    signInWithPhoneNumber(authentication, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;

        // ...
      })
      .catch((error) => {
        // Error; SMS not sent
        // ...
        console.log(error);
      });
    //start

    //end

    fetch("/hello", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        phone: Phone,
      }),
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
        setPhone("1111111");
      });
  };

  const verifyOTP = (e) => {
    let otp = e.target.value;
    setOTP(otp);

    if (otp.length == 6) {
      // console.log(otp);
      let confirmationResult = window.confirmationResult;

      confirmationResult
        .confirm(otp)
        .then((result) => {
          // User signed in successfully.
          const user = result.user;
          // ...
        })
        .catch((error) => {
          // User couldn't sign in (bad verification code?)
          // ...
        });
    }
  };

  return (
    <div class=" lower">
      <form action="" onSubmit={onSignInSubmit}>
        <div id="recaptcha-container"></div>
        <label for="exampleFormControlInput1" class="form-label">
          Phone Number
        </label>
        <input
          required
          type="number"
          value={Phone}
          onChange={(e) => setPhone(e.target.value)}
          // value="2371982"
          autoComplete="off"
          name="Phone"
          class="form-control my-3"
          id="Phone"
          placeholder="91234102"
        />
        <button type="submit" class="btn btn-primary mb-3">
          Send Message
        </button>
      </form>

      <form onSubmit={onOTPSubmit}>
        {/* <div id="recaptcha-container"></div> */}
        <label for="OTP" class="form-label">
          OTP
        </label>
        <input
          type="number"
          value={OTP}
          // onChange={(er) => setOTP(er.target.value)}
          onChange={verifyOTP}
          // value="2371982"
          autoComplete="off"
          name="OTP"
          class="form-control my-3"
          id="OTP"
          placeholder="OTP"
        />
        <button type="submit" class="btn btn-primary mb-3">
          Confirm OTP
        </button>
      </form>
    </div>
  );
}

export default Lower;
