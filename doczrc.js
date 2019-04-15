export default {
  title: "Houser’s 组件库",
  description: "收藏个人日常开发中的组件",
  typescript: true,
  dest: "./docs",
  editBranch: "Github",
  base:
    process.env.NODE_ENV === "production"
      ? "/houser-components/"
      : process.env.DOCZ_BASE || "/"
}
