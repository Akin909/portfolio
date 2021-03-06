/* Aliases for long function names */
let str = ReasonReact.string;

let getElement = ReactDOMRe.domElementToObj;

let getText = (event: ReactEventRe.Form.t) => getElement(
                                                 ReactEventRe.Form.target(
                                                   event,
                                                 ),
                                               )##value;

let getTextFromEl = (el: Js.t('a)) => el##value;

let restyle = ReactDOMRe.Style.make;

/* Helper functions */
[@bs.val] external requireAssetUri : string => string = "require";

[@bs.val] external importCss : string => unit = "import";

/* Abstract types for font awesome methods - no official bindings */
type lib;

type listOfIcons;

type icon = {
  prefix: string,
  iconName: string,
};

[@bs.send] [@bs.return nullable]
external getAttribute : (Js.t('a), string) => option(string) =
  "getAttribute";

/* FONTAWESOME SETUP */
[@bs.module]
external fontAwesome : ReasonReact.reactClass =
  "@fortawesome/react-fontawesome";

[@bs.module "@fortawesome/fontawesome-free-brands"]
external brands : listOfIcons = "default";

[@bs.module "@fortawesome/fontawesome"] external library : lib = "";

[@bs.send] external add : (lib, listOfIcons) => unit = "add";

add(library, brands);

module FontAwesomeIcon = {
  let make = (~icon: icon, ~size: string, ~className: string, children) =>
    ReasonReact.wrapJsForReason(
      ~reactClass=fontAwesome,
      ~props={"icon": icon, "size": size, "className": className},
      children,
    );
};

module Slick = {
  /* React Slick Interop */
  [@bs.module "react-slick"]
  external reactSlick : ReasonReact.reactClass = "default";
  type settings = {
    dots: bool,
    infinite: bool,
    speed: int,
    slidesToShow: int,
    slidesToScroll: int,
  };
  let make = (~settings: settings, children) =>
    ReasonReact.wrapJsForReason(
      ~reactClass=reactSlick,
      ~props={
        "dots": settings.dots,
        "infinite": settings.infinite,
        "speed": settings.speed,
        "slidesToShow": settings.slidesToShow,
        "slidesToScroll": settings.slidesToScroll,
      },
      children,
    );
};

let linkedinLink = "https://www.linkedin.com/in/akin-sowemimo-831383131/";

let githubLink = "https://www.github.com/Akin909";

let twitterLink = "https://www.twitter.com/Akin_So";

let defaultFont = {| -apple-system, BlinkMacSystemFont,
                    "Segoe UI",Roboto, Helvetica, Arial, sans-serif,
                    "Apple Color Emoji","Segoe UI Emoji", "Segoe UI Symbol"
                  |};

let renderText = (details: array(string), className: string) =>
  Array.mapi(
    (index, line) =>
      <p className key=(string_of_int(index))> (str(line)) </p>,
    details,
  )
  |> ReasonReact.array;

let split_on_char = (sep, s) => {
  let r = ref([]);
  let j = ref(String.length(s));
  for (i in String.length(s) - 1 downto 0) {
    if (String.unsafe_get(s, i) == sep) {
      r := [String.sub(s, i + 1, j^ - i - 1), ...r^];
      j := i;
    };
  };
  [String.sub(s, 0, j^), ...r^];
};
