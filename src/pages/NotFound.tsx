const NotFound = () => {
  return (
    <section className="h-screen w-full flex items-center justify-center text-center text-muted-foreground">
      <div className="flex gap-10 xl:gap-[40px] flex-col">
        <div className="flex flex-col gap-12">
          <h1 className="text-[80px] font-normal">Uh oh!</h1>
          <div className="text-2xl font-medium">
            <p>Something went wrong at our end.</p>
            <p>
              Don&apos;t worry, it&apos;s not you -- it&apos;s us. Sorry about
              that.
            </p>
          </div>
        </div>
        <div>
          <img src="/assets/NotFound.png" />
        </div>
      </div>
    </section>
  );
};

export default NotFound;
