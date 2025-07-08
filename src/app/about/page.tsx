'use client';
import React from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { decrement, increment } from "@/store/slices/CounterSlice";
export default function AboutPage() {
  const counterValue = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  return (
    <div>
      <h1>About</h1>
      <p>This is the about page.</p>
      <p>Counter Value: {counterValue}</p>
      <button  className="bg-blue-500 text-white p-2 rounded" onClick={() => dispatch(increment())}>Increment</button>
      <button className="bg-red-500 text-white p-2 rounded" onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}
