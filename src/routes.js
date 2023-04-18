import Users from "./components/userPage.vue";
import Homes from "./components/homeRoute.vue";
import userStart from "./components/userStart.vue";
import userDetails from "./components/userDetails.vue";
import userEdit from "./components/userEdit.vue";
 
export const routes = [
  { path: "", component: Homes },
  //childeren is used for nesting in routing
  {
    //parent component
    path: "/userPage/",
    component: Users,
    //child components
    children: [
      { path: "", component: userStart },
      {
        path: "id",
        component: userDetails,
      },
      {
        path: "id/edit",
        component: userEdit,
        name: 'userEdit'
      },
    ],
  },
];
