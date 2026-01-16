"use client";
import Header from "@/components/mainHeaderFooter/HeaderMain";
import Footer from "@/components/mainHeaderFooter/FooterMain";
import Image from "next/image";
import { Flame, Sparkle, Sparkles, Zap, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import MessagesContainer from "../../(pages)/spotlight/(spotlightComponents)/MessageContainer";
import InputBar from "../../(pages)/spotlight/(spotlightComponents)/InputBar";

interface Member {
  id: number;
  name: string;
  image: string;
  online: boolean;
  premium: boolean;
}

export default function Like() {
  const [matches, setMatches] = useState(1);
  const [messageBox, setMessageBox] = useState(false);
  const [selectedUser, setSelectedUser] = useState<Member | null>(null);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hey! Saw your profile and would love to chat 😊",
      sender: "Radha Jha",
      time: "10:30 AM",
      mine: false,
    },
  ]);
  const [inputText, setInputText] = useState("");
  const [showEmoji, setShowEmoji] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const users: Member[] = [
    {
      id: 1,
      name: "Radha Jha",
      image: "/images/img1.png",
      online: true,
      premium: false,
    },
    {
      id: 2,
      name: "Sejal Singh",
      image: "/images/img2.png",
      online: true,
      premium: true,
    },
    {
      id: 3,
      name: "Sejal Singh",
      image: "/images/img2.png",
      online: true,
      premium: true,
    },
    {
      id: 4,
      name: "Sejal Singh",
      image: "/images/img2.png",
      online: true,
      premium: true,
    },
  ];

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

  return (
    <div className="min-h-auto max-w-full py-1 overflow-hidden">
      <div className="flex md:mt-4 overflow-hidden">
        {/* Left header */}
        <div className="w-full md:w-auto max-h-full lg:block hidden mt-2">
          <Header />
        </div>

        {/* Right content */}
        <div className="flex-1 flex lg:flex-row flex-col">
          {/* Matches List (Desktop + Mobile) */}
          <div
            className={`w-full lg:w-80 lg:border-r border-gray-100 ${
              messageBox ? "hidden lg:block" : "block"
            }`}
          >
            <div className="w-full py-4 px-4">
              <h1 className="text-3xl text-[#fd4f87] font-bold mb-4 doppio-one-regular">
                Matches
              </h1>

              {matches === 0 ? (
                <div className="w-full md:w-full   py-4 ">
                  {/* <h1 className="text-3xl text-red-600/50 font-bold   px-4 doppio-one-regular">
                    Matches
                  </h1> */}
                  <div className="flex-col items-center justify-center relative">
                    {/* Decorative elements around image */}

                    <Image
                      src={"/images/message.png"}
                      alt={"like"}
                      width={300}
                      height={300}
                      className="relative z-10 w-full max-w-md mx-auto sm:w-64 md:w-52 rotate-6 object-contain drop-shadow-2xl"
                    />
                    <div className="flex-col justify-center items-center px-6 py-4 text-justify text-gray-800">
                      <h2 className="text-center text-[20px] font-medium">
                        NO talk yet - We'r here to help
                      </h2>
                      <h2 className="text-center text-xs text-gray-400">
                        We can get you seen by more dater, sooner
                      </h2>
                    </div>

                    <div className="flex-col items-center justify-start px-7 space-y-4 pt-5 road-rage-regular">
                      <div
                        className="flex md:max-w-md w-full px-3 py-2 border border-[#d3a633] 
              rounded-3xl gap-2 items-center justify-center mx-auto"
                      >
                        <Sparkles
                          strokeWidth={1.75}
                          className="text-[#daa727]"
                        />
                        <span className="text-lg ">Upgrade to FindMe+</span>
                      </div>
                      <div
                        className="relative flex w-full md:max-w-md px-3 py-2 bg-[#e9b6be] text-white
              rounded-3xl gap-2 items-center justify-center mx-auto"
                      >
                        <Zap strokeWidth={1.75} className="" />
                        <h1 className="text-lg text-white">
                          Boost Your Profile
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                users.map((user) => (
                  <motion.div
                    key={user.id}
                    whileHover={{ y: -2 }}
                    onClick={() => {
                      setSelectedUser(user);
                      setMessageBox(true);
                    }}
                    className="p-3 border-b border-gray-100 group relative flex items-center 
                    gap-3 cursor-pointer hover:bg-gradient-to-r from-pink-50/50 to-rose-50/50 rounded-xl 
                    transition-all duration-200 hover:shadow-sm h-full"
                  >
                    {/* Profile Image with Online Status */}
                    <div className="relative shrink-0">
                      <Image
                        width={56}
                        height={56}
                        src={user.image}
                        alt={user.name}
                        className="w-14 h-14 rounded-2xl ring-2 ring-white/50 shadow-md object-cover"
                      />
                      <div
                        className={`absolute -bottom-1 -right-1 w-5 h-5 border-3 border-white 
                          rounded-full ring-2 ring-green-400/50 animate-pulse ${
                            user.online ? "bg-green-400" : "bg-gray-400"
                          }`}
                      />
                    </div>

                    {/* Message Preview */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-bold text-sm text-gray-900 truncate road-rage-regular-bold">
                          {user.name}
                        </h3>
                        <span className="text-xs text-gray-500 font-medium">
                          2m ago
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 truncate leading-tight">
                        Hey! Saw your profile and would love to chat 😊
                      </p>
                    </div>

                    {/* Notification Badge */}
                    <div className="relative flex-shrink-0 ml-2">
                      <div className="w-2 h-2 bg-gradient-to-r from-red-400 to-pink-500 rounded-full animate-ping opacity-75" />
                      <div
                        className="absolute -top-1 -right-1 flex items-center justify-center w-6 h-6
                       bg-red-500 border-3 border-white shadow-lg rounded-full group-hover:scale-110 
                       transition-transform"
                      >
                        <span className="text-xs font-bold text-white drop-shadow-sm road-rage-regular-bold">
                          1
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>
          </div>

          {/* Chat Area */}
          <div
            className={`flex-1 flex flex-col ${
              messageBox ? "flex" : "hidden lg:flex"
            }`}
          >
            {messageBox && selectedUser ? (
              <div className="relative flex flex-col h-[90vh] md:h-[85vh] lg:h-[95vh] overflow-hidden bg-white/70 backdrop-blur-xl rounded-2xl">
                {/* Header - Fixed */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-gradient-to-r from-pink-500/10 via-rose-500/10 to-pink-500/10 
                  backdrop-blur-xl border-b border-pink-200/50 rounded-t-2xl px-6 py-4 shadow-2xl 
                  flex items-center justify-between shrink-0 "
                >
                  {/* Your existing header content */}

                  <div className="flex items-center gap-3">
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
                        />
                        {selectedUser.online ? "Online" : "Offline"}
                      </p>
                    </div>
                  </div>

                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setMessageBox(false);
                      setSelectedUser(null);
                    }}
                    className="p-2 text-gray-500 hover:text-gray-700 hover:bg-white/50 rounded-xl transition-all"
                  >
                    <X className="w-5 h-5" />
                  </motion.button>
                </motion.div>

                {/* Messages - Scrollable flex-1 */}
                <div className="flex-1 overflow-y-auto px-4 py-2 scrollbar-thin 
                scrollbar-thumb-gray-300 scrollbar-track-transparent no-scrollbar">
                  <MessagesContainer
                    messages={messages}
                    messagesEndRef={messagesEndRef}
                  />
                </div>

                {/* Input - Fixed bottom */}
                <div
                  className="border-t border-gray-200 bg-white/90 backdrop-blur-sm 
                md:px-4 px-1 py-2 shrink-0 z-10"
                >
                  <InputBar
                    inputText={inputText}
                    showEmoji={showEmoji}
                    onTextChange={setInputText}
                    onEmojiToggle={() => setShowEmoji(!showEmoji)}
                    onSendMessage={sendMessage}
                  />
                </div>
              </div>
            ) : (
              <div className="flex-1 flex items-center justify-center p-8 text-center">
                <div>
                  <Image
                    src="/images/matchImage.png"
                    alt="No Chat"
                    width={280}
                    height={250}
                    className="mx-auto mb-6 opacity-50"
                  />
                  {matches === 0 ? (
                    <h3 className="text-xl font-bold text-gray-700 mb-1">
                      Soon you Will get matches
                    </h3>
                  ) : (
                    <h3 className="text-xl font-bold text-gray-700 mb-1">
                      Select a match to start chatting
                    </h3>
                  )}
                  {matches === 0 ? (
                    <p className="text-gray-500">
                      Try premium plan to get more matches
                    </p>
                  ) : (
                    <p className="text-gray-500">
                      Click on any match above to begin conversation
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="w-full lg:hidden block">
        <Header />
      </div>
    </div>
  );
}
