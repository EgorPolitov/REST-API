// const userEmpty = "The username field is required.";
// const passwordEmpty = "The password field is required.";


const empty = (item) => `The ${item} field is required.`;

const validate = (fields) => {
  return async (req, res, next) => {
    
    const errorsInFelds = fields.reduce((accum, field) => {
      if (!req.body[field]) {
        accum[field] = empty(field);
      }
      return accum;
    }, {});

    if (Object.keys(errorsInFelds).length === 0) {
      next()
    } else {
      res.status(401).json({
        message: "The given data was invalid",
        errors: errorsInFelds,
      });
    }
  };
}; 

// function validate(fields, filedChecking) {
//   const errorsInFelds = fields.reduce((accum, field) => {
//     if (!filedChecking[field]) {
//       accum[field] = empty(field);
//     }
//     return accum;
//   }, {});

//   console.log(errorsInFelds);
// }

export { validate };
