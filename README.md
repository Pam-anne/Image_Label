# PamPix - Image Upload Platform

A modern, responsive web application for uploading and managing images with drag-and-drop functionality and S3 integration.

## 🚀 Features

- **Drag & Drop Upload**: Intuitive drag-and-drop interface for easy image uploads
- **Multiple File Support**: Upload multiple images simultaneously
- **Real-time Preview**: Instant image preview with file information
- **File Validation**: Automatic validation for image types and file sizes
- **S3 Integration**: Direct upload to Amazon S3 bucket
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Beautiful gradient design with smooth animations
- **Error Handling**: Comprehensive error messages and validation feedback

## 🛠️ Tech Stack

- **Frontend**: React 18 with Vite
- **Styling**: Tailwind CSS
- **Icons**: Custom SVG components (no external dependencies)
- **Storage**: Amazon S3
- **Build Tool**: Vite

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd label_image
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install Tailwind CSS**
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```

4. **Configure Tailwind CSS**
   
   Update `tailwind.config.js`:
   ```javascript
   /** @type {import('tailwindcss').Config} */
   export default {
     content: [
       "./index.html",
       "./src/**/*.{js,ts,jsx,tsx}",
     ],
     theme: {
       extend: {},
     },
     plugins: [],
   }
   ```

5. **Add Tailwind directives to your CSS**
   
   In `src/index.css`:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

## 🚀 Usage

1. **Start the development server**
   ```bash
   npm run dev
   ```

2. **Open your browser**
   Navigate to `http://localhost:5173`

3. **Upload images**
   - Drag and drop images onto the upload area
   - Or click to browse and select files
   - Supported formats: JPG, PNG, GIF
   - Maximum file size: 10MB

## 📁 Project Structure

```
label_image/
├── src/
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # Application entry point
│   ├── index.css        # Global styles with Tailwind
│   └── assets/          # Static assets
├── public/              # Public assets
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── tailwind.config.js   # Tailwind configuration
├── postcss.config.js    # PostCSS configuration
└── README.md           # Project documentation
```

## 🎨 Components

### Navbar
- Brand logo and navigation
- Upload, Login, and Register buttons
- Gradient background with glassmorphism effects

### UploadZone
- Drag-and-drop interface
- File type and size validation
- Visual feedback for drag states
- Multiple file support

### ImagePreview
- Thumbnail preview with hover effects
- File information display
- Remove functionality
- Responsive grid layout

### Footer
- Brand information
- Links to About, Contact, and Privacy Policy

## 🔧 Configuration

### S3 Configuration
The application is configured to upload to:
- **Bucket**: `labelbucket8520`
- **Region**: Default AWS region
- **Path**: `/uploads/` directory

To configure your own S3 bucket:
1. Update the upload URL in `App.jsx` (line 325)
2. Ensure proper CORS configuration on your S3 bucket
3. Set up appropriate IAM permissions

### File Validation
- **Supported formats**: JPG, JPEG, PNG, GIF
- **Maximum size**: 10MB per file
- **Multiple files**: Unlimited count

## 🎯 Key Features Explained

### Drag & Drop Implementation
```javascript
const handleDrop = (e) => {
  e.preventDefault();
  e.stopPropagation();
  setDragActive(false);
  if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
    handleImageChange(e.dataTransfer.files);
  }
};
```

### S3 Upload
```javascript
const uploadToS3 = async () => {
  const uploadUrl = `https://labelbucket8520.s3.amazonaws.com/uploads/${encodeURIComponent(file.name)}`;
  const res = await fetch(uploadUrl, {
    method: "PUT",
    headers: { "Content-Type": file.type },
    body: file,
  });
};
```

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Deploy: `vercel`


**Made with ❤️ by Pam Scripts**
