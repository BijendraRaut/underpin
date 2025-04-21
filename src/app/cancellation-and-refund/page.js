"use client";
import { useState, useEffect } from "react";

export default function Privacy() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loop, setLoop] = useState(0);
  const words = ["Coming Soon..."];
  const typingSpeed = 200; // Typing speed in ms
  const deletingSpeed = 100; // Deleting speed in ms

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[loop % words.length];
      const updatedText = isDeleting
        ? currentWord.substring(0, text.length - 1)
        : currentWord.substring(0, text.length + 1);

      setText(updatedText);

      if (!isDeleting && updatedText === currentWord) {
        setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setLoop(loop + 1);
      }
    };

    const timer = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );
    return () => clearTimeout(timer);
  }, [text, isDeleting, loop, words]);

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-black overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-gray-800 via-black to-gray-900 animate-gradientMovement"></div>

      {/* Typing Animation Content */}
      <div className="relative text-center z-10">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white">
          {text}
          <span className="text-green-400">|</span> {/* Blinking cursor */}
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-400">
          Something exciting is in the works. Stay tuned!
        </p>
      </div>
    </div>
  );
}
