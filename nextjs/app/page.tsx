'use client'

import { useState } from "react";
import InputForm from "../../vite/src/components/InputForm";
import Output from "./Output";
import useMudConnection from "../../vite/src/useMudConnection";

interface Settings {
  fontSize: number
}

export default function Home() {
  const {sendMessage, lines} = useMudConnection();
  
  return (
    <div className='flex flex-col h-[100vh] overflow-y-hidden bg-background dark:bg-darkBackground text-text dark:text-darkText'>
      <header className="">
        <span><SettingsMenu/></span> | <span>Help</span>
      </header>
      <Output lines={lines}/>
      <InputForm onSubmit={(message: string) => {sendMessage(message)}}/>
    </div>
  )
}

import { Menu } from '@headlessui/react'

function SettingsMenu() {
  const [theme, setTheme] = useState(() => {
    const mode = localStorage.getItem("theme");
  })
  const [colorChannels, setColorChannels] = useState(true);

  return (
    <Menu>
      <Menu.Button className="hover:underline">Settings</Menu.Button>
      <Menu.Items className="border fixed bg-background dark:bg-darkBackground p-2 shadow-inner	flex flex-col">
        <Menu.Item>
          {({ active }) => (
            <div
              className={`${active && 'bg-blue-500'}`}
            >
              Account settings
            </div>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a
              className={`${active && 'bg-blue-500'}`}
              href="/account-settings"
            >
              Documentation
            </a>
          )}
        </Menu.Item>
        <Menu.Item disabled>
          <span className="opacity-75">Invite a friend (coming soon!)</span>
        </Menu.Item>
        <Menu.Item>
          <button>Apply</button>
        </Menu.Item>
      </Menu.Items>
    </Menu>
  )
}