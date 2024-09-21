'use client'; // Ensure this is a client component

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function HomePage() {
  const router = useRouter();
  const [message, setMessage] = useState('Initial Message');

  const handleUpdateData = async () => {
    // Simulate an async operation with setTimeout
    const res = await fetch('https://api.github.com/repos/vercel/next.js');
    const data = await res.json();
    setMessage(data.id);
    router.refresh();
    console.log("lala")
  };

  return (
    <div>
      <h1>Home Page</h1>
      <p>{message}</p>
      <button onClick={handleUpdateData}>Update Data</button>
    </div>
  );
}
