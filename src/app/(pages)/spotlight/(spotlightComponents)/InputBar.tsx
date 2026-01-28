// components/spotlight/(spotlightComponents)/InputBar.tsx - New Reusable Component
"use client";
import React from "react";
import { Smile, Mic, Video, Send, Paperclip, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface InputBarProps {
  inputText: string;
  showEmoji: boolean;
  onTextChange: (text: string) => void;
  onEmojiToggle: () => void;
  onSendMessage: () => void;
}

const InputBar: React.FC<InputBarProps> = ({
  inputText,
  showEmoji,
  onTextChange,
  onEmojiToggle,
  onSendMessage,
}) => {
  // EmojiPicker Component (internal to InputBar)
  const EmojiPicker = () => (
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
            onTextChange(emoji);
            onEmojiToggle();
          }}
        >
          {emoji}
        </motion.button>
      ))}
    </motion.div>
  );

  return (
    <>
      {/* Mobile Input */}
      <div
        className="lg:hidden bg-white/90 backdrop-blur-xl border border-pink-200/50 
      md:rounded-3xl rounded-2xl  p-2"
      >
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1">
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="p-1.5 text-gray-500 hover:text-pink-500 hover:bg-pink-50 rounded-xl transition-all"
              onClick={onEmojiToggle}
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
            onChange={(e) => onTextChange(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && onSendMessage()}
            placeholder="Type your message..."
            className="flex-1 bg-transparent outline-none text-sm py-2 px-3 rounded-2xl placeholder-gray-400 h-10"
          />
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={onSendMessage}
            disabled={!inputText.trim()}
            className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all ${
              inputText.trim()
                ? "bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg hover:shadow-xl"
                : "text-gray-400 bg-gray-100"
            }`}
          >
            <Send
              className={`w-4 h-4 ${inputText.trim() ? "" : "rotate-45"}`}
            />
          </motion.button>
        </div>
        <AnimatePresence>{showEmoji && <EmojiPicker />}</AnimatePresence>
      </div>

      {/* Desktop Input */}
      <div className="hidden lg:block  bg-white/90 backdrop-blur-xl border border-pink-200/50 rounded-3xl p-3 shadow-2xl">
        <div className="flex items-center gap-1">
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="p-2 text-gray-500 hover:text-pink-500 hover:bg-pink-50 rounded-2xl transition-all"
            onClick={onEmojiToggle}
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
            onChange={(e) => onTextChange(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && onSendMessage()}
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
            onClick={onSendMessage}
            disabled={!inputText.trim()}
            className={`p-2 rounded-2xl transition-all ${
              inputText.trim()
                ? "bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                : "text-gray-400 bg-gray-100"
            }`}
          >
            <Send className="w-5 h-5" />
          </motion.button>
        </div>
        <AnimatePresence>{showEmoji && <EmojiPicker />}</AnimatePresence>
      </div>
    </>
  );
};

export default InputBar;
