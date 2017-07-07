// Compiled using marko@4.4.18 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_component = ({
    onCreate: function (input) {
        this.state = {
            mounted: false,
            vessels: []
        };
        if (input && input.vessels) {
            this.state.vessels = input.vessels;
        }
    },
    onMount: function () {
        this.state.mounted = true;
    }
}),
    components_helpers = require("marko/src/components/helpers"),
    marko_registerComponent = components_helpers.rc,
    marko_componentType = marko_registerComponent("/marko-test$1.0.0/routes/index/components/app/index.marko", function() {
      return module.exports;
    }),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    click_count_template = marko_loadTemplate(require.resolve("../click-count")),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    click_count_tag = marko_loadTag(click_count_template),
    marko_attr = marko_helpers.a;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<div" +
    marko_attr("id", __component.id) +
    ">");

  if (state.mounted) {
    out.w("<p>UI component successfully mounted!</p>");
  }

  click_count_tag({
      vessels: state.vessels
    }, out);

  out.w("</div>");
}

marko_template._ = marko_renderer(render, {
    type: marko_componentType
  }, marko_component);

marko_template.Component = marko_defineComponent(marko_component, marko_template._);

marko_template.meta = {
    deps: [
      {
          type: "require",
          path: "./"
        }
    ],
    tags: [
      "../click-count"
    ]
  };
