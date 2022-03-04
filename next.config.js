// module.exports = {
//   reactStrictMode: true,
// }

module.exports = {
  reactStrictMode: true,

  env: {
    
    STRAPI_API_URL: ' https://bdd-charlescantin.herokuapp.com',
  },
  images: {
    deviceSizes: [320, 420, 768, 1024, 1200],
    loader: "default",
    domains: ["res.cloudinary.com"],
  },
};
