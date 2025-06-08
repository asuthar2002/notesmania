import React, { useState } from 'react';

const SettingsForm = () => {
  const [settings, setSettings] = useState({
    isProfilePublic: true,
    notifyByEmail: true,
    smsConfirmation: false,
    checkDevice: true,
    showProfilePublicly: false,
  });

  const handleToggle = (key) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can send `settings` to backend here
    console.log('Saved settings:', settings);
  };

  return (
    <main className="max-w-3xl w-full border border-gray-200 rounded-lg shadow-sm" role="main">
      <header className="border-b border-gray-200 px-6 py-4">
        <h1 className="text-2xl font-extrabold text-gray-900">Settings</h1>
      </header>

      <form className="px-6 py-5" onSubmit={handleSubmit}>
        <section className="mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Profile Settings</h2>
          <label className="flex items-center gap-3 cursor-pointer select-none">
            <div className="relative">
              <input
                type="checkbox"
                checked={settings.isProfilePublic}
                onChange={() => handleToggle('isProfilePublic')}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-blue-600 transition-colors" />
              <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow transform peer-checked:translate-x-2.5 transition-transform" />
            </div>
            <span className="text-gray-500 text-sm">Your profile's public visibility</span>
          </label>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Notifications Settings</h2>
          <p className="text-gray-500 text-sm mb-4">Choose type of notifications you want to receive</p>

          <div className="space-y-4">
            {[
              {
                label: 'Notify me via email when logging in',
                key: 'notifyByEmail',
              },
              {
                label: 'Send SMS confirmation for all online payments',
                key: 'smsConfirmation',
              },
              {
                label: 'Check which device(s) access your account',
                key: 'checkDevice',
              },
              {
                label: 'Show your profile publicly',
                key: 'showProfilePublicly',
              },
            ].map(({ key, label }) => (
              <label key={key} className="flex items-center gap-3 cursor-pointer select-none">
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={settings[key]}
                    onChange={() => handleToggle(key)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-blue-600 transition-colors" />
                  <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow transform peer-checked:translate-x-2.5 transition-transform" />
                </div>
                <span className="text-gray-500 text-sm">{label}</span>
              </label>
            ))}
          </div>
        </section>

        <div className="mt-6 flex justify-end space-x-3">
          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
          >
            Save changes
          </button>
          <button
            type="button"
            disabled
            className="border border-gray-300 text-gray-400 font-semibold px-4 py-2 rounded cursor-not-allowed"
          >
            Cancel
          </button>
        </div>
      </form>
    </main>
  );
};

export default SettingsForm;
