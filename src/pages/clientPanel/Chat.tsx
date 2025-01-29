import { FaDownload, FaLink } from "react-icons/fa";
import ProfileImage from "/images/ProfileImage.png";
import { AiOutlineSend } from "react-icons/ai";

const ChatPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <div className="flex items-center justify-between bg-white p-4 shadow">
        <div className="flex items-center gap-4">
          <div>
            <img src={ProfileImage} alt="" />
          </div>
          <div>
            <h2 className="text-sm font-bold">Hannah Baker</h2>
            <p className="text-xs text-green-500">Online</p>
          </div>
        </div>
        <button className="px-4 py-2 bg-[#3C3C3C] text-white rounded-full flex items-center gap-2">
          <span className="text-sm">DOWNLOAD CHAT</span>
          <FaDownload />
        </button>
      </div>

      <div className="flex-grow p-6 space-y-4 overflow-y-auto">
        <div className="flex items-start gap-2">
          <div>
            <img src={ProfileImage} alt="" />
          </div>{" "}
          <div className="bg-gray-100 p-4 rounded-lg text-sm">
            Sure! Can you share your order ID so I can assist you further?
          </div>
        </div>

        <div className="flex items-end gap-2 justify-end">
          <div className="bg-blue-500 text-white p-4 rounded-lg text-sm max-w-md">
            Hi, I need help with my recent order.
          </div>
          <div>
            <img src={ProfileImage} alt="" />
          </div>{" "}
        </div>

        <div className="flex items-end gap-2 justify-end">
          <div className="bg-blue-500 text-white p-4 rounded-lg text-sm max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </div>
          <div>
            <img src={ProfileImage} alt="" />
          </div>{" "}
        </div>

        <div className="flex items-start gap-2">
          <div>
            <img src={ProfileImage} alt="" />
          </div>{" "}
          <div className="text-sm text-gray-400">is typing...</div>
        </div>
      </div>

      <div className="p-4 bg-white border-t flex items-center gap-2">
        <button className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
          <span style={{ color: "white" }}>
            <FaLink />
          </span>
        </button>
        <input
          type="text"
          placeholder="Write your Message"
          className="flex-grow px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
        />
        <button className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center">
          <AiOutlineSend className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default ChatPage;
