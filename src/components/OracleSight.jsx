import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const OracleSight = () => {
  return (
    <div className="w-1/3 h-screen bg-gray-900">
      <Card className="h-full border-none rounded-none bg-gray-900 text-white">
        <CardContent className="p-6">
          <h2 className="text-xl font-bold mb-4">Oracle Sight</h2>
          <div className="prose prose-invert">
            <p className="text-lg">
              {/* Oracle vision will be rendered here */}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OracleSight;