import "bootstrap";
import "./style.scss";
import m from "mithril";
import TopPage from "./top-page";
import SecondPage from "./second-page";

m.route(document.body, "/top", {
    "/top": TopPage,
    "/second": SecondPage,
});
