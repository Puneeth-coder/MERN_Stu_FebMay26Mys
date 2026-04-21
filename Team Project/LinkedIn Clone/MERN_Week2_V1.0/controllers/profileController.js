const users = require('../data/users');

exports.getMe = (req, res) => {
  const user = users.find(u => u.id === req.user.id);
  res.json(user);
};

exports.updateProfile = (req, res) => {
  const user = users.find(u => u.id === req.user.id);

  Object.assign(user, req.body);

  res.json({ message: 'Profile updated', user });
};

exports.getProfileById = (req, res) => {
  const user = users.find(u => u.id === req.params.id);

  if (!user) return res.status(404).json({ error: 'User not found' });

  res.json(user);
};