"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 381:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/styles/GlobalComponents/index.js

const Section = external_styled_components_default().section.withConfig({
  displayName: "GlobalComponents__Section",
  componentId: "sc-6qzy6y-0"
})(["display:", ";flex-direction:", ";padding:", ";margin:0 auto;max-width:1040px;box-sizing:content-box;position:relative;overflow:hidden;grid-template-columns:1fr 1fr;@media ", "{padding:24px 48px 0;flex-direction:column;}@media ", "{padding:", ";width:calc(100vw - 32px);flex-direction:column;}"], props => props.grid ? "grid" : "flex", props => props.row ? "row" : "column", props => props.nopadding ? "0" : "32px 48px 0", props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm, props => props.nopadding ? "0" : "16px 16px 0");
const SectionTitle = external_styled_components_default().h2.withConfig({
  displayName: "GlobalComponents__SectionTitle",
  componentId: "sc-6qzy6y-1"
})(["font-weight:800;font-size:", ";line-height:", ";width:max-content;max-width:100%;background:linear-gradient(121.57deg,#FFFFFF 18.77%,rgba(255,255,255,0.66) 60.15%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:16px;padding:", ";@media ", "{font-size:", ";line-height:", ";margin-bottom:12px;padding:", ";}@media ", "{font-size:32px;line-height:40px;font-size:", ";line-height:", ";margin-bottom:8px;padding:", ";max-width:100%;}"], props => props.main ? '65px' : '56px', props => props.main ? '72px' : '56px', props => props.main ? '58px 0 16px' : '0', props => props.theme.breakpoints.md, props => props.main ? '56px' : '48px', props => props.main ? '56px' : '48px', props => props.main ? '40px 0 12px' : '0', props => props.theme.breakpoints.sm, props => props.main ? '28px' : '32px', props => props.main ? '32px' : '40px', props => props.main ? '16px 0 8px' : '0');
const SectionText = external_styled_components_default().p.withConfig({
  displayName: "GlobalComponents__SectionText",
  componentId: "sc-6qzy6y-2"
})(["max-width:800px;font-size:24px;line-height:40px;font-weight:300;padding-bottom:3.6rem;color:rgba(255,255,255,0.5);@media ", "{max-width:670px;font-size:20px;line-height:32px;padding-bottom:24px;}@media ", "{font-size:16px;line-height:24px;padding-bottom:16px;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const SectionDivider = external_styled_components_default().div.withConfig({
  displayName: "GlobalComponents__SectionDivider",
  componentId: "sc-6qzy6y-3"
})(["width:64px;height:6px;border-radius:10px;background-color:#fff;background:", ";margin:", ";@media ", "{width:48px;height:4px;}@media ", "{width:32px;height:2px;}"], props => props.colorAlt ? 'linear-gradient(270deg, #F46737 0%, #945DD6 100%)' : 'linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)', props => props.divider ? "4rem 0" : "", props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const SectionSubText = external_styled_components_default().p.withConfig({
  displayName: "GlobalComponents__SectionSubText",
  componentId: "sc-6qzy6y-4"
})(["max-width:800px;font-weight:300;font-size:18px;line-height:32px;color:rgba(255,255,255,0.75);@media ", "{max-width:672px;font-size:16px;line-height:25px;}@media ", "{font-size:14px;line-height:22px;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const SecondaryBtn = external_styled_components_default().button.withConfig({
  displayName: "GlobalComponents__SecondaryBtn",
  componentId: "sc-6qzy6y-5"
})(["color:#FFF;background:none;border:1px solid rgba(255,255,255,0.33);box-sizing:border-box;border-radius:999px;padding:16px 24px;font-weight:600;font-size:18px;line-height:16px;width:fit-content;margin-top:32px;margin-bottom:80px;cursor:pointer;transition:0.4s ease;&:focus{outline:none;}&:hover{color:#0f1624;background:#fff;border:1px solid #fff;}&:active{background:#e0e4eb;border:1px solid #304169;box-shadow:inset 0px 2px 1px rgba(46,49,55,0.15),inset 0px 0px 4px rgba(20,20,55,0.3);}@media ", "{margin-top:24px;margin-bottom:64px;padding:16px 24px;width:fit-content;font-size:20px;line-height:20px;}@media ", "{margin-top:16px;margin-bottom:40px;padding:8px 16px;width:100%;font-size:14px;line-height:16px;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const ButtonBack = external_styled_components_default().div.withConfig({
  displayName: "GlobalComponents__ButtonBack",
  componentId: "sc-6qzy6y-6"
})(["width:", ";height:", ";border-radius:50px;font-size:", ";font-weight:600;display:flex;align-items:center;justify-content:center;margin:", ";color:#fff;background:", ";cursor:pointer;transition:0.5s ease;position:relative;overflow:hidden;opacity:", ";@media ", "{width:", ";height:", ";font-size:", ";margin-bottom:", ";}@media ", "{width:100%;height:32px;font-size:14px;margin-bottom:", ";}"], ({
  alt
}) => alt ? '150px' : '262px', ({
  alt
}) => alt ? '52px' : '64px', ({
  alt
}) => alt ? '20px' : '24px', ({
  alt,
  form
}) => alt || form ? '0' : '0 0 80px', ({
  alt
}) => alt ? 'linear-gradient(270deg, #ff622e 0%, #B133FF 100%)' : 'linear-gradient(270deg, #00DBD8 0%, #B133FF 100%)', ({
  disabled
}) => disabled ? '.5' : '1', props => props.theme.breakpoints.md, ({
  alt
}) => alt ? '150px' : '184px', ({
  alt
}) => alt ? '52px' : '48px', ({
  alt
}) => alt ? '20px' : '16px', ({
  alt
}) => alt ? '0' : '64px', props => props.theme.breakpoints.sm, ({
  alt
}) => alt ? '0' : '32px');
const ButtonFront = external_styled_components_default().button.withConfig({
  displayName: "GlobalComponents__ButtonFront",
  componentId: "sc-6qzy6y-7"
})(["border:none;border-radius:50px;color:#fff;display:flex;position:absolute;top:0;left:0;width:100%;height:100%;background:", ";opacity:", ";transition:.4s ease;font-size:", ";font-weight:600;align-items:center;justify-content:center;cursor:pointer;box-shadow:", ";&:hover{opacity:0;}&:focus{outline:none;}&:active{opacity:1;box-shadow:inset 0px 2px 1px rgba(46,49,55,0.15),inset 0px 0px 4px rgba(20,20,55,0.3);}&:disabled{background:linear-gradient(270deg,#00DBD8 0%,#B133FF 100%);opacity:0.5;box-shadow:inset 0px 2px 1px rgba(46,49,55,0.15),inset 0px 0px 4px rgba(20,20,55,0.3);}@media ", "{font-size:", ";}@media ", "{font-size:14px;}"], ({
  alt
}) => alt ? 'linear-gradient(270deg, #F46737 0%, #945DD6 100%)' : 'linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)', ({
  disabled
}) => disabled ? '.5' : '1', ({
  alt
}) => alt ? '20px' : '24px', ({
  disabled
}) => disabled ? 'inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3)' : 'none', props => props.theme.breakpoints.md, ({
  alt
}) => alt ? '20px' : '16px', props => props.theme.breakpoints.sm);
const LinkContainer = external_styled_components_default().div.withConfig({
  displayName: "GlobalComponents__LinkContainer",
  componentId: "sc-6qzy6y-8"
})(["margin-left:", ";transition:0.3s ease;justify-content:center;border-radius:50px;padding:8px;&:hover{background-color:#212d45;transform:scale(1.2);cursor:pointer;}@media ", "{margin-left:", ";}@media ", "{margin-left:", ";}"], ({
  large
}) => large ? '24px' : '16px', props => props.theme.breakpoints.md, ({
  large
}) => large ? '16px' : '8px', props => props.theme.breakpoints.sm, ({
  large
}) => large ? '0' : '8px');
const LinkIconImg = external_styled_components_default().div.withConfig({
  displayName: "GlobalComponents__LinkIconImg",
  componentId: "sc-6qzy6y-9"
})(["display:flex;height:", ";@media ", "{height:", ";}@media ", "{height:", ";}"], ({
  large
}) => large ? '32px' : '24px', props => props.theme.breakpoints.md, ({
  nav
}) => nav ? '16px' : '24px', props => props.theme.breakpoints.sm, ({
  large
}) => large ? '32px' : '16px');
;// CONCATENATED MODULE: ./src/components/Acomplishments/AcomplishmentsStyles.js

const Boxes = external_styled_components_default().div.withConfig({
  displayName: "AcomplishmentsStyles__Boxes",
  componentId: "vuq5bz-0"
})(["width:100%;display:grid;grid-template-columns:repeat(4,1fr);gap:24px;margin:24px 0 40px;@media ", "{gap:16px;margin:20px 0 32px;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));}@media ", "{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;max-width:500px;margin:24px auto;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const Box = external_styled_components_default().div.withConfig({
  displayName: "AcomplishmentsStyles__Box",
  componentId: "vuq5bz-1"
})(["background:#212D45;border-radius:12px;height:144px;padding:24px;@media ", "{height:210px;}@media ", "{height:135px;padding:16px;}@media ", "{padding:12px;&:nth-child(2n){grid-row:2;}}"], props => props.theme.breakpoints.lg, props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const BoxNum = external_styled_components_default().h5.withConfig({
  displayName: "AcomplishmentsStyles__BoxNum",
  componentId: "vuq5bz-2"
})(["font-style:normal;font-weight:600;font-size:36px;line-height:40px;letter-spacing:0.01em;color:#FFFFFF;margin-bottom:8px;@media ", "{font-size:28px;line-height:32px;}@media ", "{font-size:24px;line-height:26px;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const BoxText = external_styled_components_default().p.withConfig({
  displayName: "AcomplishmentsStyles__BoxText",
  componentId: "vuq5bz-3"
})(["font-style:normal;font-weight:normal;font-size:18px;line-height:24px;letter-spacing:0.02em;color:rgba(255,255,255,0.75);@media ", "{font-size:16px;line-height:20px;};@media ", "{font-size:10px;line-height:14px;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const Join = external_styled_components_default().div.withConfig({
  displayName: "AcomplishmentsStyles__Join",
  componentId: "vuq5bz-4"
})(["display:flex;max-width:1040px;justify-content:center;align-items:center;padding-bottom:80px;@media ", "{display:flex;justify-content:center;padding-bottom:64px;}@media ", "{display:flex;flex-direction:column;align-items:center;padding-bottom:32px;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const JoinText = external_styled_components_default().h5.withConfig({
  displayName: "AcomplishmentsStyles__JoinText",
  componentId: "vuq5bz-5"
})(["display:flex;font-size:24px;line-height:40px;letter-spacing:0.02em;color:rgba(255,255,255,0.5);@media ", "{line-height:32px;font-size:20px;};@media ", "{font-size:16px;line-height:24px;margin:0 0 16px;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const IconContainer = external_styled_components_default().div.withConfig({
  displayName: "AcomplishmentsStyles__IconContainer",
  componentId: "vuq5bz-6"
})(["display:flex;@media ", "{width:160px;justify-content:space-between;}"], props => props.theme.breakpoints.sm);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/Acomplishments/Acomplishments.js





const data = [{
  number: "1st Place",
  text: '2017 Victoria FRC Competition'
}, {
  number: "2nd Place",
  text: '2020 Victoria FRC Competition'
}, {
  number: "3rd Place",
  text: 'Replit Alexa Hackathon'
}, {
  number: "5+",
  text: 'Hackathons'
}, {
  number: "20+",
  text: 'Mentored over 20 students'
}, {
  number: "Finalists",
  text: 'FRC Houston World Championship'
}];

const Acomplishments = () => /*#__PURE__*/(0,jsx_runtime_.jsxs)(Section, {
  style: {
    marginTop: '50px'
  },
  children: [/*#__PURE__*/jsx_runtime_.jsx(SectionTitle, {
    children: "Personal Achievements"
  }), /*#__PURE__*/jsx_runtime_.jsx(Boxes, {
    children: data.map((card, index) => /*#__PURE__*/(0,jsx_runtime_.jsxs)(Box, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(BoxNum, {
        children: `${card.number}`
      }), /*#__PURE__*/jsx_runtime_.jsx(BoxText, {
        children: card.text
      })]
    }, index))
  }), /*#__PURE__*/jsx_runtime_.jsx(SectionDivider, {})]
});

/* harmony default export */ const Acomplishments_Acomplishments = (Acomplishments);
;// CONCATENATED MODULE: ./src/components/BackgrooundAnimation/BackgroundAnimation.js




const BackgroundAnimation = () => /*#__PURE__*/jsx_runtime_.jsx("div", {
  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
    className: "BgAnimation__svg",
    viewBox: "0 0 602 602",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("g", {
      opacity: "0.15",
      children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M201.337 87.437C193.474 79.5738 180.725 79.5738 172.862 87.437L87.437 172.862C79.5739 180.725 79.5739 193.474 87.437 201.337L400.663 514.563C408.526 522.426 421.275 522.426 429.138 514.563L514.563 429.138C522.426 421.275 522.426 408.526 514.563 400.663L201.337 87.437ZM30.4869 115.912C-8.82897 155.228 -8.82897 218.972 30.4869 258.287L343.713 571.513C383.028 610.829 446.772 610.829 486.088 571.513L571.513 486.088C610.829 446.772 610.829 383.028 571.513 343.713L258.287 30.4869C218.972 -8.82896 155.228 -8.82896 115.912 30.4869L30.4869 115.912Z",
        stroke: "url(#paint0_radial)",
        id: "path_0"
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M514.563 201.337C522.426 193.474 522.426 180.725 514.563 172.862L429.138 87.437C421.275 79.5738 408.526 79.5739 400.663 87.437L358.098 130.002L301.148 73.0516L343.713 30.4869C383.028 -8.82896 446.772 -8.82896 486.088 30.4869L571.513 115.912C610.829 155.228 610.829 218.972 571.513 258.287L357.802 471.999L300.852 415.049L514.563 201.337Z",
        stroke: "url(#paint1_radial)",
        id: "path_1"
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M243.901 471.999L201.337 514.563C193.474 522.426 180.725 522.426 172.862 514.563L87.437 429.138C79.5739 421.275 79.5739 408.526 87.437 400.663L301.148 186.952L244.198 130.002L30.4869 343.713C-8.82897 383.028 -8.82897 446.772 30.4869 486.088L115.912 571.513C155.228 610.829 218.972 610.829 258.287 571.513L300.852 528.949L243.901 471.999Z",
        stroke: "url(#paint2_radial)",
        id: "path_2"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("ellipse", {
      cx: "295.027",
      cy: "193.118",
      transform: "translate(-295.027 -193.118)",
      rx: "1.07306",
      ry: "1.07433",
      fill: "#945DD6",
      children: /*#__PURE__*/jsx_runtime_.jsx("animateMotion", {
        dur: "10s",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/jsx_runtime_.jsx("mpath", {
          xlinkHref: "#path_2"
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M294.685 193.474L268.932 219.258",
      transform: "translate(-294.685 -193.474) rotate(45 294.685 193.474)",
      stroke: "url(#paint3_linear)",
      children: /*#__PURE__*/jsx_runtime_.jsx("animateMotion", {
        dur: "10s",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/jsx_runtime_.jsx("mpath", {
          xlinkHref: "#path_2"
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("ellipse", {
      cx: "295.027",
      cy: "193.118",
      transform: "translate(-295.027 -193.118)",
      rx: "1.07306",
      ry: "1.07433",
      fill: "#46737",
      children: /*#__PURE__*/jsx_runtime_.jsx("animateMotion", {
        dur: "5s",
        begin: "1",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/jsx_runtime_.jsx("mpath", {
          xlinkHref: "#path_2"
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M294.685 193.474L268.932 219.258",
      transform: "translate(-294.685 -193.474) rotate(45 294.685 193.474)",
      stroke: "url(#paint7_linear)",
      children: /*#__PURE__*/jsx_runtime_.jsx("animateMotion", {
        dur: "5s",
        begin: "1",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/jsx_runtime_.jsx("mpath", {
          xlinkHref: "#path_2"
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("ellipse", {
      cx: "476.525",
      cy: "363.313",
      rx: "1.07433",
      ry: "1.07306",
      transform: "translate(-476.525 -363.313) rotate(90 476.525 363.313)",
      fill: "#945DD6",
      children: /*#__PURE__*/jsx_runtime_.jsx("animateMotion", {
        dur: "10s",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/jsx_runtime_.jsx("mpath", {
          xlinkHref: "#path_0"
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M476.171 362.952L450.417 337.168",
      transform: "translate(-476.525 -363.313) rotate(-45 476.171 362.952)",
      stroke: "url(#paint4_linear)",
      children: /*#__PURE__*/jsx_runtime_.jsx("animateMotion", {
        dur: "10s",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/jsx_runtime_.jsx("mpath", {
          xlinkHref: "#path_0"
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("ellipse", {
      cx: "382.164",
      cy: "155.029",
      rx: "1.07433",
      ry: "1.07306",
      transform: "translate(-382.164 -155.029) rotate(90 382.164 155.029)",
      fill: "#F46737",
      children: /*#__PURE__*/jsx_runtime_.jsx("animateMotion", {
        dur: "10s",
        begin: "1",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/jsx_runtime_.jsx("mpath", {
          xlinkHref: "#path_0"
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M381.81 154.669L356.057 128.885",
      transform: "translate(-381.81 -154.669) rotate(-45 381.81 154.669)",
      stroke: "url(#paint5_linear)",
      children: /*#__PURE__*/jsx_runtime_.jsx("animateMotion", {
        dur: "10s",
        begin: "1",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/jsx_runtime_.jsx("mpath", {
          xlinkHref: "#path_0"
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("ellipse", {
      cx: "333.324",
      cy: "382.691",
      rx: "1.07306",
      ry: "1.07433",
      transform: "translate(-333.324 -382.691) rotate(-180 333.324 382.691)",
      fill: "#F46737",
      children: /*#__PURE__*/jsx_runtime_.jsx("animateMotion", {
        dur: "5s",
        begin: "0",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/jsx_runtime_.jsx("mpath", {
          xlinkHref: "#path_1"
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M333.667 382.335L359.42 356.551",
      transform: "scale(-1 1) translate(-333.667 -382.335) rotate(45 333.667 382.335)",
      stroke: "url(#paint6_linear)",
      children: /*#__PURE__*/jsx_runtime_.jsx("animateMotion", {
        dur: "5s",
        begin: "0",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/jsx_runtime_.jsx("mpath", {
          xlinkHref: "#path_1"
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("ellipse", {
      cx: "165.524",
      cy: "93.9596",
      rx: "1.07306",
      ry: "1.07433",
      transform: "translate(-165.524 -93.9596)",
      fill: "#F46737",
      children: /*#__PURE__*/jsx_runtime_.jsx("animateMotion", {
        dur: "10s",
        begin: "3",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/jsx_runtime_.jsx("mpath", {
          xlinkHref: "#path_0"
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M165.182 94.3159L139.429 120.1",
      transform: "translate(-165.182 -94.3159) rotate(45 165.182 94.3159)",
      stroke: "url(#paint7_linear)",
      children: /*#__PURE__*/jsx_runtime_.jsx("animateMotion", {
        dur: "10s",
        begin: "3",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/jsx_runtime_.jsx("mpath", {
          xlinkHref: "#path_0"
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("ellipse", {
      cx: "476.525",
      cy: "363.313",
      rx: "1.07433",
      ry: "1.07306",
      transform: "translate(-476.525 -363.313) rotate(90 476.525 363.313)",
      fill: "#13ADC7",
      children: /*#__PURE__*/jsx_runtime_.jsx("animateMotion", {
        dur: "12s",
        begin: "4",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/jsx_runtime_.jsx("mpath", {
          xlinkHref: "#path_0"
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M476.171 362.952L450.417 337.168",
      transform: "translate(-476.525 -363.313) rotate(-45 476.171 362.952)",
      stroke: "url(#paint11_linear)",
      children: /*#__PURE__*/jsx_runtime_.jsx("animateMotion", {
        dur: "12s",
        begin: "4",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/jsx_runtime_.jsx("mpath", {
          xlinkHref: "#path_0"
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("defs", {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("radialGradient", {
        id: "paint0_radial",
        cx: "0",
        cy: "0",
        r: "1",
        gradientUnits: "userSpaceOnUse",
        gradientTransform: "translate(301 301) rotate(90) scale(300)",
        children: [/*#__PURE__*/jsx_runtime_.jsx("stop", {
          offset: "0.333333",
          stopColor: "#FBFBFB"
        }), /*#__PURE__*/jsx_runtime_.jsx("stop", {
          offset: "1",
          stopColor: "white",
          stopOpacity: "0"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("radialGradient", {
        id: "paint1_radial",
        cx: "0",
        cy: "0",
        r: "1",
        gradientUnits: "userSpaceOnUse",
        gradientTransform: "translate(301 301) rotate(90) scale(300)",
        children: [/*#__PURE__*/jsx_runtime_.jsx("stop", {
          offset: "0.333333",
          stopColor: "#FBFBFB"
        }), /*#__PURE__*/jsx_runtime_.jsx("stop", {
          offset: "1",
          stopColor: "white",
          stopOpacity: "0"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("radialGradient", {
        id: "paint2_radial",
        cx: "0",
        cy: "0",
        r: "1",
        gradientUnits: "userSpaceOnUse",
        gradientTransform: "translate(301 301) rotate(90) scale(300)",
        children: [/*#__PURE__*/jsx_runtime_.jsx("stop", {
          offset: "0.333333",
          stopColor: "#FBFBFB"
        }), /*#__PURE__*/jsx_runtime_.jsx("stop", {
          offset: "1",
          stopColor: "white",
          stopOpacity: "0"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("linearGradient", {
        id: "paint3_linear",
        x1: "295.043",
        y1: "193.116",
        x2: "269.975",
        y2: "218.154",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/jsx_runtime_.jsx("stop", {
          stopColor: "#945DD6"
        }), /*#__PURE__*/jsx_runtime_.jsx("stop", {
          offset: "1",
          stopColor: "#945DD6",
          stopOpacity: "0"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("linearGradient", {
        id: "paint4_linear",
        x1: "476.529",
        y1: "363.31",
        x2: "451.461",
        y2: "338.272",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/jsx_runtime_.jsx("stop", {
          stopColor: "#945DD6"
        }), /*#__PURE__*/jsx_runtime_.jsx("stop", {
          offset: "1",
          stopColor: "#945DD6",
          stopOpacity: "0"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("linearGradient", {
        id: "paint5_linear",
        x1: "382.168",
        y1: "155.027",
        x2: "357.1",
        y2: "129.989",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/jsx_runtime_.jsx("stop", {
          stopColor: "#F46737"
        }), /*#__PURE__*/jsx_runtime_.jsx("stop", {
          offset: "1",
          stopColor: "#F46737",
          stopOpacity: "0"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("linearGradient", {
        id: "paint6_linear",
        x1: "333.309",
        y1: "382.693",
        x2: "358.376",
        y2: "357.655",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/jsx_runtime_.jsx("stop", {
          stopColor: "#F46737"
        }), /*#__PURE__*/jsx_runtime_.jsx("stop", {
          offset: "1",
          stopColor: "#F46737",
          stopOpacity: "0"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("linearGradient", {
        id: "paint7_linear",
        x1: "165.54",
        y1: "93.9578",
        x2: "140.472",
        y2: "118.996",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/jsx_runtime_.jsx("stop", {
          stopColor: "#F46737"
        }), /*#__PURE__*/jsx_runtime_.jsx("stop", {
          offset: "1",
          stopColor: "#F46737",
          stopOpacity: "0"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("linearGradient", {
        id: "paint8_linear",
        x1: "414.367",
        y1: "301.156",
        x2: "439.435",
        y2: "276.118",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/jsx_runtime_.jsx("stop", {
          stopColor: "#13ADC7"
        }), /*#__PURE__*/jsx_runtime_.jsx("stop", {
          offset: "1",
          stopColor: "#13ADC7",
          stopOpacity: "0"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("linearGradient", {
        id: "paint9_linear",
        x1: "515.943",
        y1: "288.238",
        x2: "541.339",
        y2: "291.454",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/jsx_runtime_.jsx("stop", {
          stopColor: "#13ADC7"
        }), /*#__PURE__*/jsx_runtime_.jsx("stop", {
          offset: "1",
          stopColor: "#13ADC7",
          stopOpacity: "0"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("linearGradient", {
        id: "paint10_linear",
        x1: "117.001",
        y1: "230.619",
        x2: "117.36",
        y2: "258.193",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/jsx_runtime_.jsx("stop", {
          stopColor: "#945DD6"
        }), /*#__PURE__*/jsx_runtime_.jsx("stop", {
          offset: "1",
          stopColor: "#945DD6",
          stopOpacity: "0"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("linearGradient", {
        id: "paint11_linear",
        x1: "476.529",
        y1: "363.31",
        x2: "451.461",
        y2: "338.272",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/jsx_runtime_.jsx("stop", {
          stopColor: "#13ADC7"
        }), /*#__PURE__*/jsx_runtime_.jsx("stop", {
          offset: "1",
          stopColor: "#13ADC7",
          stopOpacity: "0"
        })]
      })]
    })]
  })
});

/* harmony default export */ const BackgrooundAnimation_BackgroundAnimation = (BackgroundAnimation);
;// CONCATENATED MODULE: ./src/styles/GlobalComponents/Button.js





const Button = props => /*#__PURE__*/(0,jsx_runtime_.jsxs)(ButtonBack, {
  alt: props.alt,
  form: props.form,
  disabled: props.disabled,
  children: [props.children, /*#__PURE__*/jsx_runtime_.jsx(ButtonFront, {
    alt: props.alt,
    onClick: props.onClick,
    disabled: props.disabled,
    children: props.children
  })]
});

/* harmony default export */ const GlobalComponents_Button = (Button);
;// CONCATENATED MODULE: ./src/components/Hero/HeroStyles.js

const LeftSection = external_styled_components_default().div.withConfig({
  displayName: "HeroStyles__LeftSection",
  componentId: "pbjia3-0"
})(["width:100%;@media ", "{width:80%;display:flex;flex-direction:column;margin:0 auto;}@media ", "{width:100%;display:flex;flex-direction:column;margin:0 auto;}"], props => props.theme.breakpoints.sm, props => props.theme.breakpoints.md);
;// CONCATENATED MODULE: ./src/components/Hero/Hero.js








const Hero = props => /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
  children: /*#__PURE__*/jsx_runtime_.jsx(Section, {
    row: true,
    nopadding: true,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(LeftSection, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(SectionTitle, {
        main: true,
        center: true,
        children: ["Welcome To ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), "My Personal Portfolio"]
      }), /*#__PURE__*/jsx_runtime_.jsx(SectionText, {
        children: "My name is Mohammad Awwad and I am a lead programmer on my high schools robotics team, I am passionate about programming, and I\u2019m always wanting to learn new things as well as teach others."
      }), /*#__PURE__*/jsx_runtime_.jsx(GlobalComponents_Button, {
        onClick: () => window.open("https://drive.google.com/file/d/15pyFGR5tXd82ngxNuYrGRQVd6OHLpqsp/view?usp=sharing", "_blank"),
        target: "_blank",
        children: "Learn More"
      })]
    })
  })
});

/* harmony default export */ const Hero_Hero = (Hero);
;// CONCATENATED MODULE: ./src/components/Projects/ProjectsStyles.js

const Img = external_styled_components_default().img.withConfig({
  displayName: "ProjectsStyles__Img",
  componentId: "l76idc-0"
})(["width:100%;height:100%;object-fit:cover;overflow:hidden;"]);
const GridContainer = external_styled_components_default().section.withConfig({
  displayName: "ProjectsStyles__GridContainer",
  componentId: "l76idc-1"
})(["display:grid;grid-template-columns:repeat(auto-fill,minmax(400px,1fr));padding:3rem;place-items:center;column-gap:2rem;row-gap:3rem;@media ", "{display:flex;flex-direction:column;padding:2rem;padding-bottom:0;}"], props => props.theme.breakpoints.sm);
const BlogCard = external_styled_components_default().div.withConfig({
  displayName: "ProjectsStyles__BlogCard",
  componentId: "l76idc-2"
})(["border-radius:10px;box-shadow:3px 3px 20px rgba(80,78,78,0.5);text-align:center;width:400px;@media ", "{width:100%;}"], props => props.theme.breakpoints.sm);
const TitleContent = external_styled_components_default().div.withConfig({
  displayName: "ProjectsStyles__TitleContent",
  componentId: "l76idc-3"
})(["text-align:center;z-index:20;width:100%;"]);
const HeaderThree = external_styled_components_default().h3.withConfig({
  displayName: "ProjectsStyles__HeaderThree",
  componentId: "l76idc-4"
})(["font-weight:500;letter-spacing:2px;color:#9cc9e3;padding:.5rem 0;font-size:", ";"], props => props.title ? '3rem' : '2rem');
const Hr = external_styled_components_default().hr.withConfig({
  displayName: "ProjectsStyles__Hr",
  componentId: "l76idc-5"
})(["width:50px;height:3px;margin:20px auto;border:0;background:#d0bb57;"]);
const Intro = external_styled_components_default().div.withConfig({
  displayName: "ProjectsStyles__Intro",
  componentId: "l76idc-6"
})(["width:170px;margin:0 auto;color:#dce3e7;font-family:'Droid Serif',serif;font-size:13px;font-style:italic;line-height:18px;"]);
const CardInfo = external_styled_components_default().p.withConfig({
  displayName: "ProjectsStyles__CardInfo",
  componentId: "l76idc-7"
})(["width:100%;padding:0 50px;color:#e4e6e7;font-style:2rem;line-height:24px;text-align:justify;@media ", "{padding:.3rem}"], props => props.theme.breakpoints.sm);
const UtilityList = external_styled_components_default().ul.withConfig({
  displayName: "ProjectsStyles__UtilityList",
  componentId: "l76idc-8"
})(["list-style-type:none;padding:0;display:flex;justify-content:space-around;margin:2.5rem 0;"]);
const ExternalLinks = external_styled_components_default().a.withConfig({
  displayName: "ProjectsStyles__ExternalLinks",
  componentId: "l76idc-9"
})(["color:#d4c0c0;font-size:1.6rem;padding:1rem 1.5rem;background:#6b3030;border-radius:15px;transition:0.5s;&:hover{background:#801414;}"]);
const TagList = external_styled_components_default().ul.withConfig({
  displayName: "ProjectsStyles__TagList",
  componentId: "l76idc-10"
})(["display:flex;justify-content:space-around;padding:2rem;"]);
const Tag = external_styled_components_default().li.withConfig({
  displayName: "ProjectsStyles__Tag",
  componentId: "l76idc-11"
})(["color:#d8bfbf;font-size:1.5rem;"]);
;// CONCATENATED MODULE: ./src/constants/constants.js
const projects = [{
  title: 'First Journey',
  description: "Welcome to the centralized Media tech Application, where you can showcase all your projects from application and programming to robotics and electronics. First Journey allows you to create an account, make posts, edit and delete them, as well as like and comment. Some neat features include searching for specific posts by Title and or Tags. Make sure to sign up and discover some other cool features.",
  image: '/images/FirstJourney.png',
  tags: ['MongoDB', 'Express', 'React.js', 'Node.js'],
  code: 'https://github.com/mohammadawwad/First-Journey',
  demo: 'https://firstjourney.netlify.app/posts',
  id: 0
}, {
  title: 'FRC Robot',
  description: "As lead programmer on FRC team 6390 Hephaestus, I was responsible for programming our robot named Kevin. Some key functionalities include vision tracking, autonomous routines, and robot subsystems such as shooting, climbing, intaking and much more. This was all done by programming a sequence of motors, servos, pneumatics, and cameras using Java as well as creating a remote controlled operating interface with a series of different controllers from Joysticks to Xbox controllers.",
  image: '/images/Kevin.png',
  tags: ['Java'],
  code: 'https://github.com/mohammadawwad/KevinRobotV2',
  demo: 'https://www.youtube.com/watch?v=eHRTgEbxUA0',
  id: 1
}, {
  title: 'FRC Swerve Drive',
  description: "I'm proud to say I have programmed the first Swerve Drive robot in British Columbia, Canada. Programming it was extremely difficult but it has its advantages such as moving in any direction as well as rotating as it drives. This allows the robot to have a lot of movement and control and was programmed in a field oriented way since each wheel or module can move back and forward and spin clockwise and counter cloockwise infinitely.",
  image: '/images/SwerveDrive.png',
  tags: ['Java'],
  code: 'https://github.com/FRC-6390/Swerve2021',
  demo: 'https://www.youtube.com/watch?v=Kxt1Z--HFpQ',
  id: 2
}, {
  title: 'Stylish Tile Website',
  description: "While working at Stylish Tile as a Web Developer I was responsible for creating and developing a responsive and interactive website from scratch. This includes creating image libraries, and animations.",
  image: '/images/StylishTile.png',
  tags: ['JavaScript', 'HTML', 'CSS'],
  code: 'https://github.com/mohammadawwad/Stylish-Tile-web',
  demo: 'https://www.youtube.com/watch?v=cvaDPgurVzg',
  id: 3
}, {
  title: '3rd place Replit Hackathon',
  description: "Minlexa was my project submission for the Replit Summer Amazon Alexa Hackathon. It allowed you to ask alexa any question related to crafting in Minecraft and would inform you about all the necessary materials needed to craft the item, as well as give you a brief description about it, and a visual display.",
  image: '/images/Minecraft.png',
  tags: ['Python', 'Amazon Web Services'],
  code: 'https://replit.com/@awwad/Minelexa',
  demo: 'https://youtu.be/wH6XelT9Bcc',
  id: 4
}, {
  title: 'Pathfinding Application',
  description: "Developed using the A* and Dijkstra algorithms to find the shortest path possible to a desired setpoint. It was developed using Java Swing with multiple GUI features. It was even expanded upon into a full scale application to develop robot coordinates which can be used to automatically create an autonomous routine which can be seen in the picture above.",
  image: '/images/FRCJavaPathfinding.png',
  tags: ['Java'],
  code: 'https://github.com/mohammadawwad/Java-Pathfinding',
  demo: 'https://youtu.be/L006Nu65TKo',
  id: 5
}, {
  title: 'Face And Mask Recognition',
  description: "Using Machine Learning along side Python and OpenCV I was able to develop a face recognition system that would auto detect anyone it can recognise from the pictures uploaded to the program trainer. From there I further developed it during the pandemic to recognise whether ot not someone is wearing a mask which can be prove useful for enforcing specific rules and laws.",
  image: '/images/FaceRec.png',
  tags: ['Python'],
  code: 'https://github.com/mohammadawwad/Python-Vision-Processing',
  demo: 'https://youtu.be/eqJNr-Rn-S0',
  id: 6
}, {
  title: 'Exhaust Hackathon',
  description: "Exhaust was my Project Tech Conference Hackathon submission. It is a carbon emission tracking application which allows you to visualize all your data with graphs and charts as well as global statistics showing you all emissions from other participating countries. With features such as google maps active tracking using the maps api for more accurate results.",
  image: '/images/Exhaust.png',
  tags: ['MongoDB', 'Express', 'React.js', 'Node.js'],
  code: 'https://github.com/mohammadawwad/Exhaust',
  demo: 'https://youtu.be/UTqhwg0qvQ8',
  id: 7
}];
const TimeLineData = [{
  year: 2017,
  text: 'Started learning how to program'
}, {
  year: 2018,
  text: 'Joined my schools robotics team'
}, {
  year: 2019,
  text: 'Became Lead Programmer on the team'
}, {
  year: 2020,
  text: 'Started working at Stylish Tile as a web developer'
}, {
  year: 2021,
  text: 'Programming workshop mentor and organiser'
}, {
  year: 2022,
  text: 'Accepted into SHAD program'
}];
;// CONCATENATED MODULE: ./src/components/Projects/Projects.js







const Projects = () => /*#__PURE__*/(0,jsx_runtime_.jsxs)(Section, {
  nopadding: true,
  id: "projects",
  style: {
    marginTop: '50px'
  },
  children: [/*#__PURE__*/jsx_runtime_.jsx(SectionTitle, {
    main: true,
    children: "Recent Projects"
  }), /*#__PURE__*/jsx_runtime_.jsx(GridContainer, {
    children: projects.map((p, i) => {
      return /*#__PURE__*/(0,jsx_runtime_.jsxs)(BlogCard, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(Img, {
          src: p.image
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(TitleContent, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(HeaderThree, {
            title: true,
            children: p.title
          }), /*#__PURE__*/jsx_runtime_.jsx(Hr, {})]
        }), /*#__PURE__*/jsx_runtime_.jsx(CardInfo, {
          className: "card-info",
          children: p.description
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          children: [/*#__PURE__*/jsx_runtime_.jsx(TitleContent, {
            style: {
              marginTop: "15px"
            },
            children: "Stack"
          }), /*#__PURE__*/jsx_runtime_.jsx(TagList, {
            children: p.tags.map((t, i) => {
              return /*#__PURE__*/jsx_runtime_.jsx(Tag, {
                children: t
              }, i);
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(UtilityList, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(ExternalLinks, {
            href: p.demo,
            target: "_blank",
            children: "Demo"
          }), /*#__PURE__*/jsx_runtime_.jsx(ExternalLinks, {
            href: p.code,
            target: "_blank",
            children: "Code"
          })]
        })]
      }, i);
    })
  })]
});

/* harmony default export */ const Projects_Projects = (Projects);
;// CONCATENATED MODULE: external "react-icons/di"
const di_namespaceObject = require("react-icons/di");
;// CONCATENATED MODULE: ./src/components/Technologies/TechnologiesStyles.js

const ImageContainer = external_styled_components_default().div.withConfig({
  displayName: "TechnologiesStyles__ImageContainer",
  componentId: "sc-1ehw0pq-0"
})(["text-align:center;background-image:radial-gradient(50% 50% at 50% 50%,rgba(79,108,176,0.25) 53.8%,rgba(79,108,176,0) 100%);width:100%;padding:60px;margin-top:48px;display:flex;flex-direction:column;align-items:center;justify-content:center;@media ", "{background-image:none;padding:0;margin-top:40px;}@media ", "{background-image:none;padding:0;margin-top:16px;}"], props => props.theme.breakpoints.lg, props => props.theme.breakpoints.md);
const MainImage = external_styled_components_default().img.withConfig({
  displayName: "TechnologiesStyles__MainImage",
  componentId: "sc-1ehw0pq-1"
})(["width:100%;"]);
const List = external_styled_components_default().ul.withConfig({
  displayName: "TechnologiesStyles__List",
  componentId: "sc-1ehw0pq-2"
})(["list-style-type:none;display:grid;grid-template-columns:repeat(3,1fr);gap:40px;margin:3rem 0;@media ", "{margin:64px 0;}@media ", "{margin:64px 0;gap:24px}@media ", "{display:flex;flex-direction:column;margin:32px 0;}"], props => props.theme.breakpoints.lg, props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const ListContainer = external_styled_components_default().div.withConfig({
  displayName: "TechnologiesStyles__ListContainer",
  componentId: "sc-1ehw0pq-3"
})(["display:flex;flex-direction:column;@media ", "{display:flex;margin-left:18px;}"], props => props.theme.breakpoints.sm);
const ListTitle = external_styled_components_default().h4.withConfig({
  displayName: "TechnologiesStyles__ListTitle",
  componentId: "sc-1ehw0pq-4"
})(["font-weight:700;font-size:28px;line-height:32px;letter-spacing:0.02em;color:#FFFFFF;margin-bottom:8px;@media ", "{font-size:24px;line-height:28px;}@media ", "{font-size:20px;line-height:28px;letter-spacing:0.02em;margin-bottom:4px;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const ListParagraph = external_styled_components_default().p.withConfig({
  displayName: "TechnologiesStyles__ListParagraph",
  componentId: "sc-1ehw0pq-5"
})(["font-size:18px;line-height:30px;color:rgba(255,255,255,0.75);@media ", "{font-size:16px;line-height:28px;}@media ", "{font-size:14px;line-height:22px;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const ListItem = external_styled_components_default().li.withConfig({
  displayName: "TechnologiesStyles__ListItem",
  componentId: "sc-1ehw0pq-6"
})(["max-width:320px;display:flex;flex-direction:column;@media ", "{max-width:203px;}@media ", "{margin-bottom:14px;max-width:320px;flex-direction:row;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const ListIcon = external_styled_components_default().img.withConfig({
  displayName: "TechnologiesStyles__ListIcon",
  componentId: "sc-1ehw0pq-7"
})(["display:block;width:48px;height:48px;margin-bottom:10px;@media ", "{width:40px;height:40px;margin-bottom:8px;}@media ", "{width:32px;height:32px;margin-bottom:0px;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
;// CONCATENATED MODULE: ./src/components/Technologies/Technologies.js







const Technologies = () => /*#__PURE__*/(0,jsx_runtime_.jsxs)(Section, {
  id: "tech",
  children: [/*#__PURE__*/jsx_runtime_.jsx(SectionDivider, {
    divider: true
  }), /*#__PURE__*/jsx_runtime_.jsx(SectionTitle, {
    children: "Technologies"
  }), /*#__PURE__*/jsx_runtime_.jsx(SectionText, {
    children: "I have worked with a range of technologies in the hardware and software world. From Front-End and Back-End To Robotics and Electronics"
  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(List, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(ListItem, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("picture", {
        children: /*#__PURE__*/jsx_runtime_.jsx(di_namespaceObject.DiReact, {
          size: "3rem"
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(ListContainer, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(ListTitle, {
          children: "Front-End"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(ListParagraph, {
          children: ["Experiece with ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), "React.js"]
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(ListItem, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("picture", {
        children: /*#__PURE__*/jsx_runtime_.jsx(di_namespaceObject.DiFirebase, {
          size: "3rem"
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(ListContainer, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(ListTitle, {
          children: "Back-End"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(ListParagraph, {
          children: ["Experience with ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), "Node.js and Databases such as MongoDB"]
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(ListItem, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("picture", {
        children: /*#__PURE__*/jsx_runtime_.jsx(di_namespaceObject.DiCode, {
          size: "3rem"
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(ListContainer, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(ListTitle, {
          children: "Overall"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(ListParagraph, {
          children: ["Experience with ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), "Java ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), "Python ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), "JavaScript, HTML, CSS"]
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(ListItem, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("picture", {
        children: /*#__PURE__*/jsx_runtime_.jsx(di_namespaceObject.DiGitBranch, {
          size: "3rem"
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(ListContainer, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(ListTitle, {
          children: "Version Control"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(ListParagraph, {
          children: ["Experience with ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), "Git ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), "Github"]
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(ListItem, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("picture", {
        children: /*#__PURE__*/jsx_runtime_.jsx(di_namespaceObject.DiStackoverflow, {
          size: "3rem"
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(ListContainer, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(ListTitle, {
          children: "Tools"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(ListParagraph, {
          children: ["Experience with ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), "Replit ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), "Visual Studio Code ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), "Windows"]
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(ListItem, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("picture", {
        children: /*#__PURE__*/jsx_runtime_.jsx(di_namespaceObject.DiZend, {
          size: "3rem"
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(ListContainer, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(ListTitle, {
          children: "UI/UX"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(ListParagraph, {
          children: ["Experience with ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), "tools like Figma and Canva"]
        })]
      })]
    })]
  }), /*#__PURE__*/jsx_runtime_.jsx(SectionDivider, {
    colorAlt: true
  })]
});

/* harmony default export */ const Technologies_Technologies = (Technologies);
;// CONCATENATED MODULE: ./src/components/TimeLine/TimeLineStyles.js

const CarouselContainer = external_styled_components_default().ul.withConfig({
  displayName: "TimeLineStyles__CarouselContainer",
  componentId: "vs8qb6-0"
})(["max-width:1040px;background:#0F1624;padding:0rem;list-style:none;display:flex;justify-content:space-between;margin-left:32px;&:first-of-type{margin-left:0px;}margin-bottom:80px;scrollbar-width:none;&::-webkit-scrollbar{display:none;}@media ", "{overflow-x:scroll;-webkit-overflow-scrolling:touch;scroll-snap-type:x mandatory;touch-action:pan-x;justify-content:initial;margin-bottom:8px;}"], props => props.theme.breakpoints.sm);
const CarouselMobileScrollNode = external_styled_components_default().div.withConfig({
  displayName: "TimeLineStyles__CarouselMobileScrollNode",
  componentId: "vs8qb6-1"
})(["@media ", "{display:flex;min-width:", "}"], props => props.theme.breakpoints.sm, ({
  final
}) => final ? `120%;` : `min-content`);
const CarouselItem = external_styled_components_default().div.withConfig({
  displayName: "TimeLineStyles__CarouselItem",
  componentId: "vs8qb6-2"
})(["background:#0F1624;border-radius:3px;max-width:196px;@media ", "{max-width:124px;}@media ", "{margin-left:32px;min-width:120px;background:#0E131F;padding:4px;align-content:start;scroll-snap-align:start;border-radius:3px;overflow:visible;position:relative;height:fit-content;", ";}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm, props => props.active === props.index ? `opacity: 1` : `opacity: 0.5`);
const CarouselItemTitle = external_styled_components_default().h4.withConfig({
  displayName: "TimeLineStyles__CarouselItemTitle",
  componentId: "vs8qb6-3"
})(["font-weight:bold;font-size:24px;line-height:32px;letter-spacing:0.02em;display:flex;background:linear-gradient(121.57deg,#FFFFFF 10%,rgba(255,255,255,0.66) 30.15%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:8px;@media ", "{font-size:20px;line-height:28px;margin-bottom:4px;}@media ", "{font-size:16px;line-height:24px;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const CarouselItemImg = external_styled_components_default().svg.withConfig({
  displayName: "TimeLineStyles__CarouselItemImg",
  componentId: "vs8qb6-4"
})(["margin-left:21px;-webkit-mask-image:linear-gradient(to right,rgba(0,0,0,1),rgba(0,0,0,0));width:100%;@media ", "{-webkit-mask-image:none;margin-left:16px;overflow:visible;}"], props => props.theme.breakpoints.sm);
const CarouselItemText = external_styled_components_default().p.withConfig({
  displayName: "TimeLineStyles__CarouselItemText",
  componentId: "vs8qb6-5"
})(["font-size:14px;line-height:22px;letter-spacing:0.02em;color:rgba(255,255,255,0.75);padding-right:16px;@media ", "{font-size:12px;line-height:18px;padding-right:32px;}@media ", "{font-size:10px;line-height:16px;padding-right:0;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const CarouselButtons = external_styled_components_default().div.withConfig({
  displayName: "TimeLineStyles__CarouselButtons",
  componentId: "vs8qb6-6"
})(["width:288px;display:none;visibility:hidden;@media ", "{display:flex;visibility:visible;margin-bottom:48px;}"], props => props.theme.breakpoints.sm);
const CarouselButton = external_styled_components_default().button.withConfig({
  displayName: "TimeLineStyles__CarouselButton",
  componentId: "vs8qb6-7"
})(["box-sizing:border-box;background:none;padding:4px;border:none;cursor:pointer;margin-right:4px;opacity:", ";transform:", ";&:focus{outline:none;}"], props => props.active === props.index ? `1` : `.33`, props => props.active === props.index ? `scale(1.6)` : `scale(1)`);
const CarouselButtonDot = external_styled_components_default().div.withConfig({
  displayName: "TimeLineStyles__CarouselButtonDot",
  componentId: "vs8qb6-8"
})(["background-color:white;border-radius:10px;margin:auto;width:3px;height:3px;"]);
;// CONCATENATED MODULE: ./src/components/TimeLine/TimeLine.js







const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  const {
    0: activeItem,
    1: setActiveItem
  } = (0,external_react_.useState)(0);
  const carouselRef = (0,external_react_.useRef)();

  const scroll = (node, left) => {
    return node.scrollTo({
      left,
      behavior: 'smooth'
    });
  };

  const handleClick = (e, i) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length));
      scroll(carouselRef.current, scrollLeft);
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round(carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7) * TimeLineData.length);
      setActiveItem(index);
    }
  }; // snap back to beginning of scroll when window is resized
  // avoids a bug where content is covered up if coming from smaller screen


  (0,external_react_.useEffect)(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    };

    window.addEventListener('resize', handleResize);
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Section, {
    id: "about",
    children: [/*#__PURE__*/jsx_runtime_.jsx(SectionTitle, {
      children: "About Me"
    }), /*#__PURE__*/jsx_runtime_.jsx(SectionText, {
      children: "I am currently the Lead Programmer on my high schools robotics team, 6390 Hephaestus. Responsible for managing the programming department and ensuring all tasks are carried out and programmed properly. I also have experience working as a Web Developer and designer at Stylish Tile."
    }), /*#__PURE__*/jsx_runtime_.jsx(CarouselContainer, {
      ref: carouselRef,
      onScroll: handleScroll,
      children: /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: TimeLineData.map((item, index) => /*#__PURE__*/jsx_runtime_.jsx(CarouselMobileScrollNode, {
          final: index === TOTAL_CAROUSEL_COUNT - 1,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(CarouselItem, {
            index: index,
            id: `carousel__item-${index}`,
            active: activeItem,
            onClick: e => handleClick(e, index),
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(CarouselItemTitle, {
              children: [`${item.year}`, /*#__PURE__*/(0,jsx_runtime_.jsxs)(CarouselItemImg, {
                width: "208",
                height: "6",
                viewBox: "0 0 208 6",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
                  "fill-rule": "evenodd",
                  "clip-rule": "evenodd",
                  d: "M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z",
                  fill: "url(#paint0_linear)",
                  "fill-opacity": "0.33"
                }), /*#__PURE__*/jsx_runtime_.jsx("defs", {
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("linearGradient", {
                    id: "paint0_linear",
                    x1: "-4.30412e-10",
                    y1: "0.5",
                    x2: "208",
                    y2: "0.500295",
                    gradientUnits: "userSpaceOnUse",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("stop", {
                      "stop-color": "white"
                    }), /*#__PURE__*/jsx_runtime_.jsx("stop", {
                      offset: "0.79478",
                      "stop-color": "white",
                      "stop-opacity": "0"
                    })]
                  })
                })]
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx(CarouselItemText, {
              children: item.text
            })]
          })
        }, index))
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(CarouselButtons, {
      children: TimeLineData.map((item, index) => {
        return /*#__PURE__*/jsx_runtime_.jsx(CarouselButton, {
          index: index,
          active: activeItem,
          onClick: e => handleClick(e, index),
          type: "button",
          children: /*#__PURE__*/jsx_runtime_.jsx(CarouselButtonDot, {
            active: activeItem
          })
        }, index);
      })
    })]
  });
};

/* harmony default export */ const TimeLine = (Timeline);
;// CONCATENATED MODULE: external "react-icons/ai"
const ai_namespaceObject = require("react-icons/ai");
;// CONCATENATED MODULE: external "react-icons/si"
const si_namespaceObject = require("react-icons/si");
;// CONCATENATED MODULE: external "react-icons/io"
const io_namespaceObject = require("react-icons/io");
;// CONCATENATED MODULE: ./src/components/Header/HeaderStyles.js


const Container = external_styled_components_default().div.withConfig({
  displayName: "HeaderStyles__Container",
  componentId: "sc-9w0vkp-0"
})(["display:grid;grid-template-columns:repeat(5,1fr);grid-template-rows:1fr;grid-column-gap:2rem;padding:1rem;padding-top:2rem;@media ", "{display:grid;grid-template-columns:repeat(5,1fr);grid-template-rows:repeat(2,60px);grid-column-gap:0.5rem;grid-row-gap:0.5rem;}"], props => props.theme.breakpoints.sm);
const Div1 = external_styled_components_default().div.withConfig({
  displayName: "HeaderStyles__Div1",
  componentId: "sc-9w0vkp-1"
})(["grid-area:1 / 1 / 2 / 2;display:flex;flex-direction:row;align-content:center;@media ", "{grid-area:1 / 1 / 2 / 3;}"], props => props.theme.breakpoints.sm);
const Div2 = external_styled_components_default().div.withConfig({
  displayName: "HeaderStyles__Div2",
  componentId: "sc-9w0vkp-2"
})(["grid-area:1 / 2 / 2 / 4;display:flex;justify-content:space-around;@media ", "{grid-area:2 / 2 / 3 / 5;}"], props => props.theme.breakpoints.sm);
const Div3 = external_styled_components_default().div.withConfig({
  displayName: "HeaderStyles__Div3",
  componentId: "sc-9w0vkp-3"
})(["grid-area:1 / 5 / 2 / 6;display:flex;justify-content:space-around;align-items:center;@media ", "{align-items:center;grid-area:1 / 4 / 2 / 6;}"], props => props.theme.breakpoints.sm); // Navigation Links

const NavLink = external_styled_components_default().a.withConfig({
  displayName: "HeaderStyles__NavLink",
  componentId: "sc-9w0vkp-4"
})(["font-size:2rem;line-height:32px;color:rgba(255,255,255,0.75);transition:0.4s ease;&:hover{color:#fff;opacity:1;cursor:pointer;}@media ", "{padding:0.5rem;}"], props => props.theme.breakpoints.sm); /// DropDown Contact

const ContactDropDown = external_styled_components_default().button.withConfig({
  displayName: "HeaderStyles__ContactDropDown",
  componentId: "sc-9w0vkp-5"
})(["border:none;display:flex;position:relative;background:none;font-size:1.7rem;line-height:32px;color:rgba(255,255,255,0.75);cursor:pointer;transition:0.3s ease;&:focus{outline:none;}&:hover{color:#fff;}@media ", "{padding:0.4rem 0;}@media ", "{padding:0;}"], props => props.theme.breakpoints.sm, props => props.theme.breakpoints.md);
const NavProductsIcon = external_styled_components_default()(io_namespaceObject.IoIosArrowDropdown).withConfig({
  displayName: "HeaderStyles__NavProductsIcon",
  componentId: "sc-9w0vkp-6"
})(["margin-left:8px;display:flex;align-self:center;transition:0.3s ease;opacity:", ";transform:", ";&:hover{opacity:1;}@media ", "{margin:2px 0 0 2px;width:15px;}"], ({
  isOpen
}) => isOpen ? '1' : '.75', ({
  isOpen
}) => isOpen ? 'scaleY(-1)' : 'scaleY(1)', props => props.theme.breakpoints.sm); // Social Icons 

const SocialIcons = external_styled_components_default().a.withConfig({
  displayName: "HeaderStyles__SocialIcons",
  componentId: "sc-9w0vkp-7"
})(["transition:0.3s ease;color:white;border-radius:50px;padding:8px;&:hover{background-color:#212d45;transform:scale(1.2);cursor:pointer;}"]);
;// CONCATENATED MODULE: ./src/components/Footer/FooterStyles.js

const FooterWrapper = external_styled_components_default().section.withConfig({
  displayName: "FooterStyles__FooterWrapper",
  componentId: "sc-1ifsifd-0"
})(["width:calc(100vw - 80px);max-width:1150px;padding:2rem 48px 40px;margin:1rem auto;box-sizing:content-box;@media ", "{padding:0 16px 48px;width:calc(100vw - 32px);}"], props => props.theme.breakpoints.sm);
const LinkItem = external_styled_components_default().a.withConfig({
  displayName: "FooterStyles__LinkItem",
  componentId: "sc-1ifsifd-1"
})(["font-size:18px;line-height:30px;color:rgba(255,255,255,0.75);margin-bottom:16px;transition:.3s ease;position:relative;left:0;&:hover{color:#fff;left:6px;}@media ", "{font-size:16px;line-height:28px;display:flex;}@media ", "{font-size:8px;line-height:14px;margin-bottom:8px;display:flex;align-items:center;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const SocialIconsContainer = external_styled_components_default().div.withConfig({
  displayName: "FooterStyles__SocialIconsContainer",
  componentId: "sc-1ifsifd-2"
})(["max-width:1050px;display:flex;justify-content:space-between;@media ", "{display:flex;justify-content:space-between;}@media ", "{display:flex;width:100%;flex-direction:column;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const CompanyContainer = external_styled_components_default().div.withConfig({
  displayName: "FooterStyles__CompanyContainer",
  componentId: "sc-1ifsifd-3"
})(["display:flex;align-items:baseline;flex-wrap:wrap;margin-right:auto;@media ", "{flex-direction:column;align-items:baseline;}@media ", "{display:flex;flex-direction:column;margin:0 0 32px;align-items:center;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const Slogan = external_styled_components_default().p.withConfig({
  displayName: "FooterStyles__Slogan",
  componentId: "sc-1ifsifd-4"
})(["color:rgba(255,255,255,0.5);min-width:280px;letter-spacing:0.02em;font-size:18px;line-height:30px;padding:1rem;@media ", "{font-size:16px;line-height:28px;}@media ", "{line-height:22px;font-size:14px;min-width:100px;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const SocialContainer = external_styled_components_default().div.withConfig({
  displayName: "FooterStyles__SocialContainer",
  componentId: "sc-1ifsifd-5"
})(["display:flex;align-items:center;@media ", "{justify-content:center;padding-right:16px;flex-wrap:wrap;}"], props => props.theme.breakpoints.md);
const LinkList = external_styled_components_default().ul.withConfig({
  displayName: "FooterStyles__LinkList",
  componentId: "sc-1ifsifd-6"
})(["border-top:1px solid rgba(255,255,255,0.1);display:grid;grid-template-columns:repeat(3,minmax(85px,220px));gap:40px;padding:40px 0 28px;@media ", "{padding:32px 0 16px;}@media ", "{width:100%;padding:32px 0 16px;gap:16px;}@media ", "{width:100%;padding:32px 4px 16px;gap:5px;}"], props => props.theme.breakpoints.lg, props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const LinkColumn = external_styled_components_default().div.withConfig({
  displayName: "FooterStyles__LinkColumn",
  componentId: "sc-1ifsifd-7"
})(["display:flex;flex-direction:column;max-width:400px;width:100%;"]);
const LinkTitle = external_styled_components_default().h4.withConfig({
  displayName: "FooterStyles__LinkTitle",
  componentId: "sc-1ifsifd-8"
})(["font-style:normal;font-weight:600;font-size:12px;line-height:24px;text-transform:uppercase;color:rgba(255,255,255,0.4);margin-bottom:16px;@media ", "{font-size:10px;line-height:12px;margin-bottom:8px;}"], props => props.theme.breakpoints.sm);
;// CONCATENATED MODULE: ./src/components/Footer/Footer.js








const Footer = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(FooterWrapper, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(LinkList, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(LinkColumn, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(LinkTitle, {
          children: "Email"
        }), /*#__PURE__*/jsx_runtime_.jsx(LinkItem, {
          style: {
            width: '300px'
          },
          target: "_blank",
          href: "mailto:mohd-awwad@hotmail.com",
          children: "mohd-awwad@hotmail.com"
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(SocialIconsContainer, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(CompanyContainer, {
        children: /*#__PURE__*/jsx_runtime_.jsx(Slogan, {
          children: "Innovating one project at a time"
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(SocialContainer, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(SocialIcons, {
          target: "_blank",
          href: "https://github.com/mohammadawwad",
          children: /*#__PURE__*/jsx_runtime_.jsx(ai_namespaceObject.AiFillGithub, {
            size: "3rem"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(SocialIcons, {
          target: "_blank",
          href: "https://replit.com/@awwad",
          children: /*#__PURE__*/jsx_runtime_.jsx(si_namespaceObject.SiReplit, {
            size: "3rem"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(SocialIcons, {
          href: "https://www.linkedin.com/in/mohammad--awwad/",
          target: "_blank",
          children: /*#__PURE__*/jsx_runtime_.jsx(ai_namespaceObject.AiFillLinkedin, {
            size: "3rem"
          })
        })]
      })]
    })]
  });
};

/* harmony default export */ const Footer_Footer = (Footer);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
;// CONCATENATED MODULE: external "@mui/material/styles"
const styles_namespaceObject = require("@mui/material/styles");
;// CONCATENATED MODULE: external "@mui/material/FormControlLabel"
const FormControlLabel_namespaceObject = require("@mui/material/FormControlLabel");
var FormControlLabel_default = /*#__PURE__*/__webpack_require__.n(FormControlLabel_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Switch"
const Switch_namespaceObject = require("@mui/material/Switch");
var Switch_default = /*#__PURE__*/__webpack_require__.n(Switch_namespaceObject);
;// CONCATENATED MODULE: ./src/components/Header/CustomHook.js


const themeValue = () => {
  //radio button state
  const {
    0: value,
    1: setValue
  } = (0,external_react_.useState)(true);
  return {
    value,
    setValue
  };
};

/* harmony default export */ const CustomHook = (themeValue);
;// CONCATENATED MODULE: ./src/components/Header/Switch.js




 //dark and light mode radio button


const MaterialUISwitch = (0,styles_namespaceObject.styled)((Switch_default()))(({
  theme
}) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent('#fff')}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be'
      }
    }
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
    width: 32,
    height: 32,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent('#fff')}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`
    }
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
    borderRadius: 20 / 2
  }
}));
function CustomizedSwitch() {
  const {
    value,
    setValue
  } = CustomHook(); //function that handles event change of buttton and allows for theme to actually change

  const handleChange = event => {
    setValue(event.target.checked);
    console.log(value);
  };

  return /*#__PURE__*/jsx_runtime_.jsx((FormControlLabel_default()), {
    control: /*#__PURE__*/jsx_runtime_.jsx(MaterialUISwitch, {
      checked: value,
      onChange: handleChange,
      sx: {
        m: 1
      },
      defaultChecked: true
    }),
    label: ""
  });
}
;// CONCATENATED MODULE: ./src/components/Header/Header.js










const Header = () => /*#__PURE__*/(0,jsx_runtime_.jsxs)(Container, {
  children: [/*#__PURE__*/jsx_runtime_.jsx(Div1, {
    children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
      href: "/",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
        style: {
          display: 'flex',
          alignItems: 'center',
          color: "white"
        },
        children: [/*#__PURE__*/jsx_runtime_.jsx(di_namespaceObject.DiCssdeck, {
          size: "3rem"
        }), " ", /*#__PURE__*/jsx_runtime_.jsx("span", {
          children: "Portfolio"
        })]
      })
    })
  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Div2, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
      children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
        href: "#about",
        children: /*#__PURE__*/jsx_runtime_.jsx(NavLink, {
          children: "About"
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("li", {
      children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
        href: "#tech",
        children: /*#__PURE__*/jsx_runtime_.jsx(NavLink, {
          children: "Technologies"
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("li", {
      children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
        href: "#projects",
        children: /*#__PURE__*/jsx_runtime_.jsx(NavLink, {
          children: "Projects"
        })
      })
    })]
  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Div3, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(SocialIcons, {
      target: "_blank",
      href: "https://github.com/mohammadawwad",
      children: /*#__PURE__*/jsx_runtime_.jsx(ai_namespaceObject.AiFillGithub, {
        size: "3rem"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(SocialIcons, {
      target: "_blank",
      href: "https://replit.com/@awwad",
      children: /*#__PURE__*/jsx_runtime_.jsx(si_namespaceObject.SiReplit, {
        size: "3rem"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(SocialIcons, {
      target: "_blank",
      href: "https://www.linkedin.com/in/mohammad--awwad/",
      children: /*#__PURE__*/jsx_runtime_.jsx(ai_namespaceObject.AiFillLinkedin, {
        size: "3rem"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(CustomizedSwitch, {})]
  })]
});

/* harmony default export */ const Header_Header = (Header);
;// CONCATENATED MODULE: ./src/layout/LayoutStyles.js

const LayoutStyles_Container = external_styled_components_default().div.withConfig({
  displayName: "LayoutStyles__Container",
  componentId: "mzu455-0"
})(["max-width:1280px;width:100%;margin:auto;"]);
;// CONCATENATED MODULE: ./src/layout/Layout.js






const Layout = ({
  children
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(LayoutStyles_Container, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Header_Header, {}), /*#__PURE__*/jsx_runtime_.jsx("main", {
      children: children
    }), /*#__PURE__*/jsx_runtime_.jsx(Footer_Footer, {})]
  });
};
;// CONCATENATED MODULE: ./src/pages/index.js











const Home = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Layout, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Section, {
      grid: true,
      children: [/*#__PURE__*/jsx_runtime_.jsx(Hero_Hero, {}), /*#__PURE__*/jsx_runtime_.jsx(BackgrooundAnimation_BackgroundAnimation, {})]
    }), /*#__PURE__*/jsx_runtime_.jsx(TimeLine, {}), /*#__PURE__*/jsx_runtime_.jsx(Technologies_Technologies, {}), /*#__PURE__*/jsx_runtime_.jsx(Acomplishments_Acomplishments, {}), /*#__PURE__*/jsx_runtime_.jsx(Projects_Projects, {})]
  });
};

/* harmony default export */ const pages = (Home);

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 14:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 20:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 52:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 422:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [400,664], () => (__webpack_exec__(381)));
module.exports = __webpack_exports__;

})();