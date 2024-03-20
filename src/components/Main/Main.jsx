import React from "react";

const Main = () => {
  return (
    <div className="main">
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title font-large" id="exampleModalLabel">
                MESSAGES
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <p class="font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                rem, dolores omnis labore aliquam mollitia quod fuga tempora
                obcaecati deleniti eos distinctio, amet quas at! Delectus esse
                nostrum maxime repudiandae nemo vero ex, nisi quisquam deleniti
                necessitatibus id recusandae eius!
              </p>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary font-medium"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
