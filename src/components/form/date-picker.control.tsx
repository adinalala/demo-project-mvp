'use client';

import * as React from 'react';
import { ControllerProps, FieldPath, FieldValues } from 'react-hook-form';

import {
  DatePicker,
  DatePickerProps as DatePickerBaseProps
} from '@app/components/core/date-picker';
import {
  FormControl,
  FormDescription,
  FormError,
  FormField,
  FormItem,
  FormLabel
} from '@app/components/core/form';
import { cn } from '@app/utils/core.utils';

type DatePickerProps = Omit<DatePickerBaseProps, 'onSelect' | 'variant'>;

const DatePickerControl = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  label,
  description,
  placeholder,
  minDate,
  maxDate,
  className,
  calendarSingle,
  ...props
}: {
  label?: string;
  description?: string;
  placeholder?: string;
  className?: string;
} & DatePickerProps &
  Omit<ControllerProps<TFieldValues, TName>, 'render'>) => {
  return (
    <FormField
      control={props.control}
      name={props.name}
      defaultValue={props.defaultValue}
      rules={props.rules}
      shouldUnregister={props.shouldUnregister}
      render={({ field, fieldState: { invalid } }) => (
        <FormItem className={cn(className)} {...props}>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <DatePicker
              value={field.value}
              placeholder={placeholder}
              minDate={minDate}
              maxDate={maxDate}
              variant={invalid ? 'destructive' : 'default'}
              onSelect={field.onChange}
              calendarSingle={calendarSingle}
            ></DatePicker>
          </FormControl>

          {description && <FormDescription>{description}</FormDescription>}
          <FormError />
        </FormItem>
      )}
    />
  );
};

DatePickerControl.displayName = 'DatePickerControl';

// TODO Export DateRangePickerFormField
export { DatePickerControl };
