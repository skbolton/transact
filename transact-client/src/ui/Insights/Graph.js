import React, { Component } from "react"
import { graphql } from "react-apollo"
import { compose } from "recompose"
import { Link } from "react-router-dom"
import Chart from "chart.js"
import { whileLoading } from "@core/whileLoading"
import {
  Container,
  Level,
  LevelLeft,
  LevelItem,
  Box,
  Button,
  Icon
} from "bloomer"
import Transaction from "@engine/transaction"

class Graph extends Component {
  static colors = [
    "#4dc9f6",
    "#f67019",
    "#f53794",
    "#537bc4",
    "#acc236",
    "#166a8f",
    "#00a950",
    "#58595b",
    "#8549ba"
  ]

  canvas = React.createRef()

  componentDidMount() {
    this.buildGraph()
  }

  buildGraph() {
    const categoriesTotals = this.dataFromTransactions()
    const categories = Object.keys(categoriesTotals)
    const config = {
      type: "bar",
      data: {
        labels: categories,
        datasets: [
          {
            backgroundColor: this.colorsForCategories(categories),
            data: categories.map(category => categoriesTotals[category])
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        title: {
          display: true,
          text: "Spending By Category"
        },
        scales: {
          xAxes: [
            {
              display: true,
              scaleLabel: {
                display: true,
                labelString: "Categories"
              }
            }
          ],
          yAxes: [
            {
              display: true,
              scaleLabel: {
                display: true,
                labelString: "Total Spent"
              }
            }
          ]
        }
      }
    }
    const ctx = this.canvas.current
    this.chart = new Chart(ctx, config)
  }

  colorsForCategories(categories) {
    return categories.map((_cat, idx) => {
      return idx < Graph.colors.length
        ? Graph.colors[idx]
        : Graph.colors[idx % Graph.colors.length]
    })
  }

  dataFromTransactions() {
    const { transactions } = this.props.data

    // total each category
    return transactions.reduce((categories, { category, amount }) => {
      categories[category.name] = categories[category.name]
        ? categories[category.name] + amount
        : amount

      return categories
    }, {})
  }

  render() {
    return (
      <Container>
        <Level>
          <LevelLeft>
            <LevelItem>
              <Link to="/">
                <Button isOutlined isColor="primary">
                  <Icon className="eva eva-home-outline" />
                  &nbsp; home
                </Button>
              </Link>
            </LevelItem>
          </LevelLeft>
        </Level>
        <Box>
          <canvas ref={this.canvas} />
        </Box>
      </Container>
    )
  }
}

export default compose(
  graphql(Transaction.queries.transactions),
  whileLoading()
)(Graph)
