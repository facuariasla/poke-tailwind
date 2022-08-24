const Pagination = ({ pokesPerPage, totalPokes, paginate }: any) => {
  const pageNumbers = [];

  for (let i = 0; i <= Math.ceil(totalPokes / pokesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    // <div className="flex justify-self-center self-center gap-2">
    <div className="grid gap-2 grid-cols-6 sm:grid-cols-12 max-w-xl place-self-center">
        {pageNumbers.map((num: any) => {
          if (num != 0) {
            return (
              // <a href="!#" key={num} className=''>
              <div
                onClick={() => paginate(num)}
                key={num}
                tabIndex={-1}
                className="flex flex-row justify-center items-center border border-white w-8 focus-within:text-green-500 focus-within:border-green-500 hover:border-green-500 hover:text-green-500 cursor-pointer transition"
              >
                {/* <div className="flex justify-center items-center "> */}
                  <p className="">{num}</p>
                {/* </div> */}
              </div>
            );
          }
        })}
      </div>
  );
};

export default Pagination;
