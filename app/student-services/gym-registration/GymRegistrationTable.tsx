type SubscriptionStatus = "Active" | "Inactive";
type PaymentStatus = "PAID" | "UNPAID";

export interface GymRegistrationRow {
  enrollmentId: string;
  tenure: string;
  amount: string;
  subscriptionStatus: SubscriptionStatus;
  paymentStatus: PaymentStatus;
  isPreviousMonth: boolean;
}

export const GYM_MOCK_ROWS: GymRegistrationRow[] = [
  {
    enrollmentId: "F2023-548",
    tenure: "Monthly",
    amount: "4000/- PKR",
    subscriptionStatus: "Active",
    paymentStatus: "PAID",
    isPreviousMonth: false,
  },
  {
    enrollmentId: "F2023-548",
    tenure: "Monthly",
    amount: "4000/- PKR",
    subscriptionStatus: "Active",
    paymentStatus: "UNPAID",
    isPreviousMonth: true,
  },
  {
    enrollmentId: "F2023-612",
    tenure: "Monthly",
    amount: "4500/- PKR",
    subscriptionStatus: "Active",
    paymentStatus: "PAID",
    isPreviousMonth: false,
  },
  {
    enrollmentId: "F2024-103",
    tenure: "Monthly",
    amount: "5000/- PKR",
    subscriptionStatus: "Inactive",
    paymentStatus: "PAID",
    isPreviousMonth: false,
  },
  {
    enrollmentId: "F2024-221",
    tenure: "Monthly",
    amount: "3500/- PKR",
    subscriptionStatus: "Active",
    paymentStatus: "UNPAID",
    isPreviousMonth: true,
  },
  {
    enrollmentId: "F2024-389",
    tenure: "Monthly",
    amount: "4200/- PKR",
    subscriptionStatus: "Active",
    paymentStatus: "PAID",
    isPreviousMonth: false,
  },
  {
    enrollmentId: "F2025-017",
    tenure: "Monthly",
    amount: "5500/- PKR",
    subscriptionStatus: "Active",
    paymentStatus: "UNPAID",
    isPreviousMonth: true,
  },
];

function StackedLetters({
  text,
  bold = false,
}: {
  text: string;
  bold?: boolean;
}) {
  return (
    <div
      className={`mx-auto flex w-[11px] flex-col items-center ${bold ? "font-bold" : "font-medium"}`}
    >
      {text.split("").map((char, i) => (
        <span
          key={`${char}-${i}`}
          className="block text-[10px] leading-[1.15] text-gray-800"
        >
          {char}
        </span>
      ))}
    </div>
  );
}

function StackedHeaderLetters({ text }: { text: string }) {
  return (
    <div className="mx-auto flex w-[10px] flex-col items-center">
      {text.split("").map((char, i) => (
        <span
          key={`${char}-${i}`}
          className="block text-[8px] font-bold uppercase leading-[1.1] text-white"
        >
          {char}
        </span>
      ))}
    </div>
  );
}

function NarrowHeaderWords({ text }: { text: string }) {
  return (
    <div className="mx-auto w-[26px] text-center text-[7.5px] font-bold uppercase leading-[1.15] tracking-tight text-white">
      {text.split(" ").map((word) => (
        <span key={word} className="block">
          {word}
        </span>
      ))}
    </div>
  );
}

function SubscriptionBadge({ status }: { status: SubscriptionStatus }) {
  const isActive = status === "Active";
  return (
    <span
      className={`inline-block rounded-full px-2 py-[3px] text-[8px] font-bold leading-none ${
        isActive ? "bg-[#c8e6c9] text-[#1b5e20]" : "bg-[#ffcdd2] text-[#b71c1c]"
      }`}
    >
      {status}
    </span>
  );
}

function PaymentBadge({ status }: { status: PaymentStatus }) {
  if (status === "PAID") {
    return (
      <span className="inline-block rounded-full bg-[#1a6157] px-2 py-[3px] text-[8px] font-bold leading-none text-white">
        PAID
      </span>
    );
  }

  return (
    <span className="inline-block rounded-full bg-[#d32f2f] px-2 py-[3px] text-[8px] font-bold leading-none text-white">
      UNPAID
    </span>
  );
}

export default function GymRegistrationTable() {
  return (
    <div className="mx-auto w-full max-w-[414px]">
      <div className="relative z-10">
        <div className="relative h-[48px] overflow-hidden rounded-xl bg-[#1a6157]">
          <p
            className="absolute left-4 right-4 text-[12px] leading-[1.55] text-white/95"
            style={{ top: "-20px" }}
          >
            Please submit your fee payment before the due date for the month.
            Late submissions may incur additional charges on your account.
          </p>
        </div>
      </div>

      <div className="pt-2">
        <div className="overflow-hidden rounded-xl bg-white shadow-sm">
          <table className="w-full table-fixed border-collapse">
            <thead>
              <tr className="bg-[#1a6157]">
                <th className="w-[13%] px-0.5 py-3 align-middle">
                  <StackedHeaderLetters text="ENROLLMENT#" />
                </th>
                <th className="w-[11%] px-0.5 py-3 align-middle">
                  <StackedHeaderLetters text="TENURE" />
                </th>
                <th className="w-[13%] px-0.5 py-3 align-middle">
                  <StackedHeaderLetters text="AMOUNT" />
                </th>
                <th className="w-[18%] px-0.5 py-3 align-middle">
                  <NarrowHeaderWords text="SUBSCRIPTION STATUS" />
                </th>
                <th className="w-[18%] px-0.5 py-3 align-middle">
                  <NarrowHeaderWords text="PAYMENT STATUS" />
                </th>
                <th className="w-[27%] px-0.5 py-3 align-middle">
                  <NarrowHeaderWords text="CHALLAN INFO" />
                </th>
              </tr>
            </thead>
            <tbody>
              {GYM_MOCK_ROWS.map((row, index) => {
                const overdue = row.isPreviousMonth && row.paymentStatus === "UNPAID";

                return (
                  <tr
                    key={`${row.enrollmentId}-${index}`}
                    className={`border-b border-[#e0e0e0] last:border-b-0 ${
                      overdue ? "bg-[#fce4ec]" : "bg-white"
                    }`}
                  >
                    <td className="px-0.5 py-4 align-middle">
                      <StackedLetters text={row.enrollmentId} />
                    </td>
                    <td className="px-0.5 py-4 align-middle">
                      <StackedLetters text={row.tenure} />
                    </td>
                    <td className="px-0.5 py-4 align-middle">
                      <StackedLetters text={row.amount} bold />
                    </td>
                    <td className="px-0.5 py-4 text-center align-middle">
                      <SubscriptionBadge status={row.subscriptionStatus} />
                    </td>
                    <td className="px-0.5 py-4 text-center align-middle">
                      <PaymentBadge status={row.paymentStatus} />
                    </td>
                    <td className="px-1 py-4 text-center align-middle">
                      <span className="text-[11px] text-gray-500">-</span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
