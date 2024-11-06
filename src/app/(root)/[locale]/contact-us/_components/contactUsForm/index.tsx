'use client';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import Input from '@/components/Input';
import Dropdown from '@/components/DropDown';
import Button from '@/components/Button';
import Styles from './index.module.scss';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  ContactUsSchema,
  FormData,
  Reason,
  reasonOptions,
} from '@/util/validationSchema';
import { getDeviceType } from '@/util/helpers';

const ContactUsForm = ({ contactFormField, locale }: any) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  }: any = useForm<FormData>({
    resolver: zodResolver(ContactUsSchema),
    defaultValues: {
      name: '',
      job: '',
      email: '',
      mobile_number: '',
      iktissab: '',
      reason: '' as Reason,
      comments: '',
    },
    mode: 'onChange',
  });

  const onSubmit = async (value: FormData) => {
    console.log(value, '');
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/contactUs`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            body: JSON?.stringify(value),
            locale,
            os: getDeviceType(),
          },
        }
      );
      if (!res.ok) throw new Error('Failed to fetch news');
      const data = await res.json();
      console.log(data, 'responce');
      reset();
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={`rowFlex `}>
          <div className={`columnMd6 ${Styles.inputCon}`}>
            <Controller
              name={'name'}
              control={control}
              render={({ field }) => (
                <Input
                  error={errors?.name}
                  label={contactFormField?.name_title}
                  {...field}
                  onChange={(e: any) => {
                    field.onChange(e);
                  }}
                />
              )}
            />
          </div>
          <div className={`columnMd6 ${Styles.inputCon}`}>
            <Controller
              name="job"
              control={control}
              render={({ field }) => (
                <Input
                  error={errors?.job}
                  label={contactFormField?.job_title}
                  {...field}
                  onChange={(e: any) => {
                    field.onChange(e);
                  }}
                />
              )}
            />
          </div>
        </div>
        <div className={`rowFlex `}>
          <div className={`columnMd6 ${Styles.inputCon}`}>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <Input
                  error={errors?.email}
                  label={contactFormField?.email_title}
                  {...field}
                  onChange={(e: any) => {
                    field.onChange(e);
                  }}
                />
              )}
            />
          </div>
          <div className={`columnMd6 ${Styles.inputCon}`}>
            <Controller
              name="mobile_number"
              control={control}
              render={({ field }) => (
                <Input
                  error={errors?.mobile_number}
                  placeholder={'05XXXXXXXX'}
                  label={contactFormField?.mobile_title}
                  {...field}
                  onChange={(e: any) => {
                    field.onChange(e);
                  }}
                />
              )}
            />
          </div>
        </div>
        <div className={`rowFlex `}>
          <div className={`column ${Styles.inputCon}`}>
            <Controller
              name="iktissab"
              control={control}
              render={({ field }) => (
                <Input
                  error={errors?.iktissab}
                  label={contactFormField?.iktissab_title}
                  {...field}
                  onChange={(e: any) => {
                    field.onChange(e);
                  }}
                />
              )}
            />
          </div>
        </div>
        <div className={`rowFlex ${Styles.inputCon}`}>
          <div className={` ${Styles.dropdown} column`}>
            <label htmlFor={'reason'} className={Styles.inputLabel}>
              {contactFormField?.reason_title}
            </label>
            <Controller
              name="reason"
              control={control}
              render={({ field }) => (
                <Dropdown
                  id={'reason'}
                  options={reasonOptions}
                  label="Select Reason"
                  {...field}
                  onChange={(e: any) => {
                    field.onChange(e);
                  }}
                />
              )}
            />
            {errors?.reason && (
              <span className={Styles.errorMessage}>
                {errors?.reason?.message}
              </span>
            )}
          </div>
        </div>
        <div className={`rowFlex ${Styles.inputCon} `}>
          <div className={` ${Styles.dropdown}  column`}>
            <label htmlFor={'reason'} className={Styles.inputLabel}>
              {contactFormField?.comments}
            </label>
            <Controller
              name="comments"
              control={control}
              render={({ field }) => (
                <textarea
                  placeholder="Comments"
                  {...field}
                  onChange={(e: any) => {
                    field.onChange(e);
                  }}
                />
              )}
            />
            {errors?.comments && (
              <span className={Styles.errorMessage}>
                {errors?.comments.message}
              </span>
            )}
          </div>
        </div>
        <div>
          <Button
            className={Styles.searchBtn}
            label="Submit"
            varient="Primary"
            type={'Submit'}
          />
        </div>
      </form>
    </div>
  );
};

export default ContactUsForm;
