import React from "react";

const Jumbotron = () => {
	return (
        <div class="container-fluid m-0 p-0">
            <div className="jumbotron bg-light m-5 p-5">
                <h1 className="display-4">A warm welcome!</h1>
                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a ligula sed eros aliquet lobortis nec dictum nisi. Duis vitae sapien sit amet tellus aliquam gravida. Pellentesque gravida at risus vitae posuere. Fusce tempus erat ac dui ornare tristique. Praesent accumsan lorem sit amet lectus luctus lacinia.</p>
                <a className="btn btn-primary btn-lg" href="https://4geeksacademy.com/" role="button">
                    Call to action!
                </a>
            </div>
        </div>
	);
};

export default Jumbotron;