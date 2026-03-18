import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot } from 'lucide-react';

const ChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'ai', content: "Hello! I'm K.A.I. I can answer questions about Harsh Shah's robotics projects, tech stack, or experience. What would you like to know?" }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { role: 'user', content: input }]);
    setInput('');
    // Mock response for now
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'ai', content: "I'm currently a minimal UI element. To fully activate my neural pathways, the environment needs to be integrated with an LLM backend via Supabase/OpenAI!" }]);
    }, 1000);
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 p-4 rounded-full bg-primary/20 hover:bg-primary/40 border border-primary/50 text-white shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all z-40 ${isOpen ? 'scale-0' : 'scale-100 hover:scale-110'}`}
      >
        <MessageSquare size={24} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 w-80 sm:w-96 rounded-2xl glass-panel shadow-2xl z-50 flex flex-col overflow-hidden border border-white/10"
          >
            {/* Header */}
            <div className="bg-surface/80 backdrop-blur-md p-4 flex justify-between items-center border-b border-white/5">
              <div className="flex items-center gap-2">
                <Bot size={20} className="text-primary" />
                <span className="font-semibold text-white">K.A.I Assistant</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-textMuted hover:text-white transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Chat Area */}
            <div className="h-80 p-4 overflow-y-auto flex flex-col gap-4 bg-background/50">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                    msg.role === 'user' 
                      ? 'bg-primary/20 text-white rounded-tr-sm border border-primary/20' 
                      : 'bg-white/5 text-textMain rounded-tl-sm border border-white/10'
                  }`}>
                    {msg.content}
                  </div>
                </div>
              ))}
            </div>

            {/* Input Area */}
            <div className="p-4 bg-surface/80 border-t border-white/5 flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about my projects..."
                className="flex-grow bg-white/5 border border-white/10 rounded-xl px-4 text-sm text-white focus:outline-none focus:border-primary/50"
              />
              <button 
                onClick={handleSend}
                className="p-2.5 rounded-xl bg-primary/20 text-primary hover:bg-primary/40 hover:text-white transition-colors"
              >
                <Send size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatAssistant;
