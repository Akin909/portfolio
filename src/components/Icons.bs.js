// Generated by BUCKLESCRIPT VERSION 2.2.2, PLEASE EDIT WITH CARE
'use strict';

var Css = require("bs-css/src/Css.js");
var React = require("react");
var ListLabels = require("bs-platform/lib/js/listLabels.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var Utils$Portfolio = require("../Utils.bs.js");
var Transition$Portfolio = require("./Transition.bs.js");

function link(iconColor) {
  return Css.style(/* :: */[
              Css.color(Css.hex(iconColor)),
              /* :: */[
                Css.visited(/* :: */[
                      Css.color(Css.hex(iconColor)),
                      /* [] */0
                    ]),
                /* :: */[
                  Css.outlineStyle(Css.none),
                  /* :: */[
                    Css.focus(/* :: */[
                          Css.color(Css.hex("BAE498")),
                          /* :: */[
                            Css.borderBottom(Css.px(1), Css.solid, Css.hex("BAE498")),
                            /* [] */0
                          ]
                        ]),
                    /* [] */0
                  ]
                ]
              ]
            ]);
}

var rotation = Css.keyframes(/* :: */[
      /* tuple */[
        0,
        /* :: */[
          Css.transform(Css.rotateY(Css.deg(0))),
          /* [] */0
        ]
      ],
      /* :: */[
        /* tuple */[
          100,
          /* :: */[
            Css.transform(Css.rotateY(Css.deg(360))),
            /* [] */0
          ]
        ],
        /* [] */0
      ]
    ]);

var carousel = Css.style(/* :: */[
      Css.top(Css.rem(-2)),
      /* :: */[
        Css.width(Css.em(4)),
        /* :: */[
          Css.position(Css.absolute),
          /* :: */[
            Css.transformStyle(/* preserve3d */589702045),
            /* :: */[
              Css.animationName(rotation),
              /* :: */[
                Css.animationDuration(20000),
                /* :: */[
                  Css.animationTimingFunction(Css.linear),
                  /* :: */[
                    Css.animationIterationCount(Css.infinite),
                    /* :: */[
                      Css.hover(/* :: */[
                            Css.animationPlayState(Css.paused),
                            /* [] */0
                          ]),
                      /* [] */0
                    ]
                  ]
                ]
              ]
            ]
          ]
        ]
      ]
    ]);

function revolve(degrees) {
  return Css.style(/* :: */[
              Css.left(Css.px(10)),
              /* :: */[
                Css.top(Css.px(10)),
                /* :: */[
                  Css.overflow(Css.hidden),
                  /* :: */[
                    Css.display(Css.block),
                    /* :: */[
                      Css.position(Css.absolute),
                      /* :: */[
                        Css.transforms(/* :: */[
                              Css.rotateY(Css.deg(degrees)),
                              /* :: */[
                                Css.translateZ(Css.px(40)),
                                /* [] */0
                              ]
                            ]),
                        /* [] */0
                      ]
                    ]
                  ]
                ]
              ]
            ]);
}

var icons = Css.style(/* :: */[
      Css.margin(Css.rem(0.5)),
      /* [] */0
    ]);

var Styles = /* module */[
  /* link */link,
  /* rotation */rotation,
  /* carousel */carousel,
  /* revolve */revolve,
  /* icons */icons
];

var component = ReasonReact.statelessComponent("Icons");

function combineClasses(classes) {
  return ListLabels.fold_left((function (r, elem) {
                return r + (" " + elem);
              }), "", classes);
}

function make() {
  var newrecord = component.slice();
  newrecord[/* render */9] = (function () {
      return ReasonReact.element(/* None */0, /* None */0, Transition$Portfolio.make(Utils$Portfolio.reStyle(/* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* Some */["0"], /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* () */0), Utils$Portfolio.reStyle(/* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* Some */["1"], /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* Some */["opacity 8s"], /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* () */0), /* array */[React.createElement("div", {
                            className: carousel
                          }, React.createElement("a", {
                                className: combineClasses(/* :: */[
                                      link("fff"),
                                      /* :: */[
                                        revolve(0),
                                        /* [] */0
                                      ]
                                    ]),
                                href: Utils$Portfolio.githubLink,
                                rel: "external",
                                target: "_blank"
                              }, ReasonReact.element(/* None */0, /* None */0, Utils$Portfolio.FontAwesomeIcon[/* make */0](/* record */[
                                        /* prefix */"fab",
                                        /* iconName */"github"
                                      ], "lg", icons, /* array */[]))), React.createElement("a", {
                                className: combineClasses(/* :: */[
                                      link("6FA8D8"),
                                      /* :: */[
                                        revolve(90),
                                        /* [] */0
                                      ]
                                    ]),
                                href: Utils$Portfolio.twitterLink,
                                rel: "external",
                                target: "_blank"
                              }, ReasonReact.element(/* None */0, /* None */0, Utils$Portfolio.FontAwesomeIcon[/* make */0](/* record */[
                                        /* prefix */"fab",
                                        /* iconName */"twitter"
                                      ], "lg", icons, /* array */[]))), React.createElement("a", {
                                className: combineClasses(/* :: */[
                                      link("142B59"),
                                      /* :: */[
                                        revolve(180),
                                        /* [] */0
                                      ]
                                    ]),
                                href: Utils$Portfolio.linkedinLink,
                                rel: "external",
                                target: "_blank"
                              }, ReasonReact.element(/* None */0, /* None */0, Utils$Portfolio.FontAwesomeIcon[/* make */0](/* record */[
                                        /* prefix */"fab",
                                        /* iconName */"linkedin"
                                      ], "lg", icons, /* array */[]))))]));
    });
  return newrecord;
}

exports.Styles = Styles;
exports.component = component;
exports.combineClasses = combineClasses;
exports.make = make;
/* rotation Not a pure module */
