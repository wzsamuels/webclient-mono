'use client'

import InputForm from "./components/InputForm";
import Output from "./Output";
import useMudConnection from "./useMudConnection";

export default function Home() {
  const {sendMessage, lines} = useMudConnection();
  
  return (
    <div className='flex flex-col h-[100vh] overflow-y-hidden bg-background dark:bg-darkBackground'>
      <Output lines={lines}/>
      <InputForm onSubmit={(message: string) => {sendMessage(message)}}/>
    </div>
  )
}
