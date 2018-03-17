open Utils;

let component = ReasonReact.statelessComponent("Projects");

let make = _children => {
  ...component,
  render: _self => <div> (text("Projects")) </div>,
};
