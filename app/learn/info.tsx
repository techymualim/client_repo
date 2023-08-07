import InfoText from '@/components/ui/info-text';
import React from 'react';
import Image from 'next/image';

interface Props {
    item: {
        id: string
        info: Array<any>
    }
    index: number
}

const Info: React.FC<Props> = ({ item, index }) => {
    return (
        <div id={`${item.id}`} className="p-8 pt-0 text-white">
            {
                item.info.map((item, index) => (
                    <InfoText key={`${index}` + item.type} type={item.type} content={item.content} />
                ))
            }
            <div className='flex justify-center pt-12 pb-6'>
                <Image
                    src='/assets/images/divider.svg'
                    alt='divider'
                    height={20}
                    width={150}
                />
            </div>
        </div>
    );
};

export default Info;