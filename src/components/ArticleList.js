import React, { PropTypes, Component } from 'react'
import Article from './Article'
import Chart from './Chart'
import toggleOpen from '../decorators/toggleOpenOnlyOne.js'

class ArticleList extends Component {
    render() {
        const { articles, opened, toggleOpen } = this.props
        const articleItems = articles.map((article) => <li key={article.id}>
            <Article article = {article}
                isOpen = {article.id == opened}
                toggleOpen = {toggleOpen(article.id)}
            />
        </li>)
        return (
            <div>
                <ul>
                    {articleItems}
                </ul>
                <Chart articles = {articles}/>
            </div>
        )
    }
}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired,

	//From toggleOpenOnlyOne decorator
	opened: PropTypes.string,
	toggleOpen: PropTypes.func.isRequired
}

export default toggleOpen(ArticleList)