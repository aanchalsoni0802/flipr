// pages/index.js
"use client"
import AdminPage from '@/components/admin/AdminPage';
import UploadFile from '@/components/upload-file/page';
import { useState } from 'react';


export default function Home() {
  const [url, setUrl] = useState(null);
  
  return (
    <div>
      <AdminPage />
    </div>
  );
}
