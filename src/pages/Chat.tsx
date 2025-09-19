import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Send, 
  Mic, 
  MicOff, 
  Volume2, 
  VolumeX, 
  Bot, 
  User, 
  Languages,
  Sparkles,
  MessageSquare
} from "lucide-react";
import { translateText, chatWithAssistant } from "@/lib/gemini";
import { toast } from "@/hooks/use-toast";

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
  isTranslation?: boolean;
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: `**வணக்கம்! (Vanakkam!)**

Welcome to your Tamil learning assistant! 🎉

I can help you with:
✨ **Translation:** Type in any language and I'll translate to Tamil with pronunciation
🎯 **Learning:** Ask questions about Tamil grammar, culture, or phrases  
🗣️ **Practice:** Have conversations to improve your Tamil skills
📚 **Lessons:** Get explanations about specific topics

Try saying "Hello, how are you?" or ask me "How do I say good morning in Tamil?"

What would you like to learn today?`,
      timestamp: new Date(),
    }
  ]);
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const addMessage = (type: 'user' | 'bot', content: string, isTranslation: boolean = false) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      type,
      content,
      timestamp: new Date(),
      isTranslation,
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage = inputText.trim();
    setInputText("");
    addMessage('user', userMessage);
    setIsLoading(true);

    try {
      // Check if it's a translation request or general chat
      const isTranslationRequest = userMessage.length > 50 || 
        userMessage.includes('translate') || 
        userMessage.includes('mean') ||
        !userMessage.includes('?');

      let response: string;
      
      if (isTranslationRequest) {
        response = await translateText(userMessage);
        addMessage('bot', response, true);
      } else {
        response = await chatWithAssistant(userMessage);
        addMessage('bot', response);
      }
    } catch (error) {
      console.error('Error:', error);
      addMessage('bot', "Sorry, I encountered an error. Please try again! 😊");
      toast({
        title: "Error",
        description: "Failed to process your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Speech Recognition (Web Speech API)
  const startListening = () => {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      toast({
        title: "Not Supported",
        description: "Speech recognition is not supported in your browser.",
        variant: "destructive",
      });
      return;
    }

    const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
    const recognition = new SpeechRecognition();
    
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setInputText(transcript);
      setIsListening(false);
    };

    recognition.onerror = () => {
      setIsListening(false);
      toast({
        title: "Error",
        description: "Speech recognition failed. Please try again.",
        variant: "destructive",
      });
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.start();
  };

  // Text to Speech
  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      // Stop any current speech
      speechSynthesis.cancel();
      
      // Clean the text for better speech
      const cleanText = text.replace(/\*\*/g, '').replace(/\*/g, '');
      const utterance = new SpeechSynthesisUtterance(cleanText);
      
      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      
      speechSynthesis.speak(utterance);
    } else {
      toast({
        title: "Not Supported",
        description: "Text-to-speech is not supported in your browser.",
        variant: "destructive",
      });
    }
  };

  const quickPrompts = [
    "How do I say 'Good morning' in Tamil?",
    "Translate 'I love Tamil food'",
    "Teach me Tamil numbers 1-10",
    "What are common Tamil greetings?",
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <div className="p-3 rounded-lg hero-glow">
            <MessageSquare className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold gradient-text">Tamil Chat Assistant</h1>
        </div>
        <p className="text-muted-foreground">
          Your AI-powered Tamil learning companion with voice support
        </p>
      </div>

      {/* Quick Prompts */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-muted-foreground mb-3">Quick Start:</h3>
        <div className="flex flex-wrap gap-2">
          {quickPrompts.map((prompt, index) => (
            <Button
              key={index}
              variant="outline"
              size="sm"
              onClick={() => setInputText(prompt)}
              className="text-xs"
            >
              {prompt}
            </Button>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <Card className="mb-6">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center space-x-2">
            <Bot className="w-5 h-5 text-primary" />
            <span>Chat</span>
            <Badge variant="secondary" className="text-xs">
              <Sparkles className="w-3 h-3 mr-1" />
              AI Powered
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[400px] w-full pr-4" ref={scrollAreaRef}>
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex items-start space-x-3 ${
                    message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                  }`}
                >
                  <div className={`p-2 rounded-lg ${
                    message.type === 'user' 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    {message.type === 'user' ? (
                      <User className="w-4 h-4" />
                    ) : (
                      <Bot className="w-4 h-4" />
                    )}
                  </div>
                  <div className={`flex-1 ${message.type === 'user' ? 'text-right' : ''}`}>
                    <div className={`inline-block p-3 rounded-lg max-w-[80%] ${
                      message.type === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-card border text-card-foreground'
                    }`}>
                      {message.isTranslation && (
                        <div className="flex items-center space-x-1 mb-2">
                          <Languages className="w-3 h-3" />
                          <span className="text-xs font-medium">Translation</span>
                        </div>
                      )}
                      <div className="whitespace-pre-wrap text-sm">
                        {message.content}
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="text-xs text-muted-foreground">
                        {message.timestamp.toLocaleTimeString()}
                      </span>
                      {message.type === 'bot' && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => speakText(message.content)}
                          disabled={isSpeaking}
                          className="h-6 w-6 p-0"
                        >
                          {isSpeaking ? (
                            <VolumeX className="w-3 h-3" />
                          ) : (
                            <Volume2 className="w-3 h-3" />
                          )}
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded-lg bg-muted text-muted-foreground">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="bg-card border p-3 rounded-lg">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>

      {/* Input Area */}
      <div className="flex items-center space-x-2">
        <div className="flex-1 relative">
          <Input
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message or question..."
            disabled={isLoading}
            className="pr-12"
          />
          <Button
            variant="ghost"
            size="sm"
            onClick={startListening}
            disabled={isLoading || isListening}
            className="absolute right-1 top-1 h-8 w-8 p-0"
          >
            {isListening ? (
              <MicOff className="w-4 h-4 text-destructive" />
            ) : (
              <Mic className="w-4 h-4" />
            )}
          </Button>
        </div>
        <Button
          onClick={handleSendMessage}
          disabled={isLoading || !inputText.trim()}
          size="sm"
        >
          <Send className="w-4 h-4" />
        </Button>
      </div>

      {/* Voice Status */}
      {(isListening || isSpeaking) && (
        <div className="mt-4 text-center">
          <Badge variant="secondary" className="animate-pulse">
            {isListening && <Mic className="w-3 h-3 mr-1" />}
            {isSpeaking && <Volume2 className="w-3 h-3 mr-1" />}
            {isListening ? "Listening..." : "Speaking..."}
          </Badge>
        </div>
      )}
    </div>
  );
};

export default Chat;