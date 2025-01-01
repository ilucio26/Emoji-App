'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';

export default function Home() {
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [generatedEmojis, setGeneratedEmojis] = useState<string[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // TODO: Implement API call to Replicate
    setIsLoading(false);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">Emoji Generator</h1>
            <p className="text-gray-400">
              Turn your ideas into unique emojis using AI
            </p>
          </div>

          {/* Generator Form */}
          <Card className="p-6 bg-gray-800/50 border-gray-700">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex gap-2">
                <Input
                  placeholder="Describe your emoji..."
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="bg-gray-700 border-gray-600 text-white"
                />
                <Button 
                  type="submit" 
                  disabled={isLoading || !prompt}
                  className="min-w-[120px]"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Creating...
                    </>
                  ) : (
                    'Generate'
                  )}
                </Button>
              </div>
            </form>
          </Card>

          {/* Generated Emojis Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {generatedEmojis.map((emoji, index) => (
              <Card 
                key={index}
                className="relative group aspect-square bg-gray-800/50 border-gray-700"
              >
                <img
                  src={emoji}
                  alt={`Generated emoji ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <Button size="icon" variant="ghost">
                    ❤️
                  </Button>
                  <Button size="icon" variant="ghost">
                    ⬇️
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}