"use client"

import { NewVerification } from '@/actions/new-verification'
import { CardWrapper } from '@/components/auth/card-wrapper'
import { useSearchParams } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'
import { HashLoader } from "react-spinners"
import { FormError } from '@/components/form-error'
import { FormSuccess } from '@/components/form-success'

const NewVerificaionForm = () => {

  const [error, setError] = useState<string | undefined>()
  const [success, setSuccess] = useState<string | undefined>()

  const searchParams = useSearchParams();

  const token = searchParams.get("token");

  const onSubmit = useCallback(() => {
    if (!token) {
      setError("Missing token!");
      return;
    };
    // console.log(token)
    NewVerification(token)
      .then((date) => {
        setSuccess(date.success);
        setError(date.error);
      })
      .catch(() => {
        setError("Something went wrong!");
      })

  }, [token]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit])

  return (
    <CardWrapper
      headerLabel="Confirming your verification"
      backButtonLabel="Back to login page"
      backButtonHref="/auth/login"
    >
      <div className=' flex flex-col gap-6 items-center w-full justify-center'>
        {!success && !error && 
        <HashLoader
          color="gray"
        />
        }

        <FormSuccess messege={success} />
        <FormError messege={error} />
      </div>
    </CardWrapper>
  )
}

export default NewVerificaionForm