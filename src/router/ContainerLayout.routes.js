import ContainerYoutube from "@/View/ContainerYoutube.vue";
export default {
  path: "",
  component: ContainerYoutube,
  children: [
    {
      path: "/home",
      component: () => import("@/Container/HomeList.vue"),
      name: "HomeList",
      meta: {
        title: "HomeList",
      },
    },
  ],
};
