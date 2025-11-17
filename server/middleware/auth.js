const supabase = require('../supabaseClient');

const authenticateToken = async (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) {
    return res.sendStatus(401); // No token
  }

  const { data: { user }, error } = await supabase.auth.getUser(token);

  if (error || !user) {
    return res.sendStatus(403); // Invalid token
  }

  req.user = user;
  next();
};

module.exports = authenticateToken;
