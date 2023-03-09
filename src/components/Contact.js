import React from 'react';
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'

const Contact = () => {
  return (
  <section id='contact' className='lg:section py-16'>
    <div className="container mx-auto">
      <div className='flex flex-col lg:flex-row'>
        {/* text */}
        <motion.div 
        variants={fadeIn('right', 0.3)}
        initial = "hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.3}}
        className='flex-1 flex justify-start items-center'>
          <div>
            <h4 className='h3 text-3xl uppercase text-accent font-medium mb-4 tracking-wide'>Get in touch</h4>
            <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>Let's work <br />
            together !
            </h2>
          </div>
        </motion.div>
        {/* form */}
        <motion.form 
        variants={fadeIn('left', 0.3)}
        initial = "hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.3}}
        className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'
        action = 'https://getform.io/f/37f8a3a7-f92e-43c1-91cf-f2e1c7847b28'
        method = 'POST'
        >
          <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' type="text" placeholder='Your Name' name="name" />
          <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' type="text" placeholder='Your Email' name="email" />
          <textarea className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12' placeholder='Your message' name="message"></textarea>
          <button className='btn btn-lg' type='submit'>Send message</button>
        </motion.form>
      </div>
    </div>
  </section>
  );
};

export default Contact;