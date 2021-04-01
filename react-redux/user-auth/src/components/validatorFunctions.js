import { isEmail } from "validator";

export const required = (value) => {
  if (!value) {
    return (
      <p className="alert alert-danger" role="alert">
        This field is required.
      </p>
    );
  }
};

export const checkEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <p className="alert alert-danger" role="alert">
        This email is not valid.
      </p>
    );
  }
};

export const checkPassword = (value) => {
  if (value.length < 6 || value.length > 20) {
    return (
      <p className="alert alert-danger" role="alert">
        Password must be between 6 and 20 characters.
      </p>
    );
  }
};
