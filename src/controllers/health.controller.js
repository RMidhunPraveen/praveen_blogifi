const healthCheck = (req, res) => {
  res.json({
    status: "OK",
    message: "Backend is healthy 💪",
  });
};

module.exports = {
  healthCheck,
};
