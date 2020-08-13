import DecoupledEditor from "@ckeditor/ckeditor5-editor-decoupled/src/decouplededitor";
import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials";
import Autoformat from "@ckeditor/ckeditor5-autoformat/src/autoformat";
import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold";
import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic";
import Underline from "@ckeditor/ckeditor5-basic-styles/src/underline";
import Strikethrough from "@ckeditor/ckeditor5-basic-styles/src/strikethrough";
import Link from "@ckeditor/ckeditor5-link/src/link";
import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph";
import PasteFromOffice from "@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice";
import TextTransformation from "@ckeditor/ckeditor5-typing/src/texttransformation";
import CodeBlock from "@ckeditor/ckeditor5-code-block/src/codeblock";

export default class ChatEditor extends DecoupledEditor {}

// Plugins to include in the build.
ChatEditor.builtinPlugins = [
  Essentials,
  Autoformat,
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Link,
  Paragraph,
  PasteFromOffice,
  TextTransformation,
  CodeBlock,
];

// Editor configuration.
ChatEditor.defaultConfig = {
  toolbar: {
    items: [
      "bold",
      "italic",
      "underline",
      "strikethrough",
      "link",
      "codeBlock",
    ],
  },
  // This value must be kept in sync with the language defined in webpack.config.js.
  language: "en",
};
