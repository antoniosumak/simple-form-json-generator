import { Button, Checkbox, TextInput } from '@mantine/core';
import { FieldValues, useForm, UseFormRegister } from 'react-hook-form';
import mockData from '../mock/mock.json';

function generateInputs(
  data: {
    id: string;
    value: any;
    type: string;
  },
  register: UseFormRegister<FieldValues>
) {
  switch (data.type) {
    case 'string':
    case 'number':
      return (
        <TextInput
          {...(data.value !== null &&
            data.value !== undefined && { defaultValue: data.value })}
          label={data.id}
          key={data.id}
          {...register(data.id)}
          type={data.type}
        />
      );
    case 'boolean':
      return (
        <Checkbox
          {...(data.value !== null &&
            data.value !== undefined && { defaultChecked: data.value })}
          label={data.id}
          key={data.id}
          {...register(data.id)}
        />
      );
  }
}

export default function FormGenerator() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {mockData.map((data: { id: string; value: any; type: string }) =>
        generateInputs(data, register)
      )}
      <Button type='submit' color='red' className='bg-red-400 text-white'>
        Submit
      </Button>
    </form>
  );
}
