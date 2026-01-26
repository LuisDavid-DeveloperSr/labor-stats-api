export default function validate(requiredParams) {
  return (req, res, next) => {
    for (const param of requiredParams) {
      if (!req.query[param]) {
        return res.status(400).json({
          error: `El parámetro '${param}' es obligatorio`
        });
      }
    }
    next();
  };
}
