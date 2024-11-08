import React from "react";

const LoaderFullScreen = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="h-15 w-15 animate-spin rounded-full border-6 border-t-4 border-white border-t-transparent" />
    </div>
  );
};

export default LoaderFullScreen;
