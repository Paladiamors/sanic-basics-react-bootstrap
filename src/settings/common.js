import FormComponents from "../pages/Forms/Subpages/FormComponents";
import FormSubmit from "../pages/Forms/Subpages/FormSubmit";
import FormTable from "../pages/Forms/Subpages/FormTable";
import LoopTest from "../pages/LoopTest/LoopTest";
import PostTest from "../pages/PostTest/PostTest";
import ReduxTest from "../pages/ReduxTest/ReduxTest";
import Login from "../pages/Login/Login";
import MockLogin from "../pages/MockLogin/MockLogin";
import Signup from "../pages/Signup/Signup";
import UserDetails from "../pages/UserManager/UserDetails";
import UserManager from "../pages/UserManager/UserManager";
import HeaderNested from "../pages/HeaderNested/HeaderNested";
import EditableTable from "../pages/EditableTable/EditableTable";
import AboutUs from "../pages/AboutUs/AboutUs";
// import CalorieTracker from "../pages/CalorieTracker/CalorieTracker";
import FoodDatabase from "../pages/FoodDatabase/FoodDatabase";
import App from "../pages/App/App";
import Components from "../pages/Components/Components";
import TestPage from "../pages/TestPage/TestPage";
import Index from "../pages/Index/Index";

function parseRoutes(nav) {
  let routes = [];
  console.log(nav, nav.forEach);
  nav.forEach((row) => {
    if (row.component) {
      routes.push(row);
    } else if (row.dropdown) {
      routes = routes.concat(parseRoutes(row.items));
    }
  });
  return routes;
}

export const site = {
  brand: "Expense Tracker",
  nav: [
    { name: "Home", link: "/", component: Index, exact: true },
    // { name: "Calorie Tracker", link: "/calorie-tracker", component: CalorieTracker },
    // { name: "Food Database", link: "/food-database", component: FoodDatabase },
    { name: "About Us", link: "/about-us", component: AboutUs },
    { name: "Test Page", link: "/test-page", component: TestPage },
    // { name: "User Manager", link: "/user-manager", component: UserManager },
    // {
    //   dropdown: "Forms",
    //   items: [
    //     {
    //       name: "Components",
    //       link: "/form-components",
    //       component: FormComponents,
    //     },
    //     { name: "Basic Submit", link: "/form-submit", component: FormSubmit },
    //     { name: "Form Table", link: "/form-table", component: FormTable },
    //   ],
    // },
    // {
    //   dropdown: "Experiments",
    //   items: [
    //     { name: "App", link: "/app", component: App },
    //     { name: "Components", link: "/components", component: Components },
    //     { name: "Post Test", link: "/post-test", component: PostTest },
    //     { name: "Loop Test", link: "/loop-test", component: LoopTest },
    //     { name: "Redux Test", link: "/redux-test", component: ReduxTest },
    //     { name: "Mock Login", link: "/mock-login", component: MockLogin },
    //     { name: "Editable Table", link: "/editable-table", component: EditableTable },
    //     {
    //       name: "Header Nested",
    //       link: "/header-nested",
    //       component: HeaderNested,
    //     },
    //   ],
    // },
  ],
  routes: [
    { link: "/login", component: Login },
    { link: "/signup", component: Signup },
    { link: "/user-details/:username", component: UserDetails },
  ],
};

export const routes = parseRoutes(site.nav).concat(site.routes);
