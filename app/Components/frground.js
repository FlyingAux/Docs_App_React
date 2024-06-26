import React, { useRef } from 'react'
import Card from './Card'


const frground = () => {

  const ref = useRef(null);

  const data =[ 
  {
    desc: 'A pa of senteragraph is defined as “a groupnces or a single sentence that forms a unit” (Lunsford and Connors 116).',
    filesize: '0.9mb',
    close: true,
    tag: {
      isOpen: false,
      tagtitle: 'Download Now',
      tagcolor: 'green'
    }
  },
  {
    desc: 'A pa of senteragraph is defined as “a groupnces or a single sentence that forms a unit” (Lunsford and Connors 116).',
    filesize: '2.7mb',
    close: true,
    tag: {
      isOpen: true,
      tagtitle: 'Upload Now',
      tagcolor: 'blue'
    }
  },
  {
    desc: 'A pa of senteragraph is defined as “a groupnces or a single sentence that forms a unit” (Lunsford and Connors 116).',
    filesize: '0.4mb',
    close: true,
    tag: {
      isOpen: true,
      tagtitle: 'Render Now',
      tagcolor: 'green'
    }
  },
];

  return (
    <>
        <div ref={ref} className='fixed z-20 h-screen w-full flex gap-5 flex-wrap p-10'>
          {data.map((item , index)=>(
            <Card data={item} referance={ref} />
          ))}
        </div>
    </>
  )
}

export default frground