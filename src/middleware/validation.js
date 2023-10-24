const userEmpty = "The username field is required.";
const passwordEmpty = "The password field is required.";

function validateUser(req, res, next) {
  const { username, password } = req.body;
  res.setHeader("content-type", "application/json");

  const test_error = {
    message: "The given data was invalid",
    errors: {},
  };

  if (!username && !password) {
    test_error.errors["username"] = [userEmpty];
    test_error.errors["password"] = [passwordEmpty];

    res.status(401).send(test_error);
  } else if (!username) {
    test_error.errors["username"] = [userEmpty];

    res.status(401).send(test_error);
  } else if (!password) {
    test_error.errors["password"] = [passwordEmpty];

    res.status(401).send(test_error);
  } else {
    next();
  }
}

export { validateUser };
