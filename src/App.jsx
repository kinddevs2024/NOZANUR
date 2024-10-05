import axios from 'axios';
import React, { useState } from 'react'
import {
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import ThemeToggle from './Layout/ThemeToggle';

const App = () => {
  const BOT_TOKEN = "7808485169:AAGYT5-H74T35jPFR24U37CfZQsxcnCJBQM"
  const MY_ID = "6348045547"
  const MY_MOM = "6348045547"
  const [name, setName] = useState("")
  const [tel, setTel] = useState("")
  const [email, setEmail] = useState("")
  const [masiga, setMasiga] = useState("")


  const sapshenia = `
    Name : ${name} 
Tel : ${tel} 
Email : ${email}
Masige : ${masiga}

    `
  const sent_mesj = () => {
    axios
      .post(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        chat_id: MY_MOM,
        text: sapshenia,
      })
      .then((response) => {
        console.log("Message sent:", response.data);
      })
      .catch((error) => {
        console.error("Error sending message:", error);
      }).then(() => {
        window.location.reload()
      })
  };
  return (
    <div  className='bg-sadia dark:bg-dark-sadia h-screen duration-500' >
      <div className=" container  h-full  text-black dark:text-white duration-300 flex justify-center items-center  m-auto   gap-4  ">
        <form className="mt-8 mb-2  w-full flex flex-col">
          <div className='flex justify-center items-center  w-full rounded-full  mb-5'>
            <img className=' rounded-full  w-60' src="src/image.png" alt="sadia logo" />
          </div>
          <div className=' flex justify-center items-center flex-col gap-5 m-3 '>
            <div className='flex flex-col  w-full'>
              <Typography variant="h6" color="blue-gray " className='dark:text-white'>
                Ismingiz :
              </Typography>
              <Input
                size="lg"
                type="name"
                placeholder="Muslima"
                className=" !border-sadia-text  w-full focus:!border-sadia-text-fucus"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className='flex flex-col  w-full'>
              <Typography variant="h6" color="blue-gray" className='dark:text-white' >
                Sizningiz no'mringiz :
              </Typography>
              <Input
                size="lg"
                type="number"
                placeholder="+998903464546"
                className=" !border-sadia-text  focus:!border-sadia-text-fucus"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                value={tel}
                onChange={(e) => setTel(e.target.value)}
              />
            </div>

            <div className=' flex flex-col  w-full'>
              <Typography variant="h6" color="blue-gray" className='dark:text-white'>
                Telegram nikingiz :
              </Typography>
              <Input
                type="email"
                size="lg"
                placeholder="@Muslimaxon90"
                className=" !border-sadia-text focus:!border-sadia-text-fucus"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            
          </div>
          <Button onClick={sent_mesj} className="mt-14   bg-sadia-text  dark:text-white" fullWidth>
            sign up
          </Button>
        </form>
      </div>
      <div className=' absolute  top-[5%]  z-50 right-[5%]'>
        <ThemeToggle />
      </div>
    </div>
  )
}

export default App;