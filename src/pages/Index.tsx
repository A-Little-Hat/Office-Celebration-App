
import { useState } from 'react';
import CelebrationForm from '@/components/CelebrationForm';
import BirthdayCelebration from '@/components/celebrations/BirthdayCelebration';
import FarewellCelebration from '@/components/celebrations/FarewellCelebration';
import PromotionCelebration from '@/components/celebrations/PromotionCelebration';

const Index = () => {
  const [celebrationType, setCelebrationType] = useState<string>('');
  const [personName, setPersonName] = useState<string>('');

  const handleBack = () => {
    setCelebrationType('');
    setPersonName('');
  };

  const renderCelebration = () => {
    if (!celebrationType || !personName) return null;

    switch (celebrationType) {
      case 'birthday':
        return <BirthdayCelebration name={personName} onBack={handleBack} />;
      case 'farewell':
        return <FarewellCelebration name={personName} onBack={handleBack} />;
      case 'promotion':
        return <PromotionCelebration name={personName} onBack={handleBack} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen w-full">
      {!celebrationType || !personName ? (
        <CelebrationForm
          onSubmit={(type, name) => {
            setCelebrationType(type);
            setPersonName(name);
          }}
        />
      ) : (
        <div className="min-h-screen w-full">
          {renderCelebration()}
        </div>
      )}
    </div>
  );
};

export default Index;
