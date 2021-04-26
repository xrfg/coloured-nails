import React from "react";
import "./Reset.css";
import "./Animation.css";

export default function Animation() {
  return (
    <div>
      <main className="page universe">
        <div className="content-container galaxy">
          <div className="lake">
            <div className="lake__three plane">
              <div className="box lake__three__box box-1"></div>
              <div className="box lake__three__box box-2"></div>
              <div className="box lake__three__box box-3"></div>
              <div className="box lake__three__box box-4"></div>
              <div className="box lake__three__box box-5"></div>
              <div className="box lake__three__box box-6"></div>
              <div className="box lake__three__box box-7"></div>
              <div className="box lake__three__box box-8"></div>
            </div>
            <div className="lake__two plane">
              <div className="box lake__two__box box-9"></div>
              <div className="box lake__two__box box-10"></div>
              <div className="box lake__two__box box-11"></div>
              <div className="box lake__two__box box-12"></div>
            </div>
            <div className="lake__one plane">
              <div className="box lake__one__box box-13"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
