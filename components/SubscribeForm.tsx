import { FormEvent, useState } from 'react';

const SubscribeForm: React.FC<{ subscribe: ({}: any) => void; status?: string|null; message?: string|Error|null; }> = ({ subscribe, status, message }) => {
  const [email, setEmail] = useState('your@email.com');
  const [fname, setFname] = useState('First Name');
  const [lname, setLname] = useState('Last Name');
          
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    subscribe({
      EMAIL: email,
      FNAME: fname,
      LNAME: lname,
    })
  }

  return (
    <>
    { 'error' === status && (
      <div className="border-red-500 p-5 border-solid border-2 mb-5">
        <div dangerouslySetInnerHTML={{__html: message?.toString() || ''}} />
      </div>
    )}
    { 'success' === status && (
      <div className="border-green-500 p-5 border-solid border-2 mb-5">
        <div dangerouslySetInnerHTML={{__html: message?.toString() || ''}} />
      </div>
    )}
    {'success' !== status && (<form onSubmit={(e) => onSubmit(e)}>
      <label htmlFor="email" className="inline-block">
        Email: 
      </label>
      <input type="email" name="email" id="email" placeholder={email} onChange={(e) => { setEmail(e.target.value)}} className="inline-block ml-5 border-black border-solid border-2 p-2" />

      <label htmlFor="fname" className="inline-block ml-5">
        First Name: 
      </label>
      <input type="text" name="fname" id="fname" placeholder={fname} onChange={(e) => { setFname(e.target.value)}} className="inline-block ml-5 border-black border-solid border-2 p-2" />

      <label htmlFor="lname" className="inline-block ml-5">
        Last Name: 
      </label>
      <input type="text" name="lname" id="lname" placeholder={lname} onChange={(e) => { setLname(e.target.value)}} className="inline-block ml-5 border-black border-solid border-2 p-2" />

      <input type="submit" value="Get Notified" className="inline-block ml-5 py-2 px-10 bg-gray-400 text-white cursor-pointer" />
    </form>)}
    </>
  )
}

export default SubscribeForm;