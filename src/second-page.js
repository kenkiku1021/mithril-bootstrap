import m from "mithril";

const SecondPage = {
    view: function() {
	return m(".container", [
	    m("h1", "Second Page"),
	    m("p", [
		"text"
	    ])
	]);
    }
}

export default SecondPage;
