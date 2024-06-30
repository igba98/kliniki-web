"use client";

import { ArrowCircleLeft, ArrowLeft, ArrowRight, PaperPlaneTilt } from "@phosphor-icons/react/dist/ssr";
import React, { useState } from "react";

// Define the Message interface
interface Message {
  id: number;
  name: string;
  message: string;
  unread: boolean;
}

// Sample messages data
const messages: Message[] = [
  {
    id: 1,
    name: "Mamsery Patrick",
    message: "Hope you're doing alright, today.",
    unread: true,
  },
  {
    id: 2,
    name: "Mamsery Patrick",
    message: "Hope you're doing alright, today.",
    unread: true,
  },
  {
    id: 3,
    name: "Mamsery Patrick",
    message: "Hope you're doing alright, today.",
    unread: false,
  },
  {
    id: 4,
    name: "Mamsery Patrick",
    message: "Hope you're doing alright, today.",
    unread: true,
  },
];

// ChatDetail component
const ChatDetail: React.FC<{ message: Message; onBack: () => void }> = ({
  message,
  onBack,
}) => {
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center bg-white p-4 shadow">
        <button onClick={onBack} className="mr-4 text-xl">
          <ArrowLeft size={20} />
        </button>
        <div className="flex items-center">
          <div className="mr-3 h-10 w-10 rounded-full bg-gray-300"></div>
          <div>
            <div className="text-sm font-medium">{message.name}</div>
            <div className="text-[12px] text-gray-600">Last seen 12:12</div>
          </div>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto bg-gray-50 p-4">
        <div className="flex flex-col gap-4">
          <div className="flex flex-row items-center gap-2 self-start rounded-lg bg-white p-3 shadow">
            {message.message}
            <span className="block text-xs text-gray-400">11:25</span>
          </div>
          <div className="flex flex-row items-center gap-2 self-end rounded-lg bg-blue-500 p-3 text-white shadow">
            Hey, what's up? How are you doing, my friend? It's been a while xD
            <span className="block text-xs">11:25</span>
          </div>
          <div className="flex flex-row items-center gap-2 self-start rounded-lg bg-white p-3 shadow">
            Have you seen the latest holographic display technology?
            <span className="block text-xs text-gray-400">11:25</span>
          </div>
        </div>
      </div>
      <div className="flex items-center bg-white p-4 shadow">
        <input
          type="text"
          placeholder="Write your message here..."
          className="flex-1 rounded-xl border border-gray-300 p-3"
        />
        <button className="ml-3 rounded-full bg-blue-500 p-3 text-white">
          <PaperPlaneTilt size={32} />
        </button>
      </div>
    </div>
  );
};

// Main ChatFromMothers component
const ChatFromMothers: React.FC = () => {
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);

  const handleSelectMessage = (message: Message) => {
    setSelectedMessage(message);
  };

  const handleBack = () => {
    setSelectedMessage(null);
  };

  return (
    <div className="flex h-full w-full  justify-center ">
      {selectedMessage ? (
        <ChatDetail message={selectedMessage} onBack={handleBack} />
      ) : (
        <div className="rounded-lg w-full px-10 bg-green-50 p-4 shadow">
          <h3 className="mb-4 text-lg font-semibold">Chat from mothers</h3>
          <ul className="flex flex-col gap-4">
            {messages.map((message) => (
              <li
                key={message.id}
                className="mb-3 flex cursor-pointer items-center justify-between"
                onClick={() => handleSelectMessage(message)}
              >
                <div className="flex items-center gap-3">
                  <div className="mr-3 h-10 w-10 rounded-full bg-gray-300"></div>
                  <div>
                    <div className="text-sm font-medium">{message.name}</div>
                    <div className="text-[12px] text-gray-600">
                      {message.message}
                    </div>
                  </div>
                </div>
                {message.unread && (
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-xs text-white">
                    1
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const Home: React.FC = () => {
  return <ChatFromMothers />;
};

export default Home;
