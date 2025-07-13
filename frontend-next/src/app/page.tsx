'use client';
import React from 'react';
import { useAppSelector } from '@/store/hooks';
export default function Home() {
  const counterValue = useAppSelector((state) => state.counter.value);
  return (
    <>
      <h1>Home</h1>
      <p>Welcome to the home page!</p>
      <p>Counter Value: {counterValue}</p>
    </>
  );
}
