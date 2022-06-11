import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useLazyScrollingWrapper } from './lazyLoading';

const $Container = styled.div`
  border: 1px solid red;
  height: 400px;
  width: 500px;
  overflow: scroll;
  padding: 10px;

  div > div {
    height: 270px;
    width: 400px;
    justify-content: center;
    align-items: center;
    display: flex;
    border: 1px solid grey;
    margin-bottom: 10px;
  }
`;

const Page: React.FC<any> = () => {
  const [arr, setArr] = useState<any>([]);

  useEffect(() => {
    setTimeout(() => setArr([1, 2, 3, 4]), 3000);
  }, []);

  const ref = useRef(null);
  const refWrapper = useRef(null);

  const cb = () => {
    console.log('TS - backend get data and push in array');
    setArr((prev) => [...prev, Math.random(), Math.random(), Math.random()]);
  };

  useLazyScrollingWrapper(refWrapper, ref, cb, arr);

  return (
    <$Container ref={refWrapper}>
      <div ref={ref}>
        {arr.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    </$Container>
  );
};

export default Page;
