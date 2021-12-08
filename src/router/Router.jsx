import { Switch, Route } from "react-router-dom";
import { Home } from "../home";
import { Page1 } from "../Page1";
import { Page1DetailA } from "../Page1DetailA";
import { Page1DetailB } from "../Page1DetailB";
import { Page2 } from "../Page2";
import { page1Routes } from "./Page1Routes";

export const Router = () => {
  return (
    <Switch>
      {/* 完全一致　 exact　　　　これを入れないと部分一致ですべてこのページになってしまう*/}
      <Route exact path="/">
        <Home />
      </Route>
      <Route
        path="/page1"
        render={({ match: { url } }) => (
          <Switch>
            {page1Routes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.children}
              </Route>
            ))}
            {/* {console.log(url)}
            <Route exact path={url}>
              <Page1 />
            </Route>
            <Route path={`${url}/detailA`}>
              <Page1DetailA />
            </Route>
            <Route path={`${url}/detailB`}>
              <Page1DetailB />
            </Route> */}
          </Switch>
        )}
      />
      <Route path="/page2">
        <Page2 />
      </Route>
    </Switch>
  );
};
