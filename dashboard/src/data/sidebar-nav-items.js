export default function() {
  return [
    {
      title: "Home",
      to: "/blog-overview",
      htmlBefore: '<i class="material-icons">home</i>',
      htmlAfter: ""
    },
    {
      title: "Blog Posts",
      htmlBefore: '<i class="material-icons">create</i>',
      to: "/blog-posts",
    },
    {
      title: "P2P Video",
      htmlBefore: '<i class="material-icons">videocam</i>',
      to: "/p2p-video",
    },
    {
      title: "Google Courses",
      htmlBefore: '<i class="material-icons">code</i>',
      to: "/google-courses",
    },
    {
      title: "Freelancing",
      htmlBefore: '<i class="material-icons">today</i>',
      to: "/freelancing",
    },
    {
      title: "Professional Skills",
      htmlBefore: '<i class="material-icons">build</i>',
      to: "/professional-skills",
    },
    {
      title: "Extra Resources",
      htmlBefore: '<i class="material-icons">done_outline</i>',
      to: "/extra-resources",
    }
  ];
}
