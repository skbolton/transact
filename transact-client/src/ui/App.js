import React from "react"
import { Switch, Route } from "react-router-dom"
import { Navbar, NavbarBrand, Level, LevelItem, Title, Icon } from "bloomer"
import Dashboard from "./Dashboard/Dashboard"
import Graph from "./Insights/Graph"

export default () => (
  <div className="has-background-white-ter fullheight">
    <Navbar className="is-primary nav">
      <NavbarBrand>
        <Level>
          <LevelItem>
            <Title className="logo has-text-white">transact</Title>
          </LevelItem>
          <LevelItem>
            <Icon
              isSize="large"
              className="eva eva-credit-card-outline logo-icon"
            />
          </LevelItem>
        </Level>
      </NavbarBrand>
    </Navbar>
    <Switch>
      <Route path="/insights" component={Graph} />
      <Route path="/" component={Dashboard} />
    </Switch>
  </div>
)
