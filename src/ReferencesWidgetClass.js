import * as Scrivito from "scrivito";

const ReferencesWidget = Scrivito.provideWidgetClass("ReferencesWidget", {

  attributes: {
    pageType: ["enum", { values: ["Page", "Event", "Job", "BlogPost"] }],
    count: "integer",
  },
});

export default ReferencesWidget;
