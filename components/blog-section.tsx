import Divider from './divider'

export default function Home() {
  return (
    <>
      <div className="relative min-w-full p-10 mt-10 bg-primary">
        <div className="justify-center lg:flex">
          <div className="md:w-10/12 lg:w-8/12 2xl:w-7/12">
            <img
              src="https://i.ibb.co/ZY43FRd/blog-1-desktop.png"
              alt="fingerprint recognition"
              className="w-auto lg:w-full"
            />
            <div className="mt-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <p className="text-base leading-4 text-silver">5 feb</p>
                  <p className="ml-12 text-base leading-none text-silver">
                    5 min read
                  </p>
                </div>
                <div className="flex items-center">
                  <svg
                    width={64}
                    height={2}
                    viewBox="0 0 64 2"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M64 1H0" stroke="#6B7280" />
                  </svg>
                  <p className="ml-2 text-base leading-none text-silver">
                    Jeff Bill
                  </p>
                </div>
              </div>
              <h1 className="mt-4 text-2xl font-extrabold text-light lg:text-3xl">
                Chip fingerprint technology for secure transaction
              </h1>
              <p className="mt-2 text-base leading-6 text-white">
                The emerge of internet of Things has brought in, rather
                urgently, a need for low-cost security technology. While
                passwords and other such forms of encription are software base,
                there is also a need for security level
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between w-full mt-7 sm:flex-row lg:ml-6 lg:mt-0 lg:w-4/12 lg:flex-col 2xl:w-3/12">
            <div className="sm:w-1/2 lg:w-auto">
              <img
                src="https://i.ibb.co/d6jQJyY/blog-2-desktop.png"
                alt="flying letters"
                className="w-full"
              />
              <div className="mt-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <p className="text-base leading-4 text-silver">5 feb</p>
                    <p className="ml-12 text-base leading-none text-silver">
                      5 min read
                    </p>
                  </div>
                  <div className="flex items-center">
                    <svg
                      width={64}
                      height={2}
                      viewBox="0 0 64 2"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M64 1H0" stroke="#6B7280" />
                    </svg>
                    <p className="ml-2 text-base leading-none text-silver">
                      Jeff Bill
                    </p>
                  </div>
                </div>
                <h1 className="mt-4 text-2xl font-extrabold leading-6 text-light">
                  Internet of things
                </h1>
                <p className="mt-2 text-base leading-6 text-white">
                  The emerge of internet of Things has brought in a need for
                  low-cost security technology.
                </p>
              </div>
            </div>
            <div className="mt-6 sm:mt-0 sm:ml-6 sm:w-1/2 lg:mt-6 lg:ml-0 lg:w-auto">
              <img
                src="https://i.ibb.co/9cN11LT/blog-3-desktop.png"
                alt="robotic arm"
                className="w-full"
              />
              <div className="mt-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <p className="text-base leading-4 text-silver">5 feb</p>
                    <p className="ml-12 text-base leading-none text-silver">
                      5 min read
                    </p>
                  </div>
                  <div className="flex items-center">
                    <svg
                      width={64}
                      height={2}
                      viewBox="0 0 64 2"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M64 1H0" stroke="#6B7280" />
                    </svg>
                    <p className="ml-2 text-base leading-none text-silver">
                      Jeff Bill
                    </p>
                  </div>
                </div>
                <h1 className="mt-4 text-2xl font-extrabold leading-6 text-light">
                  Internet of things
                </h1>
                <p className="mt-2 text-base leading-6 text-white">
                  The emerge of internet of Things has brought in a need for
                  low-cost security technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Divider />
    </>
  )
}
