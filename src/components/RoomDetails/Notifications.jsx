import React from "react";
import Container from "components/ParkLanding/elements/Container";

const Notifications = () => {
  return (
    <Container bg="bg-white" className="mb-6 xs:px-2 xs:pr-5">
      <div className="py-4 rounded-base bg-tp-purple font-bold leading-7 text-center text-white mb-2 px-2  xs:text-15 md:text-lg">
        This view is from a nearby room (Room #6534), which should have a
        similar view to #6532
      </div>
      <div className="py-4 rounded-base bg-tp-purple-500 font-bold leading-7 text-center text-white px-2  xs:text-15 md:text-lg">
        <a href="/" alt="anc" className="underline">Click to Request Room 6534</a> from Disney for Sample Trip on Dec. 1, 2023
      </div>
    </Container>
  );
};

export default Notifications;
