import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

// Components
import MailChimpForm from '../components/MailChimp';

const Home: NextPage = () => {
  const date = new Date();
  return (
    <div className='font-sans'>
      <Head>
        <title>Teckokua: Helping those who need help in tech</title>
        <meta
          name='description'
          content='Helping those who need help in their tech journey'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='p-32'>
        <div className='full-height-container'>
          {/* <!-- Card component  --> */}
          <section className='flex items-center text-gray-600 body-font'>
            <div className='container px-4 py-8 mx-auto'>
              <div className='w-full max-w-7xl mx-auto bg-white rounded-lg md:flex'>
                <div className='flex-1'>
                  <Image
                    width='100%'
                    height='100%'
                    layout='responsive'
                    alt=''
                    src='https://source.unsplash.com/6mze64HRU2Q'
                    className='object-cover w-full rounded-tl-lg rounded-tr-lg h-96 md:h-full md:rounded-bl-lg md:rounded-tr-none'
                  />
                </div>
                <div className='flex items-start flex-1'>
                  <div className='px-8'>
                    <h1 className='mb-8 text-7xl font-semibold text-primary-600'>
                      Teckokua
                    </h1>

                    <h3 className='text-4xl text-left mb-5'>Kokua</h3>
                    <blockquote className='pl-10 border-l-8 border-primary mb-5'>
                      Kokua [koh-ku-ah] is an important concept in Hawaiian
                      culture. It means “help,” but it goes deeper than that.
                      Kokua is about helping others without expecting anything
                      in return. In a world where we’re juggling so many demands
                      and going about our day at full speed, it’s easy to lose
                      sight of the needs of others.
                    </blockquote>
                    <h3 className='text-4xl text-left mb-5'>Mission</h3>
                    <p className='leading-relaxed text-black xxl:text-xl text-left'>
                      The goal of Teckokua to have a “fund” where anyone new to
                      the tech space can be featured for assistance, request
                      assistance, or recommend someone else for assistance.
                    </p>
                    <p className='leading-relaxed text-black xxl:text-xl text-left mt-5'>
                      We help each other grow, we help each other thrive.
                    </p>

                    <h2 className='text-3xl my-5'>Built in Public</h2>
                    <p>
                      We are going to build this whole thing in public, add
                      features to it in public, and help everyone grow in
                      public.
                      <a
                        href='https://github.com/royboy789/teckokua/'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='block text-3xl my-4 text-left'
                      >
                        <FontAwesomeIcon
                          icon={faGithub}
                          width={40}
                          className='inline-block mr-2'
                        />
                        Find us on GitHub
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className='w-full max-w-7xl mx-auto bg-white rounded-lg'>
                <h2 className='my-10 text-6xl text-gray-600 font-semibold'>
                  Launching Soon
                </h2>
                <p>
                  Sign up below to be the first the know when we launch!
                </p>
                <MailChimpForm />
              </div>
            </div>
          </section>
          {/* <!-- Card component end  --> */}
        </div>
      </main>

      <footer className='w-full text-center p-10'>
        <a
          href='https://github.com/royboy789/teckokua/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FontAwesomeIcon
            icon={faGithub}
            width={20}
            className='inline-block'
          />
          <span className='copyright ml-5'>
            &copy; {date.getFullYear()} Powered by passion, community, and hard
            work.
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
