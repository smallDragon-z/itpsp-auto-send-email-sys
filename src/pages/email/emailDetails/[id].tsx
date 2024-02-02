import { useRouter } from 'next/router';

const EmailDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
};

export default EmailDetails;
