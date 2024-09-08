import axios from 'axios';
import React, { useState } from 'react'
import {
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";

export function Sin() {
  const BOT_TOKEN = "7000262508:AAFKSrfSzkomLCl59FRL51x-ggSNqv_k-I4"
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
    <div className=" container  text-black dark:text-white flex justify-center items-center  m-auto mt-10 mb-10  gap-4  ">
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 w-full flex flex-col gap-6">
          <div className=' block md:flex'>
            <div className=''>
              <Typography variant="h6" color="blue-gray " className='dark:text-white'>
                Name :
              </Typography>
              <Input
                size="lg"
                type="name"
                placeholder="Umar"
                className=" !border-[#00B3B3]  md:w-[95%] w-full focus:!border-[#8bf1f1]"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                value={name}    
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className=''>
              <Typography variant="h6" color="blue-gray" className='dark:text-white' >
                Your Tel :
              </Typography>
              <Input
                size="lg"
                type="number"
                placeholder="+998 90 346 45 46"
                className=" !border-[#00B3B3] md:w-[89.999%] w-full focus:!border-[#8bf1f1]"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                value={tel}
                onChange={(e) => setTel(e.target.value)}
              />
            </div>
          </div>
          <div className=' flex flex-col  w-full'>
            <Typography variant="h6" color="blue-gray" className='dark:text-white'>
              Your email :
            </Typography>
            <Input
              type="email"
              size="lg"
              placeholder="name@mail.com"
              className=" !border-[#00B3B3] focus:!border-[#8bf1f1]  w-[100%]"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <Typography variant="h6" color="blue-gray" className='dark:text-white' >
              Massage :
            </Typography>
            <Input
              type="text"
              size="lg"
              placeholder="Massage"
              className=" !border-[#00B3B3] w-[100%] h-20 flex text-wrap flex-wrap justify-start items-start focus:!border-[#8bf1f1]"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              value={masiga}
              onChange={(e) => setMasiga(e.target.value)}
            />
          </div>
        </div>
        <Button onClick={sent_mesj} className="mt-14   bg-[#8bf1f1] dark:text-white" fullWidth>
          sign up
        </Button>
      </form>
    </div>
  );
}



export default Sin