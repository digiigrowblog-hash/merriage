// components/spotlight/(spotlightComponents)/Messagebox.tsx - UPDATED
"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
  Mic,
  Video,
  Smile,
  Send,
  Paperclip,
  Phone,
  X,
  MessageCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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

  // EmojiPicker Component
  const EmojiPicker = ({
    onEmojiSelect,
  }: {
    onEmojiSelect: (emoji: string) => void;
  }) => (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 180 }}
      exit={{ opacity: 0, height: 0 }}
      className="mt-2 grid grid-cols-6 sm:grid-cols-8 gap-1.5 p-2 max-h-44 sm:max-h-48 overflow-y-auto rounded-2xl bg-white/80 border border-pink-100"
    >
      {[
        "❤️",
        "✨",
        "😍",
        "🎉",
        "💕",
        "🎈",
        "🌹",
        "💖",
        "😘",
        "🥰",
        "🎊",
        "💝",
        "🎁",
        "🌟",
        "😊",
        "🙌",
      ].map((emoji, i) => (
        <motion.button
          key={i}
          whileTap={{ scale: 1.1 }}
          className="text-xl sm:text-2xl p-1.5 hover:bg-pink-100 rounded-lg xl:rounded-xl transition-all flex items-center justify-center"
          onClick={() => {
            onEmojiSelect(emoji);
            setShowEmoji(false);
          }}
        >
          {emoji}
        </motion.button>
      ))}
    </motion.div>
  );

  // InputBar Component
  const InputBar = () => (
    <>
      <div className="sm:hidden bg-white/90 backdrop-blur-xl border border-pink-200/50 rounded-3xl shadow-2xl p-2">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1">
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="p-1.5 text-gray-500 hover:text-pink-500 hover:bg-pink-50 rounded-xl transition-all"
              onClick={() => setShowEmoji(!showEmoji)}
            >
              <Smile className="w-4 h-4" />
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="p-1.5 text-gray-500 hover:text-pink-500 hover:bg-pink-50 rounded-xl transition-all"
            >
              <Mic className="w-4 h-4" />
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="p-1.5 text-blue-500 hover:bg-blue-50 rounded-xl transition-all"
            >
              <Video className="w-4 h-4" />
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="p-1.5 text-gray-500 hover:text-pink-500 hover:bg-pink-50 rounded-xl transition-all"
            >
              <Paperclip className="w-4 h-4" />
            </motion.button>
          </div>
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="p-1.5 text-green-500 hover:bg-green-50 rounded-xl transition-all"
          >
            <Phone className="w-4 h-4" />
          </motion.button>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Type your message..."
            className="flex-1 bg-transparent outline-none text-sm py-2 px-3 rounded-2xl placeholder-gray-400 h-10"
          />
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={sendMessage}
            disabled={!inputText.trim()}
            className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all ${
              inputText.trim()
                ? "bg-linear-to-r from-pink-500 to-rose-500 text-white shadow-lg hover:shadow-xl"
                : "text-gray-400 bg-gray-100"
            }`}
          >
            <Send
              className={`w-4 h-4 ${inputText.trim() ? "" : "rotate-45"}`}
            />
          </motion.button>
        </div>
        <AnimatePresence>
          {showEmoji && <EmojiPicker onEmojiSelect={setInputText} />}
        </AnimatePresence>
      </div>

      <div className="hidden sm:block bg-white/90 backdrop-blur-xl border border-pink-200/50 rounded-3xl p-3 shadow-2xl">
        {/* Desktop input bar code remains same */}
        <div className="flex items-center gap-1">
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="p-2 text-gray-500 hover:text-pink-500 hover:bg-pink-50 rounded-2xl transition-all"
            onClick={() => setShowEmoji(!showEmoji)}
          >
            <Smile className="w-5 h-5" />
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="p-2 text-gray-500 hover:text-pink-500 hover:bg-pink-50 rounded-2xl transition-all"
          >
            <Mic className="w-5 h-5" />
          </motion.button>
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Type your message..."
            className="flex-1 bg-transparent outline-none text-sm py-2.5 px-3 rounded-2xl placeholder-gray-400"
          />
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="p-2 text-blue-500 hover:bg-blue-50 rounded-2xl transition-all"
          >
            <Video className="w-5 h-5" />
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="p-2 text-gray-500 hover:text-pink-500 hover:bg-pink-50 rounded-2xl transition-all"
          >
            <Paperclip className="w-5 h-5" />
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={sendMessage}
            disabled={!inputText.trim()}
            className={`p-2 rounded-2xl transition-all ${
              inputText.trim()
                ? "bg-linear-to-r from-pink-500 to-rose-500 text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                : "text-gray-400 bg-gray-100"
            }`}
          >
            <Send className="w-5 h-5" />
          </motion.button>
        </div>
        <AnimatePresence>
          {showEmoji && <EmojiPicker onEmojiSelect={setInputText} />}
        </AnimatePresence>
      </div>
    </>
  );

  if (!selectedUser) {
    return (
      <div
        className="lg:col-span-4 
      bg-linear-to-br from-pink-100/50 to-rose-100/50 backdrop-blur-xl 
      rounded-3xl border border-pink-200/50 flex items-center justify-center h-100"
      >
        <div className="text-center">
          <div
            className="w-20 h-20 bg-pink-200 rounded-3xl flex items-center justify-center 
          mx-auto mb-4"
          >
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
    <div className={` flex flex-col h-[calc(100vh-200px)] max-h-[calc(100vh-200px)]`}>
      {/* Hero Sect`on - Dynamic user */}
      <div className={` bg-linear-to-r from-pink-500/10 via-rose-500/10 to-pink-500/10 backdrop-blur-xl border border-pink-200/50 rounded-t-2xl md:px-6 py-3 shadow-2xl`}>
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
                className={`w-2 h-2 bg-${
                  selectedUser.online ? "green" : "gray"
                }-400 rounded-full ${
                  selectedUser.online ? "animate-pulse" : ""
                }`}
              ></div>
              {selectedUser.online ? "Online" : "Offline"}
            </p>
          </div>
        </div>
        <p className="text-pink-700/80 leading-relaxed text-xs">
          Private carnival chat • End-to-end encrypted
        </p>
      </div>

      {/* Messages Container */}
      <div className="flex-1 bg-white/70 backdrop-blur-xl border border-pink-200/50 rounded-b-2xl shadow-xl sm:p-4 p-2 overflow-y-auto mb-4 space-y-3">
        <AnimatePresence>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className={`flex ${
                message.mine ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[70%] p-3 rounded-2xl shadow-sm ${
                  message.mine
                    ? "bg-linear-to-r from-pink-500 to-rose-500 text-white"
                    : "bg-white/80 border border-pink-100/50"
                }`}
              >
                <p className="text-sm leading-relaxed">{message.text}</p>
                <p
                  className={`text-xs mt-1 flex items-center gap-1 ${
                    message.mine ? "text-pink-100" : "text-gray-500"
                  }`}
                >
                  {message.time}
                  {message.mine && (
                    <div className="w-4 h-4 bg-white/30 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  )}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        <div ref={messagesEndRef} />
      </div>

      <InputBar />
    </div>
  );
};

export default Messagebox;
