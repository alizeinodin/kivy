import profilePath from "../../imgs/profile.jpg";
import logoPath from "../../imgs/logo.png";
import BaseUrl from "../BaseUrl";
import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import NotFound from "../NotFound/NotFound";

function RegisterForm() {
  const [isExist, setExist] = useState(false);
  const [name, setName] = useState("");
  const [stn, setStn] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const url = window.location.href.split("/");
  const urlId = url[url.length - 1];
  const path = useLocation().pathname.split("/");
  const idCourse = path[path.length - 1];

  useEffect(() => {
    BaseUrl.get(`/course/${idCourse}`)
      .then((res) => {
        console.log(res.status);
        if (res.status === 200) {
          setExist(true);
        }
      })
      .catch((err) => {
        setExist(false);
      });
  });
  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await axios
      .post("https://kiwi.ssceb.ir/api/students", {
        name: name,
        phone: phone,
        stn: stn,
        gender: gender,
      })
      .then(function (response) {
        const studentId = response.data.id;
        const res2 = axios
          .get(
            `https://kiwi.ssceb.ir/api/payment/buy/${response.data.id}/${urlId}`
          )
          .then((response) => {
            axios
              .get(
                `https://kiwi.ssceb.ir/api/payment/${studentId}/${response.data.id}`
              )
              .then((res) => {
                console.log(res);
                window.location.replace(res.data.action);
              });
          });
      })
      .catch((err) => {
        alert("Error");
      });
  };
  if (isExist) {
    return (
      <div className="w-full h-screen bg-[#C9C9C9] flex items-center justify-center">
        <div className="flex h-5/6 w-5/6 sm:w-4/5 md:w-3/5 min-[1080px]:max-w-7xl min-[1080px]:w-auto min-[1080px]:h-auto bg-white">
          <div className="w-full min-[1080px]:w-1/2 flex flex-col gap-20 justify-around items-center">
            <div className="flex flex-col justify-center items-center">
              <div className="hidden max-[1080px]:block w-48">
                <img src={logoPath} alt="Logo" />
              </div>
              <p className="text-xl text-[#180A3F]">ثبت نام در دوره</p>
            </div>

            <form className="flex flex-col gap-6 w-3/5" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="نام و نام خانوادگی"
                className="bg-[#D2D2D2] px-4 py-3 rounded-xl border-2 border-[#C9C9C9] outline-[#C9C9C9]"
              />
              <input
                type="number"
                name="stn"
                value={parseInt(stn)}
                onChange={(e) => setStn(parseInt(e.target.value))}
                placeholder="شماره دانشجویی"
                className="bg-[#D2D2D2] px-4 py-3 rounded-xl border-2 border-[#C9C9C9] outline-[#C9C9C9]"
              />
              <input
                type="number"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="شماره تلفن"
                className="bg-[#D2D2D2] px-4 py-3 rounded-xl border-2 border-[#C9C9C9] outline-[#C9C9C9]"
              />

              <div className="bg-[#D2D2D2] px-4 py-1 rounded-xl border-2 border-[#C9C9C9] flex items-center justify-between">
                <label className="">جنسیت</label>
                <div className="flex items-center gap-5">
                  <div className="inline-flex items-center">
                    <label
                      className="relative flex cursor-pointer items-center rounded-full p-3"
                      htmlFor="html"
                      data-ripple-dark="true"
                    >
                      <input
                        id="html"
                        name="gender"
                        type="radio"
                        value={gender}
                        onChange={(e) => setGender("male")}
                        className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-[#180A3F] transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-[#180A3F] checked:before:bg-[#180A3F] hover:before:opacity-10"
                      />
                      <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-[#180A3F] opacity-0 transition-opacity peer-checked:opacity-100">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3.5 w-3.5"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                        >
                          <circle
                            data-name="ellipse"
                            cx="8"
                            cy="8"
                            r="8"
                          ></circle>
                        </svg>
                      </div>
                    </label>
                    <label
                      className="mt-px cursor-pointer select-none font-base text-black text-base"
                      htmlFor="html"
                    >
                      مرد
                    </label>
                  </div>
                  <div className="inline-flex items-center">
                    <label
                      className="relative flex cursor-pointer items-center rounded-full p-3"
                      htmlFor="react"
                      data-ripple-dark="true"
                    >
                      <input
                        id="react"
                        name="gender"
                        value={gender}
                        onChange={(e) => setGender("female")}
                        type="radio"
                        className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-[#180A3F] transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-[#180A3F] checked:before:bg-[#180A3F] hover:before:opacity-10"
                      />
                      <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-[#180A3F] opacity-0 transition-opacity peer-checked:opacity-100">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3.5 w-3.5"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                        >
                          <circle
                            data-name="ellipse"
                            cx="8"
                            cy="8"
                            r="8"
                          ></circle>
                        </svg>
                      </div>
                    </label>
                    <label
                      className="mt-px cursor-pointer select-none font-base text-black text-base"
                      htmlFor="react"
                    >
                      زن
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <button className="bg-[#180A3F] text-white transition-all p-4 rounded-xl w-full text-base">
                  ثبت نام
                </button>
              </div>
            </form>
          </div>

          <div className="hidden min-[1080px]:block w-1/2">
            <img src={profilePath} alt="profile logo" className="w-fit" />
          </div>
        </div>
      </div>
    );
  } else {
    return <NotFound/>;
  }
}

export default RegisterForm;
