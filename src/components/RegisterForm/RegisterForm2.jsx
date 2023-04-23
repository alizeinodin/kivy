/* eslint-disable jsx-a11y/alt-text */
import { BsPersonVcardFill } from "react-icons/bs";
import { MdContactPhone } from "react-icons/md";
import { BiMaleFemale } from "react-icons/bi";
import { GoUnverified } from "react-icons/go";
import logo from "../../logo.png";

function RegisterForm2() {
  return (
    <div className='grad w-5/6 mx-auto py-16 md:px-40 rounded-3xl text-white flex justify-center items-center md:items-stretch flex-col gap-10 relative'>
      <img src={logo} className='w-32' />
      <p className='text-4xl'>ثبت نام</p>
      <form className='flex flex-col gap-6 text-xs'>
        <div className='bg-primaryColor rounded-2xl px-2 flex items-center justify-between min-w-[20rem] md:max-w-xl group-hover:bg-sky-700 border-2 border-transparent input-focus'>
          <div className='flex flex-col gap-2 px-4 py-2 w-full'>
            <p className='text-primaryColor2 text-right'>نام و نام خانوادگی</p>
            <input
              type='text'
              className='text-[#2b5480] text-base bg-transparent focus:outline-0 group'
            />
          </div>
          <BsPersonVcardFill className='text-[#2b5480] text-4xl pl-2 hover:cursor-pointer' />
        </div>

        <div className='bg-primaryColor rounded-2xl px-2 flex items-center justify-between min-w-[20rem] md:max-w-xl border-2 border-transparent input-focus'>
          <div className='flex flex-col gap-2 px-4 py-2 w-full'>
            <p className='text-primaryColor2 text-right'>شماره دانشجویی</p>
            <input
              type='text'
              className='text-[#2b5480] text-base bg-transparent focus:outline-0'
            />
          </div>
          <GoUnverified className='text-[#2b5480] text-4xl pl-2 hover:cursor-pointer' />
        </div>

        <div className='bg-primaryColor rounded-2xl px-2 flex items-center justify-between min-w-[20rem] md:max-w-xl border-2 border-transparent input-focus'>
          <div className='flex flex-col gap-2 px-4 py-2 w-full'>
            <p className='text-primaryColor2 text-right'>شماره تلفن</p>
            <input
              type='text'
              className='text-[#2b5480] text-base bg-transparent focus:outline-0'
            />
          </div>
          <MdContactPhone className='text-[#2b5480] text-4xl pl-2 hover:cursor-pointer' />
        </div>

        <div className='bg-primaryColor rounded-2xl px-2 flex items-center justify-between min-w-[20rem] md:max-w-xl border-2 border-transparent input-focus'>
          <div className='flex flex-col gap-2 px-4 py-2'>
            <p className='text-primaryColor2 text-right'>جنسیت</p>
            <div className='flex gap-10'>
              <div class='flex items-center gap-10'>
                <div class='inline-flex items-center'>
                  <label
                    class='relative flex cursor-pointer items-center rounded-full p-3'
                    for='html'
                    data-ripple-dark='true'
                  >
                    <input
                      id='html'
                      name='type'
                      type='radio'
                      class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-[#2b5480] transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-[#2b5480] checked:before:bg-[#2b5480] hover:before:opacity-10"
                    />
                    <div class='pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-[#2b5480] opacity-0 transition-opacity peer-checked:opacity-100'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        class='h-3.5 w-3.5'
                        viewBox='0 0 16 16'
                        fill='currentColor'
                      >
                        <circle
                          data-name='ellipse'
                          cx='8'
                          cy='8'
                          r='8'
                        ></circle>
                      </svg>
                    </div>
                  </label>
                  <label
                    class='mt-px cursor-pointer select-none font-base text-white text-base'
                    for='html'
                  >
                    مرد
                  </label>
                </div>
                <div class='inline-flex items-center'>
                  <label
                    class='relative flex cursor-pointer items-center rounded-full p-3'
                    for='react'
                    data-ripple-dark='true'
                  >
                    <input
                      id='react'
                      name='type'
                      type='radio'
                      class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-[#2b5480] transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-[#2b5480] checked:before:bg-[#2b5480] hover:before:opacity-10"
                    />
                    <div class='pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-[#2b5480] opacity-0 transition-opacity peer-checked:opacity-100'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        class='h-3.5 w-3.5'
                        viewBox='0 0 16 16'
                        fill='currentColor'
                      >
                        <circle
                          data-name='ellipse'
                          cx='8'
                          cy='8'
                          r='8'
                        ></circle>
                      </svg>
                    </div>
                  </label>
                  <label
                    class='mt-px cursor-pointer select-none font-base text-white text-base'
                    for='react'
                  >
                    زن
                  </label>
                </div>
              </div>
            </div>
          </div>
          <BiMaleFemale className='text-[#2b5480] text-4xl pl-2 hover:cursor-pointer' />
        </div>

        <div className='flex justify-between gap-10 items-center min-w-[20rem] md:max-w-xl'>
          <button className='bg-white text-[#2b5480] hover:bg-[#0b71d0] transition-all p-4 rounded-full w-full text-base'>
            ثبت نام
          </button>
          <button className='bg-[#555B69] hover:bg-[#41454f] transition-all p-4 rounded-full w-full text-base'>
            20،000 تومان
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm2;
