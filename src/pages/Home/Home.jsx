import React from 'react'
import  {  Sin } from './Sin';
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { FormControl } from '@mui/material';

export function Home() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);


  return (
    <div className=" container  text-black dark:text-white   m-auto mt-10 mb-10 grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">

      <Button onClick={handleOpen} variant="gradient">
        Open Modal
      </Button>
      <Dialog className='text-black dark:text-white dark:bg-black  bg-white *:' open={open} handler={handleOpen}>
        <DialogHeader>kursga qabul qilinish uchun toldiriladigannarsalar</DialogHeader>
        <DialogBody>
          <Sin/>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
}



export default Home