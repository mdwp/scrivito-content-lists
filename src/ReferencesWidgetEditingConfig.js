import * as Scrivito from "scrivito";

Scrivito.provideEditingConfig("ReferencesWidget", {
  title: "Content list",
  attributes: {
    count: {
      title: "Number of records",
      description: "Default: 5"
    },
    pageType: {
      title: "Page Type",
      description: "Default: Page",
      values: [
        { value: "Page", title: "Page" },
        { value: "BlogPost", title: "Blog-Post" },
        { value: "Job", title: "Job" },
        { value: "Event", title: "Event" },

      ],
    },

},
properties: [
    'pageType',
    'count'
],
initialContent: {
    count: 6,
    pageType: "Page"
  },
});


