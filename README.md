# Transact

This repo contains both the backend server as well as the frontend code. You will need to have them both running to properly use application.

## Setup

First get the server running. If it is the first time running the application backend then you will need to get the database setup.

```
$ mix ecto.setup
```

At any time if you would like to reset the database you can run:

```
$ mix ecto.reset
```

Once the database is setup you can then start the server. This will start it up at localhost:4000

```
mix phx.server
```

Now get the frontend application running. This will get the application running at localhost:3000

```
$ cd transact-client
$ npm start
```

## Tools Used

- [Phoenix](https://hexdocs.pm/phoenix/overview.html) - web framework
- [Ecto](https://hexdocs.pm/ecto/Ecto.html) - database access
- [Absinthe](https://hexdocs.pm/absinthe/overview.html) - graphql
- [React](https://reactjs.org/) - UI Rendering
- [React Router Dom](https://reacttraining.com/react-router/web/guides/quick-start) - UI Routing
- [Recompose](https://github.com/acdlite/recompose/blob/master/docs/API.md) - HOC utiltity functions
- [Apollo Client](https://www.apollographql.com/docs/react/essentials/get-started.html) - Client Side Graphql Client
- [Bulma](https://bulma.io/documentation/) - CSS framework
