import getPickupTitle from "@/app/utils/getPickupTitle";
import { AiOutlineCheckCircle } from "react-icons/ai";

function BookingSuccessMsg({ orderNumber, formData }) {
  const pickupForTour = getPickupTitle(formData.pickup_dropoff);
  return (
    <div className="flex mt-8 flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <AiOutlineCheckCircle className="text-green-500 text-6xl mb-4" />
      <h1 className="text-3xl font-bold text-gray-800 mb-2">
        Booking Confirmed!
      </h1>
      <p className="text-gray-600 text-lg text-center max-w-md">
        Thank you! We’ve successfully received your booking details. Your order
        number is <strong>{orderNumber}</strong>. If you have any questions,
        feel free to reach out to us on our socials.
      </p>
      {/* Payment Info */}
      <section className="p-4 mt-2 md:p-10 bg-gray-50">
        <div className="space-y-8 text-lg">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-emerald-600">
              Zelle Direct Transfer
            </h2>
            <p>
              Make your payment directly to our Zelle account:{" "}
              <strong>oshaneih@gmail.com</strong>. Please include your order
              number <strong>{orderNumber}</strong> in the transaction notes for
              reference.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-emerald-600">
              Pay by Cash on Arrival
            </h2>
            <p>
              Prefer to pay later? No problem! You can choose to pay in cash
              when you arrive for your service.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-emerald-600">
              Card Payment on Arrival (Coming Soon)
            </h2>
            <p>
              We are working on enabling card payments upon arrival. This
              feature will be available soon, so stay tuned!
            </p>
          </div>
        </div>
      </section>
      {/* Display booking details */}
      <div className="mt-4 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Booking Details
        </h2>
        <p>
          <strong>Tour Name:</strong> {formData.tourName}
        </p>
        <p>
          <strong>Email:</strong> {formData.email}
        </p>
        <p>
          <strong>Phone Number:</strong> {formData.phone_number}
        </p>
        <p>
          <strong>Adults:</strong> {formData.adults}
        </p>
        <p>
          <strong>Kids:</strong> {formData.kids}
        </p>
        <p>
          <strong>Total Price:</strong> ${formData.total_price}
        </p>

        {/* Conditional fields based on form data */}
        {formData.pickup_dropoff && (
          <>
            <p>
              <strong>Pickup/Dropoff:</strong>{" "}
              {formData.departure_date
                ? formData.pickup_dropoff
                : pickupForTour}
            </p>
            <p>
              <strong>Pickup Date:</strong> {formData.pickup_date}
            </p>
            <p>
              <strong>Pickup Time:</strong> {formData.pickup_time}
            </p>
          </>
        )}
        {formData.departure_date && (
          <>
            <p>
              <strong>Arrival Time:</strong> {formData.arrival_time}
            </p>
            <p>
              <strong>Airlines Name:</strong> {formData.airlines_name}
            </p>
          </>
        )}
        {formData.departure_date && (
          <>
            <p>
              <strong>Departure Date:</strong> {formData.departure_date}
            </p>
            <p>
              <strong>Departure Time:</strong> {formData.departure_time}
            </p>
            <p>
              <strong>Departure Airlines:</strong>{" "}
              {formData.departure_airlines_name}
            </p>
          </>
        )}
      </div>

      <button
        className="mt-6 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300"
        onClick={() => (window.location.href = "/")}
      >
        Back to Home
      </button>
    </div>
  );
}

export default BookingSuccessMsg;
