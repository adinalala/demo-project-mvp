import React from 'react';
import { ControllerProps, FieldPath, FieldValues } from 'react-hook-form';

import {
  FormControl,
  FormDescription,
  FormError,
  FormField,
  FormItem,
  FormLabel
} from '@app/components/core/form';
import { Textarea } from '@app/components/core/textarea';
import { cn } from '@app/utils/core.utils';

const TextareaControl = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  label,
  description,
  placeholder,
  className,
  textareaClassName,
  ...props
}: {
  label?: string;
  description?: string;
  placeholder?: string;
  className?: string;
  textareaClassName?: string;
} & Omit<ControllerProps<TFieldValues, TName>, 'render'>) => {
  return (
    <FormField
      control={props.control}
      name={props.name}
      defaultValue={props.defaultValue}
      rules={props.rules}
      shouldUnregister={props.shouldUnregister}
      render={({ field }) => (
        <FormItem className={cn(className)} {...props}>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <Textarea placeholder={placeholder} className={textareaClassName} {...field} />
          </FormControl>

          {description && <FormDescription>{description}</FormDescription>}
          <FormError />
        </FormItem>
      )}
    />
  );
};

TextareaControl.displayName = 'TextareaControl';

export { TextareaControl };
