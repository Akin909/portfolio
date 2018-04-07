// Generated by BUCKLESCRIPT VERSION 2.2.3, PLEASE EDIT WITH CARE
'use strict';

var Css = require("bs-css/src/Css.js");
var List = require("bs-platform/lib/js/list.js");
var $$Array = require("bs-platform/lib/js/array.js");
var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var Shell$Portfolio = require("./Shell.bs.js");
var Utils$Portfolio = require("./Utils.bs.js");
var TitleBar$Portfolio = require("./TitleBar.bs.js");

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
          /* :: */[
            Css.paddingBottom(Css.em(1)),
            /* [] */0
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
          /* :: */[
            Css.borderBottomLeftRadius(Css.px(5)),
            /* :: */[
              Css.borderBottomRightRadius(Css.px(5)),
              /* :: */[
                Css.padding(Css.em(1.0)),
                /* :: */[
                  Css.boxSizing(Css.borderBox),
                  /* :: */[
                    Css.overflow(Css.scroll),
                    /* [] */0
                  ]
                ]
              ]
            ]
          ]
        ]
      ]
    ]);

var input = Css.style(/* :: */[
      Css.borderWidth(Css.zero),
      /* :: */[
        Css.fontSize(Css.em(1)),
        /* :: */[
          Css.backgroundColor(/* transparent */582626130),
          /* :: */[
            Css.color(Css.white),
            /* :: */[
              Css.outlineStyle(Css.none),
              /* [] */0
            ]
          ]
        ]
      ]
    ]);

var prompt = Css.style(/* :: */[
      Css.color(Css.deepskyblue),
      /* :: */[
        Css.marginRight(Css.em(0.2)),
        /* [] */0
      ]
    ]);

var inputContainer = Css.style(/* :: */[
      Css.marginTop(Css.em(1)),
      /* :: */[
        Css.marginBottom(Css.em(1)),
        /* [] */0
      ]
    ]);

var Styles = /* module */[
  /* container */container,
  /* content */content,
  /* input */input,
  /* prompt */prompt,
  /* inputContainer */inputContainer
];

var component = ReasonReact.reducerComponent("Terminal");

function setFocusedRef(r, param) {
  param[/* state */2][/* focusedPromptRef */4][0] = (r == null) ? /* None */0 : [r];
  return /* () */0;
}

function showLastHistoryItem(history) {
  var length = List.length(history);
  return List.nth(history, length - 1 | 0);
}

function savePromptText(state) {
  return List.map((function (prompt) {
                var match = +(prompt[/* id */1] === state[/* currentId */3]);
                if (match !== 0) {
                  return /* record */[
                          /* text : array */[state[/* input */1]],
                          /* id */prompt[/* id */1],
                          /* exitCode */prompt[/* exitCode */2],
                          /* error */prompt[/* error */3]
                        ];
                } else {
                  return prompt;
                }
              }), state[/* history */2]);
}

function updateHistory(state, id, prevCmdStatus) {
  var history = savePromptText(state);
  return Shell$Portfolio.newPrompt(history, prevCmdStatus, id);
}

function scrollIntoView(el) {
  if (el) {
    return Utils$Portfolio.getElement(el[0]).scrollIntoView();
  } else {
    return /* () */0;
  }
}

function focusElement(el) {
  if (el) {
    return Utils$Portfolio.getElement(el[0]).focus();
  } else {
    return /* () */0;
  }
}

function make() {
  var handleSubmit = function (text, arg, state) {
    var id = state[/* currentId */3] + 1 | 0;
    var result = Shell$Portfolio.parseInput(text, arg);
    switch (result.tag | 0) {
      case 0 : 
          return /* Update */Block.__(0, [/* record */[
                      /* shell */state[/* shell */0],
                      /* input */"",
                      /* history */updateHistory(state, id, /* ShellSuccess */Block.__(0, [result[0]])),
                      /* currentId */id + 1 | 0,
                      /* focusedPromptRef */state[/* focusedPromptRef */4]
                    ]]);
      case 1 : 
          return /* Update */Block.__(0, [/* record */[
                      /* shell */state[/* shell */0],
                      /* input */"",
                      /* history */result[0],
                      /* currentId */1,
                      /* focusedPromptRef */state[/* focusedPromptRef */4]
                    ]]);
      case 2 : 
          var shell = result[0];
          return /* Update */Block.__(0, [/* record */[
                      /* shell */shell,
                      /* input */"",
                      /* history */updateHistory(state, id, /* ChangeShell */Block.__(2, [shell])),
                      /* currentId */state[/* currentId */3],
                      /* focusedPromptRef */state[/* focusedPromptRef */4]
                    ]]);
      case 3 : 
          return /* Update */Block.__(0, [/* record */[
                      /* shell */state[/* shell */0],
                      /* input */"",
                      /* history */updateHistory(state, id, /* ShellFailure */Block.__(3, [result[0]])),
                      /* currentId */id + 1 | 0,
                      /* focusedPromptRef */state[/* focusedPromptRef */4]
                    ]]);
      
    }
  };
  var newrecord = component.slice();
  newrecord[/* didUpdate */5] = (function (param) {
      return scrollIntoView(param[/* newSelf */1][/* state */2][/* focusedPromptRef */4][0]);
    });
  newrecord[/* render */9] = (function (self) {
      return React.createElement("div", {
                  className: container
                }, ReasonReact.element(/* None */0, /* None */0, TitleBar$Portfolio.make(self[/* state */2][/* shell */0], /* array */[])), React.createElement("div", {
                      className: content
                    }, $$Array.of_list(List.rev(List.map((function (param) {
                                    var error = param[/* error */3];
                                    return React.createElement("div", undefined, param[/* exitCode */2] ? null : React.createElement("span", {
                                                      className: prompt
                                                    }, Utils$Portfolio.str(Shell$Portfolio.showPrompt(/* None */0, /* None */0, /* () */0))), React.createElement("div", undefined, Utils$Portfolio.renderText(param[/* text */0], inputContainer)), error ? React.createElement("p", undefined, Utils$Portfolio.str("Error: " + error[0])) : null);
                                  }), self[/* state */2][/* history */2]))), React.createElement("label", {
                          onKeyDown: (function ($$event) {
                              return Curry._1(self[/* send */4], /* KeyDown */Block.__(1, [$$event.which]));
                            })
                        }, React.createElement("span", {
                              className: prompt
                            }, Utils$Portfolio.str(Shell$Portfolio.showPrompt(/* None */0, /* None */0, /* () */0))), React.createElement("input", {
                              ref: Curry._1(self[/* handle */0], setFocusedRef),
                              className: input,
                              style: Utils$Portfolio.restyle(/* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* Some */["#57D900"], /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* () */0),
                              autoFocus: true,
                              value: self[/* state */2][/* input */1],
                              onBlur: (function () {
                                  return Curry._1(self[/* send */4], /* Focus */0);
                                }),
                              onChange: (function (evt) {
                                  var element = evt;
                                  var self$1 = self;
                                  var text = Utils$Portfolio.getText(element);
                                  return Curry._1(self$1[/* send */4], /* Change */Block.__(0, [text]));
                                })
                            }))));
    });
  newrecord[/* initialState */10] = (function () {
      return /* record */[
              /* shell */"bash",
              /* input */"",
              /* history : :: */[
                /* record */[
                  /* text : array */["Find out more about me, use the 'help' command to learn more"],
                  /* id */1,
                  /* exitCode : None */0,
                  /* error : None */0
                ],
                /* [] */0
              ],
              /* currentId */1,
              /* focusedPromptRef */[/* None */0]
            ];
    });
  newrecord[/* reducer */12] = (function (action, state) {
      if (typeof action === "number") {
        return /* SideEffects */Block.__(2, [(function (param) {
                      return focusElement(param[/* state */2][/* focusedPromptRef */4][0]);
                    })]);
      } else if (action.tag) {
        var state$1 = state;
        var key = action[0];
        var currentId = state$1[/* currentId */3];
        var history = state$1[/* history */2];
        var result = Utils$Portfolio.split_on_char(/* " " */32, state$1[/* input */1]);
        var exit = 0;
        if (key !== 13) {
          if (key !== 38) {
            return /* NoUpdate */0;
          } else {
            var item = showLastHistoryItem(history);
            return /* Update */Block.__(0, [/* record */[
                        /* shell */state$1[/* shell */0],
                        /* input */item[/* text */0].join(),
                        /* history */state$1[/* history */2],
                        /* currentId */state$1[/* currentId */3],
                        /* focusedPromptRef */state$1[/* focusedPromptRef */4]
                      ]]);
          }
        } else if (result) {
          var text = result[0];
          var match = result[1];
          if (match) {
            if (match[1]) {
              return /* NoUpdate */0;
            } else {
              return handleSubmit(text, match[0], state$1);
            }
          } else if (text === "") {
            exit = 1;
          } else {
            return handleSubmit(text, "", state$1);
          }
        } else {
          exit = 1;
        }
        if (exit === 1) {
          return /* Update */Block.__(0, [/* record */[
                      /* shell */state$1[/* shell */0],
                      /* input */state$1[/* input */1],
                      /* history : :: */[
                        /* record */[
                          /* text : array */[""],
                          /* id */currentId + 1 | 0,
                          /* exitCode : None */0,
                          /* error : None */0
                        ],
                        history
                      ],
                      /* currentId */currentId + 1 | 0,
                      /* focusedPromptRef */state$1[/* focusedPromptRef */4]
                    ]]);
        }
        
      } else {
        return /* Update */Block.__(0, [/* record */[
                    /* shell */state[/* shell */0],
                    /* input */action[0],
                    /* history */state[/* history */2],
                    /* currentId */state[/* currentId */3],
                    /* focusedPromptRef */state[/* focusedPromptRef */4]
                  ]]);
      }
    });
  return newrecord;
}

exports.Styles = Styles;
exports.component = component;
exports.setFocusedRef = setFocusedRef;
exports.showLastHistoryItem = showLastHistoryItem;
exports.savePromptText = savePromptText;
exports.updateHistory = updateHistory;
exports.scrollIntoView = scrollIntoView;
exports.focusElement = focusElement;
exports.make = make;
/* container Not a pure module */
