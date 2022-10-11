import React from 'react';

const About = () => {
    return (
        <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      <div className='max-w-xl sm:mx-auto lg:max-w-2xl'>
        <div className='max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12'>
          <h2 className='max-w-lg text-center mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-violet-400 sm:text-4xl md:mx-auto'>
            Todays Questions !!
          </h2>
          <p className='text-base text-center text-gray-700 md:text-lg'>
            Here is our some questions about todays quiz test. Assessment, instruction, and practice that motivate every student to mastery.
          </p>
        </div>
      </div>
      <div className='max-w-screen-xl sm:mx-auto '>
        <div className='grid grid-cols-1 px-10 py-5 mx-auto shadow-lg bg-violet-200  gap-16 row-gap-8 lg:grid-cols-1'>
          <div className='space-y-8 '>
            <div>
              <p className='mb-4 text-2xl font-medium'>
              What is the purpose of react router ??
              </p>
              <p className='text-gray-700'>
              React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
Let us create a simple application to React to understand how the React Router works. 

                <br />
                <br />
                Setting up the React Application: Create a React application using create-react-app and lets call it geeks.
              </p>
            </div>
            <div>
              <p className='mb-4 text-2xl font-medium'>
              How Does Context Api Works ??
              </p>
              <p className='text-gray-700'>
              The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.
                <br />
                <br />
                Context API is a (kind of) new feature added in version 16.3 of React that allows one to share state across the entire app (or part of it) lightly and with ease.
              </p>
            </div>
            <div>
              <p className='mb-4 text-2xl font-medium'>
                What is useRef Hook?
              </p>
              <p className='text-gray-700'>
              The useRef hook is the new addition in React 16.8. Before proceeding to this article there is a prerequisite to know about the ref in react.
            The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. <br /> <br />
            Syntax:
            const refContainer = useRef(initialValue);
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
    );
};

export default About;