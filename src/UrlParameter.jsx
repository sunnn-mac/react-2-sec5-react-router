import { useLocation, useParams } from "react-router-dom";

// useParamsは、propsみたいなもの
// routerでpathに変数が入っていたとき受け取る？

//useLocation は  searchの中に、クエリパラメータが入ってくる

export const UrlParameter = () => {
  const { id } = useParams();
  const { search } = useLocation();
  // クエリパラメータを使いやすく
  const query = new URLSearchParams(search);
  // console.log(query);

  return (
    <div>
      <h1>UrlParameterページです</h1>
      <p>パラメーターは {id} です</p>
      <p>クエリパラメータは{query.get("name")}です</p>
    </div>
  );
};
