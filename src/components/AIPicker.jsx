import React from "react";

import CustomButton from "./CustomButton";

const AIPicker = ({ prompt, setPrompt, generatingImg, handleSubmit }) => {
  return (
    <div className="aipicker-container">
      <textarea
        className="aipicker-textarea"
        placeholder="ASK AI..."
        rows={5}
        onChange={(e) => setPrompt(e.target.value)}
        value={prompt}
      />
      <div className="flex flex-wap gap-3">
        {generatingImg ? (
          <CustomButton
            type="outline"
            title="Generating..."
            customStyles="text-xs"
          />
        ) : (
          <>
            <CustomButton
              type="outline"
              title="AI Logo"
              handleClick={() => {
                handleSubmit("logo");
              }}
              customStyles="text-xs"
            />
            <CustomButton
              type="filled"
              title="AI Full"
              handleClick={() => {
                handleSubmit("Full");
              }}
              customStyles="text-xs"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default AIPicker;
