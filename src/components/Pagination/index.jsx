const Pagination = ({ productsPerPage, totalProducts, currentPage, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav className="mt-4">
            <ul className="flex justify-center">
                {pageNumbers.map(number => (
                    <li key={number}>
                        <button
                            onClick={() => paginate(number)}
                            className={`py-2 px-4 mx-1 rounded mb-5 ${
                                currentPage === number 
                                    ? 'bg-purple-600 text-white font-bold underline' 
                                    : 'bg-purple-500 hover:bg-purple-600 text-white'
                            }`}
                        >
                            {number}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;
