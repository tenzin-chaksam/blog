import React from "react";

function Footer() {
  return (
    <footer className="p-6 pt-3 pb-6 flex text-xs text-center mt-3 font-mono">
      <div className="grow text-left">
        Tenzin Chaksam (
        <a
          target="_blank"
          href="https://x.com/tenzinchaksam"
          className="hover:underline dark:text-gray-400 text-red-500"
        >
          @tenzinchaksam
        </a>
        )
      </div>
      <div>
        <a
          target="_blank"
          href="https://github.com/tenzin-chaksam/blog"
          className="hover:underline"
        >
          Source
        </a>
      </div>
    </footer>
  );
}

export default Footer;
