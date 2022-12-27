import React from 'react';
import Container from 'elements/Container';
import Textfield from 'elements/Form/Textfield';
import Button from 'elements/Button';

const Auth = () => {
  return (
    <>
      <Container className="xs:pt-[51px] md:pt-[100px] xs:pb-[69px] md:pb-[117px]">
        <div className='xs:mb-10 md:mb-14'>
          <h3 className='font-groteskBold text-tp-purple font-semibold	xs:text-20 md:text-30 text-center xs:leading-7 md:leading-10'>
            Login
          </h3>
        </div>
        <div className='flex xs:flex-col md:flex-row md:justify-between'>
          <div className='xs:mb-14 md:mb-0 md:w-[500px] md:flex md:flex-col'>
            <Textfield
              label="Username"
              name="username"
            />
            <Textfield
              label="Password"
              name="password"
              type="password"
            />
            <Button className="bg-black">Submit</Button>
          </div>
          <div class="md:max-w-[472px]">
            <div class="xs:text-15 md:text-18 font-normal leading-7">
              <h5 class="text-tp-purple font-bold text-18 xs:mb-6 md:mb-3">Not a member?</h5>
              <p class="mb-2">
                Subscribe for access to the Crowd Calendar, Lines app, Touring Plans, and much more!
              </p>
              <p class="mb-2">
                Subscriptions come with a 45-day money-back guarantee and do not auto-renew.
              </p>
              <p class="mb-2">
                See a full list of member benefits for
                <a href="/" className='text-tp-purple ml-1 font-semibold'>Walt Disney World</a>,
                <a href="/" className='text-tp-purple ml-1 font-semibold'>Disneyland</a>,
                <a href="/" className='text-tp-purple ml-1 font-semibold'>Universal Orlando</a> and
                <a href="/" className='text-tp-purple ml-1 font-semibold'>Disney Cruise Line!</a>
              </p>
            </div>
          </div>
        </div>
      </Container>


      <Container className="xs:pt-[51px] md:pt-[100px] xs:pb-[69px] md:pb-[117px]">
        <div className='xs:mb-10 md:mb-14 flex justify-center'>
          <div className='w-[900px]'>
            <h3 className='font-groteskBold text-tp-purple font-semibold	xs:text-20 md:text-30 text-center xs:leading-7 md:leading-10 mb-4'>
              Reset Password
            </h3>
            <p class="mb-2 xs:text-15 md:text-18 font-normal leading-7 text-center">
              Please enter the <span className='text-tp-purple ml-1 font-semibold'>email address</span> (which may be different from your TouringPlans.com username) associated with your TouringPlans.com account below and then press the "Reset Password" button.
            </p>
          </div>
        </div>
        <div className='flex justify-center'>
          <div className='xs:mb-14 md:mb-0 xs:w-full md:w-[500px] md:flex md:flex-col'>
            <Textfield
              label="Email"
              name="email"
            />
            <Button className="bg-black">Submit</Button>
          </div>

        </div>
      </Container>

      <Container className="xs:pt-[51px] md:pt-[100px] xs:pb-[69px] md:pb-[117px]">
        <div className='xs:mb-10 md:mb-14 flex justify-center'>
          <div className='w-[900px]'>
            <h3 className='font-groteskBold text-tp-purple font-semibold	xs:text-20 md:text-30 text-center xs:leading-7 md:leading-10 mb-4'>
              Reset Password
            </h3>
            <p class="mb-2 xs:text-15 md:text-18 font-normal leading-7 text-center">
              Please enter your email address below and then press the "Recover Username" button.
            </p>
          </div>
        </div>
        <div className='flex justify-center'>
          <div className='xs:mb-14 md:mb-0 xs:w-full md:w-[500px] md:flex md:flex-col'>
            <Textfield
              label="Email"
              name="email"
            />
            <Button className="bg-black">Recover Username</Button>
          </div>

        </div>
      </Container>
    </>
  );
};

export default Auth;