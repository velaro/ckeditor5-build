import Plugin from "@ckeditor/ckeditor5-core/src/plugin";
import ButtonView from "@ckeditor/ckeditor5-ui/src/button/buttonview";
import storageIcon from "./storage.svg";

export default class Storage extends Plugin {
  init() {
    const editor = this.editor;
    const config = editor.config.get("storage");

    if (!config) {
      throw new Error("config.storage is missing.");
    }

    editor.ui.componentFactory.add("storage", (locale) => {
      const view = new ButtonView(locale);

      view.set({
        label: "Storage",
        icon: storageIcon,
        tooltip: true,
      });

      const callback = (payload) => {
        if (!payload.url) {
          throw new Error("callback payload.url is missing.");
        }

        editor.model.change((writer) => {
          const link = writer.createText(payload.text || payload.url);
          writer.setAttribute("linkHref", payload.url, link);
          editor.model.insertContent(link, editor.model.document.selection);
        });
      };

      view.on("execute", () => {
        if (!config.onExecute) {
          throw new Error("config.storage.onExecute(callback) is missing.");
        }

        config.onExecute(callback);
      });

      return view;
    });
  }
}
