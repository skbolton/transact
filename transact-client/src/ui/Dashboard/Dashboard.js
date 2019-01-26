import React from "react"
import {
  Container,
  Button,
  Icon,
  Level,
  LevelLeft,
  LevelRight,
  LevelItem
} from "bloomer"
import { Route, Link } from "react-router-dom"
import TransactionList from "./TransactionList"
import AddTransaction from "./AddTransaction"
import AddCategory from "./AddCategory"

export default () => (
  <div>
    <Route path="/transaction" component={AddTransaction} />
    <Route path="/category" component={AddCategory} />
    <Container>
      <Level>
        <LevelLeft>
          <LevelItem>
            <Link to="/insights">
              <Button isOutlined isColor="primary">
                <Icon className="eva eva-bar-chart-outline" />
                &nbsp; insights
              </Button>
            </Link>
          </LevelItem>
        </LevelLeft>
        <LevelRight>
          <LevelItem>
            <Link to="/transaction">
              <Button isOutlined isColor="primary">
                <Icon className="eva eva-plus-outline" />
                &nbsp; transaction
              </Button>
            </Link>
          </LevelItem>
          <LevelItem>
            <Link to="/category">
              <Button isOutlined isColor="link">
                <Icon className="eva eva-plus-outline" />
                &nbsp; category
              </Button>
            </Link>
          </LevelItem>
        </LevelRight>
      </Level>
      <TransactionList />
    </Container>
  </div>
)
