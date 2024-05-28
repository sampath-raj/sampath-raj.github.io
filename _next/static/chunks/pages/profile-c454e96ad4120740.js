(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [277],
  {
    883: function (e, i, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/profile",
        function () {
          return a(2217);
        },
      ]);
    },
    2217: function (e, i, a) {
      "use strict";
      a.r(i),
        a.d(i, {
          default: function () {
            return r;
          },
        });
      var s = a(5893),
        n = a(2962),
        l = a(1653);
      function r() {
        var e = {
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 1.6, ease: "easeOut" },
              filter: "blur(0px)",
            },
            hidden: { opacity: 0, y: 40, filter: "blur(3px)" },
          },
          i = {
            visible: {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: { delay: 0.4, duration: 0.6, ease: "easeOut" },
            },
            hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
          };
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(n.PB, { title: "PROFILE", noindex: !1, nofollow: !1 }),
            (0, s.jsxs)("div", {
              className: "page_animation_block flex align-middle",
              children: [
                (0, s.jsx)(l.E.div, {
                  className: "page_animation_01",
                  initial: "initial",
                  animate: "enter",
                  exit: "exit",
                  variants: {
                    initial: {
                      x: "100%",
                      transition: {
                        duration: 1.4,
                        ease: [0.43, 0.13, 0.23, 0.96],
                      },
                    },
                    enter: {
                      x: "-100%",
                      transition: {
                        duration: 1.4,
                        ease: [0.43, 0.13, 0.23, 0.96],
                      },
                    },
                    exit: {
                      x: "100%",
                      transition: {
                        duration: 1.4,
                        ease: [0.43, 0.13, 0.23, 0.96],
                      },
                    },
                  },
                }),
                (0, s.jsx)(l.E.div, {
                  className: "page_animation_02",
                  initial: "initial",
                  animate: "enter",
                  exit: "exit",
                  variants: {
                    initial: {
                      x: "100%",
                      transition: {
                        duration: 0.8,
                        ease: [0.43, 0.13, 0.23, 0.96],
                      },
                    },
                    enter: {
                      x: "-100%",
                      transition: {
                        delay: 0.1,
                        duration: 0.8,
                        ease: [0.43, 0.13, 0.23, 0.96],
                      },
                    },
                    exit: {
                      x: "100%",
                      transition: {
                        duration: 0.8,
                        ease: [0.43, 0.13, 0.23, 0.96],
                      },
                    },
                  },
                }),
              ],
            }),
            (0, s.jsx)(l.E.div, {
              className: "wrapper",
              initial: { opacity: 0, filter: "blur(8px)" },
              animate: { opacity: 1, filter: "blur(0px)" },
              transition: { delay: 1, duration: 0.6, ease: "easeIn" },
              children: (0, s.jsxs)("section", {
                id: "profile",
                className: "pb_320",
                children: [
                  (0, s.jsx)("section", {
                    id: "profile_image",
                    children: (0, s.jsxs)(l.E.div, {
                      className: "profile_image_inner text-center",
                      initial: "hidden",
                      animate: "visible",
                      variants: {
                        visible: {
                          opacity: 1,
                          transition: {
                            delay: 1,
                            when: "beforeChildren",
                            staggerChildren: 0.4,
                          },
                        },
                        hidden: { opacity: 0 },
                      },
                      children: [
                        (0, s.jsxs)("div", {
                          className: "profile_image_word_bg",
                          children: [
                            (0, s.jsx)(l.E.span, {
                              className: "main_i_en block",
                              variants: e,
                              children: "PROFILE",
                            }),
                            (0, s.jsx)(l.E.span, {
                              className: "main_i_en block",
                              variants: e,
                              children: "PROFILE",
                            }),
                            (0, s.jsx)(l.E.span, {
                              className: "main_i_en block",
                              variants: e,
                              children: "PROFILE",
                            }),
                            (0, s.jsx)(l.E.span, {
                              className: "main_i_en block",
                              variants: e,
                              children: "PROFILE",
                            }),
                          ],
                        }),
                        (0, s.jsx)(l.E.div, {
                          className: "profile_image_photo sub_en",
                          variants: e,
                          children: (0, s.jsx)("img", {
                            src: "/profile/profile_glitch.jpg",
                            alt: "profile",
                          }),
                        }),
                        (0, s.jsx)(l.E.div, {
                          className:
                            "profile_my_name sub_en flex justify-center relative mix-blend-difference",
                          variants: e,
                          children: (0, s.jsx)("p", { children: "SAMPATH RAJ" }),
                        }),
                        (0, s.jsx)("div", {
                          className: "line_anim",
                          children: (0, s.jsx)("div", {
                            className: "c_scrolldown",
                            children: (0, s.jsx)("div", {
                              className: "c_line",
                            }),
                          }),
                        }),
                      ],
                    }),
                  }),
                  (0, s.jsx)("section", {
                    id: "profile_detail",
                    className: "wrapper_inner pt_160",
                    children: (0, s.jsxs)("div", {
                      className: "profile_detail_items",
                      children: [
                        (0, s.jsx)(l.E.div, {
                          className: "profile_detail_item pb_80",
                          initial: "hidden",
                          whileInView: "visible",
                          viewport: { once: !0 },
                          variants: i,
                          children: (0, s.jsx)("div", {
                            className: "profile_detail_word",
                            children: (0, s.jsxs)("p", {
                              className: "leading-loose",
                              children: [
                                "Hi there :)",
                                (0, s.jsx)("br", {}),
                                (0, s.jsx)("br", {}),
                                "I’m a machine learning engineer and web designer based in India.",
                                (0, s.jsx)("br", {}),
                                (0, s.jsx)("br", {}),
                                "I’ve been working in the Startup since 2023, and I’m always inspired by innovative designs and solutions created by engineers and designers from all over the world. My current goal is to create impactful machine learning models and visually stunning websites. My recent interests include deep learning and JavaScript frameworks.",
                                (0, s.jsx)("br", {}),
                                (0, s.jsx)("br", {}),
                                "I worked in customer support and web design for an startup company, while also learning coding on my own.",
                                (0, s.jsx)("br", {}),
                                (0, s.jsx)("br", {}),
                                "Later, I became a web designer and front-end engineer for a fashion trading company.",
                                (0, s.jsx)("br", {}),
                                (0, s.jsx)("br", {}),
                                "Currently, I am a freelancer specializing in machine learning and web development.",
                              ],
                            }),
                          }),
                        }),
                        (0, s.jsxs)(l.E.div, {
                          className: "profile_detail_item pb_80",
                          initial: "hidden",
                          whileInView: "visible",
                          viewport: { once: !0 },
                          variants: i,
                          children: [
                            (0, s.jsx)("div", {
                              className: "profile_detail_headline",
                              children: (0, s.jsx)("p", {
                                className: "main_i_en pt_80 mb_32",
                                children: "What I Can Do",
                              }),
                            }),
                            (0, s.jsx)("div", {
                              className: "profile_detail_word",
                              children: (0, s.jsxs)("p", {
                                className: "leading-loose",
                                children: [
                                  "Machine Learning Model Development",
                                  (0, s.jsx)("br", {}),
                                  "Web Design",
                                  (0, s.jsx)("br", {}),
                                  "Front-End Development",
                                  (0, s.jsx)("br", {}),
                                  "Data Analysis",
                                  (0, s.jsx)("br", {}),
                                  "Server Management",
                                ],
                              }),
                            }),
                          ],
                        }),
                        (0, s.jsxs)(l.E.div, {
                          className: "profile_detail_item pb_80",
                          initial: "hidden",
                          whileInView: "visible",
                          viewport: { once: !0 },
                          variants: i,
                          children: [
                            (0, s.jsx)("div", {
                              className: "profile_detail_headline",
                              children: (0, s.jsx)("p", {
                                className: "main_i_en pt_80 mb_32",
                                children: "Skills",
                              }),
                            }),
                            (0, s.jsx)("div", {
                              className: "profile_detail_word",
                              children: (0, s.jsxs)("p", {
                                className: "leading-loose",
                                children: [
                                  "Python",
                                  (0, s.jsx)("br", {}),
                                  "HTML",
                                  (0, s.jsx)("br", {}),
                                  "CSS",
                                  (0, s.jsx)("br", {}),
                                  "JavaScript",
                                  (0, s.jsx)("br", {}),
                                  "TensorFlow",
                                ],
                              }),
                            }),
                          ],
                        }),
                        (0, s.jsxs)(l.E.div, {
                          className: "profile_detail_item pb_80",
                          initial: "hidden",
                          whileInView: "visible",
                          viewport: { once: !0 },
                          variants: i,
                          children: [
                            (0, s.jsx)("div", {
                              className: "profile_detail_headline",
                              children: (0, s.jsx)("p", {
                                className: "main_i_en pt_80 mb_32",
                                children: "Frameworks",
                              }),
                            }),
                            (0, s.jsx)("div", {
                              className: "profile_detail_word",
                              children: (0, s.jsxs)("p", {
                                className: "leading-loose",
                                children: [
                                  "PyTorch",
                                  (0, s.jsx)("br", {}),
                                  "Tailwind CSS",
                                  (0, s.jsx)("br", {}),
                                  "Sklearn",
                                  (0, s.jsx)("br", {}),
                                  "TensorFlow",
                                ],
                              }),
                            }),
                          ],
                        }),
                        (0, s.jsxs)(l.E.div, {
                          className: "profile_detail_item pb_80",
                          initial: "hidden",
                          whileInView: "visible",
                          viewport: { once: !0 },
                          variants: i,
                          children: [
                            (0, s.jsx)("div", {
                              className: "profile_detail_headline",
                              children: (0, s.jsx)("p", {
                                className: "main_i_en pt_80 mb_32",
                                children: "Content Management Systems",
                              }),
                            }),
                            (0, s.jsx)("div", {
                              className: "profile_detail_word",
                              children: (0, s.jsxs)("p", {
                                className: "leading-loose",
                                children: [
                                  "WordPress",
                                  (0, s.jsx)("br", {}),
                                  "Shopify",
                                  (0, s.jsx)("br", {}),
                                  "Ghost",
                                ],
                              }),
                            }),
                          ],
                        }),
                        (0, s.jsxs)(l.E.div, {
                          className: "profile_detail_item pb_80",
                          initial: "hidden",
                          whileInView: "visible",
                          viewport: { once: !0 },
                          variants: i,
                          children: [
                            (0, s.jsx)("div", {
                              className: "profile_detail_headline",
                              children: (0, s.jsx)("p", {
                                className: "main_i_en pt_80 mb_32",
                                children: "Hosting",
                              }),
                            }),
                            (0, s.jsx)("div", {
                              className: "profile_detail_word",
                              children: (0, s.jsxs)("p", {
                                className: "leading-loose",
                                children: [
                                  "GitHub",
                                  (0, s.jsx)("br", {}),
                                  "Netlify",
                                  (0, s.jsx)("br", {}),
                                  "Vercel",
                                ],
                              }),
                            }),
                          ],
                        }),
                        (0, s.jsxs)(l.E.div, {
                          className: "profile_detail_item",
                          initial: "hidden",
                          whileInView: "visible",
                          viewport: { once: !0 },
                          variants: i,
                          children: [
                            (0, s.jsx)("div", {
                              className: "profile_detail_headline",
                              children: (0, s.jsx)("p", {
                                className: "main_i_en pt_80 mb_32",
                                children: "Tools",
                              }),
                            }),
                            (0, s.jsx)("div", {
                              className: "profile_detail_word",
                              children: (0, s.jsxs)("p", {
                                className: "leading-loose",
                                children: [
                                  "Photoshop",
                                  (0, s.jsx)("br", {}),
                                  "Illustrator",
                                  (0, s.jsx)("br", {}),
                                  "VS Code",
                                  (0, s.jsx)("br", {}),
                                  "Jupyter",
                                ],
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          ],
        });
      }
    },
  },
  function (e) {
    e.O(0, [653, 774, 888, 179], function () {
      return (i = 883), e((e.s = i));
      var i;
    });
    var i = e.O();
    _N_E = i;
  },
]);
