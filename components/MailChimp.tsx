import { useState } from 'react';
import Image from "next/image";
import Head from "next/head";

import MailchimpSubscribe from 'react-mailchimp-subscribe';
import SubscribeForm from './SubscribeForm';

const MailChimpForm: React.FC = () => {

  const postUrl = 'https://thewpcrowd.us11.list-manage.com/subscribe/post?u=8f26cc02b302f95749a55f4e1&amp;id=2a5e63e0c6';

  return (
    <div className={`my-10 subscribe-form`}>
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }) => (
          <SubscribeForm subscribe={subscribe} status={status} message={message} />
        )}
      />
    </div>
  )
}

export default MailChimpForm;