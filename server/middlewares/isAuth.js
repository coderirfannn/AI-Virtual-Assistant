const isAuth= async (req, res, next) => {
  try {
    if (!req.session || !req.session.user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    next();
  } catch (error) {
    console.error('Authentication error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
module.exports = isAuth;