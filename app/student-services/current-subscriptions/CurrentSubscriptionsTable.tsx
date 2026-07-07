export interface SubscriptionRow {
  enrollmentId: string;
  tenure: string;
  startDate: string;
  endDate: string;
  validTill: string;
  amount: string;
  subscriptionStatus: "Active" | "Expired";
  paymentStatus: "PAID" | "UNPAID";
  challanInfo: string;
  isCurrent: boolean;
}

export const SUBSCRIPTION_MOCK_ROWS: SubscriptionRow[] = [
  {
    enrollmentId: "F2023-548",
    tenure: "Monthly",
    startDate: "01 Jul 2026",
    endDate: "31 Jul 2026",
    validTill: "31 Jul 2026",
    amount: "4000/- PKR",
    subscriptionStatus: "Active",
    paymentStatus: "PAID",
    challanInfo: "",
    isCurrent: true,
  },
  {
    enrollmentId: "F2023-548",
    tenure: "Monthly",
    startDate: "01 Jun 2026",
    endDate: "30 Jun 2026",
    validTill: "30 Jun 2026",
    amount: "4000/- PKR",
    subscriptionStatus: "Expired",
    paymentStatus: "PAID",
    challanInfo: "—",
    isCurrent: false,
  },
  {
    enrollmentId: "F2023-548",
    tenure: "Monthly",
    startDate: "01 May 2026",
    endDate: "31 May 2026",
    validTill: "31 May 2026",
    amount: "4000/- PKR",
    subscriptionStatus: "Expired",
    paymentStatus: "UNPAID",
    challanInfo: "—",
    isCurrent: false,
  },
  {
    enrollmentId: "F2023-548",
    tenure: "Monthly",
    startDate: "01 Apr 2026",
    endDate: "30 Apr 2026",
    validTill: "30 Apr 2026",
    amount: "4000/- PKR",
    subscriptionStatus: "Expired",
    paymentStatus: "PAID",
    challanInfo: "—",
    isCurrent: false,
  },
  {
    enrollmentId: "F2023-548",
    tenure: "Monthly",
    startDate: "01 Mar 2026",
    endDate: "31 Mar 2026",
    validTill: "31 Mar 2026",
    amount: "4000/- PKR",
    subscriptionStatus: "Expired",
    paymentStatus: "UNPAID",
    challanInfo: "—",
    isCurrent: false,
  },
  {
    enrollmentId: "F2023-548",
    tenure: "Monthly",
    startDate: "01 Feb 2026",
    endDate: "28 Feb 2026",
    validTill: "28 Feb 2026",
    amount: "4000/- PKR",
    subscriptionStatus: "Expired",
    paymentStatus: "PAID",
    challanInfo: "—",
    isCurrent: false,
  },
  {
    enrollmentId: "F2023-548",
    tenure: "Monthly",
    startDate: "01 Jan 2026",
    endDate: "31 Jan 2026",
    validTill: "31 Jan 2026",
    amount: "4000/- PKR",
    subscriptionStatus: "Expired",
    paymentStatus: "PAID",
    challanInfo: "—",
    isCurrent: false,
  },
  {
    enrollmentId: "F2023-548",
    tenure: "Monthly",
    startDate: "01 Dec 2025",
    endDate: "31 Dec 2025",
    validTill: "31 Dec 2025",
    amount: "4000/- PKR",
    subscriptionStatus: "Expired",
    paymentStatus: "UNPAID",
    challanInfo: "—",
    isCurrent: false,
  },
  {
    enrollmentId: "F2023-548",
    tenure: "Monthly",
    startDate: "01 Nov 2025",
    endDate: "30 Nov 2025",
    validTill: "30 Nov 2025",
    amount: "4000/- PKR",
    subscriptionStatus: "Expired",
    paymentStatus: "PAID",
    challanInfo: "—",
    isCurrent: false,
  },
  {
    enrollmentId: "F2023-548",
    tenure: "Monthly",
    startDate: "01 Oct 2025",
    endDate: "31 Oct 2025",
    validTill: "31 Oct 2025",
    amount: "4000/- PKR",
    subscriptionStatus: "Expired",
    paymentStatus: "PAID",
    challanInfo: "—",
    isCurrent: false,
  },
  {
    enrollmentId: "F2023-548",
    tenure: "Monthly",
    startDate: "01 Sep 2025",
    endDate: "30 Sep 2025",
    validTill: "30 Sep 2025",
    amount: "4000/- PKR",
    subscriptionStatus: "Expired",
    paymentStatus: "UNPAID",
    challanInfo: "—",
    isCurrent: false,
  },
  {
    enrollmentId: "F2023-548",
    tenure: "Monthly",
    startDate: "01 Aug 2025",
    endDate: "31 Aug 2025",
    validTill: "31 Aug 2025",
    amount: "4000/- PKR",
    subscriptionStatus: "Expired",
    paymentStatus: "PAID",
    challanInfo: "—",
    isCurrent: false,
  },
];

function SubscriptionStatusBadge({ status }: { status: "Active" | "Expired" }) {
  const isActive = status === "Active";
  return (
    <span
      className={`inline-block whitespace-nowrap rounded-full px-3 py-1 text-xs font-bold ${
        isActive ? "bg-[#c8e6c9] text-[#1b5e20]" : "bg-[#ffcdd2] text-[#b71c1c]"
      }`}
    >
      {status}
    </span>
  );
}

function PaymentStatusBadge({ status }: { status: "PAID" | "UNPAID" }) {
  if (status === "PAID") {
    return (
      <span className="inline-block whitespace-nowrap rounded-full bg-[#1a6157] px-3 py-1 text-xs font-bold text-white">
        PAID
      </span>
    );
  }

  return (
    <span className="inline-block whitespace-nowrap rounded-full bg-[#d32f2f] px-3 py-1 text-xs font-bold text-white">
      UNPAID
    </span>
  );
}

export default function CurrentSubscriptionsTable() {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[960px] border-collapse text-sm">
          <thead>
            <tr className="bg-[#1a6157] text-left text-white">
              {[
                "Enrollment #",
                "Tenure",
                "Start Date",
                "End Date",
                "Valid Till",
                "Amount",
                "Subscription Status",
                "Payment Status",
                "Challan Info",
                "Action",
              ].map((col) => (
                <th
                  key={col}
                  className="px-3 py-3 text-xs font-bold uppercase leading-tight sm:px-4 sm:text-sm"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {SUBSCRIPTION_MOCK_ROWS.map((row, index) => (
              <tr
                key={`${row.startDate}-${index}`}
                className="border-b border-[#e0e0e0] bg-white last:border-b-0"
              >
                <td className="px-3 py-3 font-medium text-gray-800 sm:px-4">{row.enrollmentId}</td>
                <td className="px-3 py-3 text-gray-700 sm:px-4">{row.tenure}</td>
                <td className="px-3 py-3 text-gray-700 sm:px-4">{row.startDate}</td>
                <td className="px-3 py-3 text-gray-700 sm:px-4">{row.endDate}</td>
                <td className="px-3 py-3 text-gray-700 sm:px-4">{row.validTill}</td>
                <td className="px-3 py-3 font-bold text-gray-900 sm:px-4">{row.amount}</td>
                <td className="px-3 py-3 sm:px-4">
                  <SubscriptionStatusBadge status={row.subscriptionStatus} />
                </td>
                <td className="px-3 py-3 sm:px-4">
                  <PaymentStatusBadge status={row.paymentStatus} />
                </td>
                <td className="px-3 py-3 text-gray-500 sm:px-4">{row.challanInfo}</td>
                <td className="px-3 py-3 sm:px-4">
                  <span className="inline-block whitespace-nowrap rounded-full bg-[#c8e6c9] px-3 py-1 text-xs font-bold text-[#1b5e20]">
                    Completed
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
