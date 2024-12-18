import React, { useEffect, useRef, useState } from "react";
import grapesjs, { Editor } from "grapesjs";
import "grapesjs/dist/css/grapes.min.css";
import { editor_blocks } from "./categories";

const GrapesJSEditor: React.FC = () => {
  const editorRef = useRef<any>(null);
  const editorContainerRef = useRef<HTMLDivElement | null>(null);
  const [content, setContent] =
    useState<string>(`<section class="highlight-block text-gray-600 body-font">
        <div class="container min-h-20 mx-auto"></div>
      </section>`);
  useEffect(() => {
    if (editorContainerRef.current) {
      const escapeName = (name: string) =>
        `${name}`.trim().replace(/([^a-z0-9\w-:/]+)/gi, "-");
      const grapesjsPresetWebpage = require("grapesjs-preset-webpage");
      const grapesjsTailwind = require("grapesjs-tailwind");

      editorRef.current = grapesjs.init({
        container: editorContainerRef.current,
        height: "100vh",
        showOffsets: true,
        fromElement: true,
        noticeOnUnload: false,
        storageManager: false,
        selectorManager: { escapeName },
        plugins: [grapesjsTailwind, grapesjsPresetWebpage],
        pluginsOpts: {
          [grapesjsTailwind]: {
            openCategory: "Basic",
          },
        },
      });

      const blockManager = editorRef?.current.BlockManager;
      editor_blocks.forEach((block) => {
        blockManager.add(block.id, block);
      });
      blockManager.remove("text-basic");
      blockManager.remove("link-block");
      blockManager.remove("quote");

      editorRef.current.on("load", (editor: Editor) => {
        editor.setComponents(content);
        const iframe = editorRef.current.Canvas.getFrameEl();
        if (iframe) {
          const iframeDocument =
            iframe.contentDocument || iframe.contentWindow?.document;
          const body = iframeDocument?.body;

          if (body) {
            body.classList.add("gjs-dashed");
            body.classList.add("p-2");
          }
        }
      });
      editorRef.current.on("run:preview", () => {
        const iframe = editorRef.current.Canvas.getFrameEl();
        if (iframe) {
          const iframeDocument =
            iframe.contentDocument || iframe.contentWindow?.document;
          const body = iframeDocument?.body;
          if (body) {
            body.classList.remove("gjs-dashed");
          }
        }
      });
      editorRef.current.on("stop:preview", () => {
        const iframe = editorRef.current.Canvas.getFrameEl();
        if (iframe) {
          const iframeDocument =
            iframe.contentDocument || iframe.contentWindow?.document;
          const body = iframeDocument?.body;
          if (body) {
            body.classList.add("gjs-dashed");
          }
        }
      });
    }

    return () => {
      if (editorRef.current) {
        editorRef.current.destroy();
      }
    };
  }, []);

  return <div ref={editorContainerRef} style={{ height: "100vh" }}></div>;
};

export default GrapesJSEditor;
