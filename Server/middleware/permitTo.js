const permitTo = (...roles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ 
        message: "Not authenticated" 
      });
    }

    const userRole = req.user.role;
    if (!roles.includes(userRole)) {
      return res.status(403).json({
        message: `Role '${userRole}' is not allowed to do this action.`,
      });
    }

    next();
  };
};

module.exports = permitTo;
