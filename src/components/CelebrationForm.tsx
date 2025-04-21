
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';

interface CelebrationFormProps {
  onSubmit: (type: string, name: string) => void;
}

const CelebrationForm = ({ onSubmit }: CelebrationFormProps) => {
  const [selectedType, setSelectedType] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedType && name) {
      onSubmit(selectedType, name);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-purple-100">
      <Card className="w-full max-w-md p-6 space-y-6 animate-fade-in">
        <h1 className="text-2xl font-bold text-center text-gray-800">Office Celebration Screen</h1>
        
        <div className="grid grid-cols-3 gap-4">
          {['birthday', 'farewell', 'promotion'].map((type) => (
            <Button
              key={type}
              variant={selectedType === type ? "default" : "outline"}
              className="w-full capitalize"
              onClick={() => setSelectedType(type)}
            >
              {type}
            </Button>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            placeholder="Enter person's name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full"
          />
          <Button 
            type="submit" 
            className="w-full"
            disabled={!selectedType || !name}
          >
            Start Celebration
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default CelebrationForm;
