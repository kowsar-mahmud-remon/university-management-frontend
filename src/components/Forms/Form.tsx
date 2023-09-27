"use client";

import { ReactElement, ReactNode } from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";

type FromConfig = {
  defaultValues?: Record<string, any>;
};

type FromProps = {
  children?: ReactElement | ReactNode;
  submitHandler: SubmitHandler<any>;
} & FromConfig;

const Form = ({ children, submitHandler, defaultValues }: FromProps) => {
  const formConfig: FromConfig = {};

  if (!!defaultValues) formConfig["defaultValues"] = defaultValues;

  const methods = useForm<FromProps>(formConfig);

  const { handleSubmit, reset } = methods;

  const onSubmit = (data: any) => {
    submitHandler(data);
    reset();
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default Form;
