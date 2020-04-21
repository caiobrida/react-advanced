import { useEffect } from "react";

function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title;

    return () => {
      console.log("cleanup");
    };
  });
}

export default useDocumentTitle;
