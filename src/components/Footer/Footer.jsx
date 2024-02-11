import React from 'react'
import { Link, NavLink } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-white border-y">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link to="/" className="flex items-center">
                            <img
                                src="data:image/jpeg;base64,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"
                                className="mr-3 h-16"
                                alt="Logo"
                            />
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Resources</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <Link to="/" className="hover:underline">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/analysis" className="hover:underline">
                                        Analysis
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Follow us</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <a
                                        href="https://github.com/Dipam581"
                                        className="hover:underline"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Github
                                    </a>
                                </li>

                                <li className="mb-4">
                                    <a
                                        href="https://www.linkedin.com/in/dipam-ghosh-7652951b2/"
                                        className="hover:underline"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Linkedin
                                    </a>
                                </li>
                                
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Legal</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <Link to="#" className="hover:underline">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="hover:underline">
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center">
                        © 2024
                        <a href="https://www.linkedin.com/in/dipam-ghosh-7652951b2/" className="hover:underline">
                            Dipam Ghosh
                        </a>
                        . All Rights Reserved.
                    </span>
                    <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                        <Link to="#" className="text-gray-500 hover:text-gray-900">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 8 19"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">Facebook page</span>
                        </Link>
                        <Link to="#" className="text-gray-500">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 21 16"
                            >
                                <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                            </svg>
                            <span className="sr-only">Discord community</span>
                        </Link>
                        <Link to="#" className="text-gray-500">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 17"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">Twitter page</span>
                        </Link>
                        <Link to="#" className="text-gray-500">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">GitHub account</span>
                        </Link>
                        <Link to="#" className="text-gray-500">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">Dribbble account</span>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
