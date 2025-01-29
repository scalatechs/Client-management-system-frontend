"use client";

import { useState } from "react";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import CheckCircle from "/assets/form/CheckCircle.svg";
import { SignupValidation } from "@/lib/validation";
import CustomFormField from "@/components/shared/FormInput";

import { Button } from "@/components/ui/button";

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  const handleToggle = () => {
    setIsSignUp((prev) => !prev);
  };

  //use zod signup validation in react-hook-form
  const form = useForm<z.infer<typeof SignupValidation>>({
    resolver: zodResolver(SignupValidation),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof SignupValidation>) => {
    console.log(values);
  };

  return (
    <div className="flex h-screen ">
      {/* Left Panel */}
      <div
        className={`w-full px-4 md:w-[65vw] flex items-center justify-center bg-white transition-all  md:px-12 lg:px-28 xl:px-44  overflow-y-scroll ${
          isSignUp ? "md:translate-x-[35vw] duration-500" : " "
        } `}
      >
        <div className="flex flex-col md:items-center  justify-center  xs:px-4 md:px-0 md:py-9 w-[486px]">
          <div>
            <h1 className="text-2xl md:text-3xl lg:text-[40px]  text-[#3C3C3C] font-semibold text-center xs:mb-2 md:mb-3">
              {isSignUp ? "Create Account" : "Sign In"}
            </h1>
            <p className="xs:mb-6 md:mb-12 text-xs lg:text-base text-center text-muted-foreground leading-tight tracking-wider">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et.
            </p>
          </div>
          <div className="flex flex-col items-center">
            {isSignUp ? (
              <>
                {/* Form from shad cn for easier datavalidation with zod */}
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="xs:space-y-5 md:space-y-8 space-y-6  md:w-[486px] w-[360px] flex flex-col items-center"
                  >
                    {/* custom input fields  */}
                    <CustomFormField
                      control={form.control}
                      fieldType={FormFieldType.INPUT}
                      name="name"
                      placeholder="ENTER YOUR NAME"
                      iconSrc={CheckCircle}
                      iconAlt="check Circle"
                    />
                    <CustomFormField
                      control={form.control}
                      fieldType={FormFieldType.INPUT}
                      name="Email"
                      placeholder="Email"
                      iconSrc={CheckCircle}
                      iconAlt="check Circle"
                    />
                    <CustomFormField
                      control={form.control}
                      fieldType={FormFieldType.SELECT}
                      name="role"
                      placeholder="Role"
                      iconSrc={CheckCircle}
                      iconAlt="check Circle"
                    />
                    <CustomFormField
                      control={form.control}
                      fieldType={FormFieldType.INPUT}
                      name="password"
                      inputType="password"
                      placeholder="Password"
                      iconSrc={CheckCircle}
                      iconAlt="check Circle"
                    />
                    <CustomFormField
                      control={form.control}
                      fieldType={FormFieldType.CHECKBOX}
                      name="terms"
                      iconSrc={CheckCircle}
                      label={
                        <p className="text-sm">
                          I Agree to the{" "}
                          <span className="text-primary">
                            Terms and Conditions
                          </span>
                        </p>
                      }
                      iconAlt="check Circle"
                    />
                    <Button variant={"default"}>SIGN UP</Button>
                  </form>
                </Form>
              </>
            ) : (
              <Form {...form}>
                <form className="xs:space-y-5 md:space-y-8 space-y-6  md:w-[486px] w-[360px] flex flex-col items-center">
                  <CustomFormField
                    control={form.control}
                    fieldType={FormFieldType.INPUT}
                    name="Email"
                    placeholder="Email"
                    iconSrc={CheckCircle}
                    iconAlt="check Circle"
                  />
                  <CustomFormField
                    control={form.control}
                    fieldType={FormFieldType.INPUT}
                    name="password"
                    inputType="password"
                    placeholder="Password"
                    iconSrc={CheckCircle}
                    iconAlt="check Circle"
                  />

                  <div className="flex items-center justify-between px-2 w-full">
                    <CustomFormField
                      control={form.control}
                      fieldType={FormFieldType.CHECKBOX}
                      name="terms"
                      iconSrc={CheckCircle}
                      className="items-start !justify-start"
                      label={<p className="text-sm">Remember me</p>}
                      iconAlt="check Circle"
                    />
                    <a href="#" className="text-muted-foreground text-xs ">
                      Forgot Password?
                    </a>
                  </div>
                  <div className="flex justify-center text-sm  mt-2">
                    <Button>SIGN IN</Button>
                  </div>
                </form>
              </Form>
            )}
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div
        className={`md:w-[35vw] bg-gradient-to-b from-primary to-[#002FC3] from-10% text-white hidden md:flex flex-col items-center justify-center text-center md:px-2 lg:px-12 transition-transform duration-500 ${
          isSignUp ? "md:-translate-x-[65vw]" : ""
        }`}
      >
        <img
          src="/assets/form/Signup.svg"
          alt="user flow dummy image"
          className={`h-[337px] w-[337px] transition-transform ${
            isSignUp ? "" : "scale-x-[-1]"
          }`}
        />
        <h1 className="text-4xl font-semibold">
          {isSignUp ? "Welcome Back" : "Hello,"}
        </h1>
        <p className="text-center text-[#F4F4F4] md:text-xs lg:text-[14px] tracking-wide  mt-3 mb-6 font-light">
          {isSignUp
            ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et."
            : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et."}
        </p>
        <Button variant="outline" onClick={handleToggle}>
          {isSignUp ? "SIGN IN" : "SIGN UP"}
        </Button>
      </div>
      <div className="md:hidden absolute bottom-0 right-0 left-0 bg-primary h-12 text-white text-center flex flex-col justify-center">
        <p className="text-xs">
          {`${
            isSignUp ? "Already have an account? " : "Don't have an account? "
          }`}
          <span
            className="font-semibold underline cursor-pointer"
            onClick={handleToggle}
          >
            {isSignUp ? "Sign in" : "Sign up"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
