import { Dispatch, useState } from "react";
import InputForm from "../../vite/src/components/InputForm";
import Output from "./components/Output";
import useMudConnection from "./useMudConnection";
import { Menu } from '@headlessui/react'
import { Settings } from "./types";

export default function Home() {
  const {sendMessage, lines} = useMudConnection();
  const [settings, setSettings] = useState<Settings>(() => {
    const theme = localStorage.getItem("theme") ?? "dark";
    const color = Boolean(localStorage.getItem("color")) ?? true;
    return ({fontSize: 1, theme: theme, colorChannels: color})
  })
  
  return (
    <div className={`${settings.theme}`}>
      <div className={`flex flex-col h-[100vh] overflow-y-hidden bg-background dark:bg-darkBackground text-text dark:text-darkText`}>
        <header className="border-b border-text dark:border-darkText p-2">
          <span><SettingsMenu settings={settings} setSettings={setSettings}/></span> | <span>Help</span>
        </header>
        <Output settings={settings} lines={lines}/>
        <InputForm onSubmit={(message: string) => {sendMessage(message)}}/>
      </div>
    </div>
  )
}

function SettingsMenu({settings, setSettings} : {settings: Settings, setSettings: Dispatch<Settings>}) {
  const [theme, setTheme] = useState<string>(settings.theme)
  const [colorChannels, setColorChannels] = useState(settings.colorChannels)

  const handleThemeChange = (event: React.ChangeEvent<HTMLInputElement>) => { 
    setTheme(event.target.value);
  }

  const handleColorChannelsChange = (event: React.ChangeEvent<HTMLInputElement>) => { 
    setColorChannels(event.target.checked);
  }

  const handleApply = () => {
    setSettings({...settings, theme, colorChannels});
    localStorage.setItem("theme", theme);
    localStorage.setItem("color", String(colorChannels))
    console.log(localStorage)
  }

  return (
    <Menu>
      <Menu.Button className="hover:underline">Settings</Menu.Button>
      <Menu.Items className="border fixed bg-background dark:bg-darkBackground  shadow-xl	flex flex-col">
        <div className="p-2">
          <div className="flex">
            Theme:
            <label className="mx-2">Light</label>
            <input type="radio" value="light" name="theme" checked={theme === "light"} onChange={handleThemeChange}/>              
            <label className="mx-2">Dark</label>
            <input type="radio" value="dark" name="theme" checked={theme === "dark"} onChange={handleThemeChange}/>            
          </div>
          <div className="flex">
            Color Channel Names:
            <input type="checkbox" checked={colorChannels} onChange={handleColorChannelsChange}/>
          </div>
        </div>
        <Menu.Item>
          <button className="border-t hover:bg-darkBackground hover:text-darkText" onClick={() => handleApply()}>Apply</button>
        </Menu.Item>
      </Menu.Items>
    </Menu>
  )
}