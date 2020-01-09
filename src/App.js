import React from 'react';
import { ImgXsSquare, ImgSmSquare, ImgMdSquare, ImgLgSquare, ImgXsRound, ImgSmRound, ImgMdRound, ImgLgRound } from './components/images'
import { BtnXs, BtnSm, BtnMd, BtnLg, BtnXsRound, BtnSmRound, BtnMdRound, BtnLgRound, BtnXsOutline, BtnSmOutline, BtnMdOutline, BtnLgOutline, BtnXsOutlineRound, BtnSmOutlineRound, BtnMdOutlineRound, BtnLgOutlineRound, Fab } from '../src/components/buttons';
import { Input, InputHalf, InputWithBg, InputHalfWithBg, Select } from '../src/components/inputs';
import { LoginForm, InlineLoginForm, UnderLineForm } from '../src/components/loginForms';

const App = () => {
  return (
  <>
    <h1 className='ml-4 text-3xl'>Square Picture</h1>
    <div className='flex flex-wrap m-6 justify-between'>
      <ImgXsSquare />
      <ImgSmSquare />
      <ImgMdSquare />
      <ImgLgSquare />
    </div>
    <h1 className='ml-4 text-3xl'>Round Picture</h1>
    <div className='flex flex-wrap m-6 justify-between'>
      <ImgXsRound />
      <ImgSmRound />
      <ImgMdRound />
      <ImgLgRound />
    </div>
    <h1 className='ml-4 text-3xl'>Square Buttons</h1>
    <div className='flex flex-wrap m-6 justify-between'>
      <BtnXs />
      <BtnSm />
      <BtnMd />
      <BtnLg />
    </div>
    <h1 className='ml-4 text-3xl'>Round Buttons</h1>
    <div className='flex flex-wrap m-6 justify-between'>
      <BtnXsRound />
      <BtnSmRound />
      <BtnMdRound />
      <BtnLgRound />
    </div>
    <h1 className='ml-4 text-3xl'>Square Button Outline</h1>
    <div className='flex flex-wrap m-6 justify-between'>
      <BtnXsOutline />
      <BtnSmOutline />
      <BtnMdOutline />
      <BtnLgOutline />
    </div>
    <h1 className='ml-4 text-3xl'>Round Button Outline</h1>
    <div className='flex flex-wrap m-6 justify-between'>
      <BtnXsOutlineRound />
      <BtnSmOutlineRound />
      <BtnMdOutlineRound />
      <BtnLgOutlineRound />
    </div>
    <h1 className='ml-4 text-3xl'>Floating Action Button</h1>
    <div className='flex flex-wrap m-6 justify-between'>
      <Fab />
    </div>
    <h1 className='ml-4 text-3xl'>Input</h1>
    <div className='flex flex-wrap m-6 justify-between'>
      <Input />
      <InputHalf />
    </div>
    <h1 className='ml-4 text-3xl'>Input With Background</h1>
    <div className='flex flex-wrap m-6 justify-between'>
      <InputWithBg />
      <InputHalfWithBg />
    </div>
    <h1 className='ml-4 text-3xl'>Select</h1>
    <div className='flex flex-wrap m-6 justify-between'>
      <Select />
    </div>
    <h1 className='ml-4 text-3xl'>Login Forms</h1>
    <div className='flex flex-wrap m-6 justify-between'>
      <LoginForm />
      <InlineLoginForm />
    </div>
    <h1 className='ml-4 text-3xl'>Subscription Form</h1>
    <div className='flex flex-wrap m-6 justify-between'>
      <UnderLineForm />
    </div>
  </>
  );
}

export default App;
