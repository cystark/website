import * as React from "react"
import Layout from "../layout/"

import Header from "../components/Header"
import Main from "../components/Main"
import Footer from "../components/Footer"

interface IState {
  isArticleVisible: boolean
  timeout: boolean
  articleTimeout: boolean
  article: string
  loading: string
}

interface IProps {
  location: string
}

class IndexPage extends React.Component {
  state: IState
  timeoutId: any
  wrapperRef: any

  constructor(props: IProps) {
    super(props)
    this.state = {
      isArticleVisible: false,
      timeout: false,
      articleTimeout: false,
      article: "",
      loading: "is-loading",
    }
    this.handleOpenArticle = this.handleOpenArticle.bind(this)
    this.handleCloseArticle = this.handleCloseArticle.bind(this)
    this.setWrapperRef = this.setWrapperRef.bind(this)
    this.handleClickOutside = this.handleClickOutside.bind(this)
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ loading: "" })
    }, 100)
    document.addEventListener("mousedown", this.handleClickOutside)
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId)
    }
    document.removeEventListener("mousedown", this.handleClickOutside)
  }

  setWrapperRef(node: any) {
    this.wrapperRef = node
    console.log(node)
  }

  handleOpenArticle(article: any) {
    this.setState({
      isArticleVisible: !this.state.isArticleVisible,
      article,
    })

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout,
      })
    }, 325)

    setTimeout(() => {
      this.setState({
        articleTimeout: !this.state.articleTimeout,
      })
    }, 350)
  }

  handleCloseArticle() {
    this.setState({
      articleTimeout: !this.state.articleTimeout,
    })

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout,
      })
    }, 325)

    setTimeout(() => {
      this.setState({
        isArticleVisible: !this.state.isArticleVisible,
        article: "",
      })
    }, 350)
  }

  handleClickOutside(event: any) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      if (this.state.isArticleVisible) {
        this.handleCloseArticle()
      }
    }
  }

  render() {
    return (
      <Layout location={this.props.location}>
        <div
          className={`body ${this.state.loading} ${
            this.state.isArticleVisible ? "is-article-visible" : ""
          }`}
        >
          <Header />
          <Main />
          <Footer />
        </div>
      </Layout>
    )
  }
}

export default IndexPage
