import ListItem from "@tiptap/extension-list-item";
// import TextStyle from "@tiptap/extension-text-style";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React from "react";
import Image from "@tiptap/extension-image";
import { Node, mergeAttributes } from "@tiptap/core";
import { getMethod } from "@/service/auth";
import DialogPostImage from "./DialogPostImage";
import DialogPostVideo from "./DialogPostVideo";
import "./Rte.css";

const Rte = ({ childFunc, childData, index }) => {
  const Video = Node.create({
    name: "video", // unique name for the Node
    group: "block", // belongs to the 'block' group of extensions
    selectable: true, // so we can select the video
    draggable: true, // so we can drag the video
    atom: true, // is a single unit

    addAttributes() {
      return {
        src: {
          default: null,
        },
        controls: true,
        width:150,
        height:150
        // classNames:
      };
    },

    parseHTML() {
      return [
        {
          tag: "video",
        },
      ];
    },

    renderHTML({ HTMLAttributes }) {
      return ["video", mergeAttributes(HTMLAttributes)];
    },

    // addNodeView() {
    //   return ({ editor, node }) => {
    //     const div = document.createElement("div");
    //     div.className =
    //       "" +
    //       (editor.isEditable ? " cursor-pointer" : "");
    //     const iframe = document.createElement("iframe");
    //     if (editor.isEditable) {
    //       iframe.className = "pointer-events-none";
    //     }
    //     iframe.width = "640";
    //     iframe.height = "360";
    //     iframe.frameborder = "0";
    //     iframe.allowfullscreen = "";
    //     iframe.src = node.attrs.src;
    //     div.append(iframe);
    //     return {
    //       dom: div,
    //     };
    //   };
    // },
  });

  const extensions = [
    Video,
    Image,
    // TextStyle.configure({ types: [ListItem.name] }),
    StarterKit.configure({
      bulletList: {
        keepMarks: true,
        keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
      },
      orderedList: {
        keepMarks: true,
        keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
      },
    }),
  ];

  const editor = useEditor({
    extensions: extensions,
    content: `${childData}`,
    onUpdate({ editor }) {
      childFunc(editor.getHTML(), index, childData);
    },
  });

  if (!editor) {
    return null;
  }

  const addVideo = (data) => {
    editor
      .chain()
      .focus()
      .insertContent(
        `<video controls=true src="${data}" width='450' height='450'></video>`
      )
      .run();
  };

  const addImage = (data) => {
    editor
      .chain()
      .focus()
      .setImage({
        src: data,
      })
      .run();
  };

  return (
    <div className="flex h-auto w-auto flex-col bg-white">
      <div className="flex h-auto w-auto flex-row flex-wrap items-center justify-between gap-1 p-4">
        <DialogPostVideo child={(data) => addVideo(data)} />
        <DialogPostImage child={(data) => addImage(data)} />
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          className={`border-2 border-black p-1 ${
            editor.isActive("bold") ? "bg-blue-400 text-white" : ""
          }`}
        >
          bold
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          className={`border-2 border-black  p-1 ${
            editor.isActive("italic") ? "bg-blue-400 text-white" : ""
          }`}
        >
          italic
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={!editor.can().chain().focus().toggleStrike().run()}
          className={`border-2 border-black   p-1 ${
            editor.isActive("strike") ? "bg-blue-400 text-white" : ""
          }`}
        >
          strike
        </button>
        <button
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={`border-2 border-black  p-1 ${
            editor.isActive("paragraph") ? "bg-blue-400 text-white" : ""
          }`}
        >
          paragraph
        </button>
        <button
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().chain().focus().undo().run()}
          className="cursor-pointer border-2 border-black p-1 "
        >
          undo
        </button>
        <button
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().chain().focus().redo().run()}
          className="cursor-pointer border-2 border-black p-1"
        >
          redo
        </button>
      </div>
      <div className="m-10">
        <p className="font-bold">masukkan teks:</p>
        {/* <video controls className="max-w-32 max-h-32">
          <source
            src={`http://localhost:3001/images/image-1704203281519-699883082.mp4`}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video> */}
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default Rte;
