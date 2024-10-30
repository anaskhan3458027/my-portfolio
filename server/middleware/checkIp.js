// server/middleware/checkIp.js
function checkIp(req, res, next) {
    const allowedIp = 'YOUR_ALLOWED_IP'; // Replace with the IP allowed to access the admin page
    const clientIp = req.ip;
  
    if (clientIp === allowedIp) {
      next();
    } else {
      res.status(403).send('Access denied');
    }
  }
  
  module.exports = checkIp;
  