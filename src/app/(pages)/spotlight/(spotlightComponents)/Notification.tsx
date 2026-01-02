import React from "react";
import { Bell, Icon } from "lucide-react";
import { soccerPitch } from "@lucide/lab";

type Props = {
  isClicked: boolean;
  setIsClicked: (value: boolean) => void;
};

function Notification({ isClicked, setIsClicked }: Props) {
  return (
    <>
    <button
      type="button"
      onClick={() => setIsClicked(!isClicked)}
      className="relative w-10 h-10 gap-3 flex rounded-full  items-center justify-between px-2 hover:bg-pink-200 bg-pink-100 transition-all duration-200 overflow-hidden"
    >
      <div className="relative z-10 flex-1 flex items-center">
        <div className="relative">
          <Bell className="w-6 h-6 mx-auto text-[#cc1a6d]" />
          <span className="w-4 h-4 rounded-full bg-[#cc1a6d] absolute -top-1 right-0 flex items-center justify-center text-white text-[10px] border-2 border-white">
            1
          </span>
        </div>
      </div>
    </button>

    


    </>
  );
}

export default Notification;
