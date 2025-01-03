import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Navbar, Footer } from "./components";
import {
  Home,
  Contact,
  About,
  Signin,
  Signup,
  CreateEvent,
  Events,
  Event,
  Colleges,
  Clubs,
  Club,
  College,
  Layout,
  User,
  UserProfile,
  UserEvents,
  Search,
  Error,
  Tasks,
  FAQs,
} from "./pages";

function App() {
  const { pathname } = useLocation();

  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      {!pathname.includes("/signin") &&
        !pathname.includes("/signup") &&
        !pathname.includes("/dashboard") && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/search" element={<Search />} />

        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<Event />} />
        {/* <Route path="/events/:id/payment/success" element={<Success />} />
        <Route path="/events/:id/payment/cancel" element={<Cancel />} /> */}

        <Route path="/clubs" element={<Clubs />} />
        <Route path="/clubs/:id" element={<Club />} />
        <Route path="/colleges" element={<Colleges />} />
        <Route path="/colleges/:id" element={<College />} />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faqs" element={<FAQs />} />

        {/* {isLoggedIn && ( */}
          <>
            <Route element={<Layout />}>
              <Route path="/dashboard" element={<User />} />
              <Route path="/dashboard/events" element={<UserEvents />} />

              <Route path="/dashboard/task" element={<Scheduler />} />

              <Route path="/dashboard/profile" element={<UserProfile />} />
              <Route path="/dashboard/tasks" element={<Tasks />} />
            </Route>
            <Route path="/create-event" element={<CreateEvent />} />
          </>
        {/* )} */}

        <Route path="/*" element={<Error />} />
      </Routes>

      {!pathname.includes("/signin") &&
        !pathname.includes("/signup") &&
        !pathname.includes("/dashboard") && <Footer />}
    </>
  );
}

export default App;
