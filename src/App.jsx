import { useRef, useState } from "react";

// Simple SVG icons as components (no external dependencies)
const UploadIcon = ({ className = "w-6 h-6" }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
    />
  </svg>
);

const XIcon = ({ className = "w-4 h-4" }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const ImageIcon = ({ className = "w-6 h-6" }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
);

const CheckIcon = ({ className = "w-3 h-3" }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 13l4 4L19 7"
    />
  </svg>
);

const AlertCircleIcon = ({ className = "w-5 h-5" }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 shadow-lg">
      <div className="flex items-center gap-3">
        <div className="relative">
          <div className="absolute inset-0 bg-white bg-opacity-20 rounded-lg blur animate-pulse"></div>
          <div className="relative bg-white bg-opacity-10 p-2 rounded-lg border border-white border-opacity-20">
            <ImageIcon className="w-6 h-6 text-white" />
          </div>
        </div>
        <span className="text-white font-extrabold text-xl tracking-wider">
          PamPix
        </span>
      </div>
      <div className="flex items-center gap-3">
        <button className="bg-white bg-opacity-10 text-white font-medium px-4 py-2 rounded-lg border border-white border-opacity-20 hover:bg-white hover:bg-opacity-20 transition-all duration-200 flex items-center gap-2">
          <UploadIcon className="w-4 h-4" />
          Upload Images
        </button>
        <button className="text-white text-opacity-80 font-medium px-4 py-2 hover:text-white hover:bg-white hover:bg-opacity-10 rounded-lg transition-all duration-200">
          Login
        </button>
        <button className="text-white font-medium px-4 py-2 border border-white border-opacity-30 hover:bg-white hover:bg-opacity-10 rounded-lg transition-all duration-200">
          Register
        </button>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="w-full flex flex-col items-center mt-20 mb-6 text-sm text-gray-500">
      <div className="flex items-center gap-2 mb-3">
        <div className="bg-gradient-to-r from-purple-400 to-blue-400 p-1.5 rounded-lg">
          <ImageIcon className="w-4 h-4 text-white" />
        </div>
        <span className="font-bold tracking-wider text-gray-700">PamPix</span>
      </div>
      <div className="mb-3 text-gray-400">
        Powered by Pam Scripts · All Rights Reserved
      </div>
      <div className="flex gap-6">
        <a
          href="#"
          className="hover:text-purple-600 transition-colors duration-200"
        >
          About us
        </a>
        <a
          href="#"
          className="hover:text-purple-600 transition-colors duration-200"
        >
          Contact us
        </a>
        <a
          href="#"
          className="hover:text-purple-600 transition-colors duration-200"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
}

function ImagePreview({ preview, onRemove, fileName, fileSize }) {
  return (
    <div className="relative group animate-fade-in">
      <div className="relative overflow-hidden rounded-xl border-2 border-purple-200 bg-white shadow-lg">
        <img
          src={preview}
          alt="Preview"
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black from-opacity-50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <button
          onClick={onRemove}
          className="absolute top-3 right-3 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full shadow-lg transition-all duration-200 transform hover:scale-110 opacity-0 group-hover:opacity-100"
        >
          <XIcon className="w-4 h-4" />
        </button>
      </div>
      <div className="mt-3 text-center">
        <p className="text-sm font-medium text-gray-700 truncate">{fileName}</p>
        <p className="text-xs text-gray-500">{fileSize}</p>
      </div>
    </div>
  );
}

function UploadZone({
  dragActive,
  onDrop,
  onDragEnter,
  onDragOver,
  onDragLeave,
  onClick,
  fileInputRef,
  onFileChange,
}) {
  return (
    <div
      className={`relative w-full transition-all duration-300 cursor-pointer group ${
        dragActive
          ? "ring-4 ring-purple-400 ring-opacity-50 bg-purple-50 transform scale-105"
          : "ring-2 ring-dashed ring-gray-300 hover:ring-purple-400 hover:bg-purple-50 hover:bg-opacity-50"
      } rounded-2xl flex flex-col items-center justify-center bg-white bg-opacity-80 py-12 px-8 shadow-xl border-2 border-dashed border-gray-300 hover:border-purple-400`}
      onClick={onClick}
      onDragEnter={onDragEnter}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
    >
      <div className="relative mb-6">
        <div className="absolute inset-0 bg-purple-200 rounded-full blur-xl opacity-50 animate-pulse" />
        <div className="relative bg-gradient-to-br from-purple-100 to-blue-100 p-6 rounded-full">
          <UploadIcon
            className={`w-12 h-12 transition-all duration-300 ${
              dragActive
                ? "text-purple-600 animate-bounce"
                : "text-purple-500 group-hover:text-purple-600"
            }`}
          />
        </div>
      </div>

      <div className="text-center space-y-2">
        <h3 className="text-xl font-bold text-gray-800">
          {dragActive ? "Drop your images here!" : "Upload your images"}
        </h3>
        <p className="text-gray-600">
          Drag and drop your files here, or{" "}
          <span className="text-purple-600 font-semibold underline decoration-2 underline-offset-2">
            browse
          </span>
        </p>
        <div className="flex items-center justify-center gap-4 mt-4 text-xs text-gray-500">
          <span className="flex items-center gap-1">
            <CheckIcon className="w-3 h-3 text-green-500" />
            JPG, PNG, GIF
          </span>
          <span className="flex items-center gap-1">
            <CheckIcon className="w-3 h-3 text-green-500" />
            Up to 10MB
          </span>
        </div>
      </div>

      <input
        type="file"
        accept="image/*"
        onChange={onFileChange}
        ref={fileInputRef}
        className="hidden"
        multiple
      />
    </div>
  );
}

export default function App() {
  const [images, setImages] = useState([]);
  const [dragActive, setDragActive] = useState(false);
  const [error, setError] = useState("");
  const fileInputRef = useRef();

  const formatFileSize = (bytes) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const handleImageChange = (files) => {
    setError("");
    const fileArray = Array.from(files);
    const maxSize = 10 * 1024 * 1024; // 10MB

    fileArray.forEach((file) => {
      if (!file.type.startsWith("image/")) {
        setError("Please select only image files");
        return;
      }

      if (file.size > maxSize) {
        setError("File size should be less than 10MB");
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        const newImage = {
          id: Date.now() + Math.random(),
          file,
          preview: reader.result,
          name: file.name,
          size: formatFileSize(file.size),
        };
        setImages((prev) => [...prev, newImage]);
      };
      reader.readAsDataURL(file);
    });
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleImageChange(e.dataTransfer.files);
    }
  };

  const removeImage = (id) => {
    setImages((prev) => prev.filter((img) => img.id !== id));
  };

  const clearAll = () => {
    setImages([]);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };
  const uploadToS3 = async () => {
    if (images.length === 0) {
      alert("No images to upload.");
      return;
    }

    for (let img of images) {
      const file = img.file;
      const uploadUrl = `https://labelbucket8520.s3.amazonaws.com/uploads/${encodeURIComponent(
        file.name
      )}`;

      try {
        const res = await fetch(uploadUrl, {
          method: "PUT",
          headers: {
            "Content-Type": file.type,
          },
          body: file,
        });

        if (!res.ok) {
          throw new Error(`Failed to upload ${file.name}`);
        }
      } catch (err) {
        console.error(err);
        alert(`Upload failed for ${file.name}`);
        return;
      }
    }

    alert(" All images uploaded successfully!");
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 bg-opacity-30 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200 bg-opacity-30 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute top-1/2 left-1/3 w-48 h-48 bg-indigo-200 bg-opacity-20 rounded-full blur-2xl animate-pulse"
        style={{ animationDelay: "2s" }}
      />

      <Navbar />

      <main className="flex flex-col items-center justify-center flex-1 py-12 px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Upload your images
          </h1>
          <p className="text-xl text-gray-600">
            Fast, secure, and{" "}
            <span className="text-purple-600 font-bold bg-purple-100 px-2 py-1 rounded-lg">
              free forever
            </span>
          </p>
        </div>

        <div className="w-full max-w-4xl">
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3 animate-fade-in">
              <AlertCircleIcon className="w-5 h-5 text-red-500" />
              <span className="text-red-700">{error}</span>
            </div>
          )}

          {images.length === 0 ? (
            <UploadZone
              dragActive={dragActive}
              onDrop={handleDrop}
              onDragEnter={handleDrag}
              onDragOver={handleDrag}
              onDragLeave={handleDrag}
              onClick={() => fileInputRef.current?.click()}
              fileInputRef={fileInputRef}
              onFileChange={(e) => handleImageChange(e.target.files)}
            />
          ) : (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-gray-800">
                  Uploaded Images ({images.length})
                </h3>
                <div className="flex gap-3">
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <UploadIcon className="w-4 h-4" />
                    Add More
                  </button>
                  <button
                    onClick={clearAll}
                    className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <XIcon className="w-4 h-4" />
                    Clear All
                  </button>
                  <button
                    onClick={uploadToS3}
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <UploadIcon className="w-4 h-4" />
                    Upload to S3
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {images.map((image) => (
                  <ImagePreview
                    key={image.id}
                    preview={image.preview}
                    fileName={image.name}
                    fileSize={image.size}
                    onRemove={() => removeImage(image.id)}
                  />
                ))}
              </div>

              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleImageChange(e.target.files)}
                ref={fileInputRef}
                className="hidden"
                multiple
              />
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
