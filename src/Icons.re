open Utils;

module Styles = {
  open Css;
  let link = (iconColor: string) =>
    style([
      color(hex(iconColor)),
      visited([color(hex(iconColor))]),
      outlineStyle(none),
      focus([
        color(hex("BAE498")),
        borderBottom(px(1), solid, hex("BAE498")),
      ]),
    ]);
  let rotation =
    keyframes([
      (0, [transform(rotateY(deg(0)))]),
      (100, [transform(rotateY(deg(360)))]),
    ]);
  let carousel =
    style([
      top(em(-2.)),
      width(em(4.)),
      position(absolute),
      transformStyle(`preserve3d),
      animationName(rotation),
      animationDuration(20000),
      animationTimingFunction(linear),
      animationIterationCount(infinite),
      hover([animationPlayState(paused)]),
    ]);
  let revolve = (degrees: int) =>
    style([
      left(px(10)),
      top(px(10)),
      overflow(hidden),
      display(block),
      position(absolute),
      transforms([rotateY(deg(degrees)), translateZ(px(40))]),
    ]);
  let icons = style([margin(rem(0.5))]);
};

let component = ReasonReact.statelessComponent("Icons");

let make = (_) => {
  ...component,
  render: (_) =>
    <Transition
      before=(restyle(~opacity="0", ()))
      after=(restyle(~opacity="1", ~transition="opacity 8s", ()))>
      <div key="1" className=Styles.carousel>
        <a
          href=githubLink
          rel="external"
          target="_blank"
          className=(
            CommonStyles.combineClasses([
              Styles.link("fff"),
              Styles.revolve(0),
            ])
          )>
          <FontAwesomeIcon
            icon={prefix: "fab", iconName: "github"}
            size="lg"
            className=Styles.icons
          />
        </a>
        <a
          href=twitterLink
          rel="external"
          target="_blank"
          className=(
            CommonStyles.combineClasses([
              Styles.link("6FA8D8"),
              Styles.revolve(90),
            ])
          )>
          <FontAwesomeIcon
            icon={prefix: "fab", iconName: "twitter"}
            size="lg"
            className=Styles.icons
          />
        </a>
        <a
          href=linkedinLink
          rel="external"
          target="_blank"
          className=(
            CommonStyles.combineClasses([
              Styles.link("142B59"),
              Styles.revolve(180),
            ])
          )>
          <FontAwesomeIcon
            icon={prefix: "fab", iconName: "linkedin"}
            size="lg"
            className=Styles.icons
          />
        </a>
      </div>
    </Transition>,
};
