import heroBg from "./assets/exoHero.svg";
import Button from "./Button";
import Section from "./Section";
import IFrame from "./IFrame";
import HR from "./HR";
import Nav from "./Nav";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const PROCESS = [
  {
    id: 1,
    title: "Strategy & Offer Alignment",
    subtitle: "We understand your product, market, and growth goals.",
  },
  {
    id: 2,
    title: "Campaign Setup",
    subtitle:
      "We design and launch paid ad campaigns built for conversions — not vanity metrics.",
  },
  {
    id: 3,
    title: "Testing & Optimization",
    subtitle: " Ads are refined based on performance, data, and real feedback.",
  },
  {
    id: 4,
    title: "Lead Flow & Sales Calls",
    subtitle:
      "You focus on closing. We focus on bringing you people worth speaking to.",
  },
];

const WHYS = [
  {
    id: 1,
    title: "Control",
    subtitle: "Decide who exactly sees your ads and when.",
  },
  {
    id: 2,
    title: "Speed",
    subtitle: "Get quality leads in weeks.",
  },
  {
    id: 3,
    title: "Scalability",
    subtitle: "Increase budget, increase results predictably.",
  },
];

const PROOFS = [
  {
    id: 1,
    title: "Boosting sales for a fashion e-commerce brand",
    src: "https://www.youtube.com/embed/tYZi9ugG7Gk?si=g79USM9iBAeMoY3D",
  },
  {
    id: 2,
    title: "Boosting sales for a fashion e-commerce brand",
    src: "https://www.youtube.com/embed/tYZi9ugG7Gk?si=g79USM9iBAeMoY3D",
  },
  {
    id: 3,
    title: "Boosting sales for a fashion e-commerce brand",
    src: "https://www.youtube.com/embed/tYZi9ugG7Gk?si=g79USM9iBAeMoY3D",
  },
];

// useGSAP must be called inside a component so it runs after mount.

function App() {
  useGSAP(() => {
    gsap.fromTo(
      ".hero",
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 2,
        ease: "back.out",
        stagger: {
          amount: 0.7,
          grid: [3, 1],
        },
      },
    );
    gsap.fromTo(
      ".stagger",
      { y: 100 },
      {
        y: 0,
        delay: 0.5,
        duration: 1,
        ease: "sine.in",
        stagger: {
          amount: 0.5,
          grid: [3, 1],
        },
      },
    );
    gsap.fromTo(
      ".fade-in",
      { opacity: 0, delay: 1.2 },
      {
        x: 0,
        duration: 1,
        ease: "sine.in",
        opacity: "100%",
      },
    );
  });

  return (
    <>
      <main className="pt-20 max-md:pt-15 bg-[#E6E6E6]  text-(--primary) font-[generalSans]">
        <Nav />
        {/* HERO */}
        <div
          className="lg:h-screen  py-10 px-6 xl:py-10  xl:px-20 max-md:py-6 max-md:text-sm max-md:px-4 max-md:min-h-screen"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="grid grid-cols-2 xl:gap-14 gap-6 max-md:grid-cols-1">
            <div className="flex flex-col gap-4">
              <h1 className="xl:text-8xl text-7xl max-lg:text-6xl font-black hero">
                Turn Paid Ads Into a Predictable Customer Pipeline.
              </h1>
              <div className="hero">
                <Button name={" Book a Free Strategy Call"} />
              </div>
              <div className=" opacity-60 italic hero">
                For founders, owners, and marketing leads in the US, UK, EU &
                Canada (Not for startups with no offer or enterprise giants).
              </div>
            </div>
            <div className="text-xl flex flex-col gap-10 overflow-hidden">
              <p className="border-l-2 pl-6  border-(--primary)/20 stagger">
                If you have a solid product but your revenue still feels
                unpredictable, the problem isn’t your offer, it’s how customers
                find you.
              </p>
              <p className="border-l-2 pl-6  border-(--primary)/20 stagger">
                Exodigital helps business owners turn paid ads into a reliable
                stream of leads, users, and sales, without relying on referrals
                or hope.
              </p>
              <p className="border-l-2 pl-6  border-(--primary)/20 stagger">
                {" "}
                Stop Guessing Where Your Next Customer Is Coming From.
              </p>
            </div>
          </div>
        </div>
        {/* HERO END */}

        {/* PROBLEM/APPROACH */}
        <Section title="THE PROBLEM / OUR APPROACH">
          <div className="grid grid-cols-2 gap-10  items-center justify-center max-lg:grid-cols-1 max-lg:gap-6 max-md:gap-4">
            <div
              className=" w-full h-full
          inset-shadow-blue-950/20 inset-shadow-sm rounded-md p-4 flex justify-between flex-col "
            >
              <div className="flex flex-col gap-4">
                <p className="inline-block self-start bg-(--primary)/20 text-(--primary) rounded-md px-2 py-2">
                  THE CORE PROBLEM
                </p>
                <p className="text-2xl max-lg:text-xl">
                  Most business owners don’t actually have a product problem.
                  <br />
                  They have a customer acquisition problem.
                </p>

                <div className="grid grid-cols-2 max-sm:grid-cols-1">
                  <div>
                    <p className="font-bold">YOU MAY ALREADY HAVE:</p>
                    <div className="list-disc list-inside text-sm flex flex-col mt-4">
                      <div className="flex items-center gap-6">
                        <span className=" text-5xl text-(--primary)/20 font-[upton]">
                          1
                        </span>
                        <p className="xl:text-xl"> A solid offer</p>
                      </div>
                      <div className="flex items-center gap-6">
                        <span className=" text-5xl text-(--primary)/20 font-[upton]">
                          2
                        </span>
                        <p className="xl:text-xl">A working service</p>
                      </div>
                      <div className="flex items-center gap-6">
                        <span className=" text-5xl text-(--primary)/20 font-[upton]">
                          3
                        </span>
                        <p className="xl:text-xl">Happy past clients</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="font-bold">YET:</p>
                    <ul className="list-disc list-inside text-sm  flex flex-col mt-4">
                      <div className="flex items-center gap-6">
                        <span className=" text-5xl text-(--primary)/20 font-[upton]">
                          1
                        </span>
                        <p className="xl:text-xl"> Leads aren’t consistent</p>
                      </div>
                      <div className="flex items-center gap-6">
                        <span className=" text-5xl text-(--primary)/20 font-[upton]">
                          2
                        </span>
                        <p className="xl:text-xl">
                          {" "}
                          Sales fluctuate month to month
                        </p>
                      </div>
                      <div className="flex items-center gap-6">
                        <span className=" text-5xl text-(--primary)/20 font-[upton]">
                          3
                        </span>
                        <p className="xl:text-xl">
                          {" "}
                          Growth feels reactive instead of planned
                        </p>
                      </div>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <hr className="text-(--primary)/10" />

                <em className="text-(--primary)/40">
                  Without a reliable acquisition system, revenue becomes
                  unpredictable and that uncertainty slows everything down.
                </em>
              </div>
            </div>
            <div className=" w-full h-full inset-shadow-blue-950/20 inset-shadow-sm rounded-md p-4 flex flex-col gap-4">
              <div className="flex flex-col gap-6">
                <p className="inline-block self-start bg-(--primary)/20 text-(--primary) rounded-md px-4 py-2">
                  THE EXODIGITAL APPROACH
                </p>
                <p className="text-2xl max-lg:text-xl">
                  Paid Ads Built for Real Customers.
                  <br />
                  Exodigital runs paid advertising systems designed to bring in:
                </p>

                <div>
                  <div className="relative flex items-center gap-6">
                    <span className=" text-6xl text-(--primary)/20 font-[upton]">
                      1
                    </span>
                    <div>
                      <p className="text-4xl font-[upton]">Hot Leads</p>
                    </div>
                  </div>
                  <div className="relative flex items-center gap-6">
                    <span className=" text-6xl text-(--primary)/20 font-[upton]">
                      2
                    </span>
                    <div>
                      <p className="text-4xl font-[upton]">Active Users</p>
                    </div>
                  </div>
                  <div className="relative flex items-center gap-6">
                    <span className=" text-6xl text-(--primary)/20 font-[upton]">
                      3
                    </span>
                    <div>
                      <p className="text-4xl font-[upton]">Paying Customers</p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="">
                Instead of hoping people find you, we place your offer directly
                in front of the right audience using ads built to convert, not
                just generate clicks.
              </p>
              <div className=" flex flex-col gap-4">
                <hr className="text-(--primary)/10" />

                <em className="text-(--primary)/40">
                  This isn’t just theory. It’s execution, testing, and
                  optimization.
                </em>
              </div>
            </div>
          </div>
        </Section>
        {/* PROBLEM/APPROACH END*/}

        {/* OUR PROCESS */}
        <Section title="OUR PROCESS" className="bg-(--primary) text-[#E6E6E6]">
          <div className="flex flex-col gap-6">
            {PROCESS.map((pro) => (
              <div
                key={pro.id}
                className="flex w-full gap-10 items-start max-md:gap-4 maxmd"
              >
                <span
                  className={`flex font-[upton] text-4xl max-md:text-3xl max-md:w-12 max-md:h-12 text-[#E6E6E6] p-2 h-14 w-14 text-center justify-center items-center bg-radial-[at_50%_75%] from-sky-200 via-blue-400 to-indigo-900 to-90% rounded-md `}
                >
                  {`0 ${pro.id}`}
                </span>
                <div className="w-full p-4 bg-[#E6E6E6]/20 backdrop-blur-md rounded-md flex flex-col gap-2 shadow-lg shadow-blue-900/30">
                  <p className="font-bold text-(--secondary) text-2xl max-md:text-xl">
                    {pro.title}
                  </p>
                  <p className=" text-[#e6e6e6]">{pro.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>
        <Section title="How Exodigital Approaches Paid Ads.">
          <p className="text-xl mb-10">
            If you want to understand how we think about customer acquisition,
            ad testing, and scaling, watch this short breakdown.
          </p>
          <div className="w-full flex items-center justify-center">
            <iframe
              className="rounded-md max-md:h-[300]"
              width="650"
              height="300"
              src="https://www.youtube.com/embed/tYZi9ugG7Gk?si=g79USM9iBAeMoY3D"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </Section>
        <HR />
        {/* OUR PROCESS END */}

        {/* FOR WHO */}
        <Section title="WHO THIS IS FOR / NOT FOR" className=" flex flex-col">
          <div className="grid grid-cols-2 gap-6 items-stretch max-md:grid-cols-1 xl:text-xl">
            <div className="bg-(--primary) text-[#E6E6E6] col-span-1 p-6 flex flex-col gap-4 rounded-md self-start shadow-xl/20 h-full max-lg:p-4">
              <p className="font-bold">This is for you if:</p>
              <ul className="list-disc list-inside">
                <li>You have a real product or service that delivers value</li>
                <li>You’re tired of inconsistent revenue</li>
                <li>You don’t want to rely on referrals to survive</li>
                <li>
                  You want customers and users on demand — not “when it happens”
                </li>
              </ul>
            </div>
            <div className=" bg-(--primary)/5 shadow-xl/20 backdrop-blur-2xl p-6 col-span-1 rounded-md flex flex-col gap-4 self-start  max-lg:p-4 h-full">
              <p className="font-bold">This is NOT for:</p>
              <ul className="list-disc list-inside">
                <li>Mega established companies.</li>
                <li> Crypto, betting, or gift card businesses </li>
                <li>
                  People looking for quick hacks instead of real execution
                </li>
                <li>
                  You want customers and users on demand — not “when it happens”
                </li>
              </ul>
            </div>
          </div>
        </Section>
        {/* FOR WHO END */}

        {/* WHY PAID ADS */}
        <Section title="WHY PAID ADS" className="bg-(--primary) text-[#E6E6E6]">
          <div className="flex flex-col gap-4">
            <h1 className="text-xl">
              Referrals are unpredictable. Organic growth takes time.
            </h1>
            <div className="grid grid-cols-3 gap-6 max-md:gap-4 max-md:grid-cols-1">
              {WHYS.map((why) => (
                <div
                  className="p-6  bg-[#E6E6E6]/20 backdrop-blur-md rounded-md flex flex-col gap-2 shadow-lg shadow-blue-900/30 max-lg:p-4"
                  key={why.id}
                >
                  <span
                    className={`flex font-[upton] text-4xl text-[#E6E6E6] p-2 h-12 w-12 text-center justify-center items-center bg-radial-[at_50%_75%] from-sky-200 via-blue-400 to-indigo-900 to-90% rounded-md max-md:text-3xl`}
                  >
                    {`0 ${why.id}`}
                  </span>
                  <p className="font-bold text-(--secondary)">{why.title}</p>
                  <p> {why.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>
        {/* WHY PAID ADS END */}

        {/* CASE STUDIES */}
        <Section title="CASE STUDIES" className="flex flex-col">
          <div className="text-xl flex flex-col gap-2 ">
            <p>
              Results Depend on the Business. Every business is different. We
              don’t believe in copy-paste outcomes or blanket promises.
            </p>
            <p>Whe focus on:</p>
            <ul className="list-disc list-inside">
              <li>Bringing in hot leads</li>
              <li>Increasing user adoption</li>
            </ul>
          </div>
          <div className="my-6">
            <HR />
          </div>
          <div className="mt-6  w-full flex flex-col gap-6">
            {PROOFS.map((proof) => (
              <div>
                <div className=" grid grid-cols-4 max-md:grid-cols-1">
                  <div className="flex relative col-span-2">
                    <span className="font-[upton] text-9xl text-(--primary)/30">{`0${proof.id}`}</span>
                    <p className=" text-2xl absolute left-14 top-4 max-lg:text-xl">
                      {proof.title}
                    </p>
                  </div>

                  <div className="col-span-2  flex items-end justify-center w-full">
                    <IFrame src={`${proof.src}`} />
                  </div>
                </div>
                <div className="my-6">
                  <HR />
                </div>
              </div>
            ))}
          </div>
        </Section>
        {/* CASE STUDIES END */}

        <Section>
          <div className="flex justify-between flex-col text-center items-center gap-6 max-md:gap-4 h-full w-full inset-shadow-blue-950/20 inset-shadow-sm rounded-md p-4 ">
            <p className="text-6xl font-[upton]">
              Are you ready to stop guessing?
            </p>
            <p className="text-xl">
              If you’re done with unpredictable revenue and want a clearer path
              to customers:
            </p>
            <Button name="Book a Free Strategy Call" />
            <p className="text-(--primary)/40">
              We’ll review your offer, your goals, and see if this makes sense
              before anything else.
            </p>
          </div>
        </Section>

        <footer className="px-10 py-20 mt-10 bg-(--primary) max-lg:p-6 max-lg:mt-6 max-md:px-4 xl:px-30 text-white">
          <p className="text-6xl text-(--secondary) font-[upton] max-md:text-5xl">
            Exodigital{" "}
          </p>
          <p className="text-xl mt-4">
            Paid Advertising & Customer Acquisition Serving clients in the US,
            UK, EU & Canada.
          </p>
        </footer>
      </main>
    </>
  );
}

export default App;
