// components/spotlight/(spotlightComponents)/Messagebox.tsx - CLEAN & REFACTORED
"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { MessageCircle, X } from "lucide-react";
import { motion } from "framer-motion";
import MessagesContainer from "./MessageContainer";
import InputBar from "./InputBar";

interface Member {
  id: number;
  name: string;
  image: string;
  online: boolean;
  premium: boolean;
}

interface MessageboxProps {
  selectedUser?: Member | null;
  onClick?: () => void;
}

const Messagebox: React.FC<MessageboxProps> = ({ selectedUser, onClick }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hey! Loving the carnival vibe ✨",
      sender: "Rahul Jha",
      time: "2:30 PM",
      mine: false,
    },
  ]);
  const [inputText, setInputText] = useState("");
  const [showEmoji, setShowEmoji] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = () => {
    if (inputText.trim() && selectedUser) {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now(),
          text: inputText,
          sender: "You",
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
          mine: true,
        },
      ]);
      setInputText("");
    }
  };

  if (!selectedUser) {
    return (
      <div className="lg:col-span-4 bg-gradient-to-br from-pink-100/50 to-rose-100/50 
      backdrop-blur-xl rounded-3xl border border-pink-200/50 flex items-center justify-center h-full">
        <div className="text-center">
          <div className="w-20 h-20 bg-pink-200 rounded-3xl flex items-center justify-center mx-auto mb-4">
            <MessageCircle className="w-10 h-10 text-pink-500" />
          </div>
          <h3 className="text-xl font-bold text-pink-700 mb-2">
            Select a heart to chat ✨
          </h3>
          <p className="text-pink-600 text-sm">
            Click Message button on any member above
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-[calc(100vh-200px)] max-h-[calc(100vh-200px)]">
      {/* Hero Section - Dynamic user */}
      <div className="bg-gradient-to-r from-pink-500/10 via-rose-500/10 to-pink-500/10 backdrop-blur-xl border border-pink-200/50 rounded-t-2xl md:px-6 py-3 shadow-2xl">
        <div className="flex items-center gap-3 mb-2">
          <Image
            src={selectedUser.image}
            alt={selectedUser.name}
            width={48}
            height={48}
            className="w-12 h-12 rounded-2xl object-cover border-4 border-white/50 shadow-lg"
          />
          <div>
            <h2 className="font-bold text-lg text-gray-900">
              {selectedUser.name}
            </h2>
            <p className="text-sm text-green-600 flex items-center gap-1">
              <div
                className={`w-2 h-2 bg-${selectedUser.online ? "green" : "gray"}-400 rounded-full ${
                  selectedUser.online ? "animate-pulse" : ""
                }`}
              ></div>
              {selectedUser.online ? "Online" : "Offline"}
            </p>
          </div>
          {onClick && (
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={onClick}
              className="ml-auto p-1.5 text-gray-500 hover:text-gray-700 rounded-lg hover:bg-white/50 transition-all"
            >
              <X className="w-5 h-5" />
            </motion.button>
          )}
        </div>
        <p className="text-pink-700/80 leading-relaxed text-xs">
          Private carnival chat • End-to-end encrypted
        </p>
      </div>

      {/* Messages Container */}
      <MessagesContainer messages={messages} messagesEndRef={messagesEndRef} />

      {/* Input Bar */}
      <InputBar
        inputText={inputText}
        showEmoji={showEmoji}
        onTextChange={setInputText}
        onEmojiToggle={() => setShowEmoji(!showEmoji)}
        onSendMessage={sendMessage}
      />
    </div>
  );
};

export default Messagebox;
