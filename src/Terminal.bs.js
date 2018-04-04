// Generated by BUCKLESCRIPT VERSION 2.2.3, PLEASE EDIT WITH CARE
'use strict';

var Css = require("bs-css/src/Css.js");
var React = require("react");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var Utils$Portfolio = require("./Utils.bs.js");

var container = Css.style(/* :: */[
      Css.height(/* `percent */[
            -119887163,
            40
          ]),
      /* :: */[
        Css.width(/* `percent */[
              -119887163,
              50
            ]),
        /* :: */[
          Css.margin(Css.em(1)),
          /* [] */0
        ]
      ]
    ]);

var header = Css.style(/* :: */[
      Css.width(/* `percent */[
            -119887163,
            100
          ]),
      /* :: */[
        Css.height(Css.em(1)),
        /* :: */[
          Css.backgroundColor(Css.whitesmoke),
          /* :: */[
            Css.borderTopLeftRadius(Css.px(50)),
            /* :: */[
              Css.borderTopRightRadius(Css.px(50)),
              /* [] */0
            ]
          ]
        ]
      ]
    ]);

var content = Css.style(/* :: */[
      Css.width(/* `percent */[
            -119887163,
            100
          ]),
      /* :: */[
        Css.backgroundColor(Css.purple),
        /* :: */[
          Css.height(/* `percent */[
                -119887163,
                100
              ]),
          /* [] */0
        ]
      ]
    ]);

var Styles = /* module */[
  /* container */container,
  /* header */header,
  /* content */content
];

var component = ReasonReact.statelessComponent("Terminal");

function make() {
  var newrecord = component.slice();
  newrecord[/* render */9] = (function () {
      return React.createElement("div", {
                  className: container
                }, React.createElement("header", {
                      className: header
                    }, Utils$Portfolio.str("title")), React.createElement("div", {
                      className: content
                    }, Utils$Portfolio.str("text")));
    });
  return newrecord;
}

exports.Styles = Styles;
exports.component = component;
exports.make = make;
/* container Not a pure module */