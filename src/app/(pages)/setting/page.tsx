"use client";

import { BadgeCheck, ChevronLeft, Settings, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Toggle } from "@/components/ui/Toggle";
import InputField from "@/components/ui/InputField";

export default function Setting() {
  const [hideProfile, setHideProfile] = useState(false);
  const [lastActive, setLastActive] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [valueChange, setValueChange] = useState("");
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleLogoutClick = () => {
    setShowLogoutModal(true);
    setShowDeleteModal(false); // Close delete if open
  };

  const handleDeleteClick = () => {
    setShowDeleteModal(true);
    setShowLogoutModal(false); // Close logout if open
  };

  const handleCloseModals = () => {
    setShowLogoutModal(false);
    setShowDeleteModal(false);
  };

  const handleConfirmLogout = () => {
    console.log("logout successfully done.");
    handleCloseModals();
    // Add actual logout logic
  };

  const handleConfirmDelete = () => {
    console.log("delete account successfully done.");
    handleCloseModals();
    // Add actual delete logic
  };

  return (
    <div className="min-h-auto max-w-full flex flex-col lg:flex-row bg-linear-to-br from-rose-50/30 via-pink-50/20 to-orange-50/10">
      <div className="right-10 left-10 top-0 h-10 bg-white/60 absolute " />

      {/* LEFT SIDEBAR - CONTENT HEIGHT + SCROLLABLE */}
      <div
        className="w-full lg:w-[40%] max-w-full mx-auto border-r-2 border-red-100 
                      lg:min-h-screen lg:overflow-y-auto scrollbar-thin lg:scrollbar-thumb-gray-300 lg:scrollbar-track-transparent"
      >
        {/* back button with title */}
        <div className="left-0 right-0 top-0 z-50 w-full  
        p-2 py-3 px-3 border-b border-red-100 sticky  bg-white/90 backdrop-blur-sm">
          <div className="flex space-x-2">
            <Link href="/profile">
              <ChevronLeft className="size-4 stroke-3 mt-2 cursor-pointer" />
            </Link>
            <h1 className="sm:text-xl text-lg font-bold text-black mx-auto">
              Settings
            </h1>
          </div>
        </div>

        {/* Profile Section */}
        <div className="space-y-3 mt-6 p-2">
          <div className="flex-col p-1">
            <div className="border-b-1 border-red-100">
              <h1 className="text-gray-400 mb-1 text-base font-medium">
                Profile
              </h1>
            </div>
          </div>

          <div className="flex p-1">
            <div className="border-b-1 border-red-100 flex justify-between items-center w-full">
              <div className="flex flex-col">
                <h1 className="text-gray-400">Hide Profile</h1>
                <p className="md:text-sm text-xs text-black">
                  Hide your profile from other users and when you ready then
                  unhide it.
                </p>
              </div>
              <Toggle checked={hideProfile} onChange={setHideProfile} />
            </div>
          </div>

          <div className="flex p-1">
            <div className="border-b-1 border-red-100 flex justify-between items-center w-full">
              <div className="flex flex-col">
                <h1 className="text-gray-400">Last Active</h1>
                <p className="md:text-sm text-xs text-black">
                  Hide your profile from other users and when you ready then
                  unhide it.
                </p>
              </div>
              <Toggle checked={lastActive} onChange={setLastActive} />
            </div>
          </div>
        </div>

        {/* Safety Section */}
        <div className="space-y-3 mt-2 p-2">
          <div className="flex-col p-1">
            <div className="border-b-1 border-red-100">
              <h1 className="text-gray-400 mb-1 text-base font-medium">
                Safety
              </h1>
            </div>
          </div>

          <div className="flex p-1">
            <div className="border-b-1 border-red-100 flex justify-between items-center w-full">
              <div className="flex flex-col">
                <h1 className="text-gray-400">Block List</h1>
                <p className="md:text-sm text-xs text-black">
                  Hide your profile from other users and when you ready then
                  unhide it.
                </p>
              </div>
            </div>
          </div>

          <div className="flex p-1">
            <div className="border-b-1 border-red-100 flex justify-between items-center w-full">
              <div className="flex flex-col">
                <h1 className="text-gray-400">PAN Verification</h1>
                <p className="md:text-sm text-xs text-black">
                  Hide your profile from other users and when you ready then
                  unhide it.
                </p>
              </div>
            </div>
          </div>

          <div className="flex p-1">
            <div className="border-b-1 border-red-100 flex-col justify-between items-center w-full">
              <div className="flex gap-1">
                <h1 className="text-gray-400">Selfie Verification</h1>
                <BadgeCheck
                  size={23}
                  strokeWidth={2.25}
                  className="fill-blue-500 text-white"
                />
              </div>
              <p className="md:text-sm text-xs text-black">
                Hide your profile from other users and when you ready then
                unhide it.
              </p>
            </div>
          </div>
        </div>

        {/* Phone & Email Section */}
        <div className="space-y-3 mt-2 p-2">
          <div className="flex-col p-1">
            <div className="border-b-1 border-red-100">
              <h1 className="text-gray-400 mb-1 text-base font-medium">
                Phone & Email
              </h1>
            </div>
          </div>

          <div className="flex-col p-1 space-y-3">
            <div className="border-b-1 border-red-100 flex gap-2 items-center w-full">
              <input
                type="tel"
                placeholder="936xxxxxx"
                className="border-none focus:border-none focus:ring-0 outline-none mb-1 flex-1"
              />
              <BadgeCheck
                size={23}
                strokeWidth={2.25}
                className="fill-blue-500 text-white"
              />
            </div>

            <div className="border-b-1 border-red-100 flex gap-2 items-center w-full">
              <input
                type="email"
                placeholder="email@gmail.com"
                className="border-none focus:border-none focus:ring-0 outline-none mb-1 flex-1"
              />
              <BadgeCheck
                size={23}
                strokeWidth={2.25}
                className="fill-blue-500 text-white"
              />
            </div>
          </div>
        </div>

        {/* Legal Section */}
        <div className="space-y-3 mt-2 p-2">
          <div className="flex-col p-1">
            <div className="border-b-1 border-red-100">
              <h1 className="text-gray-400 mb-1 text-base font-medium">
                Legal
              </h1>
            </div>
          </div>

          <div className="flex-col p-1">
            <div className="border-b-1 border-red-100">
              <h1 className="mb-1 text-base cursor-pointer hover:text-red-500 transition-colors">
                Term of Service
              </h1>
            </div>
          </div>

          <div className="flex-col p-1">
            <div className="border-b-1 border-red-100">
              <h1 className="mb-1 text-base cursor-pointer hover:text-red-500 transition-colors">
                Privacy
              </h1>
            </div>
          </div>

          <div className="flex-col p-1">
            <div className="border-b-1 border-red-100">
              <h1 className="mb-1 text-base cursor-pointer hover:text-red-500 transition-colors">
                Licences
              </h1>
            </div>
          </div>

          <div className="flex-col p-1">
            <div className="border-b-1 border-red-100">
              <h1 className="mb-1 text-base cursor-pointer hover:text-red-500 transition-colors">
                Download my data
              </h1>
            </div>
          </div>
        </div>

        {/* Logout  Account */}
        <div className="space-y-3 mt-5 p-2 border-t border-red-100 mx-auto">
          <div className="text-center">
            <button
              className="font-medium text-gray-600 hover:text-red-700 hover:bg-red-50 px-6 py-3 
              rounded-xl transition-all duration-200 w-full"
              onClick={handleLogoutClick}
            >
              LogOut
            </button>
          </div>
        </div>
        {/* Delete Account  */}
        <div className="space-y-3 mt-3 p-2 border-t border-red-100 mb-5">
          <div className="text-center">
            <button
              className="font-medium text-gray-600 hover:text-red-700 hover:bg-red-50 px-6 py-3 
              rounded-xl transition-all duration-200 w-full"
              onClick={handleDeleteClick}
            >
              Delete
            </button>
          </div>
        </div>
      </div>

      {/* RIGHT PANEL - FIXED SCROLL  ,  RIGHT PANEL - PERFECTLY FIXED/STICKY */}
      <div
        className="w-full lg:w-[60%] max-w-full h-screen px-2 py-4 mx-auto 
                lg:sticky lg:top-0 lg:h-screen overflow-hidden lg:block hidden"
      >

        {showLogoutModal 
        ? 
        (
          <LogoutModalDesktop
            onClose={handleCloseModals}
            onConfirm={handleConfirmLogout}
          />
        ) 
        : showDeleteModal ? 
        (
          <DeleteModalDesktop
            onClose={handleCloseModals}
            onConfirm={handleConfirmDelete}
          />
        ) 
        : 
        (
          <div className="h-full w-full flex items-center justify-center">
            <div className="h-96 w-full max-w-md flex items-center justify-center ">
              <Settings className="size-20 text-gray-400" />
            </div>
          </div>
        )}
      </div>

      {/* MOBILE FULLSCREEN MODAL OVERLAY */}
      {showLogoutModal && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center 
        justify-center p-4"
        >
          <LogoutModalMobile
            onClose={handleCloseModals}
            onConfirm={handleConfirmLogout}
          />
        </div>
      )}

      {showDeleteModal && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center 
        justify-center p-4"
        >
          <DeleteModalMobile
            onClose={handleCloseModals}
            onConfirm={handleConfirmLogout}
          />
        </div>
      )}
    </div>
  );
}

//desktop Model - shows in right panel
function DeleteModalDesktop({
  onClose,
  onConfirm,
}: {
  onClose: () => void;
  onConfirm: () => void;
}) {
  return (
    <div className="w-full h-screen flex items-center justify-center p-8 bg-gradient-to-br from-rose-50/50 to-orange-50/30">
      <div className="max-w-md w-full bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/60">
        <div className="flex flex-col items-center justify-center h-[80vh] p-8 text-center">
          <div className="w-24 h-24 bg-red-200 rounded-2xl flex items-center justify-center mb-8 shadow-lg">
            <X className="w-12 h-12 text-red-500" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Delete Account?
          </h1>
          <p className="text-gray-600 mb-12 max-w-sm leading-relaxed">
            This action cannot be undone. All your data will be permanently
            deleted.
          </p>
          <div className="flex gap-4 w-full max-w-xs">
            <button
              onClick={onConfirm}
              className="flex-1 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              Delete
            </button>
            <button
              onClick={onClose}
              className="flex-1 bg-gradient-to-r from-gray-200 to-gray-300 hover:from-gray-300 hover:to-gray-400 text-gray-900 font-semibold py-4 px-8 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Fixed Mobile Delete Modal
function DeleteModalMobile({
  onClose,
  onConfirm,
}: {
  onClose: () => void;
  onConfirm: () => void;
}) {
  return (
    <div className="w-full h-full bg-black/40 backdrop-blur-md relative rounded-2xl">
      <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
        <div className="w-full max-w-md h-[90vh] bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/60 overflow-hidden">
          <div className="p-8 pt-20 h-full flex flex-col items-center justify-center text-center relative">
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-gray-500 hover:text-gray-700 p-2 rounded-2xl hover:bg-gray-100 transition-all"
            >
              <X className="w-7 h-7" />
            </button>
            <div className="w-24 h-24 bg-red-200 rounded-2xl flex items-center justify-center mb-8 shadow-xl">
              <X className="w-12 h-12 text-red-500" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Delete Account?
            </h1>
            <p className="text-gray-600 mb-12 max-w-sm mx-auto leading-relaxed">
              This action cannot be undone. All your data will be permanently
              deleted.
            </p>
            <div className="flex gap-4 w-full max-w-xs mx-auto">
              <button
                onClick={onConfirm}
                className="flex-1 bg-linear-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-4 px-8 rounded-2xl transition-all shadow-xl hover:shadow-2xl"
              >
                Delete
              </button>
              <button
                onClick={onClose}
                className="flex-1 bg-linear-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white font-semibold py-4 px-8 rounded-2xl transition-all shadow-xl hover:shadow-2xl"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Desktop Modal - Shows in right panel
function LogoutModalDesktop({
  onClose,
  onConfirm,
}: {
  onClose: () => void;
  onConfirm: () => void;
}) {
  return (
    <div className="w-full h-screen flex items-center justify-center p-8 bg-gradient-to-br from-rose-50/50 to-orange-50/30">
      <div className="max-w-md w-full bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/60">
        <div className="flex flex-col items-center justify-center h-[80vh] p-8 text-center">
          <div className="w-24 h-24 bg-red-100 rounded-2xl flex items-center justify-center mb-8 shadow-lg">
            <X className="w-12 h-12 text-red-500" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Are you sure?
          </h1>
          <p className="text-gray-600 mb-12 max-w-sm leading-relaxed">
            You will be logged out of your account. You can log back in anytime
            using your credentials.
          </p>
          <div className="flex gap-4 w-full max-w-xs">
            <button
              onClick={onConfirm}
              className="flex-1 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 active:scale-95"
            >
              Logout
            </button>
            <button
              onClick={onClose}
              className="flex-1 bg-gradient-to-r from-gray-200 to-gray-300 hover:from-gray-300 hover:to-gray-400 text-gray-900 font-semibold py-4 px-8 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 active:scale-95"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Mobile Fullscreen Modal
function LogoutModalMobile({
  onClose,
  onConfirm,
}: {
  onClose: () => void;
  onConfirm: () => void;
}) {
  return (
    <div className="w-full h-full bg-black/40 backdrop-blur-md relative rounded-2xl">
      <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
        <div className="w-full max-w-md h-[90vh] bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/60 overflow-hidden">
          <div className="p-8 pt-20 h-full flex flex-col items-center justify-center text-center relative">
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-gray-500 hover:text-gray-700 p-2 rounded-2xl hover:bg-gray-100 transition-all duration-200"
            >
              <X className="w-7 h-7" />
            </button>

            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Are you sure you want to logout?
            </h1>
            <p className="text-gray-600 mb-12 max-w-sm mx-auto leading-relaxed">
              You will be logged out of your account. You can log back in
              anytime.
            </p>
            <div className="flex gap-4 w-full max-w-xs mx-auto">
              <button
                onClick={onConfirm}
                className="flex-1 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 active:scale-95"
              >
                Logout
              </button>
              <button
                onClick={onClose}
                className="flex-1 bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 active:scale-95"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
