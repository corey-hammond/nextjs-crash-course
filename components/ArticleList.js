import Article from "./Article";
import articleStyles from "../styles/Article.module.css";

const ArticleList = ({ articles }) => {
  return (
    <div className={articleStyles.grid}>
      {articles.map((article, idx) => (
        <Article article={article} key={idx} />
      ))}
    </div>
  );
};

export default ArticleList;
