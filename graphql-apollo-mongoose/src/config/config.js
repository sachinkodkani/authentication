var configuration = {
  development: {
    db: "mongodb://127.0.0.1/test",
    app: {
      name: "graphql"
    }
  },

  production: {
    db: "mlabLink",
    app: {
      name: "graphql"
    }
  }
};

export { configuration };
