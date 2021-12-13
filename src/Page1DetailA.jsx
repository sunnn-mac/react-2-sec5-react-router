import { useHistory, useLocation } from "react-router-dom";

export const Page1DetailA = () => {
  // const location = useLocation();
  const { state } = useLocation();
  console.log(state);

  const history = useHistory();
  // 一つ前のページに戻る
  const onClickBack = () => history.goBack();

  return (
    <div>
      <h1>Page1DetailAページです</h1>
      <button onClick={onClickBack}>戻る</button>
    </div>
  );
};
