import React, { useEffect } from "react";
import ApexCharts from "apexcharts";
const OrderPurchase = () => {
  useEffect(() => {
    let options = {
      chart: {
        height: "120%",
        maxWidth: "100%",
        type: "area",
        fontFamily: "Inter, sans-serif",
        dropShadow: {
          enabled: false,
        },
        toolbar: {
          show: true,
        },
      },
      tooltip: {
        enabled: true,
        x: {
          show: false,
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          opacityFrom: 0.55,
          opacityTo: 0.2,
          shade: ["#1C64F2"],
          gradientToColors: ["#1C64F2"],
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 2,
        curve: "smooth",
      },
      grid: {
        show: true,
        strokeDashArray: 7,
        opacity: 100,
        borderColor: "#FF0000",
        padding: {
          left: 1,
          right: 1,
          top: 0,
        },
      },
      series: [
        {
          name: "New users",
          data: [6500, 6418, 6456, 6526, 6356, 6456],
          color: "#30c9bf",
        },
      ],
      xaxis: {
        categories: [
          "January/Feb",
          "March/Apr",
          "May/June",
          "July/Aug",
          "September/Oct.",
          "November/Dec",
        ],
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: true,
        },
      },
      yaxis: {
        show: false,
      },
    };
    if (document.getElementById("area-chart")) {
      const chart = new ApexCharts(
        document.getElementById("area-chart"),
        options
      );
      const resizeEvent = new Event("resize");

      window.dispatchEvent(resizeEvent);
      chart.render();
    }
  }, []);
  const neworder=()=>{
    // makeorder.classList.toggle("new")
    alert('ORDER PLACED!')
     
  }
  

  return (
    <>
      <section className="flex flex-col h-[60vw] mx-auto w-full md:w-1/2 p-3">
        <button
          onClick={neworder}
          className="bg-blue-700 border-2  w-36 mx-10  my-5 h-8  text-sm text-white font-bold rounded-lg hover:opacity-80"
        >
          + Add a new Product
        </button>
          <figure className="bg-blue-700  shadow-lg w-3/4 hidden mx-5 h-32 " id="makeorder">me</figure>
        <div className="w-full   shadow-md -ml-4 md:-ml-1 rounded-md bg-slate-100  border-2 flex flex-col   border-slate-200">
          <p className=" font-bold text-blue-600 mx-5">
            This Week{" "}
            <span className="text-xs font-semibold text-cyan-600 mx-10">
              30% more Sales
            </span>
          </p>
          <div className="flex justify-between px-5 w-full ">
            <div className="text-sm font-semibold m-3 text-slate-700">
             Successful Orders
              <span>
                <div className="w-4 h-4 bg-cyan-400 rounded"></div>
              </span>
            </div>
            <div className="text-sm text-slate-700 m-3 font-semibold">
              Pending/Rejected Orders
              <span>
                <div className="w-4 h-4 bg-yellow-400 rounded"></div>
              </span>
            </div>
          </div>
        </div>

        <div className=" w-full shadow-sm -ml-4 md:-ml-1  mt-5 rounded-md bg-slate-100  border-2 flex flex-col  border-slate-200">
          <div className="flex justify-between w-full">
            <p className="text-sm font-semibold m-3 text-slate-700">
              Purchase Statistics
            </p>
            <p className="text-xs text-slate-500 m-3  justify-end">Month </p>
          </div>
          <div
            className="w-5/6 mx-auto border border-l-slate-400 border-b-slate-400  mb-8  h-3/4 sm:h-full "
            id="area-chart"
          ></div>
        </div>

        {/* CHART ENDS */}
      </section>
    </>
  );
};

export default OrderPurchase;
