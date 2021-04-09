import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

const NotFoundPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/');
  }, [router]);

  return <h1>404 - Page Not Found</h1>;
};

export default NotFoundPage;
