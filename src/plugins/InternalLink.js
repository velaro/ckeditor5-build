import Plugin from "@ckeditor/ckeditor5-core/src/plugin";
import ButtonView from "@ckeditor/ckeditor5-ui/src/button/buttonview";
import internalLinkIcon from "./internalLink.svg";

export default class InternalLink extends Plugin {
  init() {
    const editor = this.editor;
    const config = editor.config.get("internalLink");

    editor.ui.componentFactory.add("internalLink", (locale) => {
      const view = new ButtonView(locale);

      view.set({
        label: "Internal Link",
        icon: internalLinkIcon,
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
        if (!config || !config.onExecute) {
          throw new Error(
            "config.internalLink.onExecute(callback) is missing."
          );
        }

        config.onExecute(callback);
      });

      return view;
    });
  }
}
