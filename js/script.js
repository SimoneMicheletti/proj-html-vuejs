var app = new Vue ({
  el: "#app",
  data: {

    // Valore per mostrare comunicazioni all'utente
    comunication: { tf: false,
                    type: ""
                  },

    // Inserire qui i dati della propria azienda
    company:  { name1: "N e x",
                name2: "G e n",
                sector: "Insurance Consulting",
                focus: "Fusion & Acquisitions",
                openHours: "Mon - Sat - 9:00 - 18:00",
                phoneNum: "+1 (305) 1234-5678",
                email: "hello@example.com",
                address: "Main Avenue, 987",
                description: "A Functional HTML Template for Corporate & Business."
              },

    // Inserire qui i dati dei membri dello staf che si vogliono mostrare
    team: [ { name: "David Cooper",
              img: "img/team-1.jpg",
              position: "CTO & CO-FOUNDER",
              linkFb: "#team",
              linkTw: "#team",
              linkIn: "#team"
            },
            { name: "Oliver Jones",
              img: "img/team-3.jpg",
              position: "CHIEF PROCUREMENT",
              linkFb: "#team",
              linkTw: "#team",
              linkIn: "#team"
            },
            { name: "Emma Lopez",
              img: "img/team-2.jpg",
              position: "CHIEF MARKETING",
              linkFb: "#team",
              linkTw: "#team",
              linkIn: "#team"
            },
            { name: "T. Johnson",
              img: "img/team-4.jpg",
              position: "CEO & PRESIDENT",
              linkFb: "#team",
              linkTw: "#team",
              linkIn: "#team"
            },
          ],

    // Qui verranno registrati i dati dell'utente
    user: { name: "",
            email: "",
            phoneNum: "",
            type: ""
          },

    // Struttura della HomePage
    homeStruct: [ { obj: "HOME",
                    link: "index.html"
                  },
                  { obj: "ABOUT",
                    link: "#company"
                  },
                  { obj: "SERVICES",
                    link: "#services"
                  },
                  { obj: "PROCESS",
                    link: "#process"
                  },
                  { obj: "TEAM",
                    link: "#team"
                  },
                  { obj: "BLOG",
                    link: "index.html"
                  },
                ],

    // Struttura dell'intero sito web
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
  }, // Fine data

  methods: {

    // Funzione Newsletter
    news() {
      if (this.user.name != "" && this.user.email != "") {
        this.comunication.tf = true;
        this.comunication.type = "news";
      } else {
        alert("Please fill in both forms")
      }
    },

    // Funzione Contattaci
    getInTouch() {
      if (this.user.name != "" && this.user.email != "" && this.user.phoneNum != "" && this.user.type != "") {
        this.comunication.tf = true;
        this.comunication.type = "contact";
      } else {
        alert("Please fill in all forms")
      }
    },

    // Chiudi comunicazioni
    close() {
      this.user.name = "";
      this.user.email = "";
      this.user.phoneNum = "";
      this.user.type = "";
      this.comunication.tf = false;
      this.comunication.type = "";
    }

  }


})
