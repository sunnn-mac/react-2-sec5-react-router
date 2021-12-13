import { Link, useHistory } from "react-router-dom";

export const Page1 = () => {
  const arr = [...Array(100).keys()];
  console.log(arr);

  const histroy = useHistory();

  // avascriptでの画面遷移 するには
  // pushした先に画面遷移する
  const onClickDetailA = () => histroy.push("/page1/detailA");

  return (
    <div>
      <h1>Page1ページです</h1>
      {/* ルーティングの時に、stateも変数として渡せる */}
      <Link to={{ pathname: "/page1/detailA", state: arr }}>DetailA</Link>
      <br />
      <Link to="/page1/detailB">DetailB</Link>
      <br />
      <button onClick={onClickDetailA}>DetailA</button>
    </div>
  );
};
