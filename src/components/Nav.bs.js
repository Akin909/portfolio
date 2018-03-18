// Generated by BUCKLESCRIPT VERSION 2.2.2, PLEASE EDIT WITH CARE
'use strict';

var Css = require("bs-css/src/Css.js");
var React = require("react");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var Utils$Portfolio = require("../Utils.bs.js");

var navContainer = Css.style(/* :: */[
      Css.position(Css.absolute),
      /* :: */[
        Css.height(Css.em(3)),
        /* :: */[
          Css.width(Css.vw(100)),
          /* :: */[
            Css.top(Css.zero),
            /* :: */[
              Css.fontSize(Css.rem(0.8)),
              /* :: */[
                Css.display(/* flex */-1010954439),
                /* [] */0
              ]
            ]
          ]
        ]
      ]
    ]);

var links = Css.style(/* :: */[
      Css.display(/* flex */-1010954439),
      /* :: */[
        Css.flexDirection(Css.row),
        /* :: */[
          Css.alignSelf(Css.flexEnd),
          /* :: */[
            Css.width(/* `percent */[
                  -119887163,
                  100
                ]),
            /* [] */0
          ]
        ]
      ]
    ]);

var listItem = Css.style(/* :: */[
      Css.marginLeft(Css.em(1)),
      /* :: */[
        Css.marginRight(Css.em(1)),
        /* :: */[
          Css.fontSize(Css.em(1.2)),
          /* :: */[
            Css.whiteSpace(Css.nowrap),
            /* :: */[
              Css.hover(/* :: */[
                    Css.textDecoration(Css.underline),
                    /* [] */0
                  ]),
              /* :: */[
                Css.firstChild(/* :: */[
                      Css.marginLeft(Css.zero),
                      /* [] */0
                    ]),
                /* [] */0
              ]
            ]
          ]
        ]
      ]
    ]);

var component = ReasonReact.statelessComponent("NavigationBar");

function make() {
  var newrecord = component.slice();
  newrecord[/* render */9] = (function () {
      var navigate = function ($$event) {
        var element = Utils$Portfolio.getElement($$event.target);
        var id = element.getAttribute("id");
        if (id == null) {
          return ReasonReact.Router[/* push */0]("/");
        } else {
          return ReasonReact.Router[/* push */0](id);
        }
      };
      return React.createElement("nav", {
                  className: navContainer
                }, React.createElement("ul", {
                      className: links,
                      style: Utils$Portfolio.reStyle(/* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* Some */["none"], /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* () */0)
                    }, React.createElement("li", {
                          className: listItem,
                          onClick: navigate
                        }, Utils$Portfolio.str("Home")), React.createElement("li", {
                          className: listItem,
                          id: "projects",
                          onClick: navigate
                        }, Utils$Portfolio.str("Stuff I've done")), React.createElement("li", {
                          className: listItem,
                          id: "bio",
                          onClick: navigate
                        }, Utils$Portfolio.str("More about me")), React.createElement("li", {
                          className: listItem,
                          id: "interests",
                          onClick: navigate
                        }, Utils$Portfolio.str("Interests and Experience"))));
    });
  return newrecord;
}

exports.navContainer = navContainer;
exports.links = links;
exports.listItem = listItem;
exports.component = component;
exports.make = make;
/* navContainer Not a pure module */
