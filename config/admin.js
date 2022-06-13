module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '54d1f8e601b74a970640ded656703692'),
  },
});
