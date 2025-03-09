import React from 'react';
import SuggestionDoc from './SuggesstionDoc/SuggesstionDoc';
import Diet from './Diet';

const FoodCom = () => {
    return (
        <div>
            <Diet />
            <SuggestionDoc />
            <iframe
                src="https://www.chatbase.co/chatbot-iframe/SO1jbjjkLxoBLtuGwtsFo"
                width="100%"
                style={{ height: '100%', minHeight: '700px' }}
                frameBorder="0"
            ></iframe>
        </div>
    );
};

export default FoodCom;