'use client';

import { useState } from 'react';

export default function Home() {
  const [showGame, setShowGame] = useState(false);

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center bg-white dark:bg-black">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
        .pixel-font {
          font-family: 'Press Start 2P', cursive;
          line-height: 3;
          transform: scaleY(2);
          transform-origin: top;
        }
      `}</style>
      {!showGame && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-2xl p-12 w-96 mx-4 min-h-fit">
            <h1 className="pixel-font text-8xl font-bold mb-16 text-center text-gray-900 dark:text-white">
              Welcome to Sumpa
            </h1>
            
            <div className="space-y-12 mb-16">
              <div className="flex items-start gap-3">
                <div className="text-8xl">🖥️</div>
                <div>
                  <p className="pixel-font text-4xl text-gray-900 dark:text-white">Press F3</p>
                  <p className="pixel-font text-2xl text-gray-600 dark:text-gray-300">If the screen appears messed up</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="text-8xl">⛶</div>
                <div>
                  <p className="pixel-font text-4xl text-gray-900 dark:text-white">Press F4</p>
                  <p className="pixel-font text-2xl text-gray-600 dark:text-gray-300">For fullscreen mode</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="text-8xl">⚙️</div>
                <div>
                  <p className="pixel-font text-4xl text-gray-900 dark:text-white">Graphics Error?</p>
                  <p className="pixel-font text-2xl text-gray-600 dark:text-gray-300">If you see "failed to initialize graphics", enable graphics acceleration in browser settings</p>
                </div>
              </div>
            </div>

            <button
              onClick={() => setShowGame(true)}
              className="pixel-font w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-6 px-8 text-3xl rounded-lg transition duration-200 ease-in-out transform hover:scale-105"
            >
              Start Game
            </button>
          </div>
        </div>
      )}

      {showGame && (
        <iframe
          className="h-screen w-screen"
          src="/Sumpa/index.html"
        />
      )}
    </main>
  );
}
