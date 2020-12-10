var app = new Vue ({
  el: "#app",
  data: {

    company:  { openHours: "Mon - Sat - 9:00 - 18:00",
                phoneNum: "+1 (305) 1234-5678",
                email: "hello@example.com",
                address: "Main Avenue, 987"
              },

    user: { name: "",
            email: "",
            phoneNum: "",
            type: ""
          },

    wStruct:[ { title: "About",
                list: [ { obj: "The Company",
                          link: "#company"
                        },
                        { obj: "Institutional",
                          link: "index.html"
                        },
                        { obj: "Social & Events",
                          link: "index.html"
                        },
                        { obj: "Innovation",
                          link: "index.html"
                        },
                        { obj: "Environment",
                          link: "index.html"
                        },
                        { obj: "Tchnology",
                          link: "index.html"
                        }
                      ]
              },
              { title: "Services",
                list: [ { obj: "Audit & Assurance",
                          link: "index.html"
                        },
                        { obj: "Financial Advisory",
                          link: "index.html"
                        },
                        { obj: "Analytics M&A",
                          link: "index.html"
                        },
                        { obj: "Miggle Marketing",
                          link: "index.html"
                        },
                        { obj: "Legal Consulting",
                          link: "index.html"
                        },
                        { obj: "Regulatory Risk",
                          link: "index.html"
                        }
                      ]
              },
              { title: "Support",
                list: [ { obj: "Responsability",
                          link: "index.html"
                        },
                        { obj: "Terms of Use",
                          link: "index.html"
                        },
                        { obj: "About Cookies",
                          link: "index.html"
                        },
                        { obj: "Privacy Policy",
                          link: "index.html"
                        },
                        { obj: "Accessibility",
                          link: "index.html"
                        },
                        { obj: "Information",
                          link: "index.html"
                        }
                      ]
              }
            ]
  }
})
