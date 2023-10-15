module.exports = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  dialect: 'postgres',
  define: {
    createdAt: 'created_at',
    updatedAt: 'modified_at',
    timestamps: false,
  },
};
