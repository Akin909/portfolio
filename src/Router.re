open Utils;

module Styles = {
  open Css;
  global(
    "body, html",
    [
      padding(zero),
      margin(zero),
      fontFamily(defaultFont),
      fontSize(px(16)),
      boxSizing(borderBox),
    ],
  );
  let container =
    style([
      display(flexBox),
      flexDirection(column),
      alignItems(center),
      justifyContent(center),
      height(vh(100.0)),
      fontSize(rem(1.5)),
      color(white),
      marginTop(em(1.)),
      backgroundColor(CommonStyles.theme.background),
    ]);
};

type action =
  | ShowProjects
  | ShowHome
  | ShowBio
  | ShowInterests;

type state =
  | HomePage
  | BioPage
  | InterestsPage
  | ProjectsPage;

let component = ReasonReact.reducerComponent("Router");

let route =
    (
      url: ReasonReact.Router.url,
      self: ReasonReact.self(state, ReasonReact.noRetainedProps, action),
    ) =>
  switch (url.path) {
  | ["bio"] => self.send(ShowBio)
  | ["projects"] => self.send(ShowProjects)
  | ["interests"] => self.send(ShowInterests)
  | _ => self.send(ShowHome)
  };

let make = _children => {
  ...component,
  initialState: () => HomePage,
  reducer: (action, _state) =>
    switch (action) {
    | ShowHome => ReasonReact.Update(HomePage)
    | ShowProjects => ReasonReact.Update(ProjectsPage)
    | ShowBio => ReasonReact.Update(BioPage)
    | ShowInterests => ReasonReact.Update(InterestsPage)
    },
  subscriptions: self => [
    Sub(
      () => ReasonReact.Router.watchUrl(url => route(url, self)),
      ReasonReact.Router.unwatchUrl,
    ),
  ],
  didMount: (self) => {
    let url = ReasonReact.Router.dangerouslyGetInitialUrl();
    ignore(route(url, self));
  },
  render: ({state}) =>
    <div className=Styles.container style=(restyle(~textRendering="optimizeLegibility", ()))>
      <Nav />
      (
        switch (state) {
        | HomePage => <Home />
        | ProjectsPage => <Projects />
        | InterestsPage => <Interests />
        | BioPage => <Bio />
        }
      )
    </div>,
};
