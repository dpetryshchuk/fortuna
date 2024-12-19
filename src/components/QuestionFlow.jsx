import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const QuestionFlow = () => {
  const [currentStage, setCurrentStage] = useState('backstory');
  const [responses, setResponses] = useState({});

  const handleResponse = (question, answer) => {
    setResponses(prev => ({
      ...prev,
      [question]: answer
    }));
  };

  return (
    <div className="w-2/3 p-6 bg-white">
      <Card className="h-full">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold mb-6">
            {currentStage === 'backstory' ? 'Your Story Begins...' : 'Present Moment'}
          </h2>
          {/* Question content will be rendered here */}
        </CardContent>
      </Card>
    </div>
  );
};

export default QuestionFlow;