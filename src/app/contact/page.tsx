'use client';
import { useAppSelector, useAppDispatch } from "@/store/hooks"
import { decrement, increment,reset } from "@/store/slices/CounterSlice";
export default function ContactPage() {
  const counterValue = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  return (
    <div>
      <h1>Contact</h1>
      <p>This is the contact page.</p>
      <p>counter value: {counterValue}</p>
      <button className="bg-blue-500 text-white p-2 rounded" onClick={() => dispatch(increment())}>Increment</button>
      <button className="bg-red-500 text-white p-2 rounded" onClick={() => dispatch(decrement())}>Decrement</button>
      <button className="bg-gray-500 text-white p-2 rounded" onClick={() => dispatch(reset())}>Reset</button>
    </div>
  )
}
