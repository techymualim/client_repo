import React from 'react';

interface TextProps {
  type: string;
  content: string | string[];
}

const InfoText: React.FC<TextProps> = ({ type, content }) => {

  return (
    <>
      {type === 'title' && <h1 className="text-xl font-bold mb-10">{content}</h1>}
      {type === 'subtitle' && <h2 className="text-lg font-semibold mb-10">{content}</h2>}
      {type === 'underlined' && <h2 className="text-lg underline mb-10">{content}</h2>}
      {type === 'paragraph' && <p className="text-sm md:text-base mb-10">{content}</p>}
      {type === 'link' && typeof content === 'string' && 
        <a href={content} target='_blank' rel='noreferrer' className="text-sm md:text-base text-blue-500 mb-10">{content}</a>}
      {type === 'list' &&
        <ul className="text-sm md:text-base list-disc list-inside mb-10">
          {Array.isArray(content) && content?.length > 0 && content.map(item => <li key={item} className='mb-10'>{item}</li>)}
        </ul>
      }
      {
        type === 'number-list' &&
        <ol className="text-sm md:text-base">
          {Array.isArray(content) && content.length > 0 && content.map((item, index) => (
            <li key={item} className='mb-10' value={index + 1}>{index + 1 + ') '}{item}</li>
          ))}
        </ol>

      }
    </>
  );
};

export default InfoText;
