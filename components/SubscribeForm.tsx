import { FormEvent, useState } from 'react';

const SubscribeForm: React.FC<{ subscribe: ({}: any) => void; status: string; message: string; }> = ({ subscribe, status, message }) => {
  const [email, setEmail] = useState('your@email.com');
          
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    subscribe({
      EMAIL: email
    })
  }
  console.log(`status: ${status}`);
  console.log(`message: ${message}`);

  return (
    <>
    { 'error' === status && (
      <div className="border-red-500 p-5 border-solid border-2 mb-5">
        <div dangerouslySetInnerHTML={{__html: message}} />
      </div>
    )}
    { 'success' === status && (
      <div className="border-green-500 p-5 border-solid border-2 mb-5">
        <div dangerouslySetInnerHTML={{__html: message}} />
      </div>
    )}
    <form onSubmit={(e) => onSubmit(e)}>
      <label htmlFor="email" className="inline-block">
        Email: 
      </label>
      <input type="email" placeholder={email} onChange={(e) => { setEmail(e.target.value)}} className="inline-block ml-5 border-black border-solid border-2 p-2" />
      <input type="submit" value="Subscribe" className="inline-block ml-5 py-2 px-10 bg-gray-400 text-white cursor-pointer" />
    </form>
    </>
  )
}

export default SubscribeForm;