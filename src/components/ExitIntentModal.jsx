import React, { useState } from 'react';
import { useExitIntent } from '../hooks/useExitIntent';

export default function ExitIntentModal() {
  const [shown, setShown] = useState(false);

  useExitIntent(() => {
    // Only show once per session
    if (!sessionStorage.getItem('exitPopupShown')) {
      setShown(true);
      sessionStorage.setItem('exitPopupShown', 'true');
    }
  });

  if (!shown) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-sm mx-4 text-center relative">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
          onClick={() => setShown(false)}
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4">Wait—Before You Go!</h2>
        <p className="mb-6">
          Claim your <strong>Free SOX Compliance Consultation</strong> now.
        </p>
        <a
          href="/contact"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Book My Consult
        </a>
      </div>
    </div>
  );
}
