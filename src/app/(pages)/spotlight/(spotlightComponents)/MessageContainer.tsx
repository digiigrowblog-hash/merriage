"use client";
import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  id: number;
  text: string;
  sender: string;
  time: string;
  mine: boolean;
}

interface MessagesContainerProps {
  messages: Message[];
  messagesEndRef: React.RefObject<HTMLDivElement>;
}

const MessagesContainer: React.FC<MessagesContainerProps> = ({ messages, messagesEndRef }) => {
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, messagesEndRef]);

  return (
    <div className="space-y-3 pt-2 pb-20 min-h-full"> {/* pb-20 for input space, min-h-full fills flex */}
      <AnimatePresence>
        {messages.map((message) => (
          <motion.div
            key={message.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className={`flex ${message.mine ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[70%] p-3 rounded-2xl shadow-sm ${
                message.mine
                  ? "bg-gradient-to-r from-pink-500 to-rose-500 text-white"
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
  );
};

export default MessagesContainer;
