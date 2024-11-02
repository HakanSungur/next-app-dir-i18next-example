
import moment from "moment";
import convertNumbThousand from "../utils/convertNumbThousand";

const PaymentRequestCard = ({ className = "", data }) => {
  let requestDate = moment(data.requestDate).format("LL");
  let payDate = moment(data.payDate).format("LL");
  

  return (
    <div
      className={`nc-FlightCardgroup p-4 sm:p-6 relative bg-white dark:bg-neutral-900 border border-neutral-100
     dark:border-neutral-800 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow space-y-6 ${className}`}
      data-nc-id="FlightCard"
    >
      <div
        className={` sm:pr-20 relative  ${className}`}
        data-nc-id="FlightCard"
      >
        <div className="flex  flex-col sm:flex-row sm:items-center space-y-6 sm:space-y-0">
          {/* LOGO IMG */}
          <div className="w-24 lg:w-32 flex-shrink-0">#{data.id}</div>

          {/* FOR MOBILE RESPONSIVE */}
          <div className="block lg:hidden space-y-1">
            <div className="flex font-semibold">
              <div>
                <span> {requestDate}</span>
                <span className="flex items-center text-sm text-neutral-500 font-normal mt-0.5">
                  Request date
                </span>
              </div>
              <span className="w-12 flex justify-center">
                
              </span>
              {data.payDate && (
                <div>
                  <span>{payDate} </span>
                  <span className="flex items-center text-sm text-neutral-500 font-normal mt-0.5">
                    Payment date
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* TIME - NAME */}
          <div className="hidden lg:block  min-w-[150px] flex-[4]  ">
            <div className="font-medium text-lg">{requestDate}</div>
            <div className="text-sm text-neutral-500 font-normal mt-0.5">
              Request date
            </div>
          </div>
          {data.paymentDate && (
            <div className="hidden lg:block  min-w-[150px] flex-[4]  ">
              <div className="font-medium text-lg">{payDate}</div>
              <div className="text-sm text-neutral-500 font-normal mt-0.5">
                Payment date
              </div>
            </div>
          )}

          {/* TYPE */}
          <div className="flex-[4] whitespace-nowrap sm:text-center">
            <div
              className={
                data.isPay === true
                  ? "text-xl font-semibold text-secondary-6000"
                  : "text-xl font-semibold text-neutral-6000"
              }
            >
              {data.isPay === false ? "Awaiting" : "Completed"}
            </div>
            <div className="text-sm text-neutral-500 font-normal mt-0.5">
              Payment Status
            </div>
          </div>

          {/* PRICE */}
          <div className="flex-[4] whitespace-nowrap sm:text-right">
            <div>
              <span className="text-xl font-semibold text-secondary-6000">
                {data.currencyName.toUpperCase()}{" "}{convertNumbThousand(data.paymentAmount)}
              </span>
            </div>
            <div className="text-xs sm:text-sm text-neutral-500 font-normal mt-0.5">
              Payment Amount
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentRequestCard;
