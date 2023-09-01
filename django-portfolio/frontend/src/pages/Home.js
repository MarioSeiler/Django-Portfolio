import React from 'react';

import me from './../images/me-image-2.jpg';

const Home = () => {
    return ( 
        <div className="p-12 mx-auto lg:px-8">
<div className="px-4 sm:px-8 lg:px-12">
<div className="mx-auto max-w-2xl lg:max-w-5xl">
<div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-[auto_1fr]">
<div className="lg:pl-20">
<div className="px-2.5 w-full">
    <img src={me} alt="pb" className='mb-12 lg:mx-0 m-auto aspect-square rounded-2xl object-cover max-w-xs'/>
</div>
</div>
<div className="lg:order-first lg:row-span-2">
<h1 className="text-4xl font-bold tracking-tight text-darkGray1 sm:text-5xl">I’m Mario Seiler. I live in Bern, where I work as a software engineer.</h1>
<div className="mt-6 space-y-7 text-base text-darkGray1">
<p>I am a dedicated python developer and I love to do projects with it. Here on my portfolio site, which I build with Django you can learn a little more about me and my projects I've done. Feel free to look around.</p>
<p>I like working with data and one of my favorite topics in IT is Machine Learning. That's also why I am studying Data Engineering at the university of applied sciences in Bern, where I will finish my studies in 2027.</p>
<p>In my freetime I like to get a drink with my friends or stay at home and play videogames. If I am not doing that I am coding, probably in python...</p>
<p>If you are interested in my skills or projects feel free to reach out to me and ask for CV or other qualifications.</p>

</div>
</div>
<div className="lg:pl-20">
<ul>
<li className="mt-4 flex">
<a className="group flex text-sm font-medium text-darkGray1 transition hover:text-blue2" href="/about#">
<svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 flex-none fill-darkGray2 transition group-hover:fill-blue2">
<path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z">
</path>
</svg>
<span className="ml-4">Follow on GitHub</span>
</a>
</li>
<li className="mt-4 flex">
<a className="group flex text-sm font-medium transition hover:text-blue2 " href="/about#">
<svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 flex-none fill-darkGray2 transition group-hover:fill-blue2">
<path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z">
</path>
</svg>
<span className="ml-4">Follow on LinkedIn</span>
</a>
</li>
<li className="mt-8 border-t pt-8 flex">
<a className="group flex text-sm font-medium text-darkGray1 transition hover:text-blue2" href="mailto:mario.seiler@outlook.com">
<svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 flex-none fill-darkGray2 transition group-hover:fill-blue2">
<path fillRule="evenodd" d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z">
</path>
</svg>
<span className="ml-4">Send me an email</span>
</a>
</li>
</ul>
</div>
</div>
</div>
</div>
</div>
    );
};


export default Home;