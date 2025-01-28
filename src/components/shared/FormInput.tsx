/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect, useRef, useState } from "react";

import { Control } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Checkbox } from "../ui/checkbox";
import { FormFieldType } from "@/types/types";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import clsx from "clsx";

interface CustomProps {
  control: Control<any>;
  fieldType: FormFieldType;
  name: string;
  label?: string | React.ReactNode;
  placeholder?: string;
  iconSrc?: string;
  iconAlt?: string;
  disabled?: boolean;
  dateFormat?: string;
  showTimeSelect?: boolean;
  children?: React.ReactNode;
  renderSkeleton?: (field: any) => React.ReactNode;
  inputType?: string;
  className?: string;
}

const RenderField = ({ field, props }: { field: any; props: CustomProps }) => {
  const {
    fieldType,
    iconAlt,
    iconSrc,
    placeholder,
    inputType,
    className,
    renderSkeleton,
  } = props;

  //open state and ref for dropdown select
  const [selectOpen, setSelectOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setSelectOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  switch (fieldType) {
    case FormFieldType.INPUT:
      return (
        <div className="flex rounded-3xl border  h-[58px] items-center text-sm p-0 focus-within:border-foreground shadow-sm">
          <FormControl>
            <Input
              placeholder={placeholder}
              type={inputType || "text"}
              {...field}
              className="form-input border-0  pl-6"
            />
          </FormControl>
          {field.value && (
            <img
              src={iconSrc}
              height={24}
              width={24}
              alt={iconAlt ? iconAlt : "input icon"}
              className="mr-6"
            />
          )}
        </div>
      );

    case FormFieldType.TEXTAREA:
      return (
        <FormControl>
          <Textarea
            placeholder={placeholder}
            {...field}
            className="form-textArea"
            disabled={props.disabled}
          />
        </FormControl>
      );
    case FormFieldType.SELECT:
      return (
        <div className="" ref={dropdownRef}>
          <div
            className={`flex rounded-3xl border   min-h-[58px] text-sm px-6  w-full shadow-sm text-muted-foreground ${
              selectOpen ? "rounded-b-none border-b border-foreground" : ""
            }`}
            onClick={() => setSelectOpen((prev) => !prev)}
          >
            <div className="flex justify-between items-center cursor-pointer p-0 w-full h-[58px]">
              {field.value || placeholder}
              <motion.div
                animate={{ rotate: selectOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown />
              </motion.div>
            </div>
          </div>
          <AnimatePresence>
            {selectOpen && (
              <motion.ul
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className={`w-full  border border-t-0  rounded-b-3xl overflow-hidden shadow-lg ${
                  selectOpen ? "rounded-b-3xl border-b border-foreground" : ""
                }`}
              >
                <li
                  className="py-6 px-6 hover:text-foreground text-muted-foreground hover:bg-[#F5F5F5] cursor-pointer"
                  onClick={() => {
                    field.onChange("client");
                    setSelectOpen(false);
                  }}
                >
                  Client
                </li>
                <li
                  className="py-6 px-6 hover:text-foreground text-muted-foreground hover:bg-[#F5F5F5] cursor-pointer"
                  onClick={() => {
                    field.onChange("employee");
                    setSelectOpen(false);
                  }}
                >
                  Employee
                </li>
                <li
                  className="py-6 px-6 hover:text-foreground text-muted-foreground hover:bg-[#F5F5F5] cursor-pointer"
                  onClick={() => {
                    field.onChange("customer representatives");
                    setSelectOpen(false);
                  }}
                >
                  Customer Representatives
                </li>
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      );
    case FormFieldType.SKELETON:
      return renderSkeleton ? renderSkeleton(field) : null;

    case FormFieldType.CHECKBOX:
      return (
        <FormControl>
          <div
            className={clsx(
              "flex items-center gap-2 justify-center",
              className
            )}
          >
            <Checkbox
              id={props.name}
              checked={field.value}
              onCheckedChange={field.onChange}
              className="data-[state=checked]:bg-transparent data-[state=checked]:border-primary-green border-foreground focus data-[state=checked]:text-primary-green"
            />
            <label htmlFor={props.name} className="checkbox-label">
              {props.label}
            </label>
          </div>
        </FormControl>
      );
    default:
      break;
  }
};

const CustomFormField = (props: CustomProps) => {
  const { control, fieldType, name, label } = props;
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex-1 md:w-[486px] w-[360px]">
          {fieldType !== FormFieldType.CHECKBOX && label && (
            <FormLabel>{label}</FormLabel>
          )}
          <RenderField field={field} props={props} />
          <FormMessage className="form-error" />
        </FormItem>
      )}
    />
  );
};

export default CustomFormField;
