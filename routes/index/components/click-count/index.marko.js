// Compiled using marko@4.4.18 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_component = ({
    onCreate: function (input) {
        this.state = { vessels: [] };
        if (input && input.vessels) {
            this.state.vessels = input.vessels;
        }
    },
    addVessel: function () {
        this.state.vessels.forEach(vessel => {
            vessel.isDynamic = true;
        });
        this.state.vessels = this.state.vessels.concat([{
                imo: 123,
                name: 'dynamic vessel',
                isDynamic: true
            }]);
    }
}),
    components_helpers = require("marko/src/components/helpers"),
    marko_registerComponent = components_helpers.rc,
    marko_componentType = marko_registerComponent("/marko-test$1.0.0/routes/index/components/click-count/index.marko", function() {
      return module.exports;
    }),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_attr = marko_helpers.a,
    marko_forEach = marko_helpers.f,
    marko_escapeXml = marko_helpers.x;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<div" +
    marko_attr("id", __component.id) +
    "><button" +
    marko_attr("data-marko", {
      onclick: __component.d("addVessel")
    }, false) +
    ">Add vessel</button>");

  marko_forEach(state.vessels, function(vessel) {
    out.w("<div>" +
      marko_escapeXml(vessel.imo) +
      " " +
      marko_escapeXml(vessel.name) +
      " " +
      marko_escapeXml(vessel.isDynamic) +
      "</div>");
  });

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
    ]
  };
