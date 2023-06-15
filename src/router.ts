import { Router } from "@vaadin/router";

const router = new Router(document.getElementById("outlet"));

router.setRoutes([
  { path: "/", component: "aa-main" },
  { path: "/placeholder", component: "aa-placeholder" },
  { path: "/signed-in-google", component: "aa-loginscreen" },
  { path: "/compression", component: "aa-compression" },
]);
