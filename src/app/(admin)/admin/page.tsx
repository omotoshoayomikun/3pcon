"use client"


function Admin() {

  // const [meta, setMeta] = useState({ total: 0, page: 1, pages: 1 });
  // const [tab, setTab] = useState("customers");

  // const fetch = () => {
  //   setMeta({ total: 0, page: 1, pages: 1 })
  // }

  return (
    <>
    </>
    // <section className="bg-[#f9fafb] min-h-[100vh] px-[var(--shared-px)] py-[var(--shared-py)]">
    //   <div className="flex gap-6 overflow-x-auto no-scrollbar">
    //     {[
    //       { id: "customers", label: "Customers", total: meta.total },
    //       { id: "loans", label: "Loans", total: meta.total },
    //       { id: "repayment-info", label: "Repayments", total: meta.total },
    //       { id: "portfolio", label: "Portfolio" },
    //       { id: "staff-info", label: "Staff Info" }
    //     ].map((t) => (
    //       <button
    //         key={t.id}
    //         onClick={() => {
    //           // 1. Change the tab
    //           setTab(t.id);

    //         }}
    //         className={`py-4 text-sm font-medium transition-all relative whitespace-nowrap flex items-center ${tab === t.id ? "text-brand-500" : "text-gray-500 hover:text-gray-700"
    //           }`}
    //       >
    //         {t.label}
    //         {t.total !== undefined && t.total > 0 && (
    //           <span className="ml-2 px-2 py-0.5 rounded-full bg-brand-50 text-brand-500 text-[10px] font-bold">
    //             {t.total}
    //           </span>
    //         )}
    //         {tab === t.id && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-500" />}
    //       </button>
    //     ))}
    //   </div>
    // </section>
  )
}

export default Admin